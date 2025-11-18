import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Showcase from '@/components/Showcase';
import Pricing from '@/components/Pricing';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Page() {
  return (
    <main className="relative min-h-screen bg-neutral-950">
      <Navbar />
      <Hero />
      <Features />
      <Showcase />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  );
}
