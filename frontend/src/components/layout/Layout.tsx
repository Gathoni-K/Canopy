import type { ReactNode } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";


interface LayoutProps{
    children: ReactNode;
}

const Layout = ({children}: LayoutProps) => {
    return (
    <div className="bg-neutral-300">
        <NavBar />
    <main>
        {children}
    </main>

    <Footer />

    </div>
    )
}

export default Layout