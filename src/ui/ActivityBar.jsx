import {
  VscFiles,
  VscSearch,
  VscSourceControl,
  VscExtensions,
  VscAccount,
  VscSettingsGear,
} from "react-icons/vsc";

const ActivityBar = () => {
  return (
    <div className="flex h-full w-14 flex-col items-center justify-between border-r border-white/10 bg-[#181818] py-3">
      {/* Top Icons */}
      <div className="flex flex-col items-center gap-4">
        <button className="border-l-2 border-cyan-400 pl-2 text-cyan-400">
          <VscFiles size={22} />
        </button>

        <button className="text-gray-500 transition hover:text-white">
          <VscSearch size={22} />
        </button>

        <button className="text-gray-500 transition hover:text-white">
          <VscSourceControl size={22} />
        </button>

        <button className="text-gray-500 transition hover:text-white">
          <VscExtensions size={22} />
        </button>
      </div>

      {/* Bottom Icons */}
      <div className="flex flex-col items-center gap-4">
        <button className="text-gray-500 transition hover:text-white">
          <VscAccount size={22} />
        </button>

        <button className="text-gray-500 transition hover:text-white">
          <VscSettingsGear size={22} />
        </button>
      </div>
    </div>
  );
};

export default ActivityBar;