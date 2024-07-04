import React from "react";
import Link from "next/link";

import classNames from "classnames";

export default function NavBar() {
    const linkClasses = classNames("mx-4");
    return (
        <nav className="w-full flex justify-end py-8 sticky bg-black top-0 z-10">
            <ul className="flex text-xl">
                <Link className={linkClasses} href="/">
                    Home
                </Link>
                <Link className={linkClasses} href="/#skills">
                    Skills
                </Link>
                <Link className={linkClasses} href="#about">
                    About
                </Link>
                <Link className={linkClasses} href="/#projects">
                    Projects
                </Link>
                <Link className={linkClasses} href="/#contact">
                    Contact
                </Link>
            </ul>
        </nav>
    );
}
