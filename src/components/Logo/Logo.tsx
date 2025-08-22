import classNames from "classnames";
import cls from "./Logo.module.css";

interface LogoProps {
    className?: string;
}

export const Logo = ({ className }: LogoProps) => {
    return (
        <div className={classNames(cls.Logo, className)}>
            <span>Жанна</span>
            <span>Чекмарева</span>
        </div>
    );
};
