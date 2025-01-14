"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Download, Facebook } from "lucide-react";

import Image from "next/image";
import { AnimatedCircle } from "./Animated-Circle";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  const socialIcons = [
    { icon: Github, href: "https://github.com/mohammad-al-samiul" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/al-samiul" },
    { icon: Facebook, href: "https://www.facebook.com/alsamiul1996" },
  ];

  const stats = [
    { number: "1.5", label: "Years of\nexperience" },
    { number: "20", label: "Projects\ncompleted" },
    { number: "8", label: "Technologies\nmastered" },
    { number: "575", label: "Code\ncommits" },
  ];

  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-between gap-12 px-4 md:px-6 py-12">
        <motion.div
          className="flex-1 space-y-6 "
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <TypeAnimation
            sequence={[
              "Software Engineer",
              1000,
              "Frontend Engineer",
              2000,
              "Programmer",
              2000,
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            style={{ fontSize: "1em", display: "inline-block" }}
          />
          <h1 className="md:text-left text-6xl md:text-6xl font-mono font-bold space-y-2">
            <span className="block">Hello! I&apos;m </span>
            <span className="block text-emerald-400">Al Samiul</span>
          </h1>
          <p className="text-gray-400 max-w-xl">
            Software Engineer skilled in MERN and experienced in building
            scalable web applications, user experience, and clean architecture.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://drive.google.com/file/d/1V_HrV2jtt46y7Hq8Mz-i4bv_kW8jOgcL/view?usp=sharing"
              target="_blank"
            >
              <Button
                variant="outline"
                className="rounded-full border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-black"
              >
                <Download className="mr-2 h-4 w-4" />
                My Resume
              </Button>
            </a>
            <div className="flex gap-4">
              {socialIcons.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    className="p-2 rounded-full border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-black transition-colors"
                    target="_blank"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="h-5 w-5" />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </motion.div>

        <motion.div
          className="relative w-72 h-72 md:w-96 md:h-96"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <AnimatedCircle />
          <Image
            src="/samiul.jpg"
            alt="samiul"
            fill
            className="rounded-full object-cover -z-10"
          />
        </motion.div>
      </div>
      <div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="grid grid-cols-4 gap-8 lg:px-8 px-2"
        >
          {stats.map((stat, index) => (
            <div key={index}>
              <div className="lg:flex gap-4">
                <span className="text-4xl font-bold block mb-1">
                  {stat.number}
                </span>
                <span className="text-sm text-gray-400 whitespace-pre-line">
                  {stat.label}
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </>
  );
}
