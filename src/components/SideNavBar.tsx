import { AudioWaveform, Film, House, Podcast } from "lucide-react";
import { useState } from "react";
import OptionsPage from "../pages/SideBar/OptionsPage";
import type { Option } from "../types/OptionsTypes";

const SideNavBar = () => {
    
  const options: Option[] = [
    { title: "Home", icon: <House />, default: true },
    { title: "Shorts", icon: <Film />, default: false },
    { title: "Subscription", icon: <Podcast />, default: false },
    { title: "YouTube Music", icon: <AudioWaveform />, default: false },
  ];

  const [selected, setSelected] = useState(
    options.find((o) => o.default)?.title || "Home"
  );
  return (
    <div className="w-[250px] h-screen">
      <div className="p-3">
        <ul className="space-y-2">
          {options.map((option) => (

            <OptionsPage 
                key={option.title}
                option={option}
                selected={selected}
                setSelected={setSelected}
            />
            
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideNavBar;

/*
element.style {
    width: 220px;
    border: 1px solid;
    height: 40px;
    padding: 8px;
    border-radius: 10px;
}
*/
