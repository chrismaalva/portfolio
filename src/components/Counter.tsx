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

    const counterClasses = classNames(className, "text-3xl font-bold");
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
        <div className="w-full pb-4">
            <span className={counterClasses}>{counter}+</span>
            <p className="font-medium">{description}</p>
        </div>
    );
}
