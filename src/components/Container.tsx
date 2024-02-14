import React, { ReactNode } from "react";

import classNames from "classnames";

type ContainerProps = {
    children: ReactNode | ReactNode[];
    className?: string;
    id?: string;
};

export default function Container({ children, className, id }: ContainerProps) {
    const containerClasses = classNames(className, "py-8");
    return (
        <section className={containerClasses} id={id || undefined}>
            {children}
        </section>
    );
}
