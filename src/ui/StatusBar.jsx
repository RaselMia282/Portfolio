const StatusBar = () => {
  return (
    <div className="flex h-9 items-center justify-between bg-[#007ACC] px-3 text-[11px] text-white sm:px-4 sm:text-xs">
      <div className="flex items-center gap-3 sm:gap-5">
        <span>UTF-8</span>
        <span>JavaScript</span>
        <span className="hidden md:inline">Prettier</span>
      </div>

      <div className="flex items-center gap-2">
        <span className="h-2 w-2 animate-pulse rounded-full bg-green-300"></span>
        <span>Live</span>
      </div>
    </div>
  );
};

export default StatusBar;