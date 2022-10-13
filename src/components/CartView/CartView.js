import React from 'react';
import { useContext } from 'react';
import { cartContext } from "../../context/cartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import "./cartView.css";


function CartView() {

    const context = useContext(cartContext);
    const { cart, deleteItem, emptyCart, getTotalPrice } = context;

    let carritoVacio = true;

    if (carritoVacio){
        <div><h4>Tu Carrito está Vacío</h4></div>;
    }


    return (
        <div className="cartView-container" >
            { cart.map ( item => (

                <div className="cartView" >
        
                    <img src={item.img} alt={item.title}/>              
                    <h4>{item.title}</h4>
                    <h4>${item.price} Unidad</h4>
                    <h4>Cantidad: {item.qantty}</h4>
                    <h4>Subtotal={item.price * item.qantty}</h4>
                    <button className="button-delete" onClick = {()=> deleteItem(item.id)}><FontAwesomeIcon icon={faTrashCan}/></button>
                
                </div>
            ))}
                <div className="total-cartView">
                    <button className="finalizar-compra">Finalizar Compra</button> 
                    <button className="empty-cart" onClick={emptyCart}>Vaciar Carrito</button>
                </div>
                <div className="total-carrito">
                    <h4>Total de Compra: ${getTotalPrice()}</h4>
                </div>
        </div>
    )
}

export default CartView;