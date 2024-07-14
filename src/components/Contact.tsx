import React from "react";

import GithubIcon from "@/components/icons/GitHubIcon";
import LinkedinIcon from "@/components/icons/LinkedInIcon";
import MailIcon from "@/components/icons/MailIcon";
import MapPinIcon from "@/components/icons/MapPinIcon";
import PhoneIcon from "@/components/icons/PhoneIcon";
import Link from "next/link";
import SectionComponent from "./SectionComponent";

export default function Contact() {
    return (
        <SectionComponent id="contact">
            <div className="container space-y-8 px-4 md:px-6">
                <div className="space-y-2">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                        Contact Me
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-6">
                            <p className="text-gray-600 dark:text-gray-400 md:text-xl">
                                Feel free to reach out to me if you have any
                                questions or would like to collaborate on a
                                project. You can find me on the following
                                platforms:
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                                <div className="flex items-center gap-3">
                                    <GithubIcon className="size-6 text-gray-600 dark:text-gray-400" />
                                    <div>
                                        <p className="font-medium">GitHub</p>
                                        <a
                                            href="https://github.com/chrismaalva"
                                            className="text-gray-600 dark:text-gray-400 hover:underline"
                                            target="_blank "
                                            rel="noreferrer"
                                        >
                                            @chrismaalva
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <LinkedinIcon className="size-6 text-gray-600 dark:text-gray-400" />
                                    <div>
                                        <p className="font-medium">LinkedIn</p>
                                        <a
                                            href="https://www.linkedin.com/in/christian-mart%C3%ADnez-alvarez-8b3794181/"
                                            className="text-gray-600 dark:text-gray-400 hover:underline"
                                            target="_blank "
                                            rel="noreferrer"
                                        >
                                            in/christian-martínez-alvarez-8b3794181/
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <MailIcon className="size-6 text-gray-600 dark:text-gray-400" />
                                    <div>
                                        <p className="font-medium">Email</p>
                                        <a
                                            href="mailto:chrismaalva@gmail.com"
                                            className="text-gray-600 dark:text-gray-400 hover:underline"
                                            target="_blank "
                                            rel="noreferrer"
                                        >
                                            chrismaalva@gmail.com
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <MapPinIcon className="size-6 text-gray-600 dark:text-gray-400" />
                                    <div>
                                        <p className="font-medium">Location</p>
                                        <p className="text-gray-600 dark:text-white">
                                            San Luis Potosí, México.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <PhoneIcon className="size-6 text-gray-600 dark:text-gray-400" />
                                    <div>
                                        <p className="font-medium">Phone</p>
                                        <a
                                            href="https://wa.me/528141493828"
                                            target="_blank "
                                            rel="noreferrer"
                                            className="text-gray-600 dark:text-gray-400 hover:underline"
                                        >
                                            (+52) 81 4149-3828
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </SectionComponent>
    );
}
