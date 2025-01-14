"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

type ProjectDetailProps = {
  project: {
    id: number;
    title: string;
    description: string;
    image: string;
    tags: string[];
    github: string;
    live: string;
    longDescription: string;
    features: string[];
  };
};

export default function ProjectDetail({ project }: ProjectDetailProps) {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#1A1A1A] py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Button
            variant="ghost"
            className="mb-8 text-[#00FF88]"
            onClick={() => router.back()}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Button>

          <h1 className="text-4xl font-mono text-[#00FF88] mb-4">
            {project.title}
          </h1>

          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover rounded-lg mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />

          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-sm bg-[#141414] text-[#00FF88] px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          <p className="text-gray-300 mb-8">{project.longDescription}</p>

          <h2 className="text-2xl font-semibold text-[#00FF88] mb-4">
            Key Features
          </h2>
          <ul className="list-disc list-inside text-gray-300 mb-8">
            {project.features.map((feature, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                {feature}
              </motion.li>
            ))}
          </ul>

          <div className="flex justify-center gap-4">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-[#1E1E1E] text-[#00FF88] px-6 py-3 rounded-full hover:bg-[#00FF88] hover:text-black transition-colors"
            >
              <Github className="mr-2 h-5 w-5" />
              View on GitHub
            </a>
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-[#00FF88] text-black px-6 py-3 rounded-full hover:bg-[#00FF88]/90 transition-colors"
            >
              <ExternalLink className="mr-2 h-5 w-5" />
              Live Demo
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
