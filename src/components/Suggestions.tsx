import { useState } from "react";
import SuggestionPage from "../pages/Suggestion/SuggestionPage";

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
         <SuggestionPage
            key={index}
            t={t}
            selected={selected}
            setSelected={setSelected}
            index={index}
         />
        ))}
      </div>
    </div>
  );
};

export default Suggestions;
