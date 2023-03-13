import { t } from "i18next";
import React from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import cls from "./Navbar.module.scss";

interface NavbarProps {
	className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    to={"/"}
                    className={cls.mainLink}
                >
                    {t("Главная")}
                </AppLink>
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    // eslint-disable-next-line i18next/no-literal-string
                    to={"/about"}
                >  
                    {t("О сайте")}
                </AppLink>
            </div>
        </div>
    );
};