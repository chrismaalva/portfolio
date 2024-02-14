import React, { ReactNode } from "react";

import classNames from "classnames";

type TitleProps = {
    title?: string;
    titleAsNode?: ReactNode | ReactNode[];
    className?: string;
};

export default function Title({ title, className, titleAsNode }: TitleProps) {
    const titleClasses = classNames(className, "text-4xl pb-4");
    return titleAsNode ? (
        <h3 className={titleClasses}>{titleAsNode}</h3>
    ) : (
        <h3 className={titleClasses}>{title}</h3>
    );
}
