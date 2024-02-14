import React from "react";

import Container from "./Container";
import Title from "./Title";
import ListSkills from "./ListSkills";

import { HardSkillsArray, SoftSkillsArray } from "@/utils/skills";

export default function Skills() {
    return (
        <Container id="skills">
            <Title title="Skills" className="text-5xl" />
            <p className="py-8">
                I bring a diverse skill set to the table, honed over five years
                as a web developer. Proficient in frontend technologies, I excel
                in crafting responsive and visually appealing user interfaces
                using HTML, CSS, and JavaScript. My expertise extends to
                frameworks such as React and Next.js, where I{"'"}ve led
                projects from conception to execution. I{"'"}ve mastered the art
                of seamless API integrations, leveraging tools like Node.js to
                ensure dynamic and efficient interactions. With a keen eye for
                detail, I specialize in architecting robust and scalable
                solutions that prioritize optimal user experiences. My
                proficiency in Git reflects my commitment to collaborative
                development, ensuring streamlined workflows. From migrating
                websites to enhancing dashboards, my track record demonstrates
                not just technical prowess, but a holistic approach to web
                development. Whether it
                {"'"}s building from the ground up or optimizing existing
                structures, I thrive in creating digital solutions that leave a
                lasting impact.
            </p>
            <div className="flex">
                <div className="w-1/2">
                    <Title title="Hard skills" />
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
