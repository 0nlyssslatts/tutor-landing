import cls from "./IntroTitle.module.css";
import Alert from "@/assets/icons/alert.svg";
import Line from "@/assets/icons/line.svg";

export const IntroTitle = () => {
    return (
        <section className={cls.IntroTitle}>
            <div className={cls.h1Section}>
                <h1 className={cls.h1}>
                    Заниятия <br /> по математике
                </h1>
                <Alert className={cls.Alert} />
                <span className={cls.span}>с нуля до 4 и 5</span>
            </div>
            <div className={cls.h2Section}>
                <h2 className={cls.h2}>
                    Где ребёнку наконец-то <br /> становится понятно
                </h2>
                <Line className={cls.Line} />
            </div>
        </section>
    );
};
