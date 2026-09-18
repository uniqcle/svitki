import { createBrowserRouter } from "react-router";
import  AppLayout from "@/App";
// import { SingleTextPage } from "@/components/SingleTextPage/SingleTextPage";
import { MainContent } from "@/components/layout/MainContent";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: AppLayout,  
        children: [
            {
                index: true,
                // Здесь будет ваша главная страница, например <CatalogPage />
                element: <div>Главная страница</div>,
            },
            {
                path: "text/:id",
                Component: MainContent,
            },
        ],
    },
]);
