import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import { DesktopMenu } from "../DesktopMenu/DesktopMenu";
import { MobileMenu } from "../MobileMenu/MobileMenu";

import {
    LuAlignJustify,
    LuBookOpen,
    LuUser,
    LuInfo,
    LuUsers,
} from "react-icons/lu";

import { Link } from "react-router";

import logo from "@/assets/images/logo/logo.jpg";

export function Header() {
    return (
        <header className="header">
            <div className="logo">
                <Link to="/" className="logo-block">
                    <img src={logo} className="logo-image" alt="Логотип" />
                </Link>

                <div>
                    <div className="main-logo ">Свитки из Александрии</div>
                    <div className="sub-logo text-2xl">
                        <span> Античная философия</span>
                    </div>
                </div>
            </div>

            <div className="menu">
                <DesktopMenu />
            </div>

            <div className="mobile_menu">
                <MobileMenu />
            </div>
        </header>
    );
}
