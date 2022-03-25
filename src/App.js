import logo from './logo.svg';
import './App.css';
import Foods from './components/Foods/Foods';
import Header from './components/Header/Header';
import CartDetails from './components/CartDetals/CartDetails';
import { useEffect, useState } from 'react';

function App() {
  const [input, setInput] =useState('')
  const [infos, setInfos] = useState([])

  // let array = []
  const mealDetails = (details) => {
    const check = infos.find(info => info.idMeal === details.idMeal)
    if(check){
      alert('You are already selected.')
    }
    else{
      setInfos([...infos, details])
    }
    }

  return (
    <div>
      <Header></Header>
      <main>
        <Foods mealDetails={mealDetails}></Foods>
        <div className='cart-container'>
          {
            infos.map(info => <CartDetails info={info} key={info.idMeal}></CartDetails>)
          }
        </div>
        
      </main>
    </div>
  );
}

export default App;

{/* <CartDetails infos={infos}></CartDetails> */}