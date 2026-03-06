import { motion } from "framer-motion";
import resumeData from "@/data/resume.json";

export function Skills() {
  return (
    <section className="py-24 bg-white/5 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon/50 to-transparent" />
      
      <div className="container px-4 mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Technical <span className="text-purple-400">Arsenal</span></h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Tools and technologies I work with to build the future.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {resumeData.skills.map((skillGroup, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="glass-card p-8 rounded-2xl"
            >
              <h3 className="text-xl font-bold mb-6 font-display tracking-wide uppercase text-white/80">
                {skillGroup.group}
              </h3>
              <div className="flex flex-wrap gap-3">
                {skillGroup.items.map((skill, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                    className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-mono hover:border-neon/50 hover:text-neon transition-colors cursor-default"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
