import { t } from "i18next";
import { useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { LangSwitcher } from "shared/ui/LangSwitcher/LangSwitcher";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher/ThemeSwitcher";
import cls from "./Sidebar.module.scss";

interface SidebarProps {
    className?: string;
}
export const Sidebar = ({className}: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed(prev => !prev);
    };

    return (
        <div 
            className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])}
        >
            <button onClick={onToggle}>{t("toggle")}</button>
            <div className={cls.switchers}>
                <ThemeSwitcher className={classNames(cls.ThemeSwitcher, {}, [className])}/>
                <LangSwitcher className={classNames(cls.lang, {}, [className])}/>
            </div>
        </div>
    );
};