import { useParams } from "react-router";
import horace from "@/assets/images/authors/horace.png";
import styles from "./TranslatorPage.module.css";
import { Separator } from "@/components/ui/separator";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Breadcrumbs } from "../../components/Breadcrumbs/Breadcrumbs";

export function TranslatorPage() {
    // const { translator } = useParams();

    return (
        <div className={styles.translator_container}>
            <Breadcrumbs />

            <div className={styles.translator_short}>
                <div className={styles.translator_image}>
                    <img src={horace} alt="" />
                </div>
                <div className={styles.translator_desc}>
                    <div className={styles.translator_fullName}>Афанасий Фет</div>
                    <div className={styles.translator_birthDate}>12.23.2203</div>
                    <div className={styles.translator_desc_text}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quos tenetur voluptate ex voluptatem, atque, blanditiis,
                        possimus neque alias quas doloribus magnam ipsa cumque
                        fugit error molestias dolores incidunt at quibusdam.
                    </div>
                </div>
            </div>

            <Separator />

            <div className={styles.translator_long}>
                <div>
                    <ToggleGroup
                        className={styles.translator_toggle}
                        variant="outline"
                        size="sm"
                        spacing={2}
                        defaultValue={["biography_toggle"]}
                    >
                        <ToggleGroupItem
                            value="biography_toggle"
                            className={styles.translator_works}
                        >
                            Биография
                        </ToggleGroupItem>
                        <ToggleGroupItem
                            value="works_toggle"
                            aria-label="Toggle translator_works"
                        >
                            Переводы
                        </ToggleGroupItem>
                    </ToggleGroup>
                </div>

                <div className={styles.biography_toggle_value}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Praesentium velit impedit ut a culpa eum delectus porro
                    libero. Natus molestias minima, consequuntur numquam eum
                    dolor quia recusandae enim ducimus autem. Dolores optio
                    veniam incidunt autem praesentium quod eius dolorem labore
                    quibusdam, debitis quos, nihil tenetur. Sint sapiente, error
                    earum corporis nostrum tempore, dolores harum, nulla
                    necessitatibus odio blanditiis doloremque unde.
                </div>

                <div className={styles.works_toggle_value}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Minus officiis ad optio quibusdam libero beatae deserunt
                    distinctio sit totam natus saepe velit autem, sint dolorem,
                    explicabo repellendus quam cumque alias. Inventore obcaecati
                    odit omnis maxime libero!
                </div>
            </div>
        </div>
    );
}
