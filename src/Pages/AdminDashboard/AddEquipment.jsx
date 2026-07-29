import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProvider";
import { Helmet } from "react-helmet";

const AddEquipment = () => {
  const { user } = useContext(AuthContext);

  const handleAddEquipment = async (e) => {
    e.preventDefault();

    const form = e.target;

    // Image File
    const image = form.image.files[0];

    // Other Fields
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

    // FormData
    const formData = new FormData();

    formData.append("image", image);
    formData.append("itemName", itemName);
    formData.append("categoryName", categoryName);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("rating", rating);
    formData.append("customization", customization);
    formData.append("processingTime", processingTime);
    formData.append("stockStatus", stockStatus);


    try {
      const res = await fetch("http://localhost:5000/equipments", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (data.insertedId) {
        Swal.fire({
          title: "Success!",
          text: "Equipment Added Successfully",
          icon: "success",
        });

        form.reset();
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Helmet>
        <title>GearNest | Add Equipment</title>
      </Helmet>

      <div className="max-w-4xl mx-auto p-6 bg-base-200 rounded-xl shadow-md my-10">
        <h2 className="text-3xl font-bold text-center mb-6 text-primary">
          Add New Equipment
        </h2>

        <form
          onSubmit={handleAddEquipment}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >

          {/* Image Upload */}
          <input
            type="file"
            name="image"
            accept="image/*"
            className="file-input file-input-bordered w-full"
            required
          />

          {/* Item Name */}
          <input
            type="text"
            name="itemName"
            placeholder="Item Name"
            className="input input-bordered w-full"
            required
          />

          {/* Category */}
          <select
            name="categoryName"
            className="select select-bordered w-full"
            required
          >
            <option value="">Select Category</option>
            <option value="Cricket Gear">Cricket Gear</option>
            <option value="Football">Football</option>
            <option value="Badminton">Badminton</option>
            <option value="Protective Gear">Protective Gear</option>
            <option value="Bags & Carriers">Bags & Carriers</option>
          </select>

          {/* Price */}
          <input
            type="number"
            name="price"
            placeholder="Price"
            className="input input-bordered w-full"
            required
          />

          {/* Rating */}
          <input
            type="number"
            step="0.1"
            name="rating"
            placeholder="Rating"
            className="input input-bordered w-full"
            required
          />

          {/* Customization */}
          <input
            type="text"
            name="customization"
            placeholder="Customization"
            className="input input-bordered w-full"
            required
          />

          {/* Processing Time */}
          <input
            type="text"
            name="processingTime"
            placeholder="Processing Time"
            className="input input-bordered w-full"
            required
          />

          {/* Stock */}
          <input
            type="number"
            name="stockStatus"
            placeholder="Stock"
            className="input input-bordered w-full"
            required
          />

          {/* User Email */}
         

          {/* User Name */}
          

          {/* Description */}
          <textarea
            name="description"
            placeholder="Description"
            className="textarea textarea-bordered md:col-span-2"
            required
          />

          <button className="btn btn-primary md:col-span-2">
            Add Equipment
          </button>
        </form>
      </div>
    </>
  );
};

export default AddEquipment;