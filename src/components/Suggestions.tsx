import { useState } from "react";

const Suggestions = () => {
  const suggestion = [
    { title: "All", default: true },
    { title: "Sports", default: false },
    { title: "GTA V", default: false },
    { title: "India", default: false },
    { title: "Podcast", default: false },
    { title: "Apple", default: false },
    { title: "Iphone", default: false },
    { title: "Development", default: false },
    { title: "Web Development", default: false },
    { title: "Action", default: false },
    { title: "Arcade", default: false },
    { title: "Cricket", default: false },
    { title: "Virat Kholi", default: false },
    { title: "Start up", default: false },
    { title: "Music", default: false },
    { title: "Sports", default: false },
    { title: "Food", default: false },
    { title: "Remote Jobs", default: false },
    { title: "Frontend Development", default: false },
    { title: "Backend Development", default: false },
    { title: "Full Stack Development", default: false },
  ];

  const [selected, setSelected] = useState(
    suggestion.find((s) => s.default)?.title || "All"
  );
  return (
    <div className="mt-1 h-12 w-full flex items-center overflow-x-auto no-scrollbar">
      <div className="flex space-x-2 px-2">
        {suggestion.map((t, index) => (
          <div
            onClick={() => setSelected(t.title)}
            key={index}
            className={`inline-flex items-center h-[32px] px-3 border bg-gray-200 rounded-[8px] cursor-pointer text-sm whitespace-nowrap ${
              selected === t.title
                ? "bg-gray-300 font-medium"
                : "border-transparent hover:bg-gray-300"
            }`}
          >
            <span key={t.title} className="">
              {t.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Suggestions;
