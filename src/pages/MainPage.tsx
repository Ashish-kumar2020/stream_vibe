import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import SideNavBar from "../components/SideNavBar";
import Suggestions from "../components/Suggestions";

const MainPage = () => {
  return (
    <div className="h-screen flex flex-col">
      <div className="sticky top-0 z-20 bg-white shadow-sm">
        <Header />
      </div>

      <div className="flex flex-1">
        <div className="h-full overflow-y-auto">
          <SideNavBar />
        </div>
        <div className="flex-1 flex flex-col overflow-hidden">
          <div className="sticky z-10 bg-white border-b">
            <Suggestions />
          </div>
          <div className="flex-1 overflow-y-auto p-4">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
