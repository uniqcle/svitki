import { createBrowserRouter } from "react-router";
import AppLayout from "@/App";
import { MainPage } from "./pages/MainPage/MainPage";
import { CatalogPage } from "./pages/CatalogPage/CatalogPage";
import { AuthorsListPage } from "./pages/AuthorsListPage/AuthorsListPage";
import { SingleContent } from "@/components/layout/SingleContent";
import { AuthorPage } from "./pages/AuthorPage/AuthorPage";
import { TranslatorsListPage } from "./pages/TranslatorsListPage/TranslatorsListPage";
import { TranslatorPage } from "./pages/TranslatorPage/TranslatorPage";
import { TitlePage } from "./pages/TitlePage/TitlePage";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: AppLayout,
        children: [
            { index: true, Component: MainPage },
            { path: "catalog", Component: CatalogPage },
            { path: "authors", Component: AuthorsListPage },
            { path: "author", Component: AuthorsListPage },
            { path: "author/:authorId", Component: AuthorPage },
            { path: "translators", Component: TranslatorsListPage },
            {
                path: "translator/:translatorId",
                Component: TranslatorPage,
            },

            { path: "work/:workId", Component: TitlePage },
            {
                path: "work/:workId/chapter/:chapterId",
                Component: SingleContent,
            },
            {
                path: "work/:workId/chapter/:chapterId/page/:pageId",
                Component: SingleContent,
            },
        ],
    },
]);