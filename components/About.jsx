import Section from "./Section";


export default function About() {
return (
  
<Section id="about" className="bg-white dark:bg-neutral-950 transition-colors duration-300">

<h2 className="text-3xl font-bold">About Me</h2>
<p className="mt-4 text-lg text-neutral-700 dark:text-neutral-300 max-w-3xl">
I’m a postgraduate student in Computer Science & Engineering with a strong foundation in <b>C/C++</b>,
<b> data structures & algorithms</b>, <b>operating systems</b>, and <b>machine learning</b>.
I enjoy building practical tools and visualizations that make complex concepts intuitive.
</p>
</Section>
);
}