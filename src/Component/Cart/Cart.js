import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faUser } from '@fortawesome/free-solid-svg-icons'

import './Cart.css'
const Cart = (props) => {

    const {cart}= props;
     let total = 0;
     let scientistsName= '';
     for (const product of cart){
         // Name of list
         scientistsName=  cart.map(product=> <li>{product.drug_name_brand}</li>);
         

         //TOtal Amount
         total = total + product.drug_price;
        
     }
    // const ScientistsName = () => (
    // <ul>
    //     {ScientistsName.map(item => (
    //     <li key={item}>{item}</li>
    //     ))}
    // </ul>
    // );


    const iconUser = <FontAwesomeIcon
    icon= {faUser}
    />
     
    return (
        <div className='cart-info'>
            
            <h2> {iconUser}  Scientists Added : {props.cart.length}</h2>
            <h2> Scientists Name </h2>
            <p>{scientistsName}</p>
            <br />
            <b className="font-color">
                <h3>Total : ${total}</h3>
                
            </b>

        </div>
    );
};



export default Cart;