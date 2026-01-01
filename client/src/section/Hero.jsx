import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // Import the hook

const Hero = () => {
  const navigate = useNavigate(); // Initialize navigation

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
      {/* Background Decorative Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00f2ff]/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#ad00ff]/10 blur-[120px] rounded-full" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10"
      >
        {/* Animated Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 mb-8">
          🚀 <span className="text-transparent bg-clip-text bg-linear-to-r from-[#00f2ff] to-[#ad00ff]">
            Transforming Digital Ideas
          </span>
        </div>

        {/* Hero Heading */}
        <h1 className="text-6xl md:text-8xl font-black text-white mb-6 tracking-tight">
          We Build <br /> 
          <span className="text-transparent bg-clip-text bg-linear-to-r from-[#00f2ff] to-[#ad00ff]">
            Digital Excellence
          </span>
        </h1>

        {/* Subtext */}
        <p className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl mb-10 leading-relaxed">
          From stunning websites to powerful mobile apps, we bring your vision to life with cutting-edge technology and creative expertise.
        </p>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => navigate('/contact')} // Now works because hook is initialized
            className="px-8 py-4 bg-linear-to-r from-[#00f2ff] to-[#ad00ff] rounded-xl font-bold text-black flex items-center justify-center gap-2 hover:shadow-[0_0_30px_rgba(0,242,255,0.4)] transition-all active:scale-95"
          >
            Start Your Project <ArrowRight size={20} />
          </button>
          
          
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;