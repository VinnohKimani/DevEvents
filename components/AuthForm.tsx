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
import { useRouter } from 'next/navigation';
import Link from 'next/link';


interface AuthFormProps {
  type: "login" | "signup";
}

const AuthForm = ({type}: AuthFormProps) => {

  const router = useRouter()
  const isLogin = type === 'login'

  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      name:"",
      email: "",
      password:"",
      role: "user",
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });

  const handleSubmit = (values: typeof form.values)=>{
    document.cookie = "auth_session=true; path=/; max-age=86400"
    document.cookie =`user_role=${values.role}; path=/; max-age=86400`

    if(values.role === 'admin'){
      router.push('/admin/add-evnet')
    }else{
      router.push('/dashboard')
    }
  }

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
            {...form.getInputProps("name")}
          />
        )}

        <TextInput
          label="Email"
          placeholder="your@email.com"
          required
          {...form.getInputProps("email")}
        />

        <PasswordInput
          label="Password"
          placeholder="Your password"
          required
          {...form.getInputProps("password")}
        />

        <Radio.Group
          label="Select Role"
          description="Choose whether to enter as a standard user or admin"
          {...form.getInputProps("role")}
        >
          <Group mt="xs">
            <Radio value="user" label="Normal User" />
            <Radio value="admin" label="Admin" />
          </Group>
        </Radio.Group>

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
