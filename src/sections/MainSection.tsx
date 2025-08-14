import Image from "next/image";
import { Text, TextSize } from "@/components/typography/Text";
import Jeanne from "../../public/Jeanne1.png";
export const MainSection = () => {
    return (
        <section className="h-[100vh] relative flex flex-row  pt-40 bg-[conic-gradient(from_90deg_at_44.11%_53.45%,_#FFAE00_0deg,_#E04300_90deg,_#2B0059_186.92deg,_#121212_250.96deg,_#1C1C1C_360deg)]">
            <div className="w-1/2">
                <Image
                    className="absolute bottom-0 left-0"
                    src={Jeanne}
                    alt={""}
                    width={700}
                    height={900}
                />
            </div>
            <div className="w-1/2 flex flex-col">
                <div>
                    <div className="flex flex-row gap-3 items-center">
                        <Text size={TextSize.BIGGER}>Занятия</Text>
                        <Text
                            size={TextSize.MEDIUM}
                            className=" rounded-xl p-1 rotate-[-6deg] shadow-[0px_4px_50px_0px_rgba(255,174,0,0.5)] bg-[linear-gradient(90deg,#FFB81D_17.31%,#E45906_100%)]"
                        >
                            с нуля до 4 и 5
                        </Text>
                    </div>
                    <div>
                        <Text size={TextSize.BIGGER}>по математике</Text>
                    </div>
                </div>
                <div></div>
            </div>
        </section>
    );
};
