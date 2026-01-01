import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom'; // Added useNavigate
import { motion } from 'framer-motion';

const Navbar = () => {
  const navigate = useNavigate(); // Initialize the hook

  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Team', path: '/team' },
  ];

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-6xl z-50">
      <div className="bg-white/5 backdrop-blur-xl border border-white/10 px-8 py-4 rounded-2xl flex items-center justify-between shadow-2xl">
        
        {/* Logo/Brand */}
        <NavLink to="/" className="flex items-center gap-2 font-bold text-xl group">
          <div className="w-9 h-9 rounded-lg bg-linear-to-br from-[#00f2ff] to-[#ad00ff] flex items-center justify-center font-bold text-black shadow-[0_0_15px_rgba(0,242,255,0.3)] group-hover:scale-110 transition-transform">
            M
          </div>
          <span className="text-white tracking-tight">mftech</span>
        </NavLink>

        {/* Navigation Links with Sliding Underline */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `relative text-sm font-medium transition-colors duration-300 ${
                  isActive ? 'text-[#00f2ff]' : 'text-gray-400 hover:text-white'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#00f2ff]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </div>

        {/* Updated Get in Touch Button */}
        <button 
          onClick={() => navigate('/contact')} // Navigation logic
          className="px-6 py-2.5 bg-linear-to-r from-[#00f2ff] to-[#ad00ff] rounded-xl text-sm font-bold text-black hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_rgba(173,0,255,0.3)]"
        >
          Get in Touch
        </button>
      </div>
    </nav>
  );
};

export default Navbar;