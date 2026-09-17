import {
    LuChevronsLeft,
    LuChevronsRight,
    LuList,
    LuHouse,
    LuSearch,
    LuHeadphones,
    LuBookmark,
    LuBookOpen,
    LuUser,
    LuAlignJustify,
} from "react-icons/lu";
import logo from "@/assets/images/logo/logo.jpg";

export function Header() {
    return (
        <header className="header">
            <div className="logo">
                <div className="logo-block">
                    <img src={logo} className="logo-image" alt="Логотип" />
                </div>
                <div>
                    <div className="main-logo ">Свитки из Александрии</div>
                    <div className="sub-logo text-2xl">
                        <span> Античная философия</span>
                    </div>
                </div>
            </div>

            <div className="menu">
                <div>
                    <LuBookOpen />
                </div>
                <div>
                    <LuSearch />
                </div>
                <div>
                    <LuHeadphones />
                </div>
                <div>
                    <LuBookmark />
                </div>
                <div>
                    <LuUser />
                </div>
            </div>

            <div className="mobile_menu">
                <LuAlignJustify />
            </div>
        </header>
    );
}
