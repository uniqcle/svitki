import { Header } from "./components/layout/Header";
import { LeftSidebar } from "./components/layout/LeftSidebar";
import { RightSidebar } from "./components/layout/RightSidebar";
import { Footer } from "./components/layout/Footer";
import { Outlet } from "react-router";

import { useScrolled } from "@/hooks/useScrolled";

function AppLayout() {
    const scrolled = useScrolled();

    return (
        <div className={`app-container ${scrolled ? "is-scrolled" : ""}`}>
            <Header />
            <LeftSidebar />
            <main className="main">
                <div className="main-container ">
                    <Outlet /> {/* 👈 только Outlet, без SingleTextPage */}
                </div>
            </main>
            <RightSidebar />
            <Footer />
        </div>
    );
}
export default AppLayout;
