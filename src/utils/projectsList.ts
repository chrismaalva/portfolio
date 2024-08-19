export type ProjectsListProps = {
    id: number;
    title: string;
    description: string;
    img: string;
    url: string;
};

export const projectsList: ProjectsListProps[] = [
    {
        id: 0,
        title: "OCapital",
        description:
            "During my tenure at OCapital from 2018 to 2021, I played a pivotal role in a transformative project involving the migration of the original website. Tasked with transitioning from HTML to Gatsby, my efforts resulted in significantly improved loading times, enhanced image optimization, and an overall boost in security measures.",

        img: "/static/slider/OCapital.png",
        url: "https://ocapital.mx/",
    },
    {
        id: 1,
        title: "Ciclara",
        description:
            "In 2023, I undertook the development of a comprehensive website for Ciclara, a company specializing in residual waters management. This project aimed to showcase their services and expertise in an informative and engaging manner.",

        img: "/static/slider/Ciclara.jpg",
        url: "https://ciclara.com/",
    },
    {
        id: 3,
        title: "Teyfel",
        description:
            "In 2022, I collaborated with a construction company titled Teyfel to create an online platform that effectively showcased their projects and services. The goal was to represent their brand identity and expertise in the construction industry.",

        img: "/static/slider/Teyfel.png",
        url: "https://teyfel.com.mx/",
    },
    {
        id: 4,
        title: "Nefrología",
        description:
            "As part of a class assignment back in 2018, I initially developed a project for Nefrología. Later, in 2020, I migrated it to Gatsby and React, demonstrating my commitment to keeping projects up-to-date with the latest technologies. This project serves as a testament to my skills in project evolution and adaptation.",

        img: "/static/slider/Nefrologia.png",
        url: "https://nefrologia.netlify.app/",
    },
    {
        id: 5,
        title: "Word template editor",
        description:
            "This is one personal project I have been working on recently. It's built with Next.js. It's purpose is to help my mother with her work, since she is a secretary who needs to manually edit word documents, by providing a template reader I facilitate her work exponentially.",
        img: "/static/slider/word-template-editor.png",
        url: "https://word-template-editor.vercel.app/",
    },
    {
        id: 6,
        title: "Anime playlist maker",
        description:
            "Finally another personal project I'm working on. It's objective is to create anime playlists by Season, by anime name or by year. The playlists will be created in either Apple Music, Youtube Music or Spotify, depends on user selection. This is stil a WIP.",
        img: "/static/slider/anime-playlist-maker.png",
        url: "https://anime-themes-playlist-maker.vercel.app/",
    },
];
