import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
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

            </div>
            <div className="cart_container">

            </div>
        </div>
    );
};

export default Shop;