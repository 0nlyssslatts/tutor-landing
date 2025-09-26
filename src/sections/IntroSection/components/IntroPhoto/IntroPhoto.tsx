import Image from "next/image";
import intro from "@/assets/icons/intro.png";
import cls from "./IntroPhoto.module.css";

export const IntroPhoto = () => {
    return <Image src={intro} alt={""} className={cls.IntroPhoto} />;
};
