import classNames from "classnames";
import cls from "./Section.module.css";

export enum SectionTheme {
    Light = "light",
    Dark = "dark",
    Rainbow = "rainbow",
}

interface SectionProps {
    theme: SectionTheme;
    children: React.ReactNode;
    className?: string;
}

export const Section = (props: SectionProps) => {
    const { theme, children, className } = props;
    return (
        <section className={classNames(cls.Section, cls[theme], className)}>
            {children}
        </section>
    );
};
