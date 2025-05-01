import { useState,useEffect } from "react";

import logo from "../../assets/login-header-logo (1).png";


interface SideBarProps {
  isCollapsed: boolean;
  setIsCollapsed: (isCollapsed: boolean) => void;
  classNameProp?: string;
}
import { Home, BarChart, Settings, Info } from "lucide-react";
import {Link} from 'react-router';

export default function SideBar({
  isCollapsed,
  setIsCollapsed,
  classNameProp,
}: SideBarProps) {
    const [searchValue,setSearchValue] = useState('');
    const [matchingItems,setIsMatchingItems] = useState([]);
    const searchUrl = new URL(window.location.href);
    const location = searchUrl.pathname;
    const [activeLocation,setActiveLocation] = useState(location);

    useEffect(()=>{
      if(location == ""){
        setActiveLocation("/");
      }
      setActiveLocation(location);
      
    },[location])

    


    useEffect(()=>{
        const navItems = [
            { icon: <Home className="hover:text-white" size={25}  />, label: "Dashboard", path: "/" },
            { icon: <BarChart className="hover:text-white" size={25} />, label: "DepartmentUnits", path: "/DepartmentUnits" },
            { icon: <Settings className="hover:text-white" size={25} />, label: "Settings", path: "/settings" },
            { icon: <Info className="hover:text-white" size={25} />, label: "About", path: "/about" },
        ];
        
        if(searchValue != ""){
            const filteredItems = navItems.filter(item => item.label.toLowerCase().includes(searchValue.toLowerCase())) as [];
            setIsMatchingItems(filteredItems);
        }
        else{
            setIsMatchingItems(navItems as [])
        }
    },[searchValue])


    
    

  

  return (
    <div
      className={`${classNameProp} h-full bg-blue-900 text-white flex flex-col transition-[width] duration-100 ease-in-out overflow-hidden
        ${isCollapsed ? "w-16" : "w-56"}`}
    >
      {/* {Header} */}
      <div className="flex items-center justify-between px-4 py-4 mx-auto border-gray-700">
        {!isCollapsed ? (
          <h2
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="text-2xl font-bold flex items-center justify-between cursor-pointer"
          >
            <img
            src={logo}
            alt="Logo"
            height={40}
            width={40}
            />
            TheIOX
          </h2>
        ) : (
          <MenuIcon isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
        )}
      </div>
      {/* Search */}
      <div className={`flex justify-between items-center w-full ${isCollapsed ? "opacity-0" : "opacity-100"}  border-b-2 border-gray-700 pb-2 mx-1`}>
        {!isCollapsed && (
          <div className="flex items-center justify-between w-5/7 mx-auto rounded ">
            <SearchIcon />
            <input
              className="bg-transparent outline-none ml-2 font-bold text-white"
              placeholder="Search"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
          </div>
        )}
      </div>

      {/* Nav Items */}
      <nav className="mt-6 flex-1 px-2 space-y-2 flex flex-col items-center">
        

        
        {matchingItems.map(({ icon, label, path }) => (
          <div className={`flex w-full items-center gap-3 px-3 py-2 rounded text-lg transition-colors ${activeLocation == path ? "bg-blue-950 text-black" : ""}`}
          onClick={()=>setActiveLocation(path)}>
          <Link
            to={path}
            key={label}
            className="flex items-center gap-3 py-2 rounded text-lg transition-colors"
          >
            {icon}
            {!isCollapsed && <span className="text-xl hover:text-white">{label}</span>}
          </Link>
          </div>
        ))}
        
      </nav>
    </div>
  );
}

function MenuIcon({ isCollapsed, setIsCollapsed }: SideBarProps) {
  return (
    <div className="cursor-pointer" onClick={() => setIsCollapsed(!isCollapsed)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
    </div>
  );
}

function SearchIcon() {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
        />
      </svg>
    </div>
  );
}
