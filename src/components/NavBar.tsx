import { FunctionComponent } from "react";

import Link from "next/link";
import { Button } from "./ui/button";
import SunIcon from "./icons/SunIcon";
import MoonIcon from "./icons/MoonIcon";
import HomeIcon from "./icons/HomeIcon";

interface NavBarProps {
    isDarkMode: boolean;
    toggleDarkMode: () => void;
}

const NavBar: FunctionComponent<NavBarProps> = ({
    isDarkMode,
    toggleDarkMode,
}) => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 px-4 lg:px-6 h-14 flex items-center justify-between bg-gray-900 dark:bg-gray-800 text-white shadow-md transition-all duration-300">
            <Link
                href="/"
                className="flex items-center justify-center"
                prefetch={false}
            >
                <HomeIcon className="size-6" />
            </Link>
            <nav className="flex items-center gap-4 sm:gap-6">
                <Link
                    href="#about"
                    className="text-sm font-medium hover:underline underline-offset-4 transition-all duration-300"
                    prefetch={false}
                >
                    About
                </Link>
                <Link
                    href="#projects"
                    className="text-sm font-medium hover:underline underline-offset-4 transition-all duration-300"
                    prefetch={false}
                >
                    Projects
                </Link>
                <Link
                    href="#contact"
                    className="text-sm font-medium hover:underline underline-offset-4 transition-all duration-300"
                    prefetch={false}
                >
                    Contact
                </Link>
                <Button
                    variant="ghost"
                    onClick={toggleDarkMode}
                    className="text-white hover:bg-gray-700 dark:hover:bg-gray-600 cursor-not-allowed"
                >
                    {isDarkMode ? (
                        <SunIcon className="size-6" />
                    ) : (
                        <MoonIcon className="size-6" />
                    )}
                </Button>
            </nav>
        </header>
    );
};

export default NavBar;
