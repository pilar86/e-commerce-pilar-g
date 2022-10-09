import {useState, useEffect} from 'react';
import "./itemListContainer.css";
import ItemList from "../../components/Productos/ItemList";
import { useParams } from "react-router-dom";
import getItems, { getItemsByCategory } from '../../services/mockAPI';


function ItemListContainer() {

        let [data, setData] = useState([]);
        const { category } = useParams ();

    
    useEffect(()=>{
        if (category === undefined) {
            getItems().then((respDatos)=> setData(respDatos));
        } else {
            getItemsByCategory(category).then((respDatos) => setData (respDatos));
        }
    }, [category]);

    return (
        <div>
            <div className="main container">
                <ItemList data={data}/>  
                </div>
            </div>
    );
}

export default ItemListContainer;

    
    
    