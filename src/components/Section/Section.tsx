import classNames from "classnames";
import cls from "./Section.module.css";

export enum SectionTheme {
    Light = "light",
    Dark = "dark",
    Rainbow = "rainbow",
}

interface SectionProps {
    id: string;
    theme: SectionTheme;
    children: React.ReactNode;
    className?: string;
}

export const Section = (props: SectionProps) => {
    const {id, theme, children, className } = props;
    return (
        <section id={id} className={classNames(cls.Section, cls[theme], className)}>
            {children}
        </section>
    );
};
