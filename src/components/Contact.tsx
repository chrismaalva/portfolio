import React from "react";

import Image from "next/image";

import { ContactInfoArray } from "@/utils/contactInfo";

export default function Contact() {
    return (
        <div className="w-1/2 flex items-center justify-between mt-4">
            {ContactInfoArray &&
                ContactInfoArray.map((skills, index) => {
                    return (
                        <div key={skills.id} className="flex items-center">
                            <a
                                href={
                                    skills.alt != "Gmail"
                                        ? skills.description
                                        : `mailto:chris.maalva@gmail.com?Subject=New%20Job%20Offer`
                                }
                                target="_blank"
                                rel="noreferrer"
                                className="flex gap-4 items-center justify-center"
                            >
                                <Image
                                    key={index}
                                    src={skills.src}
                                    alt={skills.alt}
                                    height={30}
                                    width={30}
                                />
                                <span>{skills.alt}</span>
                            </a>
                        </div>
                    );
                })}{" "}
        </div>
    );
}
