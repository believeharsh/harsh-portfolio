import Experience from '@/components/landing/Experience';
import Hero from '@/components/landing/Hero';

export default function Home() {
  return (
    <main className="min-h-screen animate-page-in">
      <Hero />
      <Experience />
    </main>
  );
}
