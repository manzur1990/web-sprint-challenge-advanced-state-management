import React, {useState, useEffect} from 'react'
import axios from 'axios'

import { SmurfContext } from './context/SmurfContext'
import  SmurfList from './SmurfList'
import  SmurfForm  from './SmurfForm'


export const App = () => {
  const [smurfs, setSmurfs] = useState([])
const [newSmurf, setNewSmurf] = useState({
  name:'',
  age:'',
  height:'',
  id:''
})
  
useEffect(() =>{
  axios.get('http://localhost:3333/smurfs')
  .then(res=>{
    setSmurfs(res.data)
  })
},[])

const onChange = e => {
  const smurf = e.target.name
  setNewSmurf({
      ...newSmurf,
      [smurf]: e.target.value, id: Date.now()
  })
}

const onSubmit = (e) => {
  e.preventDefault();
  axios.post("http://localhost:3333/smurfs", {...newSmurf})
    .then((res) => setSmurfs(res.data))  
    .catch((err) => {
      console.log("post: ", err.response);
    });
    setNewSmurf("")
};

const removeSmurf = smurfId => {
 axios
 .delete(`http://localhost:3333/smurfs/${smurfId}`)
 .then(res =>{
  setSmurfs(res.data)
 })
 .catch(err =>{
  console.log(err.data)
 })
 
}
  
  return (
    
      <SmurfContext.Provider value={{onSubmit, smurfs, onChange, removeSmurf}}>
      <SmurfForm /> 
      <SmurfList />
    </SmurfContext.Provider>
    
  )
}
