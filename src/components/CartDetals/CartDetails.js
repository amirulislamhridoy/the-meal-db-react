import React from 'react';
import './CartDetails.css'

const CartDetails = (props) => {
    // console.log(props)
    return (
        <div className='cart-details'>
            <h1>{props.info.strMeal}</h1>
            <img src={props.info?.strMealThumb} alt="" />
            <p className='row'></p>
            <p className='text'>{props.info?.strInstructions}</p>
        </div>
    );
};

export default CartDetails;


// {
//     props.infos.map(info => <h1>hello</h1>)
// }
