import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products,setproducts]=useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res =>res.json())
        .then(data => setproducts(data))

    },[])
    return (
        <div className='shop-container'>
            <div className="products">
                <h1>No of products : {products.length}</h1>
                {
                    products.map(product=><Product key={product.id}
                    product={product}
                    ></Product>)

                }

            </div>
            <div className="cart_container">

            </div>
        </div>
    );
};

export default Shop;