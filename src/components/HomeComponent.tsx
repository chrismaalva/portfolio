import React from "react";

import Container from "./Container";
import Title from "./Title";
import BgImage from "./BgImage";
import Counter from "./Counter";
import Contact from "./Contact";

export default function HomeComponent() {
    return (
        <Container className="flex flex-col justify-center items-center">
            <Title
                titleAsNode={
                    <div className="flex flex-col items-start justify-center w-full mb-8">
                        <span className="text-6xl">
                            <span className="font-bold bg-gradient-to-r from-orange-500 to-orange-300 text-transparent bg-clip-text">
                                {" "}
                                Christian Martinez
                            </span>
                        </span>
                    </div>
                }
            />
            <div className="w-1/2 text-xl font-light text-center">
                <p>
                    Hi, I{"'"}m Christian Martinez! I{"'"}m a passionate México
                    based Front-End web developer with a keen eye for design. I
                    specialize in creating user-friendly interfaces using modern
                    technologies.
                </p>
                <p className="mt-4">
                    I posses a diverse set of skills, ranging from HTML5, CSS3
                    and JavaScript, all the way up to modern
                    frameworks/libraries like React, Next.js or Tailwind
                </p>
            </div>
            <Counter
                limit={5}
                description="years of experience in web development"
                className="mt-4"
            />
            <Counter limit={10} description="successfully completed projects" />
            <div className="w-1/2 flex justify-center items-center flex-col gap-4 my-4">
                <BgImage
                    src="/static/images/avatar.jpg"
                    alt="Picture of Christian Martinez"
                    className="!w-1/4 rounded-full"
                    unoptimized
                />
            </div>
            <Contact />
        </Container>
    );
}
