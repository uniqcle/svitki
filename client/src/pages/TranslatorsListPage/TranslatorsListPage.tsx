import horace from "@/assets/images/authors/horace.png";
import { Separator } from "@/components/ui/separator";
// import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import styles from "./TranslatorsListPage.module.css";

export function TranslatorsListPage() {
	return (
        <>
            <div className={styles.list_translators_container}>
                <div className={styles.filter_container}>
                    <h2>Переводчики с древних языков</h2>
                </div>

                <Separator />

                <div className={styles.list_translators_container}>
                    <div className={styles.list_translators}>
                        {Array.from({ length: 22 }).map((_, i) => (
                            <div key={i} className={styles.translator}>
                                <div className={styles.translator_image}>
                                    <img src={horace} alt="" />
                                </div>
                                <div className={styles.translator_fullName}>
                                    Гораций
                                </div>
                                <div className={styles.translator_birthdate}>
                                    65 - 8 года до н. э.
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
