import React, { useState, useEffect } from "react";

export default function Navigation() {
  const [activeTab, setActiveTab] = useState("ABOUT");

  useEffect(() => {
    // Create an IntersectionObserver to track when the sections come into view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // If the section is in view, set the active tab
            setActiveTab(entry.target.id.toUpperCase());
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the section is in view
    );

    // Observe each section with the corresponding id (about, projects, etc.)
    ["about", "projects"].forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      observer.disconnect(); // Cleanup the observer on component unmount
    };
  }, []);

  return (
    <nav className="flex md:flex-col fixed mt-10 ml-10 left-0 pt-20">
      {["ABOUT", "PROJECTS"].map((tab) => (
        <a
          key={tab}
          href={`#${tab.toLowerCase()}`} // Link naar het ID van de sectie
          className={`text-lg font-medium pb-2 ${
            activeTab === tab
              ? "text-accent border-b-4 border-accent md:border-b-2 p-2 w-50"
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
