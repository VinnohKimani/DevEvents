// import "./globals.css";
import "@mantine/core/styles.css";
import DashboardLayout from "@/components/DashboardShell";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <DashboardLayout>{children}</DashboardLayout>
      </body>
    </html>
  );
}
