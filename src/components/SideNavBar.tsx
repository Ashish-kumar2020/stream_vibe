import { AudioWaveform, Film, House, Podcast } from "lucide-react";
import { useState } from "react";

const SideNavBar = () => {
  //Home","Shorts","Subscription","YouTube Music"
  const options = [
    {
      title: "Home",
      icon: <House />,
      default: true,
    },
    {
      title: "Shorts",
      icon: <Film />,
      default: false,
    },
    {
      title: "Subscription",
      icon: <Podcast />,
      default: false,
    },
    {
      title: "YouTube Music",
      icon: <AudioWaveform />,
      default: false,
    },
  ];

  const [selected, setSelected] = useState(
    options.find((o) => o.default)?.title || "Home"
  );
  return (
    <div className="w-[250px] h-screen">
      <div className="p-3">
        <ul className="space-y-2">
          {options.map((option) => (
            <li
              key={option.title}
              onClick={() => setSelected(option.title)}
              className={`
                        flex items-center gap-3 w-full h-[40px] p-2 rounded-[10px] cursor-pointer text-[14px] text-[#0f0f0f]
                        ${
                          selected === option.title
                            ? "bg-gray-200 font-medium"
                            : "hover:bg-gray-200"
                        }
                    `}
            >
              <p>{option.icon}</p> <p>{option.title}</p>
            </li>
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
