import Section from "./Section";
import projects from "@/data/projects";


export default function Projects() {
return (
<Section id="projects" className="bg-white dark:bg-neutral-950">
<div className="flex items-end justify-between">
<h2 className="text-3xl font-bold">Projects</h2>
<a href="https://github.com/yashgarg7302" target="_blank" className="text-sm hover:text-blue-600">See all →</a>
</div>
<div className="mt-8 grid gap-6 sm:grid-cols-2">
{projects.map((p) => (
<a key={p.title} href={p.link} target="_blank" className="group rounded-2xl border p-6 hover:border-blue-500 hover:shadow">
<h3 className="text-xl font-semibold group-hover:text-blue-600">{p.title}</h3>
<p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">{p.description}</p>
<div className="mt-4 flex flex-wrap gap-2">
{p.tags.map((t) => (
<span key={t} className="rounded-full border px-2 py-1 text-xs text-neutral-600 dark:text-neutral-300">{t}</span>
))}
</div>
</a>
))}
</div>
</Section>
);
}