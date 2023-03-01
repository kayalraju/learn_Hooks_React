import React from 'react'
import { useState, useReducer } from 'react'
import './style.css'
const initialState = 0

function reducer(state, action) {
    switch (action.type) {
        case "incriment":
            return state + 1
        case "decriment":
            return state - 1
            default :
            throw new Error()
    }
}

const Redusercount = () => {
    //const [counter, setCounter] = useState(0)
    const [state, dispach] = useReducer(reducer, initialState)
    // const incriment = () => {
    //     setCounter(counter + 1)
    // }
    // const dicriment = () => {
    //     setCounter(counter - 1)
    // }
    return (
        <div className='container'>
            <h1>racta reducer hook use example counter mathod like use state hook</h1><hr />
            <h2>{state}</h2>
            <button className='hi' onClick={() => dispach({ type: "incriment" })}>incriment</button>
            <button className='hi' onClick={() => dispach({ type: "decriment" })}>Decriment</button>
        </div>
    )
}

export default Redusercount
