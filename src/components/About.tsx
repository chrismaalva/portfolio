import React from "react";

import Title from "./Title";
import Container from "./Container";
import BgImage from "./BgImage";

export default function About() {
    return (
        <Container id="about">
            <Title title="About" className="text-5xl mb-4" />
            <div className="flex">
                <div className="flex flex-col w-1/2">
                    <Title title="About Me" />
                    <p className="font-medium py-4">
                        As a seasoned web developer, I thrive on turning ideas
                        into digital experiences. With a degree in Engineering
                        in Information Technologies, my journey began as a
                        trainee during my second year of college, immersing
                        myself in HTML5, CSS, and JavaScript. Fast forward three
                        years, and I had evolved into a valuable asset at
                        OCapital, where I led projects involving a migration to
                        Gatsby, the creation of a new dashboard using React, and
                        intricate API integrations.
                    </p>
                    <p className="font-medium py-4">
                        My freelancing ventures have been equally exciting. I
                        {"'"}ve not just led projects, but taken charge of
                        architecture, responsiveness, and seamless API
                        integrations. I believe in delivering not just code but
                        optimal user experiences that leave a lasting impact.
                    </p>
                </div>

                <figure className="w-1/2 flex items-center justify-center">
                    <BgImage
                        src="/static/images/about-me.jpg"
                        alt="About me image"
                        className="!w-2/5"
                        unoptimized
                    />
                </figure>
            </div>
        </Container>
    );
}
