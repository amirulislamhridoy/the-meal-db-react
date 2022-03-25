import React from 'react';
import './Food.css'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faInfo } from '@fortawesome/free-solid-svg-icons'

const Food = (props) => {
    // console.log(props.mealDetails)
    const { strMeal, strInstructions, strMealThumb} = props.food
    return (
        <div className="food">
            <img src={strMealThumb} alt="" />
            <h2>{strMeal}</h2>
            <p>{strInstructions.slice(0, 100)}</p>
            <button  onClick={ () => props.mealDetails(props.food)} className='food-btn'>
                <FontAwesomeIcon className='icon' icon={faInfo} spin></FontAwesomeIcon>
                More
                </button>
        </div>
    );
};

export default Food;