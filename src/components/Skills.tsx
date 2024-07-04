import React from "react";

import Container from "./Container";
import Title from "./Title";
import ListSkills from "./ListSkills";

import { HardSkillsArray, SoftSkillsArray } from "@/utils/skills";

export default function Skills() {
    return (
        <Container id="skills">
            <div className="flex">
                <div className="w-1/2">
                    <Title title="Tech stack" />
                    <ListSkills HardSkillsArray={HardSkillsArray} />
                </div>
                <div className="w-1/2">
                    <Title title="Soft skills" />
                    <ListSkills SoftSkillsArray={SoftSkillsArray} />
                </div>
            </div>
        </Container>
    );
}
