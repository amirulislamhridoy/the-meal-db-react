import React, { useEffect, useState } from 'react';
import Food from '../Food/Food';
import './Foods.css'

const Foods = (props) => {
    // console.log(props.mealDetails)
    const [foods, setFoods] = useState([])
    const [newFoods, setNewFoods] = useState([])
    useEffect( () => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=A')
        .then(res => res.json())
        .then(data => setFoods(data.meals))
    }, [])
    const eventHandle = () => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=` + {newFoods})
        .then(res => res.json())
        .then(data => console.log(data))
        console.log(newFoods)
    }
    return (
        <div>
            <div className='search'>
                <input  onChange={event => setNewFoods( event.target.value)} ></input>
                <button onClick={eventHandle}>Click</button>
            </div>
            <div className='foods'>
                {
                    foods.map(food => <Food food={food} mealDetails={props.mealDetails} key={food.idMeal}></Food>)
                }
            </div>
        </div>
    );
};

export default Foods;