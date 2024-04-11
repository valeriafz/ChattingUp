import Conversations from "./Conversations";
import LogOut from "./LogOut";
import SearchInput from "./SearchInput";

const Sidebar = () => {
  return (
    <div className="p-4 flex flex-col border-r border-slate-700">
      <SearchInput />
      <div className="divider px-3" />
      <Conversations />
      <LogOut />
    </div>
  );
};

export default Sidebar;
