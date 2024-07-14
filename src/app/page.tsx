"use client";
import React from "react";

import Main from "@/components/Main";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
export default function Page() {
    return (
        <main className="flex-1 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white">
            <Main />
            <Projects />
            <About />
            <Contact />
        </main>
    );
}
