import type { ReactNode } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen bg-neutral-300">
      <NavBar />
      <main className="flex-1 p-4">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
