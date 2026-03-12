import { motion } from 'framer-motion';
import { education } from '../data';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-24 bg-slate-900/50 relative overflow-hidden">
      {/* Decorative circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-900/10 rounded-full blur-[120px] -z-10"></div>

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-4 text-white"
          >
            Academic <span className="text-primary-400">Foundation</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="h-1.5 w-20 bg-primary-500 rounded-full mx-auto"
          />
        </div>

        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-10 rounded-[2.5rem] relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <GraduationCap size={160} className="text-primary-500" />
            </div>

            <div className="flex flex-col md:flex-row gap-12 relative z-10">
              <div className="shrink-0">
                <div className="w-24 h-24 bg-gradient-to-br from-primary-500 to-ai-light rounded-2xl flex items-center justify-center text-white shadow-xl shadow-primary-500/20">
                  <GraduationCap size={48} />
                </div>
              </div>

              <div className="flex-grow">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-3xl font-extrabold text-white mb-2">{education.college}</h3>
                    <p className="text-xl text-primary-400 font-medium">{education.degree}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-slate-400 font-mono">{education.period}</span>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6 mt-10">
                  <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5">
                    <div className="w-10 h-10 rounded-full bg-primary-500/20 flex items-center justify-center text-primary-400">
                      <Award size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">GPA Score</p>
                      <p className="text-xl font-bold text-white">{education.gpa} / 10.0</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5">
                    <div className="w-10 h-10 rounded-full bg-ai-light/20 flex items-center justify-center text-ai-light">
                      <BookOpen size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">Specialization</p>
                      <p className="text-xl font-bold text-white uppercase tracking-tight">AI & Data Science</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
