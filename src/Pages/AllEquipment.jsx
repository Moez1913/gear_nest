import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const AllEquipment = () => {
    const equipments = useLoaderData();
  const id= equipments._id
  
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
                        equipments.map(equipment => <tr equipment={equipment} key={equipment._id}>
                            <th></th>
                            <td>{equipment.itemName}</td>
                            <td>{equipment.categoryName}</td>
                            <td>{equipment.price}</td>
                            <td>{equipment.stockStatus}</td>
                            <td>{equipment.userName}</td>
                            <td>
                                 <Link to={`/details/${equipment._id}`}>
                                        <button className="btn btn-info ml-2">View Details</button>
                                    </Link>
                            </td>
                        </tr>)
                    }



                </table>
            </div>
        </div>
    );
};

export default AllEquipment;