import { Breadcrumbs } from "../../components/Breadcrumbs/Breadcrumbs";
import img from "@/assets/images/52536559.png";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { LuLock, LuLockOpen } from "react-icons/lu";
import styles from "./TitlePage.module.css";

const chapters = [
    { id: 1, title: "Глава 1. Введение", locked: false },
    { id: 2, title: "Глава 2. Основы теории", locked: false },
    { id: 3, title: "Глава 3. Методология исследования", locked: false },
    { id: 4, title: "Глава 4. Анализ данных", locked: true },
    { id: 5, title: "Глава 5. Практические примеры", locked: true },
    { id: 6, title: "Глава 6. Обсуждение результатов", locked: true },
    { id: 7, title: "Глава 7. Заключение", locked: true },
];

const appendixes = [
    { id: "a", title: "Приложение А. Термины и определения", locked: true },
    { id: "b", title: "Приложение Б. Список литературы", locked: true },
];

export function TitlePage() {
    return (
        <div className={styles.container}>
            <Breadcrumbs />

            <div className={styles.titleBlock}>
                <div className={styles.titleImage}>
                    <img src={img} alt="" />
                </div>

                <div className={styles.titleInfo}>
                    <div className={styles.title}>Заголовок книги</div>
                    <div>
                        Автор: <span>Гораций</span>
                    </div>
                    <div>
                        Переводчик: <span>Афанасий Фет</span>
                    </div>
                    <div>
                        Жанр: <span>Трагедия</span>
                    </div>

                    <div className={styles.buttonWrapper}>
                        <button className={styles.readButton}>
                            Читать онлайн
                        </button>
                    </div>
                </div>
            </div>

            <Separator />

            <div>
                <Tabs defaultValue="book_index">
                    <TabsList>
                        <TabsTrigger value="book_index">Оглавление</TabsTrigger>
                        <TabsTrigger value="book_info">Praefatio</TabsTrigger>
                        <TabsTrigger value="book_characters">
                            Персонажи
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent value="book_index">
                        <Card>
                            <CardHeader>
                                <CardTitle>Оглавление</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className={styles.indexList}>
                                    {[...chapters, ...appendixes].map(
                                        (chapter) => (
                                            <li key={chapter.id}>
                                                <a
                                                    href="#"
                                                    className={`${styles.indexItem} ${
                                                        chapter.locked
                                                            ? styles.isLocked
                                                            : ""
                                                    }`}
                                                    onClick={(e) =>
                                                        chapter.locked &&
                                                        e.preventDefault()
                                                    }
                                                >
                                                    {chapter.locked ? (
                                                        <LuLock />
                                                    ) : (
                                                        <LuLockOpen />
                                                    )}
                                                    {chapter.title}
                                                </a>
                                            </li>
                                        ),
                                    )}
                                </ul>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    <TabsContent value="book_info">
                        <Card>
                            <CardHeader>
                                <CardTitle>Эпитома</CardTitle>
                            </CardHeader>
                            <CardContent>sdafsdafsadf</CardContent>
                        </Card>
                    </TabsContent>

                    <TabsContent value="book_characters">
                        <Card>
                            <CardHeader>
                                <CardTitle>Персонажи</CardTitle>
                            </CardHeader>
                            <CardContent>Персонажи</CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    );
}
