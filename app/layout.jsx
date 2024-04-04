import { Poppins } from "next/font/google";
import "@/styles/globals.css";
import { Navbar, Footer, Sidebar, MobileFooter } from "@/layout";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata = {
  title: "Oshodi Foods",
  description:
    "Welcome to Oshodi foods, Discover the Best African Food Products",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        <Sidebar />
        <main className="py-6 sm:py-12">{children}</main>
        <Footer />
        <MobileFooter />
      </body>
    </html>
  );
}
