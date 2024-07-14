"use client";
import React, { useState, useEffect, ReactNode } from "react";

import { Inter } from "next/font/google";

import NavBar from "@/components/NavBar";

import { cn } from "@/lib/utils";
import "./globals.css";

const fontHeading = Inter({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-heading",
});

const fontBody = Inter({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-body",
});

export default function RootLayout({ children }: { children: ReactNode }) {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem("isDarkMode");
        if (savedTheme) {
            setIsDarkMode(JSON.parse(savedTheme));
            document.body.classList.toggle("dark", JSON.parse(savedTheme));
        }
    }, []);

    const toggleDarkMode = () => {
        setIsDarkMode((prevMode) => {
            const newMode = !prevMode;
            localStorage.setItem("isDarkMode", JSON.stringify(newMode));
            document.body.classList.toggle("dark", newMode);
            return newMode;
        });
    };

    return (
        <html lang="en">
            <body
                className={cn(
                    "antialiased",
                    fontHeading.variable,
                    fontBody.variable
                )}
            >
                <NavBar
                    isDarkMode={isDarkMode}
                    toggleDarkMode={toggleDarkMode}
                />
                <main className={`min-h-screen ${isDarkMode ? "dark" : ""}`}>
                    {children}
                </main>
            </body>
        </html>
    );
}
