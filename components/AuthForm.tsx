"use client";

import {
  Button,
  Group,
  TextInput,
  Title,
  Stack,
  Radio,
  Text,
  Anchor,
  PasswordInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface AuthFormProps {
  type: "login" | "signup";
}

interface StoredUser {
  name?: string;
  email: string;
  password: string;
  role: string;
}

const AuthForm = ({ type }: AuthFormProps) => {
  const router = useRouter();
  const isLogin = type === "login";

  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      name: "",
      email: "",
      password: "",
      role: isLogin ? "" : "user",
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      password: (value) =>
        value.length < 6 ? "Password must be at least 6 characters" : null,
      name: (value) =>
        !isLogin && !value.trim() ? "Full name is required" : null,
    },
  });

  const handleSubmit = (values: typeof form.values) => {
    const storedUsersRaw = localStorage.getItem("registered_users");
    const registeredUsers: StoredUser[] = storedUsersRaw
      ? JSON.parse(storedUsersRaw)
      : [];

    if (isLogin) {
      const existingUser = registeredUsers.find(
        (user) => user.email.toLowerCase() === values.email.toLowerCase(),
      );
      if (!existingUser) {
        form.setFieldError("email", "Account not found. Please sign up first!");
        return;
      }

      if (existingUser.password !== values.password) {
        form.setFieldError("password", "Incorrect password.");
        return;
      }

      document.cookie = "auth_session=true; path=/; max-age=86400";
      document.cookie = `user_role=${existingUser.role}; path=/; max-age=86400`;

      if (existingUser.role === "admin") {
        router.push("/admin/add-event");
      } else {
        router.push("/dashboard");
      }
    } else {
      const userExists = registeredUsers.some(
        (user) => user.email.toLowerCase() === values.email.toLowerCase(),
      );

      if (userExists) {
        form.setFieldError(
          "email",
          "An account with this email already exists. Please log in.",
        );
        return;
      }

      const newUser: StoredUser = {
        name: values.name,
        email: values.email,
        password: values.password,
        role: values.role,
      };

      registeredUsers.push(newUser);
      localStorage.setItem("registered_users", JSON.stringify(registeredUsers));

      document.cookie = "auth_session=true; path=/; max-age=86400";
      document.cookie = `user_role=${values.role}; path=/; max-age=86400`;

      if (values.role === "admin") {
        router.push("/admin/add-event");
      } else {
        router.push("/dashboard");
      }
    }
  };

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <Title order={2} ta="center" mb="md">
        {isLogin ? "Welcome Back" : "Create an Account"}
      </Title>

      <Stack>
        {!isLogin && (
          <TextInput
            label="Full Name"
            placeholder="John Doe"
            required
            key={form.key("name")}
            {...form.getInputProps("name")}
          />
        )}

        <TextInput
          label="Email"
          placeholder="your@email.com"
          required
          key={form.key("email")}
          {...form.getInputProps("email")}
        />

        <PasswordInput
          label="Password"
          placeholder="Your password"
          required
          key={form.key("password")}
          {...form.getInputProps("password")}
        />

        {!isLogin && (
          <Radio.Group
            label="Select Role"
            description="Choose whether to enter as a standard user or admin"
            key={form.key("role")}
            {...form.getInputProps("role")}
          >
            <Group mt="xs">
              <Radio value="user" label="Normal User" />
              <Radio value="admin" label="Admin" />
            </Group>
          </Radio.Group>
        )}

        <Button type="submit" fullWidth color="#5dfeca" c="black" mt="md">
          {isLogin ? "Sign In" : "Sign Up"}
        </Button>

        <Text size="sm" ta="center" mt="xs">
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <Anchor
            component={Link}
            href={isLogin ? "/signup" : "/login"}
            c="cyan"
            fw={500}
          >
            {isLogin ? "Sign up" : "Log in"}
          </Anchor>
        </Text>
      </Stack>
    </form>
  );
};

export default AuthForm;
