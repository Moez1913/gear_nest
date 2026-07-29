import { useContext } from "react";
import { Link } from "react-router-dom";
import { shopContext } from "../../Providers/ShoopProvider/ShoopProvider";
import UseCart from "../../components/Hooks/Shop/UseCart";
import useAuth from "../../components/Hooks/Shop/Auth/useAuth";
import useAxiosSecure from "../../components/Hooks/Axios/useAxiosSecure";

const Card = ({ equipment }) => {
  const {_id, image, itemName, price, rating } = equipment;
  const axiosSecure=useAxiosSecure()
  const {refetch,setLocalCart}=UseCart()
  const {user}=useAuth()

  const addToCart = (equipment) => {

   
    if (user) {
      axiosSecure.post("/carts", { productId: equipment._id }).then((res) => {
        refetch()
      });
    
    } else {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];

      const existing = cart.find((item) => item._id === equipment._id);

      if (existing) {
        existing.quantity += 1;
      } else {
        cart.push({
          ...equipment,
          quantity: 1,
        });
      }

     localStorage.setItem("cart", JSON.stringify(cart));
      setLocalCart(cart); 

      console.log(cart);
    }
  };

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
        <Link to={`/details/${_id}`}><button className="btn btn-sm btn-primary w-full mt-4">
          View Details
        </button></Link>
        <button onClick={()=>addToCart(equipment)} className=" btn btn-success">Add to cart</button>
        <button className=" btn btn-success">
          Add to wishList
        </button>
      </div>
    </div>
  );
};

export default Card;
