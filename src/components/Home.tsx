import React from "react";

import Container from "./Container";
import Title from "./Title";
import Button from "./Button";
import BgImage from "./BgImage";

export default function Home() {
    return (
        <Container className="h-full flex">
            <div className="w-1/2">
                <Title
                    titleAsNode={
                        <span className="text-6xl">
                            Hello!
                            <br />I{"'"}m{" "}
                            <span className="font-bold bg-gradient-to-r from-orange-500 to-orange-300 text-transparent bg-clip-text">
                                {" "}
                                Christian Martinez
                            </span>
                        </span>
                    }
                />
                <p className="font-medium text-2xl">
                    but you can call me Chris.
                </p>
                <div className=" mt-4 flex items-center gap-8">
                    <hr className="border-orange-700 h-2 w-1/2" />
                    <h3 className="text-3xl color-orange-500">
                        FrontEnd Developer
                    </h3>
                </div>
                <p className="font-medium text-2xl py-8">
                    Welcome to my corner of the web!
                </p>
                <p>
                    I hold a degree in Engineering in Information Technologies,
                    reflecting my dedication to both formal education and
                    real-world experience. An avid learner, I find excitement in
                    acquiring new skills.
                </p>
                <p className="py-4">
                    Beyond tech, you{"'"}ll catch me engaging in competitive
                    gaming, enjoying anime for both entertainment and learning,
                    or playing the piano.
                </p>
                <div className="w-1/2 py-4 flex gap-8">
                    <Button
                        text="Download CV"
                        icon="static/icons/document-icon.svg"
                        iconDescription="Document icon"
                        className="justify-center my-0"
                    />
                    <Button
                        text="Contact me"
                        className="justify-center my-0 px-8"
                    />
                </div>
            </div>
            <div className="w-1/2 flex justify-end items-start">
                <BgImage
                    src="/static/images/avatar.jpg"
                    alt="Picture of Christian Martinez"
                    className="w-4/5 h-full"
                    unoptimized
                />
            </div>
        </Container>
    );
}
