import { Text } from "./typography/Text";
import Watsup from "../../public/watsup.svg";
import Tg from "../../public/tg.svg";

export const Socials = () => {
    return (
        <div className="flex flex-row items-center gap-2">
            <Text>8 951 057 18 10</Text>
            <Watsup />
            <Tg />
        </div>
    );
};
