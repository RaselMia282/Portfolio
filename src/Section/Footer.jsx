import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
// import useVisitorCount from "../hooks/useVisitorCount";
import { FiUsers } from "react-icons/fi";
import { useEffect, useState } from "react";
import { doc, onSnapshot, collection } from "firebase/firestore";
import db from "../firebase/firestore";
import FadeInView from "../Components/FadeInView";
import emailjs from "@emailjs/browser";
import toast from 'react-hot-toast';

const Footer = () => {
  const [totalVisitors, setTotalVisitors] = useState(0);
  const [countries, setCountries] = useState([]);
  const [showCountries, setShowCountries] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    const unsubscribe = onSnapshot(doc(db, "stats", "visitors"), (snapshot) => {
      if (snapshot.exists()) {
        setTotalVisitors(snapshot.data().total);
      }
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "countries"), (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      data.sort((a, b) => b.visits - a.visits);

      setCountries(data);
    });

    return () => unsubscribe();
  }, []);

  // email right arrow

  const sendSubscription = () => {
    if (!email) {
      toast.success("Please enter your email!");
      return;
    }

    const templateParams = {
      user_email: email,
      to_name: "Rasel",
      message: "New portfolio request from: " + email,
    };

    emailjs
      .send(
        "service_vr12q82",
        "template_v7uk9fc",
        templateParams,
        "fSokwKbU3-Rej3OHm",
      )
      .then(
        () => {
          toast.success("Email send  successfully!",);
          setEmail("");
        },
        () => {
          toast.error("Failed to send, please try again.",);
        },
      );
  };

  return (
    
    <FadeInView>
     
      <footer className="bg-[#020617] text-gray-400 py-12">
        <div className="container mx-auto px-6">
          {/* মেইন কন্টেন্ট */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {/* লোগো ও ডেসক্রিপশন */}
            <div className="col-span-1">
              <h2 className="text-2xl font-bold mb-4 text-white">RJ.</h2>
              <p className="text-gray-400 mb-6 text-sm">
                Full-stack developer building fast, scalable web apps with
                modern tools.
              </p>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="p-2 border border-gray-700 rounded hover:bg-gray-800"
                >
                  <FaGithub />
                </a>
                <a
                  href="#"
                  className="p-2 border border-gray-700 rounded hover:bg-gray-800"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="#"
                  className="p-2 border border-gray-700 rounded hover:bg-gray-800"
                >
                  <FaTwitter />
                </a>
              </div>
            </div>

            {/* নেভিগেশন - সায়ান */}
            <div>
              <h3 className="font-bold text-cyan-500 mb-4 uppercase tracking-wider text-xs">
                Navigate
              </h3>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-cyan-400 cursor-pointer">Home</li>
                <li className="hover:text-cyan-400 cursor-pointer">About</li>
                <li className="hover:text-cyan-400 cursor-pointer">Skills</li>
                <li className="hover:text-cyan-400 cursor-pointer">Projects</li>
              </ul>
            </div>

            {/* কানেক্ট */}
            <div>
              <h3 className="font-bold text-cyan-400 mb-4 uppercase tracking-wider text-xs">
                Connect
              </h3>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-white cursor-pointer">Contact</li>
                <li className="hover:text-white cursor-pointer">Resume</li>
                <li className="hover:text-white cursor-pointer">Blog</li>
              </ul>
            </div>

            {/* ইমেইল সাবস্ক্রাইব */}
            <div>
              <h3 className="font-bold text-cyan-400 mb-4 uppercase tracking-wider text-xs">
                Stay Updated
              </h3>
              <div className="flex gap-2">
                <input
                  type="email" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className=" border rounded px-3 py-2 w-full text-white"
                />
                <button
                  onClick={sendSubscription}
                  className=" px-4 rounded hover:bg-cyan-500 text-white cursor-pointer"
                >
                  →
                </button>
              </div>
            </div>
          </div>

          {/* বটম সেকশন */}
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © 2026 Rasel. All rights reserved.
            </p>

            <div className="flex items-center gap-5">
              <div className="relative">
                <button
                  onClick={() => setShowCountries(!showCountries)}
                  className="flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-2 hover:bg-purple-500/20 transition"
                >
                  <span>🌍</span>

                  <span className="text-sm text-gray-300">Countries</span>

                  <span className="font-semibold text-purple-400">
                    {countries.length}
                  </span>
                </button>

                {showCountries && (
                  <>
                    
                    <div
                      className="fixed inset-0 z-[60] md:hidden"
                      onClick={() => setShowCountries(false)}
                    ></div>

                    {/* পপ-আপ বক্স */}
                    <div className="fixed  bottom-20 right-4 z-[70] w-[90%] max-w-sm rounded-2xl border border-white/10 bg-[#0f172a] p-4 shadow-2xl md:absolute md:bottom-14 md:right-0 md:w-72">
                      <h4 className="mb-3 text-sm font-semibold text-white">
                        Visitors by Country
                      </h4>

                      <div className="max-h-60 overflow-y-auto space-y-2">
                        {countries.map((country) => (
                          <div
                            key={country.id}
                            className="flex items-center justify-between rounded-lg px-2 py-2 hover:bg-white/5"
                          >
                            <div className="flex items-center gap-2">
                              <span className="text-lg">{country.flag}</span>
                              <span className="text-sm text-gray-300">
                                {country.country}
                              </span>
                            </div>
                            <span className="text-cyan-400 cursor-pointer font-medium">
                              {country.visits}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </div>

              <div className="flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2">
                <FiUsers className="text-cyan-400" />

                <span className="text-sm text-gray-300">Visitors</span>

                <span className="font-semibold  text-cyan-400">
                  {totalVisitors}
                </span>
              </div>

              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="border border-gray-700 p-2 rounded-lg hover:bg-gray-800 transition cursor-pointer"
              >
                ↑
              </button>
            </div>
          </div>
        </div>
      </footer>
    </FadeInView>
  );
};

export default Footer;

