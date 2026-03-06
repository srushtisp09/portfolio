import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin } from "lucide-react";
import resumeData from "@/data/resume.json";

export function Education() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Education & <span className="text-neon">Journey</span></h2>
          <div className="h-1 w-20 bg-neon rounded-full" />
        </motion.div>

        <div className="space-y-8">
          {resumeData.education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative pl-8 md:pl-0"
            >
              {/* Timeline Line */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-white/10 md:left-1/2 md:-ml-px" />
              
              <div className={`md:flex items-center justify-between ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="hidden md:block w-5/12" />
                
                <div className="absolute left-0 md:left-1/2 w-4 h-4 -translate-x-[7px] md:-translate-x-1/2 rounded-full border-2 border-neon bg-background z-10 group-hover:scale-125 transition-transform duration-300" />
                
                <div className="md:w-5/12 glass-card p-6 rounded-xl hover:border-neon/50 transition-colors duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-2 bg-white/5 rounded-lg">
                      <GraduationCap className="w-6 h-6 text-neon" />
                    </div>
                    {edu.dates && (
                      <div className="flex items-center text-xs font-mono text-white/50 bg-white/5 px-2 py-1 rounded">
                        <Calendar className="w-3 h-3 mr-1" />
                        {edu.dates}
                      </div>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold mb-1 group-hover:text-neon transition-colors">{edu.institution}</h3>
                  <p className="text-white/70 mb-2">{edu.degree}</p>
                  
                  {edu.location && (
                    <div className="flex items-center text-sm text-white/40">
                      <MapPin className="w-3 h-3 mr-1" />
                      {edu.location}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
