import {
  VscChromeMinimize,
  VscChromeMaximize,
  VscChromeClose,
  VscCode,
} from "react-icons/vsc";

const WindowHeader = () => {
  return (
    // bg-[#1E293B]/20 বা bg-[#0f172a] দিয়ে মেইন কার্ডের সাথে ম্যাচ করানো হয়েছে
    <div className="flex h-12 w-full min-w-0 items-center justify-between border-b border-white/5 bg-[#0f172a] px-4 sm:h-14 sm:px-5 select-none">
      {/* macOS Buttons */}
      <div className="flex items-center gap-2 shrink-0">
        <span className="h-3 w-3 rounded-full bg-[#FF5F57]"></span>
        <span className="h-3 w-3 rounded-full bg-[#FEBC2E]"></span>
        <span className="h-3 w-3 rounded-full bg-[#28C840]"></span>
      </div>

      {/* Center Title */}
      <div className="flex flex-1 items-center justify-center gap-2 overflow-hidden px-4 min-w-0">
        <VscCode size={18} className="shrink-0 text-cyan-400" /> {/* বর্ডারের থিমের সাথে মিলিয়ে Cyan করা হয়েছে */}

        <span className="truncate text-xs font-medium text-gray-400 sm:text-sm">
          Portfolio — Visual Studio Code
        </span>
      </div>

      {/* Right Controls */}
      <div className="hidden items-center gap-4 text-gray-400 lg:flex shrink-0">
        <button className="transition hover:text-white">
          <VscChromeMinimize size={16} />
        </button>

        <button className="transition hover:text-white">
          <VscChromeMaximize size={16} />
        </button>

        <button className="transition hover:text-red-400">
          <VscChromeClose size={16} />
        </button>
      </div>
    </div>
  );
};

export default WindowHeader;