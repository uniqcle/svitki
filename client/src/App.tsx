import { Header } from "./components/layout/Header";
import { LeftSidebar } from "./components/layout/LeftSidebar";
import { Main } from "./components/layout/Main";
import { RightSidebar } from "./components/layout/RightSidebar";
import { Footer } from "./components/layout/Footer";

import { useScrolled } from "@/hooks/useScrolled";

function AppLayout() {
    const scrolled = useScrolled();

    return (
        <div className={`app-container ${scrolled ? "is-scrolled" : ""}`}>
            <Header />

            <LeftSidebar />
            <Main />
            <RightSidebar />

            <Footer />
        </div>
    );
}
export default AppLayout;
