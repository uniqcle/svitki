import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router";
import { menuItems } from "@/config/menu";
import styles from "./DesktopMenu.module.css";

export function DesktopMenu() {
    return (
        <div className={styles.menu}>
            <NavigationMenu>
                <NavigationMenuList>
                    {menuItems
                        .filter((item) => !item.hideOnDesktop)
                        .map((item) =>
                            item.children ? (
                                <NavigationMenuItem key={item.label}>
                                    <NavigationMenuTrigger>
                                        {item.label}
                                    </NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <ul className={styles.menuDropdown}>
                                            {item.children.map((child) => (
                                                <li key={child.href}>
                                                    <NavigationMenuLink
                                                        render={
                                                            <Link
                                                                to={child.href}
                                                            >
                                                                {child.label}
                                                            </Link>
                                                        }
                                                    />
                                                </li>
                                            ))}
                                        </ul>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                            ) : (
                                <NavigationMenuItem key={item.label}>
                                    <NavigationMenuLink
                                        render={
                                            <Link to={item.href}>
                                                {item.label}
                                            </Link>
                                        }
                                    />
                                </NavigationMenuItem>
                            ),
                        )}
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    );
}
