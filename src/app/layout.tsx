import "./globals.css";
import Navbar from "./components/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Navbar selalu ada */}
        <Navbar />

        {/* isi setiap halaman */}
        <main>{children}</main>
      </body>
    </html>
  );
}
