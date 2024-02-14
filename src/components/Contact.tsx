import React from "react";

import Image from "next/image";

import Container from "./Container";
import Title from "./Title";

import { ContactInfoArray } from "@/utils/contactInfo";

export default function Contact() {
    return (
        <Container id="contact">
            <Title title="Contact me" />
            <div className="w-full">
                {ContactInfoArray &&
                    ContactInfoArray.map((skills) => {
                        return (
                            <div className="flex items-center" key={skills.id}>
                                <figure className="w-[5%]">
                                    <Image
                                        key={skills.id}
                                        src={skills.src}
                                        alt={skills.alt}
                                        width={40}
                                        height={40}
                                    />
                                </figure>
                                <a
                                    href={
                                        skills.alt != "Gmail"
                                            ? skills.description
                                            : `mailto:chris.maalva@gmail.com?Subject=New%20Job%20Offer`
                                    }
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    {skills.alt}
                                </a>
                            </div>
                        );
                    })}{" "}
            </div>
        </Container>
    );
}
