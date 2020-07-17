import React, { useContext } from 'react'
import { SmurfContext } from './context/SmurfContext'

export default function SmurfCard(props) {
    console.log(props)
    const {removeSmurf} = useContext(SmurfContext)
    return (
        <div>
        <h2 className="name">{props.smurf.name}</h2> 
    <p className="age">Age: {props.smurf.age}</p> 
        <p className="height">Height: {props.smurf.height}</p>
        <button onClick={() => removeSmurf(props.smurf.id)}>Eliminate Smurf</button>
        </div>

    )
}
