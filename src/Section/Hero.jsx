import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import Container from "../Components/Container";
import WorkspaceCard from "../ui/WorkspaceCard";
import GlowBorder from "../Components/glowboder/Glowboder";
import FadeInView from "../Components/FadeInView";
const Hero = () => {
  return (
<FadeInView>
    <section id="home" className="flex items-center pt-24 pb-16 lg:min-h-screen w-full overflow-x-hidden bg-[#070b15]">
      <Container>
        
        <div className="grid items-center gap-12 grid-cols-1 lg:grid-cols-2 w-full">
          
          {/* Left Side (Text Content) */}
          <div className="text-center lg:text-left flex flex-col justify-center order-1 lg:order-1">
            <div className="inline-flex w-fit mx-auto lg:mx-0 items-center gap-3 rounded-full border border-green-500/30 bg-green-500/10 px-5 py-2.5 text-sm font-semibold text-green-400 shadow-[0_0_25px_rgba(34,197,94,.15)]">
              <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-green-400"></span>
              Available for Work
            </div>

            <h1 className="mt-8 text-5xl font-black leading-[1.05] tracking-tight text-white sm:text-6xl">
              Rasel<br />Hossain<br /><span className="text-cyan-400">Jibon</span>
            </h1>

            <div className="mt-6 h-12">
              <TypeAnimation
                sequence={["Full Stack Developer", 2000, "MERN Stack Developer", 2000, "React Developer", 2000]}
                wrapper="h2"
                speed={50}
                repeat={Infinity}
                className="text-2xl font-bold text-pink-400 sm:text-3xl"
              />
            </div>

            <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-gray-400 lg:mx-0">
              I craft modern, fast and scalable web applications using React, Next.js, Node.js, Express.js and MongoDB.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">

              <a href="#projects">
              <button  className="rounded-xl w-full bg-cyan-500 cursor-pointer px-8 py-4 font-semibold text-black shadow-[0_0_35px_rgba(34,211,238,.35)]">Explore Projects</button>
              </a>

              <a href="../../public/resume.pdf"
                download="Rasel_Mia_Resume.pdf">
              <button className="rounded-xl w-full border border-cyan-400 px-8 py-4 font-semibold text-cyan-400 cursor-pointer">Download Resume</button>
              </a>

            </div>

            <div className="mt-8 flex justify-center gap-4 lg:justify-start">

              <GlowBorder>
                <a href="https://github.com/RaselMia282" 
                target="_blank"
                rel="noopener noreferrer"
                 className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-[#101828] text-gray-300"><FaGithub size={20} /></a>

              </GlowBorder>
              
                <GlowBorder>
                  <a href="#" className="flex h-12 w-12 items-xl justify-center rounded-xl items-center border  border-white/10 bg-[#101828] text-gray-300"><FaLinkedin  size={20} /></a>
                </GlowBorder>
             

              <GlowBorder>
                <a href="#" className="flex h-12 w-12 items-xl justify-center rounded-xl border items-center border-white/10 bg-[#101828] text-gray-300"><FaWhatsapp size={20} /></a>
              </GlowBorder>

            </div>
          </div>

          {/* Right Side (VS Code Card) */}
          <div className="w-full max-w-full lg:max-w-2xl mx-auto order-2 lg:order-2 flex flex-col justify-center">
            <WorkspaceCard />
          </div>

        </div>
      </Container>
    </section>
    </FadeInView>

  );
};

export default Hero;
