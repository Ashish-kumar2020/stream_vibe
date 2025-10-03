import Header from "./components/Header";
import SideNavBar from "./components/SideNavBar";
import Suggestions from "./components/Suggestions";
import VideoCard from "./components/VideoCard";

export default function App() {
  return (
    <>
      <Header />
      <div>
        <div className="flex">
        <SideNavBar />
        <Suggestions />

        </div>
        <div className="relative top-[-716px] left-[220px]">
        <VideoCard/>
        

        </div>
      </div>

    </>
  );
}
