import React from "react";

import Image from "next/image";

import classNames from "classnames";

type BgImageProps = {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    className?: string;
    unoptimized?: boolean;
};
export default function BgImage({
    src,
    width,
    height,
    alt,
    className,
    unoptimized,
}: BgImageProps) {
    const imageClasses = classNames(className, "h-auto w-full");
    return (
        <Image
            src={src || ""}
            width={width || 0}
            height={height || 0}
            alt={alt || ""}
            className={imageClasses}
            unoptimized={unoptimized}
        />
    );
}
