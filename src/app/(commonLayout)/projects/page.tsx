"use client";

import ProjectCard from "@/components/projectCard";

const projects = [
  {
    id: 1,
    title: "Fabrica Fetish",
    description:
      "Fabrica Fetish is a modern e-commerce platform for smooth shopping and efficient admin management",
    image: `/1.fabrica-fetish.png`,
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "MongoDB",
      "Express.js",
    ],
    github: "https://github.com/mohammad-al-samiul/fabrica-fetish-client",
    live: "https://fabrica-fetish-client.vercel.app",
  },
  {
    id: 2,
    title: "Bikehub",
    description:
      "The Bikehub is a responsive app for hassle-free bike rentals, ensuring efficiency and security.",
    image: "/2.Bikhub.png",
    tags: ["React", "Redux", "Typescript", "Node.js", "Express.js", "MongoDB"],
    github: "https://github.com/mohammad-al-samiul/bikehub-client",
    live: "https://bikehub-client.netlify.app/",
  },
  {
    id: 3,
    title: "Regal Dragon",
    description:
      "Regal Dragon's app provides secure ordering, admin tools, and analytics in a responsive design.",
    image: "/3.Regal-Dragon.png",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB"],
    github:
      "https://github.com/mohammad-al-samiul/Regal-Dragon-Restaurant-Client",
    live: "https://regal-dragon-restaurant.netlify.app",
  },
  {
    id: 4,
    title: "Doctor's Portal",
    description:
      "Doctor's Portal is for appointment booking, management, and real-time tracking.",
    image: "/4.Doctors-Portal.png",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB"],
    github: "https://github.com/mohammad-al-samiul/doctor-portal-client",
    live: "https://doctors-porta1.netlify.app",
  },
  {
    id: 5,
    title: "Genius Car",
    description:
      "Genius Car is a secure web app for car services with authentication, service ordering.",
    image: "/5.Genius-Car.png",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB"],
    github: "https://github.com/mohammad-al-samiul/genius-car-client",
    live: "https://genius-car-react.netlify.app",
  },
];

export default function Projects() {
  return <ProjectCard projects={projects} />;
}
