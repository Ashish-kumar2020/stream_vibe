import Header from "./components/Header";
import SideNavBar from "./components/SideNavBar";
import Suggestions from "./components/Suggestions";

export default function App() {
  return (
    <>
      <Header />
      <div className="flex">
        <SideNavBar />
        <Suggestions />
      </div>
    </>
  );
}
