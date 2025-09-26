import cls from "./IntroReasons.module.css";

export const IntroReasons = () => {
    return (
        <section className={cls.IntroReasons}>
            <ul className={cls.Reasons}>
                <li>
                    <h3>*Понятное объяснение</h3>
                </li>
                <li>
                    <h3>
                        <span className={cls.purple}>*Без заучиваний</span>{" "}
                        вслепую
                    </h3>
                </li>
                <li>
                    <h3>*Спокойная атмосфера</h3>
                </li>
                <li>
                    <h3>
                        *Настоящий <span className={cls.purple}>результат</span>
                    </h3>
                </li>
            </ul>
        </section>
    );
};
