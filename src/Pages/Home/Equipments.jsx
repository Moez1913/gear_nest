import { useEffect, useState } from "react";
import Card from "./Card";

const Equipments = () => {
  const [equipments, setEquipments] = useState([]);
  const [allEquipments, setAllEquipments] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All Equipments");

  useEffect(() => {
    fetch('https://gear-nest-server-p40j335dv-md-moez-moez-uddins-projects.vercel.app/equipments')
      .then((res) => res.json())
      .then((data) => {
        setAllEquipments(data);
        setEquipments(data); // default: show all
      });
  }, []);

const handleCategoryClick = (category) => {
  setActiveCategory(category);
  if (category === "All Equipments") {
    setEquipments(allEquipments);
  } else {
    const filtered = allEquipments.filter(
      (item) => item.categoryName === category
    );
    setEquipments(filtered);
  }
};


  // All category buttons
  const categories = [
    "All Equipments",
    "Cricket Gear",
    "Football",
    "Badminton",
    "Protective Gear",
    "Bags & Carriers",
  ];

  return (
    <div className="w-full px-4 py-8 md:px-10">
      <div className="flex flex-col lg:flex-row gap-6">

        {/* Category Buttons: 1/4 */}
        <div className="w-full lg:w-1/4">
          <div className="flex flex-col gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryClick(category)}
                className={`btn w-full ${
                  activeCategory === category
                    ? "btn-primary"
                    : "btn-outline btn-primary"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Card Section: 3/4 */}
        <div className="w-full lg:w-3/4">
          {equipments.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {equipments.map((equipment) => (
                <Card key={equipment._id} equipment={equipment} />
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500">No equipment found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Equipments;
