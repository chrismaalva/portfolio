import About from "@/components/About";
import HomeComponent from "@/components/HomeComponent";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
export default function Home() {
    return (
        <>
            <HomeComponent />
            <Skills />
            <About />
            <Projects />
            <Contact />
        </>
    );
}
