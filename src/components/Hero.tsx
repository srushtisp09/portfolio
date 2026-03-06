import { motion } from "framer-motion";
import { ArrowDown, Download, ExternalLink, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import resumeData from "@/data/resume.json";

export function Hero() {
  const scrollToExperience = () => {
    const element = document.getElementById("experience");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const downloadResume = () => {
    // Create a Blob from the JSON data
    const jsonString = JSON.stringify(resumeData, null, 2);
    const blob = new Blob([jsonString], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement("a");
    a.href = url;
    a.download = "srushti-pattanshetti-resume.json";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-background to-background" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon/10 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px] animate-pulse delay-1000" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
      </div>

      <div className="container relative z-10 px-4 mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="inline-block px-3 py-1 mb-6 text-xs font-mono tracking-wider text-neon border border-neon/30 rounded-full bg-neon/5">
            AVAILABLE FOR OPPORTUNITIES
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
            <span className="block text-white">Srushti</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-neon via-white to-purple-500">
              Pattanshetti
            </span>
          </h1>

          <p className="max-w-2xl mx-auto mb-4 text-lg md:text-xl text-white/80 font-light">
            {resumeData.basics.title}
          </p>
          
          <p className="max-w-2xl mx-auto mb-8 text-base md:text-lg text-neon/80 font-mono">
            {resumeData.basics.summary}
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-12">
            <Button size="lg" variant="neon" onClick={scrollToExperience} className="w-full md:w-auto">
              View Experience
            </Button>
            <Button size="lg" variant="glass" onClick={downloadResume} className="w-full md:w-auto group">
              <Download className="w-4 h-4 mr-2 group-hover:translate-y-1 transition-transform" />
              Download Resume Data
            </Button>
          </div>

          <div className="flex items-center justify-center gap-6 text-white/40">
            {resumeData.basics.links.map((link) => (
              <a
                key={link.network}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-neon transition-colors"
              >
                <Linkedin className="w-6 h-6" />
                <span className="sr-only">{link.network}</span>
              </a>
            ))}
            <a
              href={`mailto:${resumeData.basics.email}`}
              className="hover:text-neon transition-colors"
            >
              <Mail className="w-6 h-6" />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <ArrowDown className="w-6 h-6 text-white/30" />
      </motion.div>
    </section>
  );
}
