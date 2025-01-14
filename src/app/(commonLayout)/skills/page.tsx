"use client";

import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaCogs, FaGit, FaCode } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiRedux,
  SiExpress,
  SiMongodb,
  SiCplusplus,
  SiPostman,
  SiFigma,
  SiDocker,
} from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact />, category: "Frontend" },
  { name: "Next.js", icon: <SiNextdotjs />, category: "Frontend" },
  { name: "TypeScript", icon: <SiTypescript />, category: "Language" },
  { name: "Redux", icon: <SiRedux />, category: "State Management" },
  {
    name: "TanStack Query",
    icon: <FaReact />,
    category: "State Management",
  },
  { name: "Node.js", icon: <FaNodeJs />, category: "Backend" },
  { name: "Express.js", icon: <SiExpress />, category: "Backend" },
  { name: "MongoDB", icon: <SiMongodb />, category: "Database" },
  { name: "C++", icon: <SiCplusplus />, category: "Language" },
  {
    name: "Data Structures & Algorithms",
    icon: <FaCogs />,
    category: "Computer Science",
  },
];

const tools = [
  { name: "Git", icon: <FaGit /> },
  { name: "Postman", icon: <SiPostman /> },
  { name: "Visual Studio", icon: <FaCode /> },

  { name: "Docker", icon: <SiDocker /> },
  { name: "Figma", icon: <SiFigma /> },
];

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section className="min-h-screen bg-[#1A1A1A] py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-mono text-[#00FF88] mb-4">
            Skills & Tools
          </h2>
          <p className="text-gray-400 text-lg">
            My technical expertise and preferred tools
          </p>
        </motion.div>

        {/* Technical Skills Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-semibold text-[#00FF88] mb-8">
            Technical Skills
          </h3>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            {skills.map((skill) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                className="bg-[#1E1E1E] p-6 rounded-lg shadow-lg hover:shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105"
              >
                <div className="text-center text-3xl text-[#00FF88]">
                  {skill.icon}
                </div>
                <h4 className="text-xl font-semibold mt-4 mb-2 text-center">
                  {skill.name}
                </h4>
                <p className="text-gray-400 text-sm text-center">
                  {skill.category}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Tools Section */}
        <div>
          <h3 className="text-3xl font-semibold text-[#00FF88] mb-8">Tools</h3>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            {tools.map((tool) => (
              <motion.div
                key={tool.name}
                variants={itemVariants}
                className="bg-[#1E1E1E] p-6 rounded-lg shadow-lg hover:shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105"
              >
                <div className="text-center text-3xl text-[#00FF88]">
                  {tool.icon}
                </div>
                <p className="text-center mt-4 text-lg font-semibold">
                  {tool.name}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
