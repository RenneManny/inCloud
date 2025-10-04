import React from "react";
import sole_logo from "../assets/images/sole_logo.png"; 

export default function Sidebar({
  children,
  topOffset = "0",
  paddingTop = "0",
}) 

{
  return (
    <>
      <aside
        className="hidden lg:block fixed left-0 top-0 h-screen w-64 bg-white dark:bg-gray-800 shadow-lg z-40"
        style={{
          top: `${topOffset * 0.25}rem`,
          paddingTop: `${paddingTop * 0.25}rem`,
        }}
      >
        <div className="p-4">
          <img src={sole_logo} alt="logo" className="w-24" />
        </div>

        
        <nav className="flex flex-col p-4 space-y-2">{children}</nav>
      </aside>

     
      <div className="hidden lg:block w-64 flex-shrink-0" />
    </>
  );
}
