export type ProjectsListProps = {
    id: number;
    name: string;
    description: string;
    year: string;
    imgUrl: string;
};

export const projectsList: ProjectsListProps[] = [
    {
        id: 0,
        name: "OCapital",
        description:
            "During my tenure at OCapital from 2018 to 2020, I played a pivotal role in a transformative project involving the migration of the original website. Tasked with transitioning from HTML to Gatsby, my efforts resulted in significantly improved loading times, enhanced image optimization, and an overall boost in security measures. This transition not only modernized the platform but also laid the groundwork for more efficient and scalable operations.            ",
        year: "2018 - 2021",
        imgUrl: "/static/slider/Ocapital.png",
    },
    {
        id: 1,
        name: "Ciclara",
        description:
            "In 2023, I undertook the development of a comprehensive website for Ciclara, a company specializing in residual waters management. This project aimed to showcase their services and expertise in an informative and engaging manner.            ",
        year: "2023",
        imgUrl: "/static/slider/Ciclara.jpg",
    },
    {
        id: 2,
        name: "Ciclara - Services",
        description:
            "Building on the initial Ciclara project, I extended the web presence to highlight specific services offered by the company. The focus was on creating a user-friendly interface that seamlessly navigated users through the diverse range of services provided by Ciclara.            ",
        year: "2023",
        imgUrl: "/static/slider/Ciclara-services.png",
    },
    {
        id: 3,
        name: "Ciclara - Landing Page",
        description:
            "In the same vein, I tailored a landing page for Ciclara to enhance their online presence and captivate the attention of potential clients. This project involved a strategic blend of design elements and concise content to maximize impact.            ",
        year: "2023",
        imgUrl: "/static/slider/Ciclara-lp.png",
    },
    {
        id: 4,
        name: "Teyfel",
        description:
            "In 2022, I collaborated with a construction company named Teyfel to create an online platform that effectively showcased their projects and services. The goal was to represent their brand identity and expertise in the construction industry.        ",
        year: "2022",
        imgUrl: "/static/slider/Teyfel.png",
    },
    {
        id: 5,
        name: "Nefrología",
        description:
            "As part of a class assignment back in 2018, I initially developed a project for Nefrología. Later, in 2020, I migrated it to Gatsby and React, demonstrating my commitment to keeping projects up-to-date with the latest technologies. This project serves as a testament to my skills in project evolution and adaptation.            ",
        year: "2020",
        imgUrl: "/static/slider/Nefrologia.png",
    },
];
