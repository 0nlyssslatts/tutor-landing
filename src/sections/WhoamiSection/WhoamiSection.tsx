import classNames from "classnames";
import cls from "./WhoamiSection.module.css";
import { Section, SectionTheme } from "@/components/Section/Section";

interface WhoamiSectionProps {
    className?: string;
}

export const WhoamiSection = ({ className }: WhoamiSectionProps) => {
    return (
        <Section
            theme={SectionTheme.Light}
            className={classNames(cls.WhoamiSection, [className])}
        >
            <div>Whoami</div>
        </Section>
    );
};
