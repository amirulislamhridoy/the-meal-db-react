import logo from './logo.svg';
import './App.css';
import Foods from './components/Foods/Foods';
import Header from './components/Header/Header';
import CartDetails from './components/CartDetals/CartDetails';
import { useEffect, useState } from 'react';

function App() {
  const [input, setInput] =useState('')
  const [infos, setInfos] = useState([])

  let array = []
    const mealDetails = (details) => {
      array.push(details)
      setInfos(array)
      console.log(array)
    }

  return (
    <div>
      <Header></Header>
      <main>
        <Foods mealDetails={mealDetails}></Foods>
        <CartDetails infos={infos}></CartDetails>
      </main>
    </div>
  );
}

export default App;
