"use client";

import "./cart.css";
import { useSelector, useDispatch } from "react-redux";
import Image from "next/image";
import Header from "../component/header";
import { updateQuantity, removeFromCart } from "@/app/store/cartSlice";
import Footer from "../component/footer";
import CartTable from "../component/cartTable";

export default function CartPage() {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (itemId) => {
    dispatch(removeFromCart(itemId));
  };

  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);
  const total = (parseFloat(subtotal) + 10).toFixed(2);

  // Increase quantity function
  const plusQuantity = (itemId) => {
    const item = items.find((item) => item.id === itemId);
    const updatedQuantity = item.quantity + 1;
    dispatch(updateQuantity({ id: itemId, quantity: updatedQuantity }));
  };

  // Decrease quantity function
  const minusQuantity = (itemId) => {
    const item = items.find((item) => item.id === itemId);
    if (item.quantity > 1) {
      const updatedQuantity = item.quantity - 1;
      dispatch(updateQuantity({ id: itemId, quantity: updatedQuantity }));
    }
  };

  return (
    <>
      <Header />

    


<section className="py-8 px-4 flex-col flex justify-center items-center bg-gray-50">
        <div className="text-center ">
          <h1 className="text-3xl font-bold text-gray-800">Cart Page</h1>
        </div>

        <div className="flex flex-wrap  gap-8 w-4/5 px-32  my-12">
         
          <div className="flex-1 min-w-[300px]">
              <CartTable />
          </div>

      
          <div className="flex-1 max-w-[300px]">
            <div className="border rounded-lg shadow-sm p-4 bg-white">
              <h2 className="text-lg font-semibold text-gray-800">Total</h2>
              <div className="flex items-center space-x-4">
                <p className="text-md text-gray-600">Subtotal:</p>
                <p className="text-md text-gray-700">${subtotal}</p>
              </div>
              <div className="flex items-center space-x-4">
                <p className="text-md text-gray-600">Shipping:</p>
                <p className="text-md text-gray-700">$10.00</p>
              </div>
              <div className="flex items-center space-x-4 mt-4">
                <p className="text-md text-gray-600 font-semibold">Total:</p>
                <p className="text-md text-gray-700 font-semibold">${total}</p>
              </div>
              <div >
                <button className=" w-full text-center bg-black text-white mt-5 p-2">
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

    </>
  );
}
