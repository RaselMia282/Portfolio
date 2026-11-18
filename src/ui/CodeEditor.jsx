const getTokenStyle = (line) => {
  if (line.trim().startsWith("const")) return "text-cyan-400";
  if (line.trim().startsWith("export")) return "text-purple-400";
  if (line.trim().startsWith("import")) return "text-purple-400";
  if (line.includes("true") || line.includes("false")) return "text-orange-400";
  if (line.includes("return")) return "text-pink-400";
  if (
    line.includes("name:") ||
    line.includes("role:") ||
    line.includes("status:") ||
    line.includes("location:") ||
    line.includes("experience:") ||
    line.includes("skills:")
  )
    return "text-green-400";
  if (line.includes('"')) return "text-yellow-300";
  return "text-gray-300";
};

const CodeEditor = ({ code = [] }) => {
  return (
    /* মেইন ফিক্স: h-[320px] দিয়ে মোবাইলেও হাইট ফিক্সড করা হলো এবং overflow-y-auto দেওয়া হলো 
       যাতে মোবাইলেও ফাইল চেঞ্জ হলে হাইট না বাড়ে-কমে, বরং ভেতরের কন্টেন্ট স্ক্রল হয়। */
    <div className="h-[320px] lg:h-[420px] w-full max-w-full overflow-x-auto overflow-y-auto bg-[#0B1120] scrollbar-none">
      <div className="w-full min-w-0 p-4 sm:p-5 lg:p-6 pb-12 sm:pb-12 lg:pb-16 font-mono text-[13px] sm:text-[14px] leading-6 sm:leading-7">
        {code.map((line, index) => (
          <div key={index} className="group flex hover:bg-white/5 w-full">
            {/* Line Number */}
            <span className="mr-4 sm:mr-6 w-6 sm:w-8 select-none text-right text-gray-600 group-hover:text-gray-400 shrink-0">
              {index + 1}
            </span>

            {/* Code */}
            <span className="whitespace-pre overflow-x-auto">
              <span className={getTokenStyle(line)}>{line || " "}</span>
            </span>
          </div>
        ))}

        {/* Cursor */}
        <div className="mt-2 flex">
          <span className="mr-4 sm:mr-6 w-6 sm:w-8 shrink-0"></span>
          <span className="h-5 w-[2px] animate-pulse bg-cyan-400"></span>
        </div>
      </div>
    </div>
  );
};

export default CodeEditor;