"use client";
import React, { FunctionComponent } from "react";
import Container from "./Container";

import { projectsList } from "@/utils/projectsList";
import Image from "next/image";

const ProjectsItems: FunctionComponent = () => {
    return (
        <Container className="relative text-center md:text-start">
            <p className="py-4">
                These projects represent a snapshot of my diverse portfolio,
                showcasing not only technical proficiency but also a commitment
                to delivering tailored solutions that meet the unique needs of
                each client.
            </p>
            {projectsList &&
                projectsList.map((project, index) => {
                    return (
                        <div key={index}>
                            <h3>{project.name}</h3>
                            <p>{project.description}</p>
                            <p>{project.year}</p>
                            <Image
                                key={project.id}
                                src={project.imgUrl}
                                alt="Picture of Christian Martinez"
                                width={0}
                                height={0}
                                className="!w-2/5 h-full"
                                unoptimized
                            />
                        </div>
                    );
                })}
        </Container>
    );
};

export default ProjectsItems;
