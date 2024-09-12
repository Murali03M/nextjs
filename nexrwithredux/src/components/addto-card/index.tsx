"use client"

import { useDispatch, useSelector } from "react-redux";
import { Button } from "../ui/button";
import { AdddtoCard, removeFromCart } from "@/store/slices/cart-slice";
import { RootState } from "@/store";


interface ProductDetails {
    success: boolean;
    data: {
        id: number;
        title: string;
        price: number;
        thumbnail: string;
    };
    message: string;
}



function AddtoCart({ productDetails }: {productDetails:ProductDetails}) {
    const dispatch = useDispatch();
    const { cart } = useSelector((state: RootState) => state);

    const isInCart = cart?.cartItems.some((item: {id:number}) => item.id === productDetails?.data.id);

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
