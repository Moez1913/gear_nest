import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const AllEquipment = () => {
    const equipments = useLoaderData();
    const [sorted, setSorted] = useState(false);

    // Sort by price descending if sorted is true
    const displayedEquipments = sorted
        ? [...equipments].sort((a, b) => b.price - a.price)
        : equipments;

    return (
        <div>
            <div className="flex justify-end mb-4 mt-4">
                <button
                    className="btn btn-primary"
                    onClick={() => setSorted(!sorted)}
                >
                    {sorted ? "Clear Sort" : "Sort by Price (High to Low)"}
                </button>
            </div>
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

                    <tbody>
                        {displayedEquipments.map((equipment, idx) => (
                            <tr key={equipment._id}>
                                <th>{idx + 1}</th>
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
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllEquipment;