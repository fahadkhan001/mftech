import React from 'react';
import { Target, Eye, ShieldCheck, Zap, Users } from 'lucide-react';

const About = () => {
  return (
    <main className="pt-32 pb-20 px-6">
      {/* Header Section */}
      <section className="text-center mb-24">
        <div className="inline-block px-4 py-1 rounded-full border border-mf-cyan/30 bg-mf-cyan/10 text-mf-cyan text-sm font-bold mb-6">
          About Us
        </div>
        <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">
          We Are <span className="text-transparent bg-clip-text bg-linear-to-r from-mf-cyan to-mf-purple">mftech</span>
        </h1>
        <p className="max-w-3xl mx-auto text-gray-400 text-lg leading-relaxed">
          A passionate team of developers, designers, and innovators dedicated to transforming your digital dreams into reality.
        </p>
      </section>

      {/* Our Story / The Journey */}
      <section className="max-w-5xl mx-auto mb-32">
        <div className="text-center mb-12">
          <p className="text-mf-cyan text-sm font-bold tracking-widest uppercase mb-2">Our Story</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">The <span className="text-transparent bg-clip-text bg-linear-to-r from-mf-cyan to-mf-purple">Journey</span></h2>
        </div>
        <div className="glass-card p-10 md:p-16 border-white/5 bg-white/[0.02]">
          <div className="space-y-8 text-gray-300 text-lg leading-relaxed">
            <p>mftech was founded with a simple yet powerful vision: to bridge the gap between innovative ideas and digital reality. What started as a small team of passionate developers has grown into a full-service digital agency.</p>
            <p>We specialize in creating stunning websites, powerful mobile applications, and providing reliable hosting solutions. Our expertise spans across the entire development lifecycle - from concept to deployment on web servers, Play Store, and App Store.</p>
            <p>Today, we continue to push boundaries, embrace new technologies, and deliver exceptional results for our clients. Every project we undertake is a testament to our commitment to quality, innovation, and client success.</p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
        <div className="glass-card p-10 flex flex-col items-start gap-6 border-white/5">
          <div className="w-14 h-14 rounded-2xl bg-mf-cyan/10 flex items-center justify-center text-mf-cyan">
            <Target size={32} />
          </div>
          <h3 className="text-3xl font-bold text-white">Our Mission</h3>
          <p className="text-gray-400 text-lg">To empower businesses with innovative digital solutions that drive growth, enhance user experiences, and create lasting impact in the digital landscape.</p>
        </div>
        <div className="glass-card p-10 flex flex-col items-start gap-6 border-white/5">
          <div className="w-14 h-14 rounded-2xl bg-mf-purple/10 flex items-center justify-center text-mf-purple">
            <Eye size={32} />
          </div>
          <h3 className="text-3xl font-bold text-white">Our Vision</h3>
          <p className="text-gray-400 text-lg">To become the leading digital agency recognized for delivering world-class websites, mobile applications, and technology solutions that set new standards.</p>
        </div>
      </section>

      {/* Our Values */}
      <section className="max-w-7xl mx-auto text-center">
        <p className="text-mf-cyan text-sm font-bold tracking-widest uppercase mb-2">What Drives Us</p>
        <h2 className="text-5xl font-bold text-white mb-16">Our <span className="text-transparent bg-clip-text bg-linear-to-r from-mf-cyan to-mf-purple">Values</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Innovation", icon: <Zap />, desc: "We constantly explore new technologies and approaches to deliver cutting-edge solutions." },
            { title: "Quality", icon: <ShieldCheck />, desc: "Every line of code, every pixel, every interaction is crafted with meticulous attention to detail." },
            { title: "Partnership", icon: <Users />, desc: "We build lasting relationships with our clients, becoming their trusted technology partner." }
          ].map((val, idx) => (
            <div key={idx} className="glass-card p-8 border-white/5 group hover:border-mf-cyan/30 transition-all">
              <h4 className="text-mf-cyan text-2xl font-bold mb-4">{val.title}</h4>
              <p className="text-gray-400">{val.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default About;