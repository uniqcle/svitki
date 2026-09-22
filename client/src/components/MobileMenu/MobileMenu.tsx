// MobileMenu.tsx
import { useState } from "react";
import { Link } from "react-router";
import { LuAlignJustify, LuChevronDown, LuX } from "react-icons/lu";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { menuItems } from "@/config/menu";
import styles from "./MobileMenu.module.css";

export function MobileMenu() {
    const [open, setOpen] = useState(false);
    const [expanded, setExpanded] = useState<string | null>(null);

    const toggleSection = (label: string) => {
        setExpanded((prev) => (prev === label ? null : label));
    };

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
                render={
                    <button
                        className={styles.mobile_menu}
                        aria-label={open ? "Закрыть меню" : "Открыть меню"}
                    >
                        {open ? <LuX /> : <LuAlignJustify />} {/* 👈 */}
                    </button>
                }
            />

            <SheetContent side="right" className="w-[300px] p-0">
                <SheetHeader className="p-4 border-b">
                    <SheetTitle>Меню</SheetTitle>
                </SheetHeader>

                <nav className={styles.mobile_menu__nav}>
                    {menuItems.map((item) =>
                        item.children ? (
                            <div
                                key={item.label}
                                className={styles.mobile_menu__group}
                            >
                                <button
                                    className={styles.mobile_menu__toggle}
                                    onClick={() => toggleSection(item.label)}
                                    aria-expanded={expanded === item.label}
                                >
                                    <span>{item.label}</span>
                                    <LuChevronDown
                                        className={`${styles.mobile_menu__chevron} ${
                                            expanded === item.label
                                                ? styles.is_open
                                                : ""
                                        }`}
                                    />
                                </button>

                                {expanded === item.label && (
                                    <ul className={styles.mobile_menu__sub}>
                                        {item.children.map((child) => (
                                            <li key={child.href}>
                                                <Link
                                                    to={child.href}
                                                    className={
                                                        styles.mobile_menu__link
                                                    }
                                                    onClick={() =>
                                                        setOpen(false)
                                                    }
                                                >
                                                    {child.label}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ) : (
                            <Link
                                key={item.label}
                                to={item.href}
                                className={styles.mobile_menu__link}
                                onClick={() => setOpen(false)}
                            >
                                {item.label}
                            </Link>
                        ),
                    )}
                </nav>
            </SheetContent>
        </Sheet>
    );
}
