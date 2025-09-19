import classNames from "classnames";
import cls from "./Navigation.module.css";

interface NavigationProps {
    className?: string;
}

export const Navigation = ({
    className,
}: NavigationProps) => {
    return (
        <nav
            className={classNames(
                cls.Navigation,
                className,
            )}
        >
           <a href="#intro">Главная</a>
           <a href="#whoami">Обо мне</a>
            <a href="#price">Стоимость</a>
        </nav>
    );
};
