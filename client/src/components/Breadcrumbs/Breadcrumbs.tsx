import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import styles from "./Breadcrumbs.module.css";

import {
    LuHouse,
} from "react-icons/lu";

export function Breadcrumbs() {
	return (
        <div className={styles.breadcrumbs}>
            <Breadcrumb>
                <BreadcrumbList className="text-[13px] text-black/55">
                    <BreadcrumbItem>
                        <BreadcrumbLink render={<a href="/" />}>
                            <LuHouse />
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbLink render={<a href="/components" />}>
                            Гораций
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>Оды</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
        </div>
    );
}
