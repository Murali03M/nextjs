"use client"

import { useDispatch, useSelector } from "react-redux";
import { Button } from "../ui/button";
import { AdddtoCard, removeFromCart } from "@/store/slices/cart-slice";

function AddtoCart({ productDetails }: any) {
    const dispatch = useDispatch();
    const { cart } = useSelector((state: any) => state);

    const isInCart = cart?.cartItems.some((item: any) => item.id === productDetails?.data.id);

    function AddHandler() {
        dispatch(AdddtoCard(productDetails?.data));
    }

    function removeHandler() {
        dispatch(removeFromCart(productDetails?.data.id));
    }

    return (
        <div className="mt-8 max-w-md">
            <Button
                type="button"
                onClick={isInCart ? removeHandler : AddHandler}
              
            >
                {isInCart ? "Remove from cart" : "Add to cart"}
            </Button>
        </div>
    );
}

export default AddtoCart;
