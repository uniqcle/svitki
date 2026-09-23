import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import styles from "./FilterSelect.module.css";

type Option = {
    label: string;
    value: string;
};

type FilterSelectProps = {
    label: string; // 👈 подпись («Свитки:», «Период:»)
    options: Option[]; // 👈 список опций
    defaultValue?: string; // 👈 значение по умолчанию
    placeholder?: string; // 👈 placeholder (опционально)
    groupLabel?: string; // 👈 заголовок группы («Раздел литературы»)
    onChange?: (value: string) => void; // 👈 колбэк при выборе
    className?: string; // 👈 доп. класс (опционально)
};

export function FilterSelect({
    label,
    options,
    defaultValue = "all",
    placeholder,
    groupLabel,
    onChange,
    className,
}: FilterSelectProps) {
    return (
        <div className={`${styles.filterGroup} ${className ?? ""}`}>
            <div className={styles.filterLabel}>{label}</div>

            <Select
                items={options}
                defaultValue={defaultValue}
                onValueChange={onChange}
            >
                <SelectTrigger>
                    <SelectValue placeholder={placeholder} />
                </SelectTrigger>

                <SelectContent
                    className={styles.selectContent}
                    side="bottom"
                    align="center"
                    sideOffset={3}
                    alignItemWithTrigger={false}
                >
                    <SelectGroup>
                        {groupLabel && <SelectLabel>{groupLabel}</SelectLabel>}
                        {options.map((item) => (
                            <SelectItem key={item.value} value={item.value}>
                                {item.label}
                            </SelectItem>
                        ))}
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
    );
}

