import Section from "./Section";
import education from "@/data/education";


export default function Education() {
return (
<Section id="education" className="bg-neutral-100 dark:bg-neutral-800">
<h2 className="text-3xl font-bold">Education</h2>
<ol className="mt-8 relative border-s ps-6">
{education.map((e) => (
<li key={e.school} className="mb-8 ms-4">
<div className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full bg-blue-600" />
<h3 className="text-xl font-semibold">{e.school}</h3>
<p className="text-neutral-700 dark:text-neutral-300">{e.degree}</p>
{e.score && <p className="text-sm text-neutral-500">{e.score}</p>}
<p className="text-sm mt-1 text-neutral-500">{e.period}</p>
</li>
))}
</ol>
</Section>
);
}