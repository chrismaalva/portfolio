"use client";
import { useState, useEffect } from "react";
import ChevronDownIcon from "./icons/ChevronIconDown";

export default function Main() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    const [backgroundStyle, setBackgroundStyle] = useState<string>("");

    useEffect(() => {
        if (typeof window !== "undefined") {
            const updateBackgroundStyle = () => {
                const style = `radial-gradient(circle at ${
                    (mousePosition.x / window.innerWidth) * 100
                }% ${
                    (mousePosition.y / window.innerHeight) * 100
                }%, rgba(255, 255, 255, 0.1), transparent)`;
                setBackgroundStyle(style);
            };

            updateBackgroundStyle();

            window.addEventListener("resize", updateBackgroundStyle);

            return () => {
                window.removeEventListener("resize", updateBackgroundStyle);
            };
        }
    }, [mousePosition]);

    return (
        <section
            className="flex flex-col items-center justify-center h-screen border-y border-gray-200 dark:border-gray-600 relative"
            onMouseMove={(e) =>
                setMousePosition({ x: e.clientX, y: e.clientY })
            }
        >
            <div className="space-y-4 text-center z-10">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                    Christian Martínez
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-600 dark:text-gray-400 md:text-xl">
                    Engineer | Front-End Developer | Gamer
                </p>
                <p className="mx-auto max-w-[700px] text-gray-600 dark:text-gray-400 md:text-xl">
                    I{"'"}m a passionate developer who loves building innovative
                    solutions. Check out some of my recent projects below.
                </p>
            </div>
            <div
                className="absolute inset-0 bg-gradient-to-b from-gray-100 to-transparent animate-fade-in-up dark:from-gray-800"
                style={{ background: backgroundStyle }}
            />
            <div className="absolute bottom-4 animate-bounce">
                <button className="text-gray-900 dark:text-white flex flex-col items-center">
                    <ChevronDownIcon className="size-6" />
                    <span>Scroll down</span>
                </button>
            </div>
        </section>
    );
}
