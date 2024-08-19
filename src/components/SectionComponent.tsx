import React, { ReactNode, FunctionComponent } from "react";

import classNames from "classnames";

type SectionComponentProps = {
    className?: string;
    id: string;
    children: ReactNode;
};
const SectionComponent: FunctionComponent<SectionComponentProps> = ({
    className,
    id,
    children,
}) => {
    const sectionClasses = classNames(
        "flex flex-col items-center justify-center h-full border-y border-gray-200 dark:border-gray-600 relative py-20 scroll-smooth",
        className
    );

    return (
        <section className={sectionClasses} id={id}>
            {children}
        </section>
    );
};

export default SectionComponent;
