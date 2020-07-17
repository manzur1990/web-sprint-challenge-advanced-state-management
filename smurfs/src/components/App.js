import React, {useState, useEffect} from 'react'
import axios from 'axios'

import { SmurfContext } from './context/SmurfContext'
import { SmurfCard } from './SmurfCard'
import { SmurfForm } from './SmurfForm'



export const App = () => {
  return (
    
      <SmurfContext.Provider value={{}}>
      <SmurfCard/>
      <SmurfForm/>
    </SmurfContext.Provider>
    
  )
}
