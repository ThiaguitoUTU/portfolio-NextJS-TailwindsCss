import React from "react";

import { BookText, CodeSquare, HomeIcon, UserRound, Linkedin, Instagram, Mail, Github, Crop, Pencil, Computer, Book, Rocket, Speech } from "lucide-react";

import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiCss3,
  SiTailwindcss,
  SiVite,
  SiGit,
  SiFigma,
} from "react-icons/si";


export const socialNetworks = [
    {
        id: 1,
        logo: <Github size={30} strokeWidth={1} />,
        src: "https://github.com/ThiaguitoUTU",
    },
    {
        id: 2,
        logo: <Linkedin size={30} strokeWidth={1} />,
        src: "https://www.linkedin.com/in/thiaguitoutu/",
    },
    {
        id: 3,
        logo: <Instagram size={30} strokeWidth={1} />,
        src: "https://www.instagram.com/sa_pulgarin/?hl=es",
    },
    {
        id: 4,
        logo: <Mail size={30} strokeWidth={1} />,
        src: "#!",
    },
];

export const techStack = [
  { id: 1, logo: <SiReact size={24} color="#61DAFB" />, src: null },
  { id: 2, logo: <SiTypescript size={24} color="#3178C6" />, src: null },
  { id: 3, logo: <SiJavascript size={24} color="#F7DF1E" />, src: null },
  { id: 4, logo: <SiCss3 size={24} color="#264de4" />, src: null },
  { id: 5, logo: <SiTailwindcss size={24} color="#38B2AC" />, src: null },
  { id: 7, logo: <SiGit size={24} color="#F1502F" />, src: null },
  { id: 8, logo: <SiFigma size={24} color="#A259FF" />, src: "https://www.figma.com/" },
];


export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
        link: "/",
    },
    {
        id: 2,
        title: "User",
        icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
        link: "/about-me",
    },
    {
        id: 3,
        title: "Book",
        icon: <BookText size={25} color="#fff" strokeWidth={1} />,
        link: "/services",
    },
    {
        id: 4,
        title: "Target",
        icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
        link: "/portfolio",
    },
];

export const dataAboutPage = [
    {
        id: 1,
        title: "IT Support – Help Desk",
        subtitle: "Organización Equitel",
        description: "Como Aprendiz de Soporte IT en la Organización Equitel, brindo asistencia técnica a los usuarios mediante la plataforma GLPI, gestionando tickets relacionados con fallas en software, hardware y red. Realizo seguimiento a incidentes reportados, documentando detalladamente cada caso con evidencias como capturas de pantalla. Apoyo en la instalación y actualización de software, así como en el respaldo y organización de información. También colaboro en la entrega y control de equipos tecnológicos, asegurando el registro adecuado de recursos asignados.",
        date: "Feb 2025 ",
    },
    
]

export const dataCounter = [
    {
        id: 0,
        endCounter: 6,
        text: "Meses de experiencia",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 1,
        endCounter: 80,
        text: "Clientes satisfechos",
        lineRight: true,
        lineRightMobile: false,
    },
    
];

export const serviceData = [
    {
        icon: <Crop />,
        title: "Branding",
        description: "Desarrollo de una identidad de marca sólida y coherente, incluyendo diseño de logotipo, colores y elementos visuales",
    },
    {
        icon: <Pencil />,
        title: "Diseño web",
        description: "Diseño creativo y profesional de interfaces web intuitivas y atractivas, centradas en la experiencia del usuario",
    },
    {
        icon: <Computer />,
        title: "Desarrollo web",
        description: "Diseño y desarrollo de sitios web a medida, adaptados a tus necesidades",
    },
    {
        icon: <Book />,
        title: "Copywriting",
        description: "Creación de contenido persuasivo y atractivo que capta la atención de tu audiencia",
    },
    {
        icon: <Rocket />,
        title: "SEO",
        description: "Optimización de tu presencia en línea mediante estrategias de SEO avanzadas, ",
    },
];

export const dataPortfolio = [
    {
        id: 1,
        title: "Web Pro",
        image: "/image-1.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 2,
        title: "Desarrollo Web Ágil",
        image: "/image-2.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 3,
        title: "Estrategias Web",
        image: "/image-3.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 4,
        title: "Ideas Creativas",
        image: "/image-4.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 5,
        title: "Webs Impactantes",
        image: "/image-5.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 6,
        title: "Web Dinámica",
        image: "/image-6.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 7,
        title: "Dark Web ",
        image: "/image-7.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 8,
        title: "E-commerce web",
        image: "/image-8.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    }
];

