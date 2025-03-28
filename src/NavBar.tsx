import React, { useState, useEffect } from "react";

export default function Navigation() {
  const [activeTab, setActiveTab] = useState("ABOUT ME");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // If the section is 50% visible, we set it as active
          if (entry.isIntersecting) {
            setActiveTab(entry.target.id.toUpperCase());
          }
        });
      },
      {
        threshold: [0.1, 0.5, 0.9], // Added multiple thresholds for smoother transitions
      }
    );

    // Observe the sections
    ["about me", "projects", "skills"].forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect(); // Cleanup observer on component unmount
  }, []);

  return (
    <nav className="flex md:flex-col fixed mt-20 ml-10 left-0 pt-20">
      {["ABOUT ME", "PROJECTS", "SKILLS"].map((tab) => (
        <a
          key={tab}
          href={`#${tab.toLowerCase()}`} // Link to the section
          className={`text-lg font-medium pb-2 ${
            activeTab === tab
              ? "text-accent border-b-4 border-accent md:border-b-2 p-2 w-50"
              : "text-gray-400 hover:text-accent"
          }`}
          onClick={(e) => {
            e.preventDefault(); // Prevent default anchor behavior
            setActiveTab(tab); // Update active tab
            document.getElementById(tab.toLowerCase())
              .scrollIntoView({ behavior: "smooth" }); // Smooth scroll to section
          }}
        >
          {tab}
        </a>
      ))}
    </nav>
  );
}
