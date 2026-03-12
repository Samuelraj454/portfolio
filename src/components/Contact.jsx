import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Linkedin, Github, Send, CheckCircle } from 'lucide-react';
import { personalInfo } from '../data';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      // Create mailto link
      const mailtoLink = `mailto:${personalInfo.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`;
      window.location.href = mailtoLink;
      
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after success message
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 5000);
    }, 1000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

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
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="glass-card p-10 rounded-[2.5rem] border border-white/5 relative"
              >
                <AnimatePresence mode="wait">
                  {isSubmitted ? (
                    <motion.div 
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="flex flex-col items-center justify-center py-12 text-center"
                    >
                      <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 mb-6">
                        <CheckCircle size={48} />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">Message Prepared!</h3>
                      <p className="text-slate-400">Opening your email client to send the message...</p>
                    </motion.div>
                  ) : (
                    <motion.form 
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit}
                      className="space-y-6"
                    >
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-sm font-semibold text-slate-400 ml-1">Your Name</label>
                          <input 
                            required
                            type="text" 
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="John Doe"
                            className="w-full px-6 py-4 bg-slate-900/50 border border-slate-800 rounded-xl focus:outline-none focus:border-primary-500 text-white transition-all"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-semibold text-slate-400 ml-1">Email Address</label>
                          <input 
                            required
                            type="email" 
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="john@example.com"
                            className="w-full px-6 py-4 bg-slate-900/50 border border-slate-800 rounded-xl focus:outline-none focus:border-primary-500 text-white transition-all"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-400 ml-1">Subject</label>
                        <input 
                          required
                          type="text" 
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="Collaboration Inquiry"
                          className="w-full px-6 py-4 bg-slate-900/50 border border-slate-800 rounded-xl focus:outline-none focus:border-primary-500 text-white transition-all"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-400 ml-1">Message</label>
                        <textarea 
                          required
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows="4" 
                          placeholder="Tell me about your project..."
                          className="w-full px-6 py-4 bg-slate-900/50 border border-slate-800 rounded-xl focus:outline-none focus:border-primary-500 text-white transition-all resize-none"
                        ></textarea>
                      </div>
                      <button 
                        disabled={isSubmitting}
                        className={`w-full py-5 bg-gradient-to-r from-primary-600 to-primary-500 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-primary-600/30 transition-all flex items-center justify-center gap-3 group ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                      >
                        {isSubmitting ? 'Preparing...' : 'Send Message'}
                        <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

