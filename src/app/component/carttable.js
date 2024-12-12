"use client";

import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  User,
  Chip,
  Tooltip,
} from "@nextui-org/react";
import { DeleteIcon } from "../cart/component/DeleteIcon";
import { useSelector, useDispatch } from "react-redux";
import { updateQuantity, removeFromCart } from "@/app/store/cartSlice";

export default function CartTable() {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();


  const handleRemoveFromCart = (itemId) => {
    dispatch(removeFromCart(itemId));
  };


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
      <Table aria-label="Example table with custom cells">
        <TableHeader>
          <TableColumn align="start">Product</TableColumn>
          <TableColumn align="start">Price</TableColumn>
          <TableColumn align="start">Quantity</TableColumn>
          <TableColumn align="start">Remove</TableColumn>
        </TableHeader>
        <TableBody>
          {items.length === 0 ? (
           
           <TableRow >
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell>Your cart is empty.</TableCell>
            <TableCell></TableCell>
           </TableRow>
           
          ) : (
            items.map((item, index) => (
              <TableRow key={`${item.id}-${index}`}>
                <TableCell>
                  <User
                  className=" my-user-img"
                 data-loaded="true"
                    avatarProps={{ radius: "lg", src: item.image,  } }
                    // description={item.title}
                    name={item.title}
                  >
                    {item.title}
                  </User>
                </TableCell>

                <TableCell>
                  <div className="flex ">
                    <p className="text-bold text-sm capitalize">{item.price}</p>
                  </div>
                </TableCell>

                <TableCell className="flex self-center m-3 gap-3">
                
                  <Chip
                   onClick={() => minusQuantity(item.id)}
                    className="capitalize"
                    color="success"
                    size="sm"
                    variant="flat"
                  >
                     <Tooltip color="success" content="Minus" >
                                  <button
                     
                      className=""
                    >
                      -
                    </button>
                    </Tooltip>
                  </Chip>
                  <p>{item.quantity}</p>
                  <Chip
                   onClick={() => plusQuantity(item.id)}
                    className="capitalize"
                    color="success"
                    size="sm"
                    variant="flat"
                  >
                    <Tooltip color="success" content="Add" >
                    <button
                     
                      className=""
                    >
                      +
                    </button>
                    </Tooltip>
                  </Chip>
                </TableCell>

                <TableCell >
                  <div className="relative flex items-center  gap-2">
                    <Tooltip color="danger" content="Delete" >
                      <span className="text-lg text-danger cursor-pointer active:opacity-50">
                        <DeleteIcon onClick={() => handleRemoveFromCart(item.id)} />
                      </span>
                    </Tooltip>
                  </div>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </>
  );
}
