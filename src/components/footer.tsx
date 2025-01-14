"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Github, Linkedin, Facebook } from "lucide-react";

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/mohammad-al-samiul",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/al-samiul",
  },
  {
    name: "Facebook",
    icon: Facebook,
    url: "https://www.facebook.com/alsamiul1996",
  },
];

const quickLinks = [
  { name: "Home", url: "/" },
  { name: "Education", url: "/education" },
  { name: "Projects", url: "/projects" },
  { name: "Skills", url: "/skills" },
  { name: "Contact", url: "/contact" },
];

export default function Footer() {
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
    <footer className="bg-[#1A1A1A] text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {/* About Section */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-2xl font-semibold text-[#00FF88]">About Me</h3>
            <p className="text-gray-400">
              I&apos;m a developer passionate about creating beautiful,
              functional web apps with modern technologies and clean, intuitive
              design.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-2xl font-semibold text-[#00FF88]">
              Quick Links
            </h3>
            <ul className="flex space-x-6">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.url}
                    className="text-gray-400 hover:text-[#00FF88] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="space-y-4 lg:mx-auto">
            <h3 className="text-2xl font-semibold text-[#00FF88]">Connect</h3>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#00FF88] transition-colors"
                >
                  <link.icon className="w-6 h-6" />
                  <span className="sr-only">{link.name}</span>
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          variants={itemVariants}
          className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400"
        >
          <p>
            &copy; {new Date().getFullYear()} Al Samiul. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
