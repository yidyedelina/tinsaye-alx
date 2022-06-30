import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import Footer from './components/Footer';
import Header from './components/Header';
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import Home from './components/pages/Home'
const coffeeData = [
  {
    name: "hulu coffee",
    price: 45,
    category: "coffee",
    telegram: "no",
    phone: "60",
  },
];
const data =
  localStorage.getItem("coffee") == null
    ? coffeeData
    : JSON.parse(localStorage.getItem("coffee"));
console.log(data)
export default function Kofi() {
  
   const [coffee, setCoffee] = useState(data);
  return(
    <>
    <div style={{background:'#103037'}}>
        <Header setCoffee={setCoffee} coffee={coffee} />
        <Home coffee={coffee}/>
    <Footer/>
    </div>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Kofi/>
);

