"use client"
import { useState, useEffect } from "react";
import { Button, Input } from "@nextui-org/react";
import { FaTrashCan } from "react-icons/fa6";


export default function CartTable() {

  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  const updateCartStorage = (updatedCart) => {
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    window.dispatchEvent(new Event("storage"));
  };

  const updateQuantity = (id, quantity) => {
    const updatedCart = cart.map(item =>
      item.id === id ? { ...item, quantity: quantity > 0 ? quantity : 1 } : item
    );
    setCart(updatedCart);
    updateCartStorage(updatedCart);
  };

  const removeFromCart = (id) => {
    const updatedCart = cart.filter(item => item.id !== id);
    setCart(updatedCart);
    updateCartStorage(updatedCart);
  };




  return (
    <>
    <section className=" py-24 flex flex-col gap-10 items-center">
      <h2 className="shop-bag-h2">Shopping Bag </h2>

      <div className=" w-3/4 flex justify-center">
      <section className=" w-full">
      <div>
      {cart.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} style={{ display: "flex", alignItems: "center", padding: "16px", backgroundColor: "#f9f9f9", marginBottom: "8px", borderRadius: "8px" }}>
            <img src={item.image} alt={item.title} style={{ width: "64px", height: "64px", borderRadius: "8px", marginRight: "16px" }} />
            <div style={{ flex: 1 }}>
              <h3 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "4px" }}>{item.title}</h3>
              <p style={{ fontSize: "14px" }}>Size: <strong>{item.size || "not select"}</strong> Color: <strong>{item.color|| "not select"}</strong></p>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <button onClick={() => updateQuantity(item.id, item.quantity - 1)} style={{ color: "red", fontSize: "18px" }}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => updateQuantity(item.id, item.quantity + 1)} style={{ color: "green", fontSize: "18px" }}>+</button>
            </div>
            <div style={{ marginLeft: "16px", fontWeight: "bold" }}>${item.price.toFixed(2)}</div>
            <div style={{ marginLeft: "16px", fontWeight: "bold" }}>${(item.price * item.quantity).toFixed(2)} </div>
            <button onClick={() => removeFromCart(item.id)} style={{ marginLeft: "16px", color: "red" }}>
              <FaTrashCan style={{ width: "20px", height: "20px" }} />
            </button>
          </div>
        ))
        
      )}
      </div>
      <div style={{ display: "flex", gap: "8px", marginTop: "16px" }}>
        <Input fullWidth placeholder="discount code/gift card" />
        <Button color="primary">Apply</Button>
      </div>

      <Button fullWidth color="warning" style={{ marginTop: "16px" }}>Proceed to Pay</Button>
     
      <div className="cart-summary">
        <p>Total Price: $
          {cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}
        </p>
      </div>
    </section>
      </div>
    </section>
    </>

  );
}
