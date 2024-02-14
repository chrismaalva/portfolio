"use client";
import React, { useState } from "react";
import Image from "next/image";
import { sliderItems, SliderProps } from "@/utils/sliderItems";
import Container from "./Container";

const Slider: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderItems.length);
    };

    const currentItem: SliderProps = sliderItems[currentIndex];

    return (
        <Container className="relative text-center md:text-start">
            <div className="flex flex-col pt-4 md:py-0 md:flex-row md:px-2 text-sm md:items-center md:h-[120px] 2xl:h-[102px] 2xl:px-0">
                <div className="px-8 md:px-0 md:w-4/5 pb-4 md:pb-0">
                    <h2 className="uppercase font-extrabold text-[16px] xl:text-xl">
                        {currentItem.name}
                    </h2>
                    <p className="text-gray-secondary tracking-wider xl:text-base">
                        {currentItem.description}
                    </p>
                </div>
                <div className="flex flex-col items-center justify-center md:w-[25%] md:px-4 md:py-2 h-full">
                    <h5 className="uppercase font-extrabold pt-2 md:pt-0 xl:text-xl">
                        Year
                    </h5>
                    <p className="text-blue-primary  md:condary pb-2 md:pb-0 xl:text-base">
                        {currentItem.year}
                    </p>
                </div>
                <div className="flex justify-center items-center md:w-1/10 md:py-0 py-2 h-full md:w-[15%] ">
                    <Image
                        className="cursor-pointer mx-auto"
                        src="/static/icons/right-arrow.svg"
                        height={40}
                        width={40}
                        alt="Right side arrow"
                        onClick={handleNextSlide}
                    />
                </div>
            </div>
            <div className="max-w-full relative overflow-hidden pt-[50%] mt-8">
                <Image
                    src={currentItem.imgUrl}
                    alt={currentItem.name}
                    layout="fill"
                    objectFit="cover"
                />
            </div>
            <p className="py-4">
                These projects represent a snapshot of my diverse portfolio,
                showcasing not only technical proficiency but also a commitment
                to delivering tailored solutions that meet the unique needs of
                each client.
            </p>
        </Container>
    );
};

export default Slider;
