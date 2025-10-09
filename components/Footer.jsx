export default function Footer() {
    return (
    <footer className="border-t py-8 text-center text-sm text-neutral-600 dark:text-neutral-400">
    <div className="mx-auto max-w-6xl px-6">
    © {new Date().getFullYear()} Yash Garg · Built with ❤️ Next.js & Tailwind CSS
    </div>
    </footer>
    );
    }