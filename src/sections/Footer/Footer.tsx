import classNames from "classnames";
import cls from "./Footer.module.css";

interface FooterProps {
    className?: string;
}

export const Footer = ({ className }: FooterProps) => {
    return (
        <footer className={classNames(cls.Footer, className)}>footer</footer>
    );
};
