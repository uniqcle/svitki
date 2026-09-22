import { createBrowserRouter } from "react-router";
import AppLayout from "@/App";
// import { SingleTextPage } from "@/components/SingleTextPage/SingleTextPage";
import { AuthorsListPage } from "./pages/AuthorsListPage/AuthorsListPage";
import { MainContent } from "@/components/layout/MainContent";
import { AuthorPage } from "./pages/AuthorPage/AuthorPage";
import { TranslatorsListPage } from "./pages/TranslatorsListPage/TranslatorsListPage";
import { TranslatorPage } from "./pages/TranslatorPage/TranslatorPage";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: AppLayout,
        children: [
            { index: true, Component: MainContent },

            { path: "authors", Component: AuthorsListPage },
            { path: "author", Component: AuthorsListPage },
            { path: "author/:authorId", Component: AuthorPage },
            { path: "translators", Component: TranslatorsListPage },
            {
                path: "translator/:translatorId",
                Component: TranslatorPage,
            },

            {
                path: "work/:workId",
                Component: MainContent,
                children: [
                    { index: true, Component: MainContent },
                    { path: "chapter/:chapterId", Component: MainContent },
                    {
                        path: "chapter/:chapterId/page/:pageId",
                        Component: MainContent,
                    },
                ],
            },
        ],
    },
]);