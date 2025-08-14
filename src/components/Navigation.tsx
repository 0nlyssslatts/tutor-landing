import { Text } from "./typography/Text";

export const Navigation = () => {
    return (
        <nav className="flex flex-row gap-3">
            <Text>Главная</Text>
            <Text>Обо мне</Text>
            <Text>Стоимость</Text>
        </nav>
    );
};
