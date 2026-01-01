import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="border-t border-white/10 py-16 px-6 bg-[#050505] overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
        
        {/* Brand Section */}
        <div className="flex flex-col gap-6">
          <Link to="/" className="flex items-center gap-2 text-white font-bold text-xl group w-fit">
            <div className="w-10 h-10 rounded-lg bg-linear-to-br from-[#00f2ff] to-[#ad00ff] flex items-center justify-center text-black shadow-[0_0_20px_rgba(0,242,255,0.3)] group-hover:scale-110 transition-transform">
              M
            </div>
            <span className="tracking-tighter text-2xl">mftech</span>
          </Link>
          <p className="text-gray-400 leading-relaxed text-sm md:text-base max-w-xs">
            Transforming ideas into digital reality. We build exceptional websites, 
            powerful mobile apps, and provide reliable hosting solutions.
          </p>
        </div>

        {/* Quick Links Section - Aligned Center-ish */}
        <div className="flex flex-col md:items-center">
          <div className="w-fit">
            <h5 className="text-white font-bold mb-6 uppercase tracking-[0.2em] text-xs">Quick Links</h5>
            <ul className="flex flex-col gap-4 text-gray-400 text-sm">
              <li><Link to="/" className="hover:text-[#00f2ff] transition-all hover:translate-x-1 inline-block">Home</Link></li>
              <li><Link to="/about" className="hover:text-[#00f2ff] transition-all hover:translate-x-1 inline-block">About Us</Link></li>
              <li><Link to="/team" className="hover:text-[#00f2ff] transition-all hover:translate-x-1 inline-block">Our Team</Link></li>
              <li><Link to="/contact" className="hover:text-[#00f2ff] transition-all hover:translate-x-1 inline-block">Start Your Project</Link></li>
            </ul>
          </div>
        </div>

        {/* Connect Section - Icons Aligned */}
        <div className="flex flex-col md:items-end">
          <div className="w-fit">
            <h5 className="text-white font-bold mb-6 uppercase tracking-[0.2em] text-xs md:text-right">Connect</h5>
            <div className="flex gap-4 mb-6">
              {/* LinkedIn Icon */}
              <motion.a 
                whileHover={{ y: -5 }}
                href="https://linkedin.com/in/your-profile" 
                target="_blank" 
                className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#00f2ff] hover:border-[#00f2ff]/50 transition-colors shadow-xl"
              >
                <Linkedin size={22} />
              </motion.a>

              {/* Email Icon */}
              <motion.a 
                whileHover={{ y: -5 }}
                href="mailto:kkfahad1530@gmail.com" 
                className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#ad00ff] hover:border-[#ad00ff]/50 transition-colors shadow-xl"
              >
                <Mail size={22} />
              </motion.a>
            </div>
            <p className="text-xs text-gray-500 italic md:text-right max-w-[200px]">
              Get in touch for specialized MERN and React Native development.
            </p>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-600 text-[10px] md:text-xs tracking-widest uppercase">
          © 2026 mftech. All rights reserved.
        </p>
        <div className="h-px flex-1 bg-white/5 mx-8 hidden md:block" />
        <p className="text-gray-600 text-[10px] md:text-xs tracking-widest uppercase">
          Mumbai, India
        </p>
      </div>
    </footer>
  );
};

export default Footer;