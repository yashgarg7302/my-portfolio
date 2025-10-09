import Head from "next/head";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

import Contact from "@/components/Contact";
import Footer from "@/components/Footer";


export default function Home() {
return (
<main className="min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100 transition-colors duration-300">

<Head>
<title>Yash Garg — Portfolio</title>
<meta name="description" content="Yash Garg · MTech CSE @ NIT Jalandhar · Software Engineer · C++ · React · ML" />
</Head>
<Navbar />
<Hero />
<About />
<Education />
<Projects />
<Skills />
<Contact />
<Footer />
</main>
);
}