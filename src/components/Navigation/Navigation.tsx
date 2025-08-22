import classNames from "classnames";
import cls from "./Navigation.module.css";

interface NavigationProps {
    isMobile?: boolean;
    className?: string;
}

export const Navigation = ({
    isMobile = false,
    className,
}: NavigationProps) => {
    return (
        <nav
            className={classNames(
                cls.Navigation,
                className,
                isMobile && cls.mobile
            )}
        >
            <a href="#">Глaвная</a>
            <a href="#">Обо мне</a>
            <a href="#">Стоимость</a>
        </nav>
    );
};
