import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/utils/Sidebar";
import { MdMenu, MdClose } from "react-icons/md";
import SecondaryNavbar from "../components/utils/SecondaryNavbar";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Sidebar initially closed on small screens

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Sidebar toggle button for mobile view */}
      <button
        className="md:hidden p-2 text-gray-600 focus:outline-none fixed top-4 right-4 z-20 bg-white rounded-md shadow-md"
        onClick={toggleSidebar}
      >
        {isSidebarOpen ? <MdClose size={24} /> : <MdMenu size={24} />}
        <span className="sr-only">
          {isSidebarOpen ? "Close Menu" : "Open Menu"}
        </span>
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed md:relative top-0 left-0 h-full bg-white z-10 md:z-0 transition-transform duration-300 ease-in-out transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 shadow-md md:shadow-none`}
      >
        <Sidebar />
      </aside>

      {/* Main content */}
      <main className="flex-grow overflow-auto md:ml-0">
        <SecondaryNavbar />
        <div className="p-5">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
