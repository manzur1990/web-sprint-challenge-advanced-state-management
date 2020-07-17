import React, {useContext} from 'react'


import SmurfCard from './SmurfCard'

//Context
import {SmurfContext} from './context/SmurfContext'


export default function Smurfs() {

    const {smurfs} = useContext(SmurfContext)

    return (
        <div>
           {smurfs.map(smurf => 
           <SmurfCard 
           key={smurf.id} 
           smurf={smurf}
           />)} 
        </div>
    )
}
