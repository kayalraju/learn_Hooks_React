import React,{useState} from 'react'

export default function Arrayhook() {
    const [brand, setBrand] = useState("Ford");
    const [model, setModel] = useState("Mustang");
    const [year, setYear] = useState("1964");
    const [color, setColor] = useState("red");

    const [car, setCar] = useState({
        brand: "Webskitters",
        model: "Mustang",
        year: "1964",
        color: "red"
      });
  return (
    <div>
      <h1>We could create multiple state Hooks to track individual values</h1>
      <h1>my {brand}</h1>
        <h1>It is a {color} {model} from {year}.</h1>
        <h1 className='App'>we can pass object as hooks</h1>
        <h1>{car.brand} It is a {car.color} {car.model} from {car.year}.</h1>
    </div>
  )
}
