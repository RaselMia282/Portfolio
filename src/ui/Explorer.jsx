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

const Explorer = ({ files, activeFile, setActiveFile }) => {
  return (
    
    <aside className="h-full w-full bg-[#0D1527]">
      <div className="border-b border-white/5 px-5 py-4">
        <h3 className="text-xs font-semibold uppercase tracking-widest text-gray-500">
          Explorer
        </h3>
      </div>

      <div className="py-2">
        {files.map((file, index) => (
          <button
            key={file.id}
            onClick={() => setActiveFile(index)}
            className={`flex w-full items-center gap-3 px-5 py-2.5 text-left text-sm transition-all duration-200 ${
              activeFile === index
                ? "border-l-2 border-cyan-400 bg-cyan-500/10 text-white font-medium"
                : "text-gray-400 hover:bg-white/5 hover:text-white"
            }`}
          >
            {getIcon(file.name)}

            <span className="truncate">
              {file.name}
            </span>
          </button>
        ))}
      </div>
    </aside>
  );
};

export default Explorer;