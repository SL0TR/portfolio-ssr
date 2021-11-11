import React, { useState } from "react";

function Sidebar() {
  const [isMinimized, setIsMinimized] = useState(false);

  return (
    <>
      <div
        className={`flex-col transition-all duration-300 bg-white ease-in-out flex fixed left-0 top-0 h-screen shadow-md ${
          isMinimized ? "w-20" : "w-64"
        }`}
      >
        sidebar
        <svg
          onClick={() => setIsMinimized(!isMinimized)}
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
    </>
  );
}

export default Sidebar;
