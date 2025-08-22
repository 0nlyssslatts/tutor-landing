import classNames from "classnames";
import cls from "./Header.module.css";
import { Logo } from "@/components/Logo/Logo";
import { Navigation } from "@/components/Navigation/Navigation";

interface HeaderProps {
    className?: string;
}

export const Header = ({ className }: HeaderProps) => {
    return (
        <header className={classNames(cls.Header, className)}>
            <Logo />
            <Navigation />
        </header>
    );
};
