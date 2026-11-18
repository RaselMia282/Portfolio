import {
  SiReact,
  SiJavascript,
  SiTypescript,
} from "react-icons/si";
import { HiOutlineTerminal } from "react-icons/hi";
import { TbApi } from "react-icons/tb";

const getIcon = (name) => {
  if (name.endsWith(".jsx"))
    return <SiReact className="text-sky-400" size={16} />;

  if (name.endsWith(".js"))
    return <SiJavascript className="text-yellow-400" size={16} />;

  if (name.endsWith(".ts"))
    return <SiTypescript className="text-blue-400" size={16} />;

  if (name.endsWith(".http"))
    return <TbApi className="text-green-400" size={16} />;

  if (name.endsWith(".sh"))
    return <HiOutlineTerminal className="text-gray-300" size={16} />;

  return <SiJavascript className="text-yellow-400" size={16} />;
};

const CodeTabs = ({ files, activeFile, setActiveFile }) => {
  return (
   
    <div className="w-full max-w-full overflow-x-auto border-b border-white/5 bg-[#0f172a] scrollbar-none select-none">
      <div className="flex w-max min-w-full">
        {files.map((file, index) => (
          <button
            key={file.id}
            onClick={() => setActiveFile(index)}
            className={`flex items-center gap-2 border-r border-white/5 px-4 py-2.5 text-xs sm:text-sm transition-all duration-300 ${
              activeFile === index
                ? "bg-[#0B1120] text-white font-medium border-t-2 border-t-cyan-400" 
                : "text-gray-400 hover:bg-[#1e293b]/50 hover:text-white"
            }`}
          >
            <span className="shrink-0">{getIcon(file.name)}</span>

            <span className="whitespace-nowrap">
              {file.name}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CodeTabs;