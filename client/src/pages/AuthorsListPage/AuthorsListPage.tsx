import horace from "@/assets/images/authors/horace.png";
import { Separator } from "@/components/ui/separator";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import styles from "./AuthorsListPage.module.css";

export function AuthorsListPage() {
    return (
        <div className={styles.list_authors_container}>
            <ToggleGroup
                className={styles.filter_container}
                variant="outline"
                size="sm"
                spacing={2}
                defaultValue={["all"]}
            >
                <ToggleGroupItem value="all" className={styles.filter_item}>
                    Все
                </ToggleGroupItem>
                <ToggleGroupItem value="greek" aria-label="Toggle greek">
                    Греки
                </ToggleGroupItem>
                <ToggleGroupItem value="roman" aria-label="Toggle roman">
                    Римляне
                </ToggleGroupItem>
            </ToggleGroup>

            <Separator />

            <div className={styles.list_authors}>
                {Array.from({ length: 22 }).map((_, i) => (
                    <div key={i} className={styles.author}>
                        <div className={styles.author_image}>
                            <img src={horace} alt="" />
                        </div>
                        <div className={styles.author_fullName}>Гораций</div>
                        <div className={styles.author_birthdate}>
                            65 - 8 года до н. э.
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
