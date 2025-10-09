export default function Hero() {
  return (
    <header
      id="home"
      className="relative flex flex-col justify-center items-center text-center min-h-[90vh] overflow-hidden"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 animate-gradient-x bg-gradient-to-tr from-blue-100 via-purple-100 to-pink-100 dark:from-neutral-900 dark:via-neutral-950 dark:to-neutral-900"></div>

      {/* Optional decorative blur elements */}
      <div className="absolute top-0 left-[-10%] w-[400px] h-[400px] bg-blue-200 dark:bg-blue-900 blur-[160px] opacity-40 rounded-full animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-purple-200 dark:bg-purple-800 blur-[160px] opacity-40 rounded-full animate-pulse"></div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <p className="text-sm tracking-wide text-blue-600 dark:text-blue-400">
          MTech CSE @ NIT Jalandhar
        </p>
        <h1 className="mt-3 text-5xl font-extrabold tracking-tight sm:text-6xl">
          Hi, I’m{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 animate-fade-in">
            Yash Garg
          </span>
        </h1>
        <p className="mt-4 text-lg text-neutral-700 dark:text-neutral-300 max-w-2xl mx-auto">
          I build efficient, user-centric software. Strong in C/C++, data
          structures & algorithms, and hands-on with Machine Learning and modern
          web development (React, Next.js, Tailwind).
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="rounded-xl bg-blue-600 px-6 py-3 text-white hover:bg-blue-700 transition-colors duration-200"
          >
            View Projects
          </a>
          <a
            href="/YashGargResume.pdf"
            className="rounded-xl border border-neutral-300 dark:border-neutral-700 px-6 py-3 hover:bg-blue-50 dark:hover:bg-neutral-800 transition-colors duration-200"
          >
            Download Resume
          </a>
        </div>
      </div>
    </header>
  );
}
