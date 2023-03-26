import React , { useContext }from "react";
import CartContext from "../../../store/cart-context";
import MealIteamForm from "./MealItemForm";
import "./MealIteam.css"

const MealIteam = props => {
    const cartCtx = useContext(CartContext);

    const price = `$${props.price.toFixed(2)}`;

    const addToCartHandler = amount => {
        cartCtx.addItem({id: props.id,name: props.name,amount: amount,price: props.price});
    };
    
    return (
        <li className="meal">
            <div>
                <h3> {props.name} </h3>
                <div className="description"> {props.description} </div>
                <div className="price"> {price} </div>
            </div>
            <div>
                <MealIteamForm onAddToCart={addToCartHandler}/>
            </div>
        </li>
    );
};

export default MealIteam;