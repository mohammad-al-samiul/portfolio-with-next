"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, Code, Calendar, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const educationData = [
  {
    title: "BSc in Computer Science",
    institution: "Premier University",
    duration: "October 2020 - February 2025",
    icon: GraduationCap,
    category: "Degree",
    description:
      "Comprehensive study of computer science fundamentals, algorithms, and software engineering principles.",
  },
  {
    title: "Web Development Level-2",
    institution: "Programming Hero",
    duration: "July 2024 - December 2024",
    icon: Code,
    category: "Certificate",
    description:
      "Advanced web development techniques, including Nextjs, Typescript, Redux, NodeJs, ExpressJs, MongoDb and API integration.",
  },
  {
    title: "Web Development Level-1",
    institution: "Programming Hero",
    duration: "July 2023 - December 2023",
    icon: Code,
    category: "Certificate",
    description:
      "Fundamentals of web development, covering HTML, CSS, JavaScript, and basic React concepts.",
  },
];

export default function Education() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section className="min-h-screen bg-[#1A1A1A] pt-10 lg:py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-mono text-[#00FF88] mb-4">Education</h2>
          <p className="text-gray-400 text-lg">
            My journey of learning and growth
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#00FF88] to-transparent" />

          {educationData.map((item, index) => (
            <motion.div
              key={index}
              className={`relative flex flex-col md:flex-row gap-8 mb-16 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 w-8 h-8 bg-[#1E1E1E] rounded-full border-4 border-[#00FF88] transform -translate-x-1/2 mt-4" />

              {/* Content */}
              <div className="md:w-1/2 ml-8 md:ml-0 md:px-8">
                <motion.div
                  className="bg-[#1E1E1E] rounded-lg p-6 hover:bg-[#1E1E1E]/80 transition-colors shadow-lg hover:shadow-[#00FF88]/20"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 flex items-center justify-center bg-[#141414] rounded-full">
                      <item.icon className="w-6 h-6 text-[#00FF88]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{item.title}</h3>
                      <p className="text-gray-400">{item.institution}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[#00FF88] mb-4">
                    <Calendar className="w-4 h-4" />
                    <span>{item.duration}</span>
                  </div>
                  <span className="inline-block mb-4 text-sm px-3 py-1 rounded-full bg-[#141414] text-[#00FF88]">
                    {item.category}
                  </span>
                  <AnimatePresence>
                    {expandedIndex === index && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="text-gray-400 mt-4"
                      >
                        {item.description}
                      </motion.p>
                    )}
                  </AnimatePresence>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="mt-4 text-[#00FF88]"
                    onClick={() =>
                      setExpandedIndex(expandedIndex === index ? null : index)
                    }
                  >
                    {expandedIndex === index ? "Less" : "More"}
                    <ChevronDown
                      className={`ml-2 h-4 w-4 transition-transform ${
                        expandedIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
