import React, { useEffect, useState } from "react";


export default function Navigation() {
  const [activeTab, setActiveTab] = useState("about");
  useEffect(() => {
    const Observer = new IntersectionObserver(
      (entries) => {
        // callback function to let know what should happen
        entries.forEach((entrie) => {
          if (entrie.isIntersecting) {
            setActiveTab(entrie.target.id);
          }
        });
      },
      { threshold: [0.5, 1] }
    );
    ["about", "projects", "skills"].forEach((tab) => {
      const section = document.getElementById(`${tab}`);
      Observer.observe(section as Element);
    });
    return () => Observer.disconnect();
  }, []);

  return (
    // toevoegen en rekening meehouden voor grotere schermen!
    <nav className="flex md:flex-col fixed  ml-10 left-0 pt-20 ">
      {["about", "projects", "skills"].map((tab) => (
        <a
          href={tab}
          onClick={(e) => {
            e.preventDefault();
            setActiveTab(tab);
          }}
          className={`font-bold pb-2 text-2xl ${
            activeTab === tab
              ? "text-accent border-b-4 border-accent md:border-b-2 p-2 w-50"
              : "text-gray-400 hover:text-accent"
          }
        
        
        `}
        >
          {tab.toUpperCase()}
        </a>
      ))}
    </nav>
  );
}
