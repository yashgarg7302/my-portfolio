import { useState } from "react";
import Section from "./Section";
import { Mail, Linkedin, Github, Send } from "lucide-react";

export default function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    const res = await fetch("https://formspree.io/f/mabcdxyz", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      setStatus("success");
      e.target.reset();
    } else {
      setStatus("error");
    }
  };

  return (
    <Section
      id="contact"
      className="bg-neutral-100 dark:bg-neutral-800 text-center"
    >
      <h2 className="text-3xl font-bold text-white">Get in Touch</h2>
      <p className="mt-3 text-neutral-400 text-lg">
        I’d love to connect! Whether it’s about a project, opportunity, or collaboration,
        feel free to send a message or reach out through LinkedIn or GitHub.
      </p>

      {/* --- Contact Form --- */}
      <form
        onSubmit={handleSubmit}
        className="mt-8 mx-auto max-w-lg bg-neutral-900/60 p-6 rounded-2xl border border-neutral-700 shadow"
      >
        <div className="flex flex-col gap-4 text-left">
          <input
            type="text"
            name="name"
            required
            placeholder="Your Name"
            className="p-3 rounded-md bg-neutral-800 border border-neutral-700 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none text-white"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Your Email"
            className="p-3 rounded-md bg-neutral-800 border border-neutral-700 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none text-white"
          />
          <textarea
            name="message"
            required
            rows="5"
            placeholder="Your Message"
            className="p-3 rounded-md bg-neutral-800 border border-neutral-700 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none text-white resize-none"
          />
          <button
            type="submit"
            className="mt-2 flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-transform transform hover:scale-105"
          >
            <Send size={18} /> Send Message
          </button>
        </div>

        {status === "success" && (
          <p className="mt-4 text-green-400 font-medium">
            ✅ Message sent successfully! I’ll get back to you soon.
          </p>
        )}
        {status === "error" && (
          <p className="mt-4 text-red-400 font-medium">
            ❌ Something went wrong. Please try again.
          </p>
        )}
      </form>

      {/* --- Social Buttons --- */}
      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <a
          href="mailto:yashgarg7302@gmail.com"
          className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-transform transform hover:scale-105"
        >
          <Mail size={18} />
          Email Me
        </a>

        <a
          href="https://www.linkedin.com/in/yash-garg-4ab97a1b6/"
          target="_blank"
          className="flex items-center gap-2 border border-neutral-600 px-6 py-3 rounded-xl hover:bg-neutral-800 hover:border-blue-600 transition-transform transform hover:scale-105"
        >
          <Linkedin size={18} />
          LinkedIn
        </a>

        <a
          href="https://github.com/yashgarg7302"
          target="_blank"
          className="flex items-center gap-2 border border-neutral-600 px-6 py-3 rounded-xl hover:bg-neutral-800 hover:border-blue-600 transition-transform transform hover:scale-105"
        >
          <Github size={18} />
          GitHub
        </a>
      </div>
    </Section>
  );
}
