import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products,setPorducts]=useState([]);
    const [cart,setCart]= useState([]);
    useEffect(()=>{
        fetch('./drug.JSON')
        .then(res => res.json())
        .then(data => setPorducts(data))


    },[])

    const handleAddToCart=(product)=>{

        const newCart = [...cart,product];
        setCart(newCart);
        console.log(newCart)
        

    }
    return (
        <div className="shop-container">
            <div className="products-container">
                
                {
                    
                    products.map(product => <Product 
                        
                        key= {product.drug_Id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                        
                        >

                        </Product>)
                }
            </div>
            <div className="cart-container">
            <Cart cart={cart}></Cart>
            </div>
            
        </div>
    );
};

export default Shop;