import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Splash } from "@/components/Splash";
import { Hero } from "@/components/Hero";
import { Education } from "@/components/Education";
import { Skills } from "@/components/Skills";

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <Splash onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <main className="bg-background min-h-screen text-white selection:bg-neon selection:text-black">
          <Hero />
          <Education />
          <Skills />
          
          <footer className="py-8 text-center text-white/20 text-sm font-mono border-t border-white/5">
            <p>© {new Date().getFullYear()} Srushti Pattanshetti. All rights reserved.</p>
            <p className="mt-2">Built with React, Tailwind & Framer Motion</p>
          </footer>
        </main>
      )}
    </>
  );
}
