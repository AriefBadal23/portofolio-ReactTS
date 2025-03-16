import React from "react";
import { useState } from "react";

export default function Navigation() {
  const [activeTab, setActiveTab] = useState("ABOUT");

  return (
    <nav className="flex justify-center space-x-8 mt-4">
      {["ABOUT", "PROJECTS"].map((tab) => (
        <a
          key={tab}
          href={`#${tab.toLowerCase()}`} // Link naar het ID van de sectie
          className={`text-lg font-medium pb-2 ${
            activeTab === tab
              ? "text-accent border-b-4 border-accent"
              : "text-gray-400 hover:text-accent"
          }`}
          onClick={() => setActiveTab(tab)} // Update de actieve tab
        >
          {tab}
        </a>
      ))}
    </nav>
  );
}
