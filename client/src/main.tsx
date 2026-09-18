import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router/dom"; // В v8 RouterProvider импортируется из /dom [citation:1]
import { router } from "./router"; // Импортируйте ваш роутер
import "./styles/index.css";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>,
);
