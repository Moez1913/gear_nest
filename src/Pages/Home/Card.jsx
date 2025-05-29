const Card = ({ equipment }) => {
  const { image, itemName, price, rating } = equipment;

  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition duration-300 border border-gray-200">
      <img
        src={image}
        alt={itemName}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-primary">{itemName}</h2>
        <div className="flex justify-between items-center mt-2 text-sm">
          <span className="text-green-600 font-bold">৳{price}</span>
          <span className="text-yellow-500">⭐ {rating}</span>
        </div>
        <button className="btn btn-sm btn-primary w-full mt-4">
          View Details
        </button>
      </div>
    </div>
  );
};

export default Card;
