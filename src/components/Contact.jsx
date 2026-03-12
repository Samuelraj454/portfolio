import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Send, MessageSquare } from 'lucide-react';
import { personalInfo } from '../data';

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent"></div>
      
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="w-full lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-bold mb-6 text-white">Let's <span className="text-primary-400">Connect</span></h2>
                <p className="text-lg text-slate-400 mb-10 leading-relaxed">
                  I'm currently looking for new opportunities in AI, Machine Learning, and Data Science. 
                  Whether you have a question or just want to say hi, my inbox is always open!
                </p>

                <div className="space-y-6">
                  <a 
                    href={`mailto:${personalInfo.email}`}
                    className="flex items-center gap-4 p-6 glass-card rounded-2xl hover:border-primary-500/50 transition-all group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center text-primary-400 group-hover:scale-110 transition-transform">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">Email Me</p>
                      <p className="text-lg text-white font-medium">{personalInfo.email}</p>
                    </div>
                  </a>

                  <a 
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-6 glass-card rounded-2xl hover:border-blue-500/50 transition-all group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                      <Linkedin size={24} />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">LinkedIn</p>
                      <p className="text-lg text-white font-medium">Samuel Raj</p>
                    </div>
                  </a>

                  <a 
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-6 glass-card rounded-2xl hover:border-slate-500/50 transition-all group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-slate-500/10 flex items-center justify-center text-slate-400 group-hover:scale-110 transition-transform">
                      <Github size={24} />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">GitHub</p>
                      <p className="text-lg text-white font-medium">@samuelraj</p>
                    </div>
                  </a>
                </div>
              </motion.div>
            </div>

            <div className="w-full lg:w-1/2">
              <motion.form 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="glass-card p-10 rounded-[2.5rem] border border-white/5 space-y-6"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-400 ml-1">Your Name</label>
                    <input 
                      type="text" 
                      placeholder="John Doe"
                      className="w-full px-6 py-4 bg-slate-900/50 border border-slate-800 rounded-xl focus:outline-none focus:border-primary-500 text-white transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-400 ml-1">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="john@example.com"
                      className="w-full px-6 py-4 bg-slate-900/50 border border-slate-800 rounded-xl focus:outline-none focus:border-primary-500 text-white transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-400 ml-1">Subject</label>
                  <input 
                    type="text" 
                    placeholder="Collaboration Inquiry"
                    className="w-full px-6 py-4 bg-slate-900/50 border border-slate-800 rounded-xl focus:outline-none focus:border-primary-500 text-white transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-400 ml-1">Message</label>
                  <textarea 
                    rows="4" 
                    placeholder="Tell me about your project..."
                    className="w-full px-6 py-4 bg-slate-900/50 border border-slate-800 rounded-xl focus:outline-none focus:border-primary-500 text-white transition-all resize-none"
                  ></textarea>
                </div>
                <button 
                  className="w-full py-5 bg-gradient-to-r from-primary-600 to-primary-500 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-primary-600/30 transition-all flex items-center justify-center gap-3 group"
                >
                  Send Message
                  <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </motion.form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
