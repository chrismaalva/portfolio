import Link from "next/link";
import Image from "next/image";
import { projectsList } from "@/utils/projectsList";
import SectionComponent from "./SectionComponent";

const Projects = () => (
    <SectionComponent id="projects">
        <h3 className="text-black dark:text-white text-4xl pb-20">
            My projects
        </h3>
        <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-6">
            {projectsList.map((project) => (
                <div
                    key={project.id}
                    className="group relative overflow-hidden rounded-lg shadow-lg"
                >
                    <Image
                        src={project.img}
                        width="400"
                        height="300"
                        alt={project.title}
                        className="w-full h-[300px] object-cover object-center transition-all duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-primary/80 flex flex-col items-center justify-center p-6 opacity-0 transition-all duration-300 group-hover:opacity-100">
                        <h3 className="text-2xl font-bold text-primary-foreground">
                            {project.title}
                        </h3>
                        <p className="text-primary-foreground mt-2">
                            {project.description}
                        </p>
                        <Link
                            href="#"
                            className="mt-4 inline-flex items-center justify-center rounded-md bg-primary-foreground px-4 py-2 text-sm font-medium text-primary shadow transition-all duration-300 hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                            prefetch={false}
                        >
                            View Project
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    </SectionComponent>
);

export default Projects;
