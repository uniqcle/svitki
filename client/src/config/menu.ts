export type MenuItem = {
    label: string;
    href?: string;
    hideOnDesktop?: true;
    icon?: React.ReactNode;
    children?: MenuItem[];
};

export const menuItems: MenuItem[] = [
    {
        label: "Главная",
        href: "/",
        hideOnDesktop: true,
    },
    {
        label: "Сочинения",
        children: [
            { label: "Все", href: "/work" },
            { label: "По эпохам", href: "/work/epochs" },
            { label: "По жанрам", href: "/work/genres" },
        ],
    },
    {
        label: "Персоналии",
        children: [
            { label: "Авторы", href: "/authors" },
            { label: "Переводчики", href: "/translators" },
        ],
    },
    {
        label: "О проекте",
        children: [
            { label: "О проекте", href: "/about" },
            { label: "Обратная связь", href: "/contact" },
            { label: "Правообладателям", href: "/copyright" },
        ],
    },
    {
        label: "Кабинет",
        children: [
            { label: "Войти", href: "/login" },
            { label: "Регистрация", href: "/register" },
        ],
    },
];
