import React from "react";

import About from "@/components/About";
import Home from "@/components/Home";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function HomePage() {
    return (
        <>
            <Home />
            <Skills />
            <About />
            <Projects />
            <Contact />
        </>
    );
}
