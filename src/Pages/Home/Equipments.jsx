import { useEffect, useState } from "react";
import Card from "./Card";

const Equipments = () => {
    const [equipments,setEquipments]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/equipments')
        .then(res => res.json())
        .then(data => setEquipments(data))
    },[])
  return (
    <div className="w-full px-4 py-8 md:px-10">
      <div className="flex flex-col lg:flex-row gap-6">

        {/* Category Buttons: 1/4 */}
        <div className="w-full lg:w-1/4">
          <div className="flex flex-col gap-3">
            <button className="btn btn-outline btn-primary w-full">All Equipments</button>
            <button className="btn btn-outline btn-primary w-full">Cricket Gear</button>
            <button className="btn btn-outline btn-primary w-full">Football</button>
            <button className="btn btn-outline btn-primary w-full">Badminton</button>
            <button className="btn btn-outline btn-primary w-full">Protective Gear</button>
            <button className="btn btn-outline btn-primary w-full">Bags & Carriers</button>
          </div>
        </div>

        {/* Card Section: 3/4 */}
        <div className="w-full lg:w-3/4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                equipments.map(equipment=><Card key={equipment._id} equipment={equipment}></Card>)
            }
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Equipments;
