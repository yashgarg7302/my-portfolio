import Section from "./Section";


export default function Contact() {
return (
<Section id="contact" className="bg-gray-50 dark:bg-neutral-900">
<h2 className="text-3xl font-bold">Get in touch</h2>
<p className="mt-2 text-neutral-600 dark:text-neutral-300">I’m open to SDE/full‑stack roles and research collaborations.</p>
<div className="mt-6 flex flex-wrap items-center gap-4">
<a href="mailto:yashgarg7302@gmail.com" className="rounded-xl bg-blue-600 px-6 py-3 text-white hover:opacity-90">Email Me</a>
<a href="https://www.linkedin.com/in/yash-garg-4ab97a1b6/" target="_blank" className="rounded-xl border px-6 py-3 hover:bg-blue-50 dark:hover:bg-neutral-800">LinkedIn</a>
<a href="https://github.com/yashgarg7302" target="_blank" className="rounded-xl border px-6 py-3 hover:bg-blue-50 dark:hover:bg-neutral-800">GitHub</a>
</div>
</Section>
);
}