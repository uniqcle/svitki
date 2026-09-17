import { SingleTextPage } from "../SingleTextPage/SingleTextPage";

import { Breadcrumbs } from "../Breadcrumbs/Breadcrumbs";
import { PaginationBar } from "../PaginationBar/PaginationBar";

export function Main() {
    return (
        <main className="main">
            <div className="main-container">
                <Breadcrumbs />

                <div className="main-content typeset typeset-docs max-w-[37em]">
                    <SingleTextPage />
                </div>

                <PaginationBar />
            </div>
        </main>
    );
}
