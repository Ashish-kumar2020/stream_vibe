import {
  AudioWaveform,
  Clock8,
  Download,
  Film,
  Heart,
  History,
  House,
  LibraryBig,
  ListPlus,
  Podcast,
  Video,
} from "lucide-react";
import { useState } from "react";
import OptionsPage from "../pages/SideBar/OptionsPage";
import type { Option, YouOptions } from "../types/OptionsTypes";

const SideNavBar = () => {
  const options: Option[] = [
    { title: "Home", icon: <House />, default: true },
    { title: "Shorts", icon: <Film />, default: false },
    { title: "Subscription", icon: <Podcast />, default: false },
    { title: "YouTube Music", icon: <AudioWaveform />, default: false },
  ];

  const youOptions: YouOptions[] = [
    { title: "History", icon: <History /> },
    { title: "Playlist", icon: <ListPlus /> },
    { title: "Your Videos", icon: <Video /> },
    { title: "Your Courses", icon: <LibraryBig /> },
    { title: "Your Podcast", icon: <Podcast /> },
    { title: "Watch Later", icon: <Clock8 /> },
    { title: "Liked Videos", icon: <Heart /> },
    { title: "Downloads", icon: <Download /> },
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
        <hr className="mt-4" />

        <div className="mt-4">
        <ul className="space-y-2">{
            youOptions.map((option) => (
                <OptionsPage
                    key={option.title}
                    option={option}
                    selected={selected}
                    setSelected={setSelected}
                />
            ))
        }</ul>
        </div>
      </div>
    </div>
  );
};

export default SideNavBar;
