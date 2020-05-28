import React from "react";
import products from "../../data/products";

export default () => {
    const productsJSX = products.map( (product) =>{
        return(
            <tr key={product.id}>
                <td>{product.name}</td>
                <td>{product.brand}</td>
                <td>{product.model}</td>
                <td>{product.price}</td>
            </tr>
        )
    });

    return(
        <table>
            <tbody>
                {productsJSX}
            </tbody>
        </table>
    )
}