import classNames from "classnames";
import cls from "./IntroSection.module.css";
import { Section, SectionTheme } from "@/components/Section/Section";

interface IntroSectionProps {
    className?: string;
}

export const IntroSection = ({ className }: IntroSectionProps) => {
    return (
        <Section
            id="intro" 
            theme={SectionTheme.Rainbow}
            className={classNames(cls.IntroSection, [className])}
        >
            <div>intro</div>
        </Section>
    );
};
