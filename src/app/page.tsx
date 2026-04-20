export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center pt-32 pb-20 px-6 text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-[radial-gradient(circle_at_center,rgba(255,95,0,0.08)_0%,transparent_70%)] pointer-events-none" />

        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-black mb-6">
          Harsh <span className="text-orange">Portfolio</span>
        </h1>

        <p className="max-w-2xl text-lg md:text-xl text-muted leading-relaxed mb-10">
          Software Engineer & Full Stack Developer. Building high-end digital
          experiences with precision and speed.
        </p>

        <div className="flex gap-4">
          <button className="px-8 py-3 bg-orange text-white rounded-full font-medium hover:bg-orange-light transition-colors duration-300">
            View Projects
          </button>
          <button className="px-8 py-3 bg-black text-white rounded-full font-medium hover:bg-zinc-800 transition-colors duration-300">
            Get in Touch
          </button>
        </div>
      </section>

      {/* Footer simple */}
      <footer className="py-12 border-t border-zinc-100 text-center text-muted">
        <p>
          © {new Date().getFullYear()} Harsh Portfolio. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
