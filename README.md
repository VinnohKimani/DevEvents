# DevEvents 

![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)
![Mantine](https://img.shields.io/badge/Mantine-v7-blue?style=for-the-badge&logo=mantine)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Bun](https://img.shields.io/badge/Bun-000000?style=for-the-badge&logo=bun&logoColor=white)

**DevEvents** is a hands on learning showcase application built to demonstrate mastery of modern Next.js 16 App Router concepts and **Mantine UI (v7)** components based on a structured learning checklist.

##  Project Objective

The primary goal of this project is to implement a robust frontend architecture combining Next.js with Mantine UI, showcasing:
- **Proficiency in modern Next.js 16 App Router architecture.**
- **Mantine UI (v7) mastery** through extensive use of its components and utility props.
- **Advanced Routing:** Implementation of route groups (`(auth)`, `(landing)`, `(dashboard)`) and nested layouts.
- **Route Protection:** Server-side route guarding using a `proxy.ts` middleware implementation.
- **Mock Authentication & RBAC:** Simulating authentic user authentication and Role-Based Access Control (Admin vs. Standard User) on `localhost` utilizing browser cookies and `localStorage`.

---

##  Mantine UI Components & Concepts Demonstrated

This project extensively uses Mantine UI to build a cohesive and responsive design system. The following components and concepts were implemented as part of the learning checklist:

### Layout & Structure
- **`AppShell`**: Utilized for the main dashboard layout, featuring `AppShell.Header`, `AppShell.Navbar`, and `AppShell.Main`.
- **Containers & Grids**: `Container`, `Grid`, and `SimpleGrid` for responsive content alignment.
- **Flexbox Tools**: `Flex`, `Stack`, `Group`, `Center`, and `Box` for managing alignment, spacing, and component grouping.
- **`Paper`**: Used for elevated surface areas like form wrappers.

### Content & Display
- **Cards**: `Card` and `Card.Section` for displaying event teasers and details.
- **Typography**: `Title` and `Text` for consistent heading and paragraph styling.
- **Elements**: `Badge` for statuses, `Button` for primary actions, `Anchor` for links, `Avatar` for user profiles, and `Burger` for mobile menu toggling.

### Forms & Inputs (via `@mantine/form`)
- Implemented with uncontrolled inputs for optimized performance.
- Components include: `TextInput`, `PasswordInput`, `Radio`, `Radio.Group`, `Checkbox`, and `Textarea`.

### Date Pickers & Icons
- **`@mantine/dates`**: Readiness for `DatePicker` and `DateTimePicker` for event scheduling.
- **Icons**: Seamless integration with `@tabler/icons-react` for visually descriptive UI elements.

### Mantine Utility Props
Demonstrating deep knowledge of Mantine's style props:
- **Visibility**: `hiddenFrom`, `visibleFrom` for responsive rendering.
- **Spacing**: Extensive use of padding (`p`, `px`, `py`) and margin (`m`, `mt`, `mb`) props.
- **Flexibility**: Managing flex directions directly via props.
- **Colors**: Utilizing color palette mapping (`c`, `bg`) for text and background styling.
- **Breakpoints**: Utilizing Mantine's built-in responsive breakpoints.

---

## 🏗️ Application Architecture & Routing Overview

The application utilizes Next.js Route Groups to organize layouts and logic without affecting the URL structure.

```text
app/
|
├── (auth)/             # Distraction-free authentication flows
│   ├── layout.tsx      # Centered, minimalistic layout
│   ├── login/page.tsx  # Houses the unified AuthForm (Sign In)
│   └── signup/page.tsx # Houses the unified AuthForm (Sign Up)
│
├── (dashboard)/        # Protected operational web app
│   ├── layout.tsx      # Wraps children in Mantine's persistent AppShell
│   └── page.tsx        # Dashboard home for authenticated users
│
└── proxy.ts            # Middleware logic enforcing auth_session and user_role
```

- **`(auth)`:** Focused flows for user onboarding.
- **`(dashboard)`:** The core application interface, heavily utilizing `AppShell` for a sidebar-driven layout.
- **`proxy.ts` Middleware:** Acts as a server-side gatekeeper, verifying authentication status and roles before granting access to protected routes.

---

##  Project Status & Feature Checklist

- [x] **Public Landing Page & Event Teasers:** Fully responsive marketing page.
- [x] **Mock Authentication:** Complete Sign Up and Login flows featuring a role selector.
- [x] **Protected App Dashboard:** Implemented using a persistent `AppShell` sidebar.
- [x] **Local Storage & Cookies:** Account persistence on the client and Cookie-based server proxy guard.
- [ ] **Admin Event Creation Page:** *(Not ready yet — Coming Soon! )*

---

##  Local Setup & Development

This project uses [Bun](https://bun.sh/) for ultra-fast dependency management and development.

1. **Clone the repository and navigate to the project directory:**
   ```bash
   git clone https://github.com/VinnohKimani/DevEvents
   cd devevents
   ```

2. **Install dependencies:**
   ```bash
   bun install
   ```

3. **Start the development server:**
   ```bash
   bun dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application running.
