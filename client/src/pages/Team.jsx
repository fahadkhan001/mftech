import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Mail, Code2, Smartphone } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: "fahad Khan", // Replace with your name
      role: "Full Stack MERN Developer",
      bio: "Expert in building scalable web applications using MongoDB, Express, React, and Node.js. Specialized in high-performance backend architecture.",
      icon: <Code2 size={40} className="text-[#00f2ff]" />,
      color: "from-[#00f2ff]/20 to-transparent",
      borderColor: "group-hover:border-[#00f2ff]/50",
      linkedin: "https://www.linkedin.com/in/fahad-khan-7a298a202/",
    },
    {
      name: "Manish Kumar", // Replace with your partner's name
      role: "React Native Developer",
      bio: "Crafting seamless cross-platform mobile experiences for iOS and Android. Focused on fluid UI/UX and native-level performance.",
      icon: <Smartphone size={40} className="text-[#ad00ff]" />,
      color: "from-[#ad00ff]/20 to-transparent",
      borderColor: "group-hover:border-[#ad00ff]/50",
      linkedin: "https://www.linkedin.com/in/manishkumar1310/",
    }
  ];

  return (
    <main className="pt-32 pb-20 px-6 min-h-screen bg-[#050505]">
      {/* Header */}
      <section className="text-center mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[#00f2ff] font-bold tracking-[0.3em] uppercase text-xs mb-4">Our Experts</p>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            The <span className="text-transparent bg-clip-text bg-linear-to-r from-[#00f2ff] to-[#ad00ff]">Dream Team</span>
          </h1 >
          <p className="max-w-2xl mx-auto text-gray-400 text-lg">
            A small team with big capabilities. We combine web and mobile expertise to deliver complete digital solutions.
          </p>
        </motion.div>
      </section>

      {/* Team Grid */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.2 }}
            className={`group relative p-8 rounded-3xl bg-white/[0.02] border border-white/10 ${member.borderColor} transition-all duration-500 overflow-hidden`}
          >
            {/* Background Gradient Glow */}
            <div className={`absolute inset-0 bg-linear-to-br ${member.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

            <div className="relative z-10 flex flex-col items-center text-center">
              {/* Avatar Placeholder (Instead of Photo) */}
              <div className="w-24 h-24 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-2xl">
                {member.icon}
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
              <p className="text-[#00f2ff] font-medium mb-4 text-sm uppercase tracking-wider">{member.role}</p>
              <p className="text-gray-400 mb-8 leading-relaxed italic">"{member.bio}"</p>

              {/* Social Links */}
              <div className="flex gap-4">
                <a 
                  href={member.linkedin} 
                  target="_blank" 
                  className="p-3 rounded-xl bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-all"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="mailto:kkfahad1530@gmail.com" 
                  className="p-3 rounded-xl bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-all"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
};

export default Team;