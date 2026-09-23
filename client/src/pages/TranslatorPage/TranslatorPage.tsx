import { useParams } from "react-router";
import horace from "@/assets/images/authors/horace.png";
import styles from "./TranslatorPage.module.css";
import { Separator } from "@/components/ui/separator";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
                    <div className={styles.translator_fullName}>
                        Афанасий Фет
                    </div>
                    <div className={styles.translator_birthDate}>
                        12.23.2203
                    </div>
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
                <Tabs
                    defaultValue="biography"
                    className={styles.translator_tabs}
                >
                    <TabsList>
                        <TabsTrigger value="biography">Биография</TabsTrigger>
                        <TabsTrigger value="works">Переводы</TabsTrigger>
                    </TabsList>

                    <TabsContent value="biography">
                        <Card className={styles.translator_card}>
                            <CardHeader>
                                <CardTitle>Биография</CardTitle>
                                <CardDescription>
                                    Краткая биография автора
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit. Praesentium velit impedit ut a
                                culpa eum delectus porro libero. Natus molestias
                                minima, consequuntur numquam eum dolor quia
                                recusandae enim ducimus autem.
                            </CardContent>
                        </Card>
                    </TabsContent>

                    <TabsContent value="works">
                        <Card className={styles.translator_card}>
                            <CardHeader>
                                <CardTitle>Переводы</CardTitle>
                                <CardDescription>
                                    Список произведений автора
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit. Minus officiis ad optio
                                quibusdam libero beatae deserunt distinctio sit
                                totam natus saepe velit autem.
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    );
}
