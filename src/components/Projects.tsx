import React from "react";
import Container from "./Container";
import Title from "./Title";
import ProjectsItems from "./ProjectsItems";

export default function Projects() {
    return (
        <Container id="projects">
            <Title title="Projects" />
            <ProjectsItems />
        </Container>
    );
}
