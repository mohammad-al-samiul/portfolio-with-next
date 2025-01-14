"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: 1,
    title: "Fabrica Fetish",
    description:
      "Fabrica Fetish is a modern e-commerce platform for smooth shopping and efficient admin management",
    image: `1.fabrica-fetish.png?height=400&width=600`,
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
    image: "/2.Bikhub.png?height=400&width=600",
    tags: ["React", "Redux", "Typescript", "Node.js", "Express.js", "MongoDB"],
    github: "https://github.com/mohammad-al-samiul/bikehub-client",
    live: "https://bikehub-client.netlify.app/",
  },
  {
    id: 3,
    title: "Regal Dragon",
    description:
      "Regal Dragon's app provides secure ordering, admin tools, and analytics in a responsive design.",
    image: "/3.Regal-Dragon.png?height=400&width=600",
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
    image: "/4.Doctors-Portal.png?height=400&width=600",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB"],
    github: "https://github.com/mohammad-al-samiul/doctor-portal-client",
    live: "https://doctors-porta1.netlify.app",
  },
  {
    id: 5,
    title: "Genius Car",
    description:
      "Genius Car is a secure web app for car services with authentication, service ordering.",
    image: "/5.Genius-Car.png?height=400&width=600",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB"],
    github: "https://github.com/mohammad-al-samiul/genius-car-client",
    live: "https://genius-car-react.netlify.app",
  },
];

export default function Projects() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="min-h-screen bg-[#1A1A1A] py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-mono text-[#00FF88] mb-4">Projects</h2>
          <p className="text-gray-400 text-lg">A showcase of my best work</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-[#1E1E1E] rounded-lg overflow-hidden shadow-lg hover:shadow-[#00FF88]/20 transition-shadow"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative h-48 overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  initial={{ scale: 1 }}
                  animate={{ scale: hoveredId === project.id ? 1.1 : 1 }}
                  transition={{ duration: 0.3 }}
                />
                <AnimatePresence>
                  {hoveredId === project.id && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center"
                    >
                      <Link href={`/projects/${project.id}`} passHref>
                        <Button
                          variant="secondary"
                          className="bg-[#00FF88] text-black hover:bg-[#00FF88]/90"
                        >
                          View Details
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-[#141414] text-[#00FF88] px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#00FF88] transition-colors"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#00FF88] transition-colors"
                  >
                    <ExternalLink className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
