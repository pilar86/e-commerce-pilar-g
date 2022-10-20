import React, { useContext } from 'react';
import "./cartWidget.css";
import { cartContext } from "../../context/cartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";


function CartWidget() {

    const { getItemQantty } = useContext (cartContext)

    return (
        <div className="cart">  
        <FontAwesomeIcon icon={faCartArrowDown}/>
        <span className="cartQ">{getItemQantty()}</span>
        </div>
    );
}

export default CartWidget;