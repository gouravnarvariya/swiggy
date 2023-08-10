import {useSelector} from "react-redux";
import React from "react";
import {useDispatch} from "react-redux";
import FoodCard from "./foodCard";
import { clearCart } from "./cartSlice";


const Cart = ()=>{
    const dispatch = useDispatch();
    function handleClearCart(){
        dispatch(clearCart([]));

    }
    const Items = useSelector(store => store.cart.items);
    // console.log(Items);
    return (
        <>
        <h1 className="text-3xl font-bold">cart page </h1>
        
        <button className="m-2 p-2 bg-green-200" onClick={()=>{handleClearCart()}} >Clear cart</button>
       <div className="flex flex-wrap justify-between">
       
       {Items.map((props)=>{
        
       
        return(
        <FoodCard 
        key = {props?.card?.info?.id} 
        cloudinaryImageId={props?.card?.info?.imageId
}
         name= {props?.card?.info?.name} 
         description ={ props?.card?.info?.description}
          />
        );
       })}
        
        </div>
        
        </>
    );

}

export default Cart ;