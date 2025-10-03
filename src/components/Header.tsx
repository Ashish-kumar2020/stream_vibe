import { BellDot, Menu, Mic, Plus, Search, UserRoundPen } from "lucide-react";

const Header = () => {
  return (
    <div className="w-full h-[60px] flex justify-between items-center px-4 shadow-sm">
      <div className="flex items-center space-x-4">
        <Menu className="cursor-pointer w-6 h-6" />
        <span className="font-bold text-lg cursor-pointer">StreamVibe</span>
      </div>


      <div className="flex items-center">
        <div className="relative flex items-center group">
          <div className="absolute inset-y-0 left-3 flex items-center text-gray-500 opacity-0 group-focus-within:opacity-100 transition-opacity duration-200">
            <Search className="w-5 h-5" />
          </div>
          <input
            id="searchbar"
            type="text"
            className="h-[40px] w-[500px] text-[14px] rounded-l-full border border-gray-300 pl-10 pr-4 focus:outline-none"
            placeholder="Search"
          />
        </div>
        <div className="w-[60px] h-[40px] border border-gray-300 rounded-r-full cursor-pointer flex items-center justify-center bg-gray-100 hover:bg-gray-200">
          <Search className="w-5 h-5" />
        </div>
        <div className="cursor-pointer flex items-center justify-center bg-gray-100 hover:bg-gray-200 ml-3 w-[40px] h-[40px] rounded-full">
          <Mic className="w-5 h-5" />
        </div>
      </div>


      <div className="flex items-center space-x-5">
        <div className="flex items-center gap-2 px-3 h-[40px] border border-gray-300 rounded-full cursor-pointer bg-gray-100 hover:bg-gray-200">
          <Plus className="w-5 h-5" />
          <span className="text-sm font-medium text-[14px]">Create</span>
        </div>
        <BellDot className="w-6 h-6 cursor-pointer" />
        <UserRoundPen className="w-6 h-6 cursor-pointer" />
      </div>
    </div>
  );
};

export default Header;
