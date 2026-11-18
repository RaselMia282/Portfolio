const AnimatedBorderCard = ({ children, className = "" }) => {
  return (
    <div className={`relative p-[2px] overflow-hidden rounded-2xl bg-slate-950 flex items-center justify-center isolation-isolate ${className}`}>
      
      {/* অ্যানিমেশন বর্ডার */}
      <div className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_0deg,#00f2fe,#9b51e0,#00f2fe)]" />
      
      {/* কন্টেন্ট এরিয়া */}
      <div className="relative w-full h-full bg-[#0d131f] rounded-[14px] z-10">
        {children}
      </div>

    </div>
  );
};

export default AnimatedBorderCard;