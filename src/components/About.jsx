import { motion } from 'framer-motion';
import { personalInfo } from '../data';
import { Target, Lightbulb, Zap } from 'lucide-react';

const About = () => {
  const highlights = [
    { icon: <Target className="text-primary-400" />, title: 'Mission', text: 'To build intelligent systems that solve real-world problems.' },
    { icon: <Lightbulb className="text-ai-light" />, title: 'Vision', text: 'Advancing human capability through cutting-edge AI.' },
    { icon: <Zap className="text-yellow-400" />, title: 'Focus', text: 'Machine Learning, Deep Learning, and Data Analysis.' },
  ];

  return (
    <section id="about" className="py-24 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden glass-card p-2 relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-ai-light/20 group-hover:opacity-30 transition-opacity"></div>
              <img 
                src="/about_profile.png" 
                alt="AI Profile"
                className="w-full h-full object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-700" 
              />
              {/* Floating tags */}
              <div className="absolute -top-4 -right-4 px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl animate-bounce">
                <span className="text-white font-bold">7.31 GPA</span>
              </div>
            </div>
            {/* Background blob */}
            <div className="absolute -z-10 -bottom-10 -left-10 w-full h-full bg-primary-600/10 rounded-full blur-[100px]"></div>
          </motion.div>

          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-4 text-white">About <span className="text-primary-400">Me</span></h2>
              <div className="h-1.5 w-20 bg-primary-500 rounded-full mb-8"></div>
              
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                {personalInfo.about}
              </p>

              <div className="grid sm:grid-cols-1 gap-6">
                {highlights.map((item, i) => (
                  <motion.div 
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2 }}
                    className="flex gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all group"
                  >
                    <div className="shrink-0 w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                      <p className="text-sm text-slate-400">{item.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
