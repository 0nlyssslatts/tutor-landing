import classNames from "classnames";
import cls from "./HowworksSection.module.css";
import { Section, SectionTheme } from "@/components/Section/Section";

interface HowworksSectionProps {
    className?: string;
}

export const HowworksSection = ({ className }: HowworksSectionProps) => {
    return (
        <Section
            id="price" 
            theme={SectionTheme.Dark}
            className={classNames(cls.HowworksSection, [className])}
        >
            <div>Howworks</div>
        </Section>
    );
};
