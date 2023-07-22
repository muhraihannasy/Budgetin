import { BsBell } from "react-icons/bs";

const Header = () => {
  return (
    <header className="mt-4 flex items-center justify-between absolute w-full px-4 text-white">
      <a href="" className="flex items-center gap-3">
        <div className="w-[2.5em] h-[2.5em] bg-slate-200 rounded-full"></div>
        <span className="font-bold">Budgetin</span>
      </a>

      <span className="text-[1.6em]">
        <BsBell />
      </span>
    </header>
  );
};

export default Header;
