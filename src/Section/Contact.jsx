import { useState } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import { FaEnvelope, FaMapMarkerAlt, FaCheckCircle, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    
   
    const loadingToast = toast.loading("Sending your message...");

    emailjs.sendForm('service_vr12q82', 'template_v7uk9fc', e.target, 'fSokwKbU3-Rej3OHm')
      .then(() => {
        setLoading(false);
        toast.dismiss(loadingToast);
        toast.success("Message sent successfully!");
        e.target.reset();
      }, (error) => {
        setLoading(false);
        toast.dismiss(loadingToast);
        toast.error("Failed to send. Please try again.",error);
      });
  };

  return (
    <section id="contact" className="py-12 bg-[#020617] text-white">
      <Toaster position="top-right" reverseOrder={false} />
      
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Info */}
        <div>
          <h4 className="text-cyan-500 font-semibold mb-2 uppercase tracking-widest text-sm">Get in touch</h4>
          <h2 className="text-5xl font-bold mb-6">Let's build something great together</h2>
          <p className="text-gray-400 mb-8">Have a project in mind or just want to say hi? My inbox is always open.</p>
          
          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-4 text-gray-300">
              <FaEnvelope className="text-cyan-500 text-xl" /> <span>raselhossainjibon849@gmail.com</span>
            </div>
            <div className="flex items-center gap-4 text-gray-300">
              <FaMapMarkerAlt className="text-cyan-500 text-xl" /> <span>Dhaka, Bangladesh</span>
            </div>
            <div className="flex items-center gap-4 text-emerald-500">
              <FaCheckCircle className="text-xl" /> <span>Available for new projects</span>
            </div>
          </div>

          <div className="flex gap-4">
            <a href="#" className="p-3 bg-white/5 rounded-lg hover:bg-cyan-600 transition-all text-xl"><FaGithub /></a>
            <a href="#" className="p-3 bg-white/5 rounded-lg hover:bg-cyan-600 transition-all text-xl"><FaLinkedin /></a>
            <a href="#" className="p-3 bg-white/5 rounded-lg hover:bg-cyan-600 transition-all text-xl"><FaTwitter /></a>
          </div>
        </div>

        {/* Right Side: Form */}
        <form onSubmit={sendEmail} className="bg-[#0a101f] p-8 rounded-2xl border border-white/10 shadow-2xl space-y-4">
          <input 
            type="text" 
            name="name" 
            placeholder="Your name" 
            required 
            className="w-full p-4 bg-transparent border border-white/10 rounded-lg outline-none focus:border-cyan-500 transition-all" 
          />
          <input 
            type="email" 
            name="email" 
            placeholder="name@company.com" 
            required 
            className="w-full p-4 bg-transparent border border-white/10 rounded-lg outline-none focus:border-cyan-500 transition-all" 
          />
          <textarea 
            name="message" 
            rows="4" 
            placeholder="Tell me about your project" 
            required 
            className="w-full p-4 bg-transparent border border-white/10 rounded-lg outline-none focus:border-cyan-500 transition-all"
          ></textarea>
          
          <button 
            disabled={loading} 
            className="w-full py-4 bg-white cursor-pointer text-black font-bold rounded-lg hover:bg-cyan-500 hover:text-white transition-all transform active:scale-95"
          >
            {loading ? "Sending..." : "Send message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;