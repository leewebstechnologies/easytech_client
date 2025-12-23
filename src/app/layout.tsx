import "./globals.css";
import "./styles/style.scss";

export const metadata = {
  title: "EasyTech",
  description: "IT and Payment Solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={false}>{children}</body>
    </html>
  );
}
