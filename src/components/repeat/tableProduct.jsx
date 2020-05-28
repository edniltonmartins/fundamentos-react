import React from "react";
import products from "../../data/products";

export default () => {
    const productsJSX = products.map( (product) =>{
        return(
            <tr>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.brand}</td>
                <td>{product.price}</td>
            </tr>
        )
    });

    return(
        <table>
            {productsJSX}
        </table>
    )
}