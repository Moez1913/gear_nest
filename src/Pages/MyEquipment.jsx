import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import Swal from 'sweetalert2';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

const MyEquipment = () => {
  const [equipments, setEquipments] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:5000/equipments/email/${user.email}`)
        .then(res => res.json())
        .then(data => setEquipments(data));
    }
  }, [user]);

  const handleRemove = id => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then(result => {
      if (result.isConfirmed) {
        // Replace with your delete API call
        fetch(`http://localhost:5000/equipments/${id}`, {
          method: 'DELETE'
        })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount > 0) {
              setEquipments(prevEquipments => prevEquipments.filter(eq => eq._id !== id));


              Swal.fire('Deleted!', 'Your equipment has been deleted.', 'success');
            }
          });
      }
    });
  };



  return equipments.length ? (<div className="p-6">
        <ToastContainer />
        <h2 className="text-2xl font-bold mb-6 text-center">My Equipment</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {equipments.map(equipment => (
            <div
              key={equipment._id}
              className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col"
            >
              <img
                src={equipment.image}
                alt={equipment.itemName}
                className="h-48 w-full object-cover"
              />
              <div className="p-4 flex-1 flex flex-col">
                <h3 className="text-lg font-bold mb-1">{equipment.itemName}</h3>
                <p className="text-gray-600 mb-1">Category: {equipment.categoryName}</p>
                <p className="text-gray-800 mb-1">Price: ${equipment.price}</p>
                <p className="text-gray-500 mb-1">Stock: {equipment.stockStatus}</p>
                <p className="text-blue-500 mb-2">Added by: {equipment.userName}</p>
                <div className="mt-auto flex gap-2">
                  <button
                    onClick={() => handleRemove(equipment._id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                  >
                    Remove
                  </button>
                  <Link to={`/update/${equipment._id}`}> <button

                    className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded"
                  >
                    Update
                  </button></Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>)
       :
        (<div className="p-6 text-center">
          <h2 className="text-2xl font-bold mb-4">No Equipment Found</h2>
          <p className="text-gray-600">You have not added any equipment yet.</p>
          <Link to="/add" className="mt-4 inline-block bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
            Add Equipment
          </Link>
        </div>)
          
   
          
};

          export default MyEquipment;