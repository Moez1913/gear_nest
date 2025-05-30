


import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";




const ViewDetails = () => {
 
  
const {image, itemName, categoryName, description, price, stockStatus, userName, rating, customization} = useLoaderData();



  
  

  return (
    <>
             <Helmet>
                <title>GearNest|Details</title>
               </Helmet>
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden mt-8">
      <img className="w-full h-56 object-cover" src={image} alt={itemName} />
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2">{itemName}</h2>
        <p className="text-gray-600 mb-2">Category:{categoryName}</p>
        <p className="text-gray-800 mb-4">{description}</p>
        <div className="flex justify-between items-center mb-2">
          <span className="text-lg font-semibold text-green-600">${price}</span>
          <span className="text-sm text-gray-500">Stock: {stockStatus}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm text-blue-500">Added by: {userName}</span>
          <span className="text-sm text-yellow-500">Rating: {rating}</span>
        </div>
        <div className="mt-4">
          <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
            Customization: {customization}
          </span>
        </div>
      </div>
    </div>
    </>
  );
};

export default ViewDetails;