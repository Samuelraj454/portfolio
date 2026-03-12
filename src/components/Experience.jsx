import { motion } from 'framer-motion';
import { internships } from '../data';
import { Calendar, Briefcase, ChevronRight } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-slate-900/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-4 text-white"
          >
            Professional <span className="text-primary-400">Experience</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="h-1.5 w-20 bg-primary-500 rounded-full mx-auto"
          />
        </div>

        <div className="max-w-4xl mx-auto">
          {internships.map((exp, i) => (
            <motion.div
              key={exp.company + exp.role}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="relative pl-12 pb-16 last:pb-0 group"
            >
              {/* Timeline line */}
              <div className="absolute left-[19px] top-0 bottom-0 w-0.5 bg-slate-800 group-last:bottom-auto group-last:h-full"></div>
              
              {/* Timeline dot */}
              <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-slate-900 border-2 border-primary-500 flex items-center justify-center z-10 group-hover:bg-primary-500 transition-colors">
                <Briefcase size={18} className="text-white" />
              </div>

              <div className="glass-card p-8 rounded-3xl hover:border-primary-500/50 transition-all">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
                    <p className="text-primary-400 font-medium flex items-center gap-1">
                      <ChevronRight size={16} /> {exp.company}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800 text-slate-400 text-sm border border-slate-700">
                    <Calendar size={14} />
                    <span>{exp.duration}</span>
                  </div>
                </div>
                <p className="text-slate-300 leading-relaxed italic">
                  "{exp.description}"
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
