import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', info: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to send data to your /api backend goes here
    console.log('Form Submitted:', formData);
  };

  return (
    <main className="pt-32 pb-20 px-6 max-w-3xl mx-auto">
      <h1 className="text-5xl font-bold text-white mb-8 text-center">Start Your <span className="text-transparent bg-clip-text bg-linear-to-r from-[#00f2ff] to-[#ad00ff]">Project</span></h1>
      
      <form onSubmit={handleSubmit} className="glass-card p-8 flex flex-col gap-6 bg-white/[0.02] border-white/10">
        <div>
          <label className="block text-gray-400 mb-2">Full Name</label>
          <input 
            type="text" 
            required 
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-[#00f2ff] outline-none"
            onChange={(e) => setFormData({...formData, name: e.target.value})}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-400 mb-2">Email Address *</label>
            <input 
              type="email" 
              required 
              placeholder="email@example.com"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-[#00f2ff] outline-none"
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>
          <div>
            <label className="block text-gray-400 mb-2">Phone Number *</label>
            <input 
              type="tel" 
              required 
              pattern="[0-9]{10}"
              placeholder="1234567890"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-[#00f2ff] outline-none"
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
            />
          </div>
        </div>

        <div>
          <label className="block text-gray-400 mb-2">Project Details</label>
          <textarea 
            rows="4"
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-[#00f2ff] outline-none"
            onChange={(e) => setFormData({...formData, info: e.target.value})}
          />
        </div>

        <button type="submit" className="w-full py-4 bg-linear-to-r from-[#00f2ff] to-[#ad00ff] rounded-xl font-bold text-black transition-transform hover:scale-[1.02]">
          Send Message
        </button>
      </form>
    </main>
  );
};

export default Contact;