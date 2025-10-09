import ThemeToggle from "./ThemeToggle";


export default function Navbar() {
const items = [
{ label: "Home", href: "#home" },
{ label: "About", href: "#about" },
{ label: "Education", href: "#education" },
{ label: "Projects", href: "#projects" },
{ label: "Skills", href: "#skills" },
{ label: "Contact", href: "#contact" },
];
return (
<nav className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 dark:supports-[backdrop-filter]:bg-neutral-900/60 border-b">
<div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
<a href="#home" className="text-xl font-bold tracking-tight">
Yash <span className="text-blue-600">Garg</span>
</a>
<div className="hidden md:flex items-center gap-6 text-sm">
{items.map((it) => (
<a key={it.label} href={it.href} className="hover:text-blue-600">
{it.label}
</a>
))}
<ThemeToggle />
<a href="/YashGargResume.pdf" className="rounded-xl border px-3 py-1 hover:bg-blue-600 hover:text-white">Resume</a>
</div>
{/* mobile */}
<div className="md:hidden flex items-center gap-2">
<ThemeToggle />
</div>
</div>
</nav>
);
}