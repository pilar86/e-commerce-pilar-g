import React, { useState, createContext } from "react";
// 1- Se inicializa CreateContext

 const cartContext = createContext()

// 2- Se define nuestro Provider

export default function CartContextProvider({children}) {
        const [cart, setCart] = useState([]);

    const isInCart = (id) => {
    return cart.some(data => data.id === id)
    }    


    const addItem = (item, qantty) => {

        const newItem = {
            ...item,
            qantty
        } 
        if (isInCart(newItem.id)) {
            const findProduct = cart.find(data => data.id === newItem.id)
            const productIndex = cart.indexOf(findProduct)
            const auxArray = [...cart] /*copia del estado*/
            auxArray[productIndex].qantty += qantty
            setCart(auxArray)
        } else {
            setCart([...cart, newItem])
        }
    }       
       

    /*function getTotalItemsInCart(){
        let total = 
        cart.forEach (data => 0)
        return total;
    } */

    const emptyCart = () => {
        return setCart([])
    }

    const deleteItem = (id) => {
        return setCart(cart.filter(data => data.id !== id))
    }

    const getItemQantty = () => {
        return cart.reduce((acc, data) => acc += data.qantty, 0)
    }

    const getItemPrice = () => {
        return cart.reduce((acc, data) => acc += data.price * data.qantty, 0)
    }

    return(
        //3- se pasa el objeto Value a los componentes hijos
        <cartContext.Provider value ={{cart, addItem, isInCart, emptyCart, deleteItem, getItemQantty, getItemPrice}}>{children}</cartContext.Provider>
     );
}

export  { cartContext }

// console.log("desde context", data, count)

// toda nuesta App esta en {children}
//nosotros le pasamos toda la info a través del "provider" y su atributo "value"
// value sólo puede recibir un elemento, ej: 
//                                         <Provider value={ isInCart, addItem, etc}>
//entonces englobo todo, dentro de un objeto, ej:
//  <cartContext.Provider value ={{ cart, addItem, getTotalItemsInCart, isInCart}}>{children}</cartContext.Provider>

//el metodo "some" devuelve true o false (booleano)

/* if (isInCart(newItem.id))

            // copio el carrito (se puede usar spread pero es mejor hacer un "map"
            //x cada item se retorna ése item. Sin hacer modificaciones (sugar syntax)
            let newCart = cart.map( data => data);

            //si quiero sacar las propiedades del item uso spread para desarmar el item (... data)
           //al final agrego la propiedad count
           //pusheo a ése array un nuevo objetp {...}
           // en ése obj voy a tener todo lo q tng "data" y la variable "count"
           //lo seteamos en el estado
            newCart.push({ ...data, count: count})
            setCart(newCart);
    } */