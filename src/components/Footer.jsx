import { personalInfo } from '../data';
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-slate-900">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-2">{personalInfo.name}</h3>
            <p className="text-slate-500 text-sm">AI & Data Science Graduate | Python Developer</p>
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-2">
            <p className="text-slate-500 text-sm flex items-center gap-1.5">
              Built with <Heart size={14} className="text-red-500 fill-red-500" /> using React & Tailwind
            </p>
            <p className="text-slate-600 text-xs">
              © {currentYear} Samuel Raj. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
