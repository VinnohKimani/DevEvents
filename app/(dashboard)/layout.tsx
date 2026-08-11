// import "./globals.css";
import "@mantine/core/styles.css";
import DashboardLayout from "@/components/DashboardShell";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    
        <DashboardLayout>{children}</DashboardLayout>
     
  );
}
