import React from 'react';
import { Globe, Smartphone, Server } from 'lucide-react';

const Services = () => {
  const list = [
    { title: "Web Development", icon: <Globe />, desc: "Modern, responsive websites built with MERN stack." },
    { title: "Mobile Apps", icon: <Smartphone />, desc: "Native and cross-platform mobile applications with React Native." },
    { title: "Web Hosting", icon: <Server />, desc: "Reliable, scalable hosting solutions with 99.9% uptime." }
  ];

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {list.map((s, i) => (
          <div key={i} className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-[#00f2ff]/50 transition-colors group">
            <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-[#00f2ff] mb-6 group-hover:scale-110 transition-transform">
              {React.cloneElement(s.icon, { size: 28 })}
            </div>
            <h4 className="text-2xl font-bold text-white mb-4">{s.title}</h4>
            <p className="text-gray-400 leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;