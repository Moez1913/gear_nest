import React from 'react'
import useAuth from '../components/Hooks/Shop/Auth/useAuth'
import UseCart from '../components/Hooks/Shop/UseCart'
import { Link } from 'react-router-dom'

const OrderPage = () => {
    const {user}=useAuth()
    const {productPrice,quantity}=UseCart()
  return (
    <div>
         <div className="lg:col-span-7 bg-white p-6 rounded-xl shadow">
    <h1 className="text-lg font-medium mb-6">Delivery Details</h1>

    <form
      id="orderForm"
    //   onSubmit={handleSubmit}
      className="space-y-6"
    >
      {/* Name & Phone */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <label className="label">
            <span className="label-text font-semibold">Full Name</span>
          </label>
          <input
            type="text"
            name="name"
            defaultValue={user?.displayName}
            placeholder="Enter your full name"
            className="input input-bordered w-full"
            required
          />
        </div>

        <div className="flex-1">
          <label className="label">
            <span className="label-text font-semibold">Phone Number</span>
          </label>
          <input
            type="number"
            name="phone"
          
            placeholder="01XXXXXXXXX"
            className="input input-bordered w-full"
            required
          />
        </div>
      </div>
      {!user && (
        <div className="mt-4">
          <label className="label">
            <span className="label-text font-semibold">Email Address</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="input input-bordered w-full"
            required
          />
        </div>
      )}

      {/* Address & Note */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <label className="label">
            <span className="label-text font-semibold">
              Delivery Address
            </span>
          </label>

          <textarea
            name="address"
            placeholder="Enter your complete delivery address"
            className="textarea textarea-bordered w-full h-32"
            required
          ></textarea>
        </div>

        <div className="flex-1">
          <label className="label">
            <span className="label-text font-semibold">
              Note (Optional)
            </span>
          </label>

          <textarea
            name="note"
            placeholder="Write any special instructions..."
            className="textarea textarea-bordered w-full h-32"
          ></textarea>
        </div>
      </div>

      {/* Shipping & Payment */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Shipping */}
        <div className="flex-1">
          <label className="label">
            <span className="label-text font-semibold">
              Shipping Location
            </span>
          </label>

          <div className="space-y-3 mt-2">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                name="shippingLocation"
                value="Inside Rajshahi - 50"
                className="radio radio-primary"
                defaultChecked
                // onChange={() => setDvcharge(50)}
              />
              <span>Inside Rajshahi (Delivery Charge: ৳50)</span>
            </label>

            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                name="shippingLocation"
                value="Outside Rajshahi - 120"
                className="radio radio-primary"
                // onChange={() => setDvcharge(120)}
              />
              <span>Outside Rajshahi (Delivery Charge: ৳120)</span>
            </label>
          </div>
        </div>

        {/* Payment */}
        <div className="flex-1">
          <label className="label">
            <span className="label-text font-semibold">
              Payment Method
            </span>
          </label>

          <div className="space-y-3 mt-2">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                name="paymentMethod"
                value="Cash on Delivery"
                className="radio radio-primary"
                defaultChecked
              />
              <span>Cash on Delivery</span>
            </label>

            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                name="paymentMethod"
                value="bKash"
                
                className="radio radio-primary"
              />
              <span><button>Card</button></span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                name="paymentMethod"
                value="bKash"
              
                className="radio radio-primary"
              />
              <span>Mobile banking</span>
            </label>
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <Link to={'/payment'}
        type="submit"
        className="btn btn-primary w-full text-lg mt-2"
      >
        Order Now
      </Link>
    </form>
  </div>
    </div>
  )
}

export default OrderPage