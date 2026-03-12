import { motion } from 'framer-motion';
import { Mail, MapPin, MousePointer, Download } from 'lucide-react';
import { personalInfo } from '../data';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background elements */}
      <div className="absolute inset-0 bg-dot-pattern opacity-30"></div>
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-primary-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-ai-light/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wider text-primary-400 uppercase glass-card rounded-full"
          >
            Available for opportunities
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
            Hi, I'm <span className="gradient-text">{personalInfo.name}</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto font-light leading-relaxed">
            {personalInfo.tagline}
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex items-center gap-2 text-slate-400">
              <MapPin size={18} className="text-primary-400" />
              <span>{personalInfo.location}</span>
            </div>
            <div className="flex items-center gap-2 text-slate-400">
              <Mail size={18} className="text-primary-400" />
              <span>{personalInfo.email}</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6">
            <a 
              href="#projects" 
              className="px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-xl transition-all shadow-lg shadow-primary-900/40 flex items-center gap-2 group"
            >
              View Projects
              <MousePointer size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <button 
              className="px-8 py-4 glass-card text-white font-semibold rounded-xl hover:bg-white/10 transition-all flex items-center gap-2"
            >
              <Download size={18} />
              Download Resume
            </button>
            <a 
              href="#contact" 
              className="px-8 py-4 border border-slate-700 text-slate-300 hover:text-white hover:border-slate-500 font-semibold rounded-xl transition-all"
            >
              Contact Me
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-slate-500 rounded-full flex justify-center p-1">
          <motion.div 
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-1.5 h-1.5 bg-primary-400 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
