"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";
import React, { FormEvent, useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import { motion } from "framer-motion";

export default function Contact() {
  let toastId: any;
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toastId = toast.loading("Sending message...");
    if (form.current) {
      emailjs
        .sendForm("service_39sctkt", "template_va7hv04", form.current, {
          publicKey: "PmFGs7THjokSk6B8n",
        })
        .then(
          () => {
            console.log("SUCCESS!");
            toast.success("Message sent successfully.", {
              id: toastId,
              duration: 3000,
            });
          },
          (error: { text: string }) => {
            console.log("FAILED...", error.text);
            toast.error("Failed to send message. Please try again later.", {
              id: toastId,
              duration: 2000,
            });
          }
        );
    }
  };
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
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="bg-[#1E1E1E] p-4 sm:p-8 lg:p-12 rounded-lg w-full mx-auto">
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Form Section */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="order-2 lg:order-1"
        >
          <motion.h2
            variants={item}
            className="text-3xl sm:text-4xl font-mono text-[#00FF88] mb-3 sm:mb-4"
          >
            Let&apos;s work together
          </motion.h2>
          <motion.p
            variants={item}
            className="text-gray-400 mb-6 sm:mb-8 text-sm sm:text-base"
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            <br className="hidden sm:block" />
            Nesciunt sit illo esse commodi.
          </motion.p>

          <motion.form
            className="space-y-4 sm:space-y-6"
            ref={form}
            onSubmit={sendEmail}
            variants={container} // Define container animation
            initial="hidden"
            animate="show"
          >
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              variants={item}
            >
              <Input
                required
                placeholder="Firstname"
                name="firstName"
                className="bg-[#141414] border-0 h-12 placeholder:text-gray-500"
              />
              <Input
                placeholder="Lastname"
                name="lastName"
                className="bg-[#141414] border-0 h-12 placeholder:text-gray-500"
              />
            </motion.div>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              variants={item}
            >
              <Input
                required
                type="email"
                name="email"
                placeholder="Email address"
                className="bg-[#141414] border-0 h-12 placeholder:text-gray-500"
              />
              <Input
                type="tel"
                name="phone"
                placeholder="Phone number"
                className="bg-[#141414] border-0 h-12 placeholder:text-gray-500"
              />
            </motion.div>

            <motion.div variants={item}>
              <Textarea
                required
                name="message"
                placeholder="Type your message here."
                className="bg-[#141414] border-0 min-h-[120px] sm:min-h-[160px] placeholder:text-gray-500"
              />
            </motion.div>

            <motion.div variants={item}>
              <Button
                type="submit"
                className="bg-[#00FF88] text-black hover:bg-[#00FF88]/90 h-12 px-8 rounded-full w-full sm:w-auto"
              >
                Send message
              </Button>
            </motion.div>
          </motion.form>
        </motion.div>

        {/* Contact Info Section */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col justify-center space-y-8"
        >
          <motion.div variants={item} className="flex items-center gap-4">
            <div className="bg-[#141414] p-4 rounded-lg">
              <Phone className="h-6 w-6 text-[#00FF88]" />
            </div>
            <div>
              <h3 className="text-gray-400 mb-1">Phone</h3>
              <p className="font-mono">(+880) 1832 997080</p>
            </div>
          </motion.div>

          <motion.div variants={item} className="flex items-center gap-4">
            <div className="bg-[#141414] p-4 rounded-lg">
              <Mail className="h-6 w-6 text-[#00FF88]" />
            </div>
            <div>
              <h3 className="text-gray-400 mb-1">Email</h3>
              <p className="font-mono">alsamiul123@email.com</p>
            </div>
          </motion.div>

          <motion.div variants={item} className="flex items-center gap-4">
            <div className="bg-[#141414] p-4 rounded-lg">
              <MapPin className="h-6 w-6 text-[#00FF88]" />
            </div>
            <div>
              <h3 className="text-gray-400 mb-1">Address</h3>
              <p className="font-mono">Chittagong, Bangladesh</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
