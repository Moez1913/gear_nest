import { useContext } from "react";

import Swal from "sweetalert2";
import { AuthContext } from "../Providers/AuthProvider";
import { Helmet } from "react-helmet";

const AddEquipment = () => {
  const { user } = useContext(AuthContext);

  const handleAddEquipment = (e) => {
    e.preventDefault();
    const form = e.target;
    const image = form.image.value;
    const itemName = form.itemName.value;
    const categoryName = form.categoryName.value;
    const description = form.description.value;
    const price = parseFloat(form.price.value);
    const rating = parseFloat(form.rating.value);
    const customization = form.customization.value;
    const processingTime = form.processingTime.value;
    const stockStatus = form.stockStatus.value;
    const userEmail = user?.email;
    const userName = user?.displayName;

    const newEquipment = {
      image,
      price,
      itemName,
      categoryName,
      description,
      rating,
      customization,
      processingTime,
      stockStatus,
      userEmail,
      userName
    };

    // Send data to server
    fetch("https://gear-nest-server.vercel.app/equipments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newEquipment),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Equipment Added Successfully",
            icon: "success",
            confirmButtonText: "Okay",
          });
          form.reset();
        }
      });
  };

  return (
    <>
      <Helmet>
        <title>GearNest|Add Equipments</title>
      </Helmet>
      <div className="max-w-4xl mx-auto p-6 bg-base-200 rounded-xl shadow-md my-10">
        <h2 className="text-3xl font-bold text-center mb-6 text-primary">Add New Equipment</h2>
        <form onSubmit={handleAddEquipment} className="grid grid-cols-1 md:grid-cols-2 gap-4">

          {/* Image URL */}
          <input type="text" name="image" placeholder="Image URL" className="input input-bordered w-full" required />

          {/* Item Name */}
          <input type="text" name="itemName" placeholder="Item Name" className="input input-bordered w-full" required />

          {/* Category Name */}

          <select
            name="categoryName"
            className="select select-bordered w-full"
            placeholder="Select Category"
            required
          >
            <option value="" disabled>
              Select Category
            </option>
            <option value="Cricket Gear">Cricket Gear</option>
            <option value="Football">Football</option>
            <option value="Badminton">Badminton</option>
            <option value="Protective Gear">Protective Gear</option>
            <option value="Bags & Carriers">Bags & Carriers</option>

          </select>


          {/* Price */}
          <input type="number" name="price" placeholder="Price (৳)" className="input input-bordered w-full" required />

          {/* Rating */}
          <input type="number" step="0.1" name="rating" placeholder="Rating (out of 5)" className="input input-bordered w-full" required />

          {/* Customization */}
          <input type="text" name="customization" placeholder="Customization (e.g. extra grip)" className="input input-bordered w-full" required />

          {/* Processing Time */}
          <input type="text" name="processingTime" placeholder="Processing Time (e.g. 2-3 days)" className="input input-bordered w-full" required />

          {/* Stock Status */}
          <input type="number" name="stockStatus" placeholder="Available Stock Quantity" className="input input-bordered w-full" required />

          {/* User Email (read-only) */}
          <input type="email" name="userEmail" defaultValue={user?.email} className="input input-bordered w-full" readOnly />

          {/* User Name (read-only) */}
          <input type="text" name="userName" defaultValue={user?.displayName} className="input input-bordered w-full" readOnly />

          {/* Description */}
          <textarea name="description" placeholder="Write a short description..." className="textarea textarea-bordered md:col-span-2 h-24" required></textarea>

          {/* Submit Button */}
          <div className="md:col-span-2">
            <button className="btn btn-primary w-full">Add Equipment</button>
          </div>

        </form>
      </div>
    </>
  );
};

export default AddEquipment;
