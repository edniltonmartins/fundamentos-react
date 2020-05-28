import React from "react";
import products from "../../data/products";

import "../../App.css";

export default () => {
    const productsJSX = products.map( (product, i) =>{
        return(
            <tr key={product.id} className={i%2===0 ? "Pair": ""}>
                <td>{product.name}</td>
                <td>{product.brand}</td>
                <td>{product.model}</td>
                <td>{product.price}</td>
            </tr>
        ) 
    });

    return(
        <table className="TableProduct">
            <tbody>
                {productsJSX}
            </tbody>
        </table>
    )
}