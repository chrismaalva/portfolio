import React from "react";

import classNames from "classnames";
import Image from "next/image";

type ButtonProps = {
    text: string;
    icon?: string;
    iconDescription?: string;
    className?: string;
};
export default function Button({
    text,
    icon,
    iconDescription,
    className,
}: ButtonProps) {
    const buttonClasses = classNames(
        className,
        "bg-orange-500 p-3 rounded-xl my-4 cursor flex gap-2"
    );
    return (
        <button className={buttonClasses}>
            {text}
            {icon && (
                <Image
                    src={icon || ""}
                    width={25}
                    height={25}
                    className="dark:invert"
                    alt={iconDescription || ""}
                />
            )}
        </button>
    );
}
