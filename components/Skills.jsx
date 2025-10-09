import Section from "./Section";
import skills from "@/data/skills";


function Pills({ items }) {
return (
<div className="flex flex-wrap gap-2">
{items.map((s) => (
<span key={s} className="rounded-full bg-blue-50 dark:bg-neutral-800 px-3 py-1 text-sm text-blue-700 dark:text-blue-300 border">
{s}
</span>
))}
</div>
);
}


export default function Skills() {
return (
<Section id="skills" className="bg-gray-50 dark:bg-neutral-900">
<h2 className="text-3xl font-bold">Skills</h2>
<div className="mt-8 grid gap-6 sm:grid-cols-2">
<div>
<h3 className="font-semibold">Languages</h3>
<Pills items={skills.languages} />
</div>
<div>
<h3 className="font-semibold">Frontend</h3>
<Pills items={skills.frontend} />
</div>
<div>
<h3 className="font-semibold">Backend</h3>
<Pills items={skills.backend} />
</div>
<div>
<h3 className="font-semibold">Core CS & ML</h3>
<Pills items={skills.concepts} />
</div>
<div className="sm:col-span-2">
<h3 className="font-semibold">Tools</h3>
<Pills items={skills.tools} />
</div>
</div>
</Section>
);
}