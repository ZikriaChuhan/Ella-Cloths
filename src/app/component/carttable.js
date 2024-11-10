"use client"
import { useState } from "react";
import { Button, Input } from "@nextui-org/react";
import { FaTrashCan } from "react-icons/fa6";


const products = [
  { id: 1, name: "Basic T-shirt", size: "M", color: "Grey", price: 20, quantity: 2, imageUrl: "/path/to/image.jpg" },
  { id: 2, name: "Basic T-shirt", size: "M", color: "Grey", price: 20, quantity: 2, imageUrl: "/path/to/image.jpg" },
  // Add more products as needed
];



export default function CartTable() {

  const [cartItems, setCartItems] = useState(products);

  const handleQuantityChange = (id, delta) => {
    setCartItems(cartItems.map(item =>
      item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
    ));
  };

  const handleRemove = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };


  return (
    <>
    <section className=" py-24 flex flex-col gap-10 items-center">
      <h2 className="shop-bag-h2">Shopping Bag </h2>

      <div className=" w-3/4 flex justify-center">
      <section className=" w-full">
      <div>
        {cartItems.map((item) => (
          <div key={item.id} style={{ display: "flex", alignItems: "center", padding: "16px", backgroundColor: "#f9f9f9", marginBottom: "8px", borderRadius: "8px" }}>
            <img src={item.imageUrl} alt={item.name} style={{ width: "64px", height: "64px", borderRadius: "8px", marginRight: "16px" }} />
            <div style={{ flex: 1 }}>
              <h3 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "4px" }}>{item.name}</h3>
              <p style={{ fontSize: "14px" }}>Size: <strong>{item.size}</strong> Color: <strong>{item.color}</strong></p>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <button onClick={() => handleQuantityChange(item.id, -1)} style={{ color: "red", fontSize: "18px" }}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => handleQuantityChange(item.id, 1)} style={{ color: "green", fontSize: "18px" }}>+</button>
            </div>
            <div style={{ marginLeft: "16px", fontWeight: "bold" }}>${item.price.toFixed(2)}</div>
            <button onClick={() => handleRemove(item.id)} style={{ marginLeft: "16px", color: "red" }}>
              <FaTrashCan style={{ width: "20px", height: "20px" }} />
            </button>
          </div>
        ))}
      </div>

      <div style={{ display: "flex", gap: "8px", marginTop: "16px" }}>
        <Input fullWidth placeholder="discount code/gift card" />
        <Button color="primary">Apply</Button>
      </div>

      <Button fullWidth color="warning" style={{ marginTop: "16px" }}>Proceed to Pay</Button>
    </section>
      </div>
    </section>
    </>

  );
}
