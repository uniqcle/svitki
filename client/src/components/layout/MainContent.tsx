import { SingleTextPage } from "../SingleTextPage/SingleTextPage";

import { Breadcrumbs } from "../Breadcrumbs/Breadcrumbs";
import { PaginationBar } from "../PaginationBar/PaginationBar";
import { Outlet } from "react-router";

export function MainContent() {
    return (
        <>
            <Breadcrumbs />

            <div className="main-content typeset typeset-docs max-w-[37em]">
                <SingleTextPage />
            </div>

            <PaginationBar />
        </>
    );
}
