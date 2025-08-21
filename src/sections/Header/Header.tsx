import classNames from "classnames";
import cls from "./Header.module.css";

interface HeaderProps {
    className?: string;
}

export const Header = ({ className }: HeaderProps) => {
    return (
        <header className={classNames(cls.Header, className)}>header</header>
    );
};
