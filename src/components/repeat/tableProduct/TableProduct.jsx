import React from "react";
import products from "../../../data/products";

import "./TableProduct.css";

export default () => {
    const productsJSX = products.map( (product, i) =>{
        return(
            <tr key={product.id} className={i%2===0 ? "Pair": "Odd"}>
                <td>{product.name}</td>
                <td>{product.brand}</td>
                <td>{product.model}</td>
                <td>R$ {product.price.toFixed(2)}</td>
            </tr>
        ) 
    });

    return(
        <div>
            <table className="TableProduct">
                <thead>
                    <th>Equipament</th>
                    <th>Brand</th>
                    <th>Model</th>
                    <th>Price</th>
                </thead>
                <tbody>
                    {productsJSX}
                </tbody>
            </table>
        </div>
    )
}