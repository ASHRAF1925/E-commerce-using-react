import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products,setproducts]=useState([]);
    const[cart,setcart]=useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res =>res.json())
        .then(data => setproducts(data))

    },[])
    const handleAddToCart= (product)=>{
        console.log(product);
       const newCart=[...cart,product];
       setcart(newCart);

    }
    return (
        <div className='shop-container'>
            <div className="products">
               
                {
                    products.map(product=><Product key={product.id}
                    product={product}
                    handleAddToCart={handleAddToCart}
                    
                    ></Product>)

                }

            </div>
            <div className="cart_container">
                <h1>Order Summary</h1>
                <p>Selected Items : {cart.length}</p>

            </div>
        </div>
    );
};

export default Shop;