import { FaCode, FaLaptopCode, FaRocket } from "react-icons/fa";
import Container from "../Components/Container";
import AnimatedBorder from "../Components/AnimatedBorder";
import img from "../assets/portfolio-img.jpeg";
import FadeInView from "../Components/FadeInView";
const About = () => {
  return (
    <FadeInView>
      <section id="about" className="py-16">
        <Container>
          <div className="flex flex-col lg:flex-row gap-16 items-start lg:items-end w-full">
            <div className="w-full lg:w-1/2">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
                About Me
              </p>

              <div className="my-5 relative w-28 h-28 overflow-hidden rounded-full border-2 border-cyan-400/30 bg-[#0B1120] shadow-[0_0_20px_rgba(34,211,238,.15)] shrink-0">
                <img
                  src={img} // এখানে তোমার ইমেজের পাথ বসিয়ে দাও
                  alt="Rasel Hossain Jibon"
                  className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-300 scale-100 hover:scale-105"
                />
              </div>

              <h2 className="text-4xl font-bold text-white md:text-5xl">
                Passionate Full Stack Developer
              </h2>

              <p className="mt-8 leading-8 text-gray-400">
                I'm Rasel Hossain Jibon, a Full Stack Developer from Bangladesh.
                I enjoy building modern, responsive and high-performance web
                applications using React, Next.js, Node.js, Express.js and
                MongoDB.
              </p>

              <p className="mt-6 leading-8 text-gray-400">
                I love solving real-world problems through clean code and
                user-friendly interfaces. My goal is to work with international
                clients and build products that create real impact.
              </p>

              {/* বাটন/কার্ড সেকশন */}
              <div className="mt-10 grid gap-5 grid-cols-1 sm:grid-cols-2">
                <AnimatedBorder>
                  <div className="relative w-full h-full bg-[#0d131f] rounded-[14px] z-10 p-6">
                    <h3 className="text-xl font-bold mb-2 text-white">
                      Tech Focus
                    </h3>
                    <p className="text-gray-400">
                      Specializing in building responsive, scalable full-stack
                      applications using the latest tech stack.
                    </p>
                  </div>
                </AnimatedBorder>

                <AnimatedBorder>
                  <div className="rounded-2xl p-5">
                    <h3 className="text-lg font-semibold text-white">Goal</h3>
                    <p className="mt-2 text-gray-400">
                      Building scalable products for global companies.
                    </p>
                  </div>
                </AnimatedBorder>
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <div className="rounded-3xl border border-cyan-500/20 bg-[#0B1120] p-8 shadow-[0_0_40px_rgba(34,211,238,.08)]">
                <div className="space-y-8">
                  <div className="flex items-start gap-5">
                    <div className="rounded-xl bg-cyan-500/10 p-4 text-cyan-400">
                      <FaCode size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">
                        Clean Code
                      </h3>
                      <p className="mt-2 text-gray-400 leading-7">
                        Writing maintainable, reusable and scalable code
                        following modern best practices.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="rounded-xl bg-cyan-500/10 p-4 text-cyan-400">
                      <FaLaptopCode size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">
                        Modern Development
                      </h3>
                      <p className="mt-2 text-gray-400 leading-7">
                        Building responsive web applications using React,
                        Next.js, Node.js, Express.js and MongoDB.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="rounded-xl bg-cyan-500/10 p-4 text-cyan-400">
                      <FaRocket size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">
                        Continuous Learning
                      </h3>
                      <p className="mt-2 text-gray-400 leading-7">
                        Constantly learning new technologies and improving my
                        skills to build faster, scalable and user-friendly
                        applications.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </FadeInView>
  );
};

export default About;
