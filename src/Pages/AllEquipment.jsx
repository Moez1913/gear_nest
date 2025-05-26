import React from 'react';
import { useLoaderData } from 'react-router-dom';

const AllEquipment = () => {
    const equipments=useLoaderData();
    console.log(equipments);
    return (
        <div>
            
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Category</th>
        <th>Price</th>
        <th>Stock</th>
        <th>Added-By</th>
        <th>Customise</th>
      </tr>
    </thead>
    
     {
                equipments.map(equipment=><tr equipment={equipment} key={equipment._id}>
        <th></th>
        <td>{equipment.itemName}</td>
        <td>{equipment.categoryName}</td>
        <td>{equipment.price}</td>
        <td>{equipment.stockStatus}</td>
        <td>{equipment.userName}</td>
        <td><button>x</button><button>Edit</button></td>
      </tr>)
            }
      
      
   
  </table>
</div>
        </div>
    );
};

export default AllEquipment;