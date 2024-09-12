"use client";

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
import { RootState } from "@/store";


// Define a type for cart items if not already defined
interface CartItem {
  id: number;
  thumbnail: string;
  title: string;
  price: number;
}

const Cart = () => {

  
  const [totalAmount, setTotalAmount] = useState<number>(0); // Corrected typo and type

  const { cart } = useSelector((state: RootState) => state);
  const dispatch = useDispatch();

  const handleRemove = (id: number) => {
    dispatch(removeFromCart(id));
  };

  useEffect(() => {
    const amount = cart.cartItems.reduce((acc: number, curr: CartItem) => acc + curr.price, 0);
    setTotalAmount(amount);
  }, [cart.cartItems]);

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
            {cart.cartItems.length > 0 ? (
              cart.cartItems.map((item: CartItem) => (
                <TableRow key={item.id}>
                  <TableCell>
                    <div className="py-5 px-4">
                      <div className="flex items-center gap-6 w-max">
                        <img
                          src={item.thumbnail}
                          alt={item.title}
                          className="w-16 h-16 object-cover"
                        />
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>{item.title}</TableCell>
                  <TableCell>${item.price}</TableCell>
                  <TableCell>
                    <Button onClick={() => handleRemove(((item.id)))}>
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
              <TableCell className="text-right">${totalAmount}</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </div>
  );
};

export default Cart;
