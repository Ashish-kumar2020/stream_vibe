import {
  AudioWaveform,
  Award,
  Clock8,
  Download,
  Drum,
  Film,
  FilmIcon,
  Handbag,
  Heart,
  History,
  House,
  Joystick,
  LibraryBig,
  ListPlus,
  Music,
  Newspaper,
  Podcast,
  School,
  ShoppingBasket,
  Video,
} from "lucide-react";
import { useState } from "react";
import OptionsPage from "../pages/SideBar/OptionsPage";
import type { Explore, Option, YouOptions } from "../types/OptionsTypes";

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

  // Shopping Music Films Live Gaming News Sport Courses Fashion & beauty Podcast
  const explore : Explore[] = [
    {title: "Shopping", icon : <ShoppingBasket/>},
    {title: "Music" , icon : <Music/>},
    {title: "Films" ,icon: <FilmIcon/>},
    {title: "Live Gaming", icon: <Joystick/>},
    {title: "News", icon: <Newspaper/>},
    {title: "Sports" , icon: <Award/>},
    {title : "Courses", icon: <School/>},
    {title: "Fashion", icon: <Handbag/>},
    {title: "Beauty", icon:<Drum/>},
    {title: "Podcast", icon: <Podcast/>}
  ]
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
        }
        </ul>
        <hr className="mt-4" />
        </div>

        <div className="mt-4">
        <ul className="space-y-2">{
            explore.map((option) => (
                <OptionsPage
                    key={option.title}
                    option={option}
                    selected={selected}
                    setSelected={setSelected}
                />
            ))
        }
        </ul>
        <hr className="mt-4" />
        </div>
      </div>
    </div>
  );
};

export default SideNavBar;
