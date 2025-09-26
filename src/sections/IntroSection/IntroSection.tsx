import classNames from "classnames";
import cls from "./IntroSection.module.css";
import { Section, SectionTheme } from "@/components/Section/Section";
import { IntroPhoto } from "./components/IntroPhoto/IntroPhoto";
import { IntroTitle } from "./components/IntroTitle/IntroTitle";
import { IntroReasons } from "./components/IntroReasons/IntroReasons";

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
            <IntroPhoto />
            <IntroTitle />
            <IntroReasons />
        </Section>
    );
};
