const BackgroundMesh = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* বাবল ১ */}
      <div className="absolute top-[10%] left-[20%] w-24 h-24 bg-blue-500 rounded-full mix-blend-screen filter blur-[40px] opacity-30 animate-bounce"></div>
      
      {/* বাবল ২ */}
      <div className="absolute top-[40%] right-[10%] w-32 h-32 bg-purple-500 rounded-full mix-blend-screen filter blur-[60px] opacity-30 animate-pulse delay-1000"></div>
      
      {/* বাবল ৩ */}
      <div className="absolute bottom-[20%] left-[40%] w-20 h-20 bg-cyan-500 rounded-full mix-blend-screen filter blur-[30px] opacity-30 animate-bounce delay-500"></div>

      {/* বাবল ৪ */}
      <div className="absolute top-[60%] left-[10%] w-28 h-28 bg-blue-400 rounded-full mix-blend-screen filter blur-[50px] opacity-10 animate-pulse"></div>
    </div>
  );
};

export default BackgroundMesh;