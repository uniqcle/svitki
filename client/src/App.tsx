import logo from "@/assets/images/logo/logo.jpg";
import { useEffect, useState } from "react";

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

import { Separator } from "@/components/ui/separator";

export function SeparatorDemo() {
    return (
        <div className="flex max-w-sm flex-col gap-4 text-sm">
            <div className="flex flex-col gap-1.5">
                <div className="leading-none font-medium">shadcn/ui</div>
                <div className="text-muted-foreground">
                    The Foundation for your Design System
                </div>
            </div>
            <Separator />
            <div>
                A set of beautifully designed components that you can customize,
                extend, and build on.
            </div>
        </div>
    );
}

import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

function App() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            // true, как только прокрутили больше 10px
            setScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll(); // проверка при монтировании
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <div className={`app-container ${scrolled ? "is-scrolled" : ""}`}>
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
            {/* Левый сайдбар */}
            <aside className="left-sidebar"></aside>
            <main className="main">
                <div className="main-container">
                    <div className="main-content typeset typeset-docs max-w-[37em]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Accusantium fugiat maiores, odit eius velit asperiores
                        esse. Natus provident aspernatur in, dignissimos
                        voluptate quia sint soluta eius deleniti. Odit,
                        blanditiis praesentium. Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Accusantium fugiat
                        maiores, odit eius velit asperiores esse. Natus
                        provident aspernatur in, dignissimos voluptate quia sint
                        soluta eius deleniti. Odit, blanditiis praesentium.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Accusantium fugiat maiores, odit eius velit asperiores
                        esse. Natus provident aspernatur in, dignissimos
                        voluptate quia sint soluta eius deleniti. Odit,
                        blanditiis praesentium. Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Accusantium fugiat
                        maiores, odit eius velit asperiores esse. Natus
                        provident aspernatur in, dignissimos voluptate quia sint
                        soluta eius deleniti. Odit, blanditiis praesentium.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Accusantium fugiat maiores, odit eius velit asperiores
                        esse. Natus provident aspernatur in, dignissimos
                        voluptate quia sint soluta eius deleniti. Odit,
                        blanditiis praesentium. Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Accusantium fugiat
                        maiores, odit eius velit asperiores esse. Natus
                        provident aspernatur in, dignissimos voluptate quia sint
                        soluta eius deleniti. Odit, blanditiis praesentium.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Accusantium fugiat maiores, odit eius velit asperiores
                        esse. Natus provident aspernatur in, dignissimos
                        voluptate quia sint soluta eius deleniti. Odit,
                        blanditiis praesentium. Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Accusantium fugiat
                        maiores, odit eius velit asperiores esse. Natus
                        provident aspernatur in, dignissimos voluptate quia sint
                        soluta eius deleniti. Odit, blanditiis praesentium.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Accusantium fugiat maiores, odit eius velit asperiores
                        esse. Natus provident aspernatur in, dignissimos
                        voluptate quia sint soluta eius deleniti. Odit,
                        blanditiis praesentium. Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Accusantium fugiat
                        maiores, odit eius velit asperiores esse. Natus
                        provident aspernatur in, dignissimos voluptate quia sint
                        soluta eius deleniti. Odit, blanditiis praesentium.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Accusantium fugiat maiores, odit eius velit asperiores
                        esse. Natus provident aspernatur in, dignissimos
                        voluptate quia sint soluta eius deleniti. Odit,
                        blanditiis praesentium. Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Accusantium fugiat
                        maiores, odit eius velit asperiores esse. Natus
                        provident aspernatur in, dignissimos voluptate quia sint
                        soluta eius deleniti. Odit, blanditiis praesentium.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Accusantium fugiat maiores, odit eius velit asperiores
                        esse. Natus provident aspernatur in, dignissimos
                        voluptate quia sint soluta eius deleniti. Odit,
                        blanditiis praesentium.
                    </div>

                    <div className="main-pagination">
                        <div>
                            <Pagination>
                                <PaginationContent>
                                    <PaginationItem>
                                        <PaginationLink
                                            href="#"
                                            aria-label="Назад"
                                        >
                                            <LuChevronsLeft />
                                        </PaginationLink>
                                    </PaginationItem>

                                    <PaginationItem>
                                        <PaginationLink href="#">
                                            I
                                        </PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink href="#" isActive>
                                            II
                                        </PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink href="#">
                                            III
                                        </PaginationLink>
                                    </PaginationItem>

                                    <PaginationItem>
                                        <PaginationLink href="#">
                                            IV
                                        </PaginationLink>
                                    </PaginationItem>

                                    <PaginationItem>
                                        <PaginationLink href="#">
                                            V
                                        </PaginationLink>
                                    </PaginationItem>

                                    <PaginationItem>
                                        <PaginationEllipsis />
                                    </PaginationItem>

                                    <PaginationItem>
                                        <PaginationLink
                                            href="#"
                                            aria-label="Назад"
                                        >
                                            <LuChevronsRight />
                                        </PaginationLink>
                                    </PaginationItem>
                                </PaginationContent>
                            </Pagination>
                        </div>

                        <div>
                            <Dialog>
                                <DialogTrigger
                                    render={
                                        <Button
                                            variant="outline"
                                            className="pagination-index-btn"
                                        >
                                            {/* Кнопка содержания */}
                                            <LuList />
                                        </Button>
                                    }
                                />
                                <DialogContent>
                                    <DialogHeader>
                                        <DialogTitle>Содержание</DialogTitle>
                                        <DialogDescription>
                                            This dialog has a sticky footer that
                                            stays visible while the content
                                            scrolls.
                                        </DialogDescription>
                                    </DialogHeader>
                                    <div className="-mx-4 no-scrollbar max-h-[50vh] overflow-y-auto px-4">
                                        {Array.from({ length: 10 }).map(
                                            (_, index) => (
                                                <p
                                                    key={index}
                                                    className="mb-4 leading-normal"
                                                >
                                                    Lorem ipsum dolor sit amet,
                                                    consectetur adipiscing elit.
                                                    Sed do eiusmod tempor
                                                    incididunt ut labore et
                                                    dolore magna aliqua. Ut enim
                                                    ad minim veniam, quis
                                                    nostrud exercitation ullamco
                                                    laboris nisi ut aliquip ex
                                                    ea commodo consequat. Duis
                                                    aute irure dolor in
                                                    reprehenderit in voluptate
                                                    velit esse cillum dolore eu
                                                    fugiat nulla pariatur.
                                                    Excepteur sint occaecat
                                                    cupidatat non proident, sunt
                                                    in culpa qui officia
                                                    deserunt mollit anim id est
                                                    laborum.
                                                </p>
                                            ),
                                        )}
                                    </div>
                                    <DialogFooter>
                                        <DialogClose
                                            render={
                                                <Button variant="outline">
                                                    Закрыть
                                                </Button>
                                            }
                                        />
                                    </DialogFooter>
                                </DialogContent>
                            </Dialog>
                        </div>
                    </div>
                </div>
            </main>
            {/* Правый сайдбар */}
            <aside className="right-sidebar"></aside>
            <footer className="footer">
                <div className="footer-container">
                    <div>
                        <div className="is-active">
                            <LuHouse />
                            <span>Главная</span>
                        </div>
                    </div>
                    <div>
                        <LuBookOpen />
                        <span>Каталог</span>
                    </div>
                    <div>
                        <LuSearch />
                        <span>Поиск</span>
                    </div>
                    <div>
                        <LuHeadphones />
                        <span>Аудиокниги</span>
                    </div>
                    <div>
                        <LuBookmark />
                        <span>Закладки</span>
                    </div>
                    {/* <div>
                        <LuUser />
                        <span>Профиль</span>
                    </div> */}
                </div>
            </footer>
        </div>
    );
}
export default App;
