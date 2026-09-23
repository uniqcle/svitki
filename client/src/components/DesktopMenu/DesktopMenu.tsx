import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { useLocation, Link } from "react-router";
import { menuItems } from "@/config/menu";
import styles from "./DesktopMenu.module.css"; // 👈 добавить

export function DesktopMenu() {
    const location = useLocation();

    const isActive = (href) => {
        if (!href) return false;
        if (href === "/") return location.pathname === "/";
        return location.pathname.startsWith(href);
    };

    return (
        <div className={styles.menu}>
            <NavigationMenu>
                {/* 👇 пункты БЕЗ детей — вне NavigationMenu */}
                {menuItems
                    .filter(
                        (item) =>
                            !item.hideOnDesktop && !item.children && item.href,
                    )
                    .map((item) => (
                        <Link
                            key={item.label}
                            to={item.href}
                            className={`${styles.menuLinkTop} ${
                                isActive(item.href) ? styles.isActive : ""
                            }`}
                        >
                            {item.label}
                        </Link>
                    ))}

                <NavigationMenuList>
                    {menuItems
                        .filter((item) => !item.hideOnDesktop && item.children)
                        .map((item) => (
                            <NavigationMenuItem key={item.label}>
                                <NavigationMenuTrigger
                                    className={
                                        item.children.some((child) =>
                                            isActive(child.href),
                                        )
                                            ? styles.isActive
                                            : ""
                                    }
                                >
                                    {item.label}
                                </NavigationMenuTrigger>
                                <NavigationMenuContent
                                    className={styles.menuContent}
                                >
                                    <ul className={styles.menuDropdown}>
                                        {item.children.map((child) => (
                                            <li key={child.href}>
                                                <Link
                                                    to={child.href}
                                                    className={`${styles.menuLink} ${
                                                        isActive(child.href)
                                                            ? styles.isActive
                                                            : ""
                                                    }`}
                                                >
                                                    {child.label}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        ))}
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    );
}