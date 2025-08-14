import { Logo } from "@/components/Logo";
import { MenuButton } from "@/components/MenuButton";
import { Navigation } from "@/components/Navigation";
import { Socials } from "@/components/Socials";
import { isMobile } from "@/helpers/isMobile";

export const Header = () => {
    return (
        <header className="flex bg-transparent flex-row items-center justify-between p-3 pr-6 pl-6 absolute w-[100%] z-10">
            <Logo />
            <Navigation />
            <Socials />
            {isMobile() && <MenuButton />}
        </header>
    );
};
