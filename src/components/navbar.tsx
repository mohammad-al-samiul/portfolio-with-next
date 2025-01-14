"use client";
import React from "react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

import Link from "next/link";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Menu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { DialogTitle } from "@radix-ui/react-dialog";

export default function Navbar() {
  const pathName = usePathname();

  const menuItems = [
    {
      label: "Home",
      path: "/",
    },
    {
      label: "Education",
      path: "/education",
    },
    {
      label: "Projects",
      path: "/projects",
    },
    {
      label: "Skill",
      path: "/skill",
    },

    // {
    //   label: "Blog",
    //   path: "/blog",
    // },
    {
      label: "Contact",
      path: "/contact",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { y: -20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  };

  return (
    <motion.nav
      className="flex justify-between items-center py-6 px-4 md:px-6"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Link href="/" className="text-2xl font-mono font-bold">
        Samiul<span className="text-emerald-400">.</span>
      </Link>

      {/* Desktop Menu */}
      <motion.div
        className="hidden md:flex items-center gap-8"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {menuItems.map((item, index) => (
          <motion.div key={index}>
            <Link
              href={`${item.path}`}
              className={`hover:text-emerald-400 transition-colors 
                ${
                  pathName === item.path
                    ? "text-emerald-400 font-bold pb-1 border-b-4 border-emerald-400 "
                    : "text-gray-300"
                }`}
            >
              {item.label}
            </Link>
          </motion.div>
        ))}
        <motion.div variants={item}>
          <Button className="bg-emerald-400 hover:bg-emerald-500 text-black rounded-full px-6">
            Hire me
          </Button>
        </motion.div>
      </motion.div>

      {/* Mobile Menu */}
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-300 hover:text-gray-800 hover:bg-emerald-400"
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-[300px] bg-gray-900 border-gray-800"
          >
            <VisuallyHidden>
              <DialogTitle>Navigation Menu</DialogTitle>
            </VisuallyHidden>
            <nav className="flex flex-col gap-4 mt-8">
              <AnimatePresence>
                {menuItems.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={`${item.path}`}
                      className={`block py-2 px-4 rounded-lg hover:bg-gray-800 transition-colors ${
                        pathName === item.path
                          ? "text-emerald-400"
                          : "text-gray-300"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: menuItems.length * 0.1 }}
                  className="px-4 pt-4"
                >
                  <Button className="w-full bg-emerald-400 hover:bg-emerald-500 text-black rounded-full">
                    Hire me
                  </Button>
                </motion.div>
              </AnimatePresence>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </motion.nav>
  );
}
