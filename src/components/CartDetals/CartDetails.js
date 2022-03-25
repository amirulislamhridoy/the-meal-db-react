import React from 'react';
import './CartDetails.css'

const CartDetails = (props) => {
    // console.log(props)
    // console.log(props.infos[0]?.idMeal)
    return (
        <div className='cart-details'>
            <h1>{props.infos[0]?.strMeal}</h1>
            <img src={props.infos[0]?.strMealThumb} alt="image"></img>
            <p className='row'></p>
            <p className='text'>{props.infos[0]?.strInstructions}</p>
        </div>
    );
};

export default CartDetails;