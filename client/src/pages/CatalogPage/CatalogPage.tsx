import { useState, useRef, useEffect } from "react";
import { LuChevronsRight } from "react-icons/lu";
import { Separator } from "@/components/ui/separator";
import { FilterSelect } from "@/components/FilterSelect/FilterSelect";
import { GenreFilter } from "@/components/GenreFilter/GenreFilter";

import styles from "./CatalogPage.module.css";
import horace from "@/assets/images/authors/horace.png";

 
import { useClickOutside } from "@/hooks/useClickOutside";
import { CatalogList } from "@/components/CatalogList/CatalogList";

const genres = [
    { label: "Поэзия", value: "poetry" },
    { label: "Эпос", value: "epic" },
    { label: "Философия", value: "philosophy" },
    { label: "Трагедия", value: "tragedy" },
    { label: "История", value: "history" },
    { label: "Комедия", value: "comedy" },
    { label: "Сатира", value: "satire" },
    { label: "Лирика", value: "lyric" },
    { label: "Риторика", value: "rhetoric" },
    { label: "Политика", value: "politics" },
    { label: "Роман", value: "novel" },
    { label: "Естествознание", value: "science" },
    { label: "Эпистолярный", value: "epistolary" },
    { label: "Медицина", value: "medicine" },
];

const sections = [
    { label: "Вся античность", value: "all" },
    { label: "Древних греков", value: "greek" },
    { label: "Древних римлян", value: "roman" },
];

const periods = [
    { label: "Все эпохи", value: "all" },
    { label: "IX–VIII в. до н.э.", value: "9-8-bc" },
    { label: "VII–VI в. до н.э.", value: "7-6-bc" },
    { label: "V в. до н.э.", value: "5-bc" },
    { label: "IV в. до н.э.", value: "4-bc" },
    { label: "III–II в. до н.э.", value: "3-2-bc" },
    { label: "I в. до н.э.", value: "1-bc" },
    { label: "I–II в. н.э.", value: "1-2-ad" },
];

export function CatalogPage() {
    const [genresOpen, setGenresOpen] = useState(false);
    const [selectedGenres, setSelectedGenres] = useState<string[]>([]);

    const genresWrapperRef = useRef<HTMLDivElement>(null);

    // 👇 вместо useEffect
    useClickOutside(
        genresWrapperRef,
        () => setGenresOpen(false),
        genresOpen, // 👈 enabled: только когда панель открыта
    );

    return (
        <div className={`${styles.catalog_container} `}>
            <div className={styles.catalog_filter}>
                {/* 1-я строка: Раздел + Период */}
                <div className={styles.filter_row_top}>
                    <FilterSelect
                        label="Свитки:"
                        options={sections}
                        defaultValue="all"
                        groupLabel="Раздел литературы"
                    />

                    <FilterSelect
                        label="Период:"
                        options={periods}
                        defaultValue="all"
                        groupLabel="Период написания"
                    />
                </div>

                {/* 2-я строка: Жанры */}
                <GenreFilter
                    label="Жанры:"
                    options={genres}
                    value={selectedGenres}
                    onChange={setSelectedGenres}
                />
            </div>

            <Separator />

            <div className={styles.catalog_list}>
                <div className="">
                    <CatalogList />
                </div>
            </div>
        </div>
    );
}
