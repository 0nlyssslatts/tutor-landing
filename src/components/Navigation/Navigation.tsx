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
            <a href="#">Глaвная</a>
            <a href="#">Обо мне</a>
            <a href="#">Стоимость</a>
        </nav>
    );
};
