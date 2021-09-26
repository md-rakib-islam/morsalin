import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faUserCheck } from '@fortawesome/free-solid-svg-icons'

import './Product.css'

const Product = (props) => {
    
    const {drug_image,drug_name_brand,drug_company,drug_price,drug_Id, country}= props.product;
    
    const btnIcon = <FontAwesomeIcon icon={faUserCheck} />
    

    return (
        <div className='product'>
            <div className='product-img'>
                <img  src={drug_image} alt="" />
            </div>
            <div className='product-info'>
                <h4>scientists Name: {drug_name_brand.slice(0,15)}</h4>
                <h5>Company : {drug_company.slice(0,15)}</h5>
                <h5>Country: {country}</h5>
                <p><b>Price: ${drug_price}</b></p>
                <p>Product Id:  {drug_Id} </p>
                <button onClick={()=>props.handleAddToCart(props.product)}
                >{btnIcon} Add to Cart</button>

            </div>
        </div>
    );
};

export default Product;