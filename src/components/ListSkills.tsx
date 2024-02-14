import React from "react";

import Image from "next/image";

import classNames from "classnames";
import { SkillsProps } from "@/utils/skills";

type ListSkillsProps = {
    HardSkillsArray?: SkillsProps[];
    SoftSkillsArray?: SkillsProps[];
};

export default function ListSkills({
    HardSkillsArray,
    SoftSkillsArray,
}: ListSkillsProps) {
    return (
        <div className="grid grid-cols-3 gap-4">
            {HardSkillsArray &&
                HardSkillsArray.map((skills) => {
                    const iconClasses = classNames(
                        skills.description === "Next.js" ? "dark:invert" : "",
                        ""
                    );
                    return (
                        <>
                            <div className="flex items-center">
                                <figure className="w-1/3">
                                    <Image
                                        key={skills.id}
                                        src={skills.src}
                                        alt={skills.alt}
                                        width={40}
                                        height={40}
                                        className={iconClasses}
                                    />
                                </figure>
                                <span>{skills.description}</span>
                            </div>
                        </>
                    );
                })}
            {SoftSkillsArray &&
                SoftSkillsArray.map((skills) => {
                    return (
                        <>
                            <div className="flex items-center">
                                <figure className="w-1/3">
                                    <Image
                                        key={skills.id}
                                        src={skills.src}
                                        alt={skills.alt}
                                        width={40}
                                        height={40}
                                    />
                                </figure>
                                <span>{skills.description}</span>
                            </div>
                        </>
                    );
                })}
        </div>
    );
}
