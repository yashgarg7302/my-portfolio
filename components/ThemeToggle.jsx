import { useTheme } from "next-themes";
import { useEffect, useState } from "react";


export default function ThemeToggle() {
const { theme, setTheme } = useTheme();
const [mounted, setMounted] = useState(false);
useEffect(() => setMounted(true), []);
if (!mounted) return null;
const isDark = theme === "dark";
return (
<button
aria-label="Toggle Dark Mode"
onClick={() => setTheme(isDark ? "light" : "dark")}
className="rounded-full border px-3 py-1 text-sm hover:opacity-80"
>
{isDark ? "🌙" : "☀️"}
</button>
);
}