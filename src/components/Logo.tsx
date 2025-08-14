import { Text, TextSize } from "./typography/Text";
export const Logo = () => {
    return (
        <div className="flex flex-col">
            <Text size={TextSize.MEDIUM} className="italic">
                Жанна
            </Text>
            <Text size={TextSize.MEDIUM}>Чекмарева</Text>
        </div>
    );
};
