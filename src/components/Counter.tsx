"use client";
import React, { useEffect, useState } from "react";

import classNames from "classnames";

type CounterProps = {
    limit: number;
    description: string;
    className?: string;
};

export default function Counter({
    limit,
    description,
    className,
}: CounterProps) {
    const [counter, setCounter] = useState(0);

    const containerClasses = classNames(
        className,
        "w-full pb-4 flex flex-col justify-center items-center"
    );

    useEffect(() => {
        const interval = setInterval(() => {
            if (counter < limit) {
                setCounter((counter) => counter + 1);
            }
        }, 200);

        return () => {
            clearInterval(interval);
        };
    }, [counter, limit]);

    return (
        <div className={containerClasses}>
            <span className="text-3xl font-bold">{counter}+</span>
            <p className="font-medium text-center">{description}</p>
        </div>
    );
}
