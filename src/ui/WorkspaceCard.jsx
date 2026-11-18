import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import WindowHeader from "./WindowHeader";
import CodeTabs from "./CodeTabs";
import Explorer from "./Explorer";
import CodeEditor from "./CodeEditor";
import StatusBar from "./StatusBar";
import files from "./Files";
import ActivityBar from "./ActivityBar";

const WorkspaceCard = () => {
  const [activeFile, setActiveFile] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFile((prev) => (prev + 1) % files.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-full p-[2px] overflow-hidden rounded-3xl bg-slate-950 flex items-stretch justify-center isolation-isolate shadow-[0_0_45px_rgba(34,211,238,.08)] box-border">
      
      {/* ঘূর্ণায়মান বর্ডার */}
      <div 
        className="absolute inset-[-150%] animate-[spin_5s_linear_infinite] pointer-events-none"
        style={{
          background: 'conic-gradient(from 0deg, #00ffff, #6366f1, #00ffff)',
        }}
      />

      {/* ভেতরের উইন্ডো বডি */}
      <div className="relative w-full h-full bg-[#0B1120] rounded-[22px] overflow-hidden z-10 flex flex-col justify-between">
        
        <div className="w-full shrink-0">
          <WindowHeader />
          <CodeTabs
            files={files}
            activeFile={activeFile}
            setActiveFile={setActiveFile}
          />
        </div>

        {/* এডিটর এরিয়া: এখানে h-auto করা হয়েছে যাতে এডিটরের ফিক্সড হাইটটা পারফেক্টলি সেট হয় */}
        <div className="flex flex-1 h-auto w-full min-w-0 items-stretch">
          <div className="hidden lg:block shrink-0">
            <ActivityBar />
          </div>

          <div className="hidden lg:block shrink-0 w-44 border-r border-white/5">
            <Explorer
              files={files}
              activeFile={activeFile}
              setActiveFile={setActiveFile}
            />
          </div>

          <div className="min-w-0 flex-1 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFile}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
                className="w-full"
              >
                <CodeEditor code={files[activeFile].code} />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="w-full shrink-0">
          <StatusBar />
        </div>
      </div>
    </div>
  );
};

export default WorkspaceCard;