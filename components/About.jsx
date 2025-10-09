"use client";
import Image from "next/image";
import Section from "./Section";
import { motion } from "framer-motion";

export default function About() {
  return (
    <Section
      id="about"
      className="relative bg-gradient-to-b from-neutral-950 to-neutral-900 overflow-hidden"
    >
      {/* Decorative Blurs */}
      <div className="absolute top-0 left-[-10%] w-[400px] h-[400px] bg-blue-600/20 blur-[180px] rounded-full" />
      <div className="absolute bottom-0 right-[-10%] w-[400px] h-[400px] bg-purple-600/20 blur-[180px] rounded-full" />

      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-6 py-16">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-500 shadow-[0_0_40px_-10px_rgba(59,130,246,0.5)] hover:scale-105 transition-transform duration-500">
            <Image
              src="/profile.jpg" // your uploaded image
              alt="Yash Garg"
              fill
              className="object-cover rounded-full"
            />
          </div>
        </motion.div>

        {/* About Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left md:text-left"
        >
          <h2 className="text-4xl font-bold text-white mb-6 relative inline-block">
            About Me
            <span className="absolute -bottom-2 left-0 w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
          </h2>

          <p className="text-lg text-neutral-300 leading-relaxed">
            I’m a postgraduate student in{" "}
            <span className="text-white font-medium">
              Computer Science & Engineering at NIT Jalandhar
            </span>
            , passionate about solving real-world problems through efficient
            software design and intelligent systems.
          </p>

          <p className="mt-4 text-lg text-neutral-300 leading-relaxed">
            My academic foundation in <strong>C/C++</strong>,{" "}
            <strong>data structures & algorithms</strong>, and{" "}
            <strong>operating systems</strong> has strengthened my ability to
            design scalable and optimized solutions. Alongside, I actively
            explore areas of <strong>machine learning</strong>,{" "}
            <strong>full-stack web development</strong>, and{" "}
            <strong>autonomous systems</strong>, with a keen interest in
            bridging theory and practical implementation.
          </p>

          <p className="mt-4 text-lg text-neutral-300 leading-relaxed">
            I enjoy working on projects that combine analytical reasoning with
            creativity — from developing real-time collaborative applications to
            building intelligent models that enhance automation and
            decision-making.
          </p>
        </motion.div>
      </div>
    </Section>
  );
}
