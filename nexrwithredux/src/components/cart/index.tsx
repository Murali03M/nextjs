"use client"

import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "@/store/slices/cart-slice"; // Adjust the import as necessary
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "../ui/button";

const Cart = () => {
    const [totlaAmount, setTotalAmout] = useState(0);


  
  const { cart } = useSelector((state: any) => state);
  const dispatch = useDispatch();

  const handleRemove = (id: string) => {
    dispatch(removeFromCart(id));
  };
    
  useEffect(() => {
    setTotalAmout(cart?.cartItems.reduce((acc:any,curr:any)=>acc+curr?.price,0))
},[cart?.cartItems])


  return (
    <div className="bg-white py-4 text-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-[#333]">Cart</h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Thumbnail</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Remove</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {cart?.cartItems?.length > 0 ? (
              cart.cartItems.map((item: any) => (
                <TableRow key={item.id}>
                  <TableCell>
                    <div className="py-5 px-4">
                      <div className="flex items-center gap-6 w-max">
                        <img
                          src={item?.thumbnail}
                          alt={item?.title}
                          className="w-16 h-16 object-cover"
                        />
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>{item?.title}</TableCell>
                  <TableCell>${item?.price}</TableCell>
                  <TableCell>
                    <Button
                      onClick={() => handleRemove(item.id)}
                    
                    >
                      Remove
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={4} className="text-center text-black">
                  Your cart is empty.
                </TableCell>
              </TableRow>
            )}
                  </TableBody>
                  <TableFooter>
            <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
                          <TableCell className="text-right">${totlaAmount}</TableCell>
        </TableRow>
      </TableFooter>

        </Table>
      </div>
    </div>
  );
};

export default Cart;
