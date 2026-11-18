const SkillsContent = () => {
  return (
    <div>
      {/* Section Tag */}
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
        My Skills
      </p>

      {/* Heading */}
      <h2 className="mt-5 text-4xl font-bold text-white md:text-5xl">
        Technologies I Use
        <br />
        To Build Modern Apps
      </h2>

      {/* Description */}
      <p className="mt-8 leading-8 text-gray-400">
        I specialize in building modern, responsive and scalable web
        applications using the MERN Stack. My focus is writing clean,
        maintainable code while delivering fast and beautiful user experiences.
      </p>

      {/* here will be something */}
      <div className="mt-10 grid grid-cols-2 gap-8">
        <div>
          <h3 className="text-4xl font-bold text-cyan-400">20+</h3>
          <p className="mt-2 text-gray-400">Technologies</p>
        </div>

        <div>
          <h3 className="text-4xl font-bold text-cyan-400">15+</h3>
          <p className="mt-2 text-gray-400">Projects Built</p>
        </div>

        <div>
          <h3 className="text-4xl font-bold text-cyan-400">Clean</h3>
          <p className="mt-2 text-gray-400">Code Quality</p>
        </div>

        <div>
          <h3 className="text-4xl font-bold text-cyan-400">Fast</h3>
          <p className="mt-2 text-gray-400">Performance</p>
        </div>
      </div>
    </div>
  );
};

export default SkillsContent;
