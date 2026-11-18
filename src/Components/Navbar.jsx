import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";
import Container from "./Container";

const navLinks = [
  { name: "Home", href: "home" },
  { name: "About", href: "about" },
  { name: "Skills", href: "skills" },
  { name: "Projects", href: "projects" },
  { name: "Services", href: "services" },
  { name: "Journey", href: "journey" },
  { name: "Contact", href: "contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-[#050816]/80 backdrop-blur-xl">
      <Container>
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link to="home" smooth={true} duration={500} className="text-3xl font-extrabold tracking-wide text-white cursor-pointer">
            R<span className="text-cyan-400">J.</span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                activeClass="active"
                className="text-sm font-medium text-gray-300 transition-all duration-300 hover:text-cyan-400 cursor-pointer"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Hire Me Button */}
          <div className="hidden lg:block">
            <button
              onClick={() => {
                window.location.href = "mailto:raselhossainjibon849@gmail.com?subject=Hiring Inquiry";
              }}
              className="rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-black shadow-[0_0_30px_rgba(34,211,238,.45)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_45px_rgba(34,211,238,.8)]"
            >
              Hire Me
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="text-2xl text-white lg:hidden cursor-pointer">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </Container>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="border-t border-white/10 bg-[#0B1120] lg:hidden"
          >
            <Container>
              <nav className="flex flex-col py-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    spy={true}
                    smooth={true}
                    offset={-80}
                    onClick={() => setIsOpen(false)}
                    className="border-b border-white/5 py-3 text-gray-300 transition hover:text-cyan-400 cursor-pointer"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;