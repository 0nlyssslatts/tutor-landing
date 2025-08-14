import classNames from "classnames";
import { ReactNode } from "react";

export enum TextWeight {
    REGULAR = 400,
    MEDIUM = 500,
    BOLD = 600,
}

export enum TextSize {
    SMALLER = 20,
    SMALL = 24,
    MEDIUM = 36,
    BIG = 64,
    BIGGER = 128,
    LARGE = 200,
}

export enum TextColor {
    LIGHT = "light",
    DARK = "dark",
    ORANGE = "orange",
    PURPLE = "purple",
}

interface TextProps {
    children: ReactNode;
    size?: TextSize;
    weight?: TextWeight;
    color?: TextColor;
    className?: string;
}

export const Text = (props: TextProps) => {
    const {
        children,
        size = TextSize.SMALL,
        weight = TextWeight.MEDIUM,
        color = TextColor.LIGHT,
        className,
    } = props;

    // Маппинг размеров шрифта к Tailwind классам
    const textSizeClasses: Record<TextSize, string> = {
        [TextSize.SMALLER]: "text-sm",
        [TextSize.SMALL]: "text-base",
        [TextSize.MEDIUM]: "text-2xl",
        [TextSize.BIG]: "text-4xl",
        [TextSize.BIGGER]: "text-6xl",
        [TextSize.LARGE]: "text-8xl",
    };

    // Маппинг веса шрифта к Tailwind классам
    const textWeightClasses: Record<TextWeight, string> = {
        [TextWeight.REGULAR]: "font-normal",
        [TextWeight.MEDIUM]: "font-medium",
        [TextWeight.BOLD]: "font-bold",
    };

    const classes = classNames(
        textSizeClasses[size],
        textWeightClasses[weight],
        className
    );

    // Используем CSS переменную для цвета
    const style = {
        color: `var(--color-${color})`,
    };

    return (
        <span className={classes} style={style}>
            {children}
        </span>
    );
};
