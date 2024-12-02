import "./globals.css";
import "./gruvbox.css";

import styles from "./layout.module.css";

import ThemeToggle from "./ThemeToggle";
import Navbar from "./Navbar";
import Footer from "./Footer";

import { UserProvider } from "@auth0/nextjs-auth0/client";

export const metadata = {
  title: "Ben Franks Portfolio",
  description: "Portfolio and blog website for Ben Franks",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <UserProvider>
        <body>
          <div className={styles.main}>
            <Navbar></Navbar>
            {children}
            <ThemeToggle></ThemeToggle>
            <Footer></Footer>
          </div>
        </body>
      </UserProvider>
    </html>
  );
}
