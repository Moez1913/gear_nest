import { useEffect, useState } from "react";


const ThemeToggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div
      onClick={toggleTheme}
      className={`w-12 h-6 flex items-center bg-gray-300 rounded-full p-1 cursor-pointer ${
        theme === "dark" ? "bg-blue-600" : "bg-gray-300"
      }`}
    >
      <div
        className={`bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out ${
          theme === "dark" ? "translate-x-6" : "translate-x-0"
        }`}
      ></div>
     
    </div>
  );
};

export default ThemeToggle;
