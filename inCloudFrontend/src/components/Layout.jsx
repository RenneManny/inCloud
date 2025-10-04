import React from "react";
import Navbar from "./Navbar.jsx";
import Sidebar from "./Sidebar.jsx";
import SidebarItems from "./SidebarItems.jsx";
import {
  FolderPlus,
  HardDrive,
  LayoutDashboard,
  Settings,
  Trash2,
  UserMinus,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

function Layout() {

  const navigate=useNavigate()
  return (
    <>
      <Navbar />

      <div className="flex">
        <Sidebar className="h-screen pt-16">
          <SidebarItems
            icon={<LayoutDashboard size={20} />}
            text="Dashboard"
            active
           onClick={() => navigate("/dashboard")}
          />
          <SidebarItems text="Create new" icon={<FolderPlus size={20} />}/>
          <SidebarItems text="Drive" icon={<HardDrive size={20} />} />
          <SidebarItems text="Trash" icon={<Trash2 size={20} />} />

          <hr className="my-3 border-gray-300" />
          <SidebarItems text="Settings" icon={<Settings size={20} />} />
          <SidebarItems text="Delete account" icon={<UserMinus size={20} />} />
        </Sidebar>

        {/* <main className="flex-1 p-6">
          <h1 className="h-32 flex items-center justify-center text-2xl">
            Welcome to Dashboard
          </h1>
        </main> */}
      </div>
    </>
  );
}

export default Layout;
