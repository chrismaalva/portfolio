import { FunctionComponent } from "react";
import SectionComponent from "./SectionComponent";

const About: FunctionComponent = () => (
    <SectionComponent id="about">
        <div className="container space-y-8 px-4 md:px-6">
            <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    About Me
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                        <p className="text-gray-600 dark:text-gray-400 md:text-xl">
                            I{"'"}m a Front-End developer with a passion for
                            creating innovative solutions. I have experience in
                            a variety of technologies, including React, Next.js,
                            Node.js, and more.
                        </p>
                        <p className="text-gray-600 dark:text-gray-400 md:text-xl">
                            My journey in web development started at a young
                            age, and I{"'"}ve been continuously learning and
                            growing ever since. I love working on challenging
                            projects and finding creative ways to solve
                            problems.
                        </p>
                    </div>
                    <div className="space-y-4">
                        <p className="text-gray-600 dark:text-gray-400 md:text-xl">
                            When I{"'"}m not coding, you can find me exploring
                            the great outdoors, experimenting with new recipes
                            in the kitchen, or diving into a good book. I{"'"}m
                            always eager to take on new adventures and learn new
                            things.
                        </p>
                        <p className="text-gray-600 dark:text-gray-400 md:text-xl">
                            If you{"'"}d like to connect or learn more about my
                            work, feel free to reach out or check out my latest
                            projects below.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </SectionComponent>
);

export default About;
