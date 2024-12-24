import logo from "./logo.svg";
import "./App.css";
import { useState } from 'react';

function App() {
 const [name,setName]= useState('')
 const [email,setEmail]= useState('')
 const [age,setAge]= useState('')
 const [image,setImage]= useState(0)

 const createUser= (e)=>{
  e.preventDefault()
  fetch('http://localhost:3000/users').then(response=>response.json()).then((data)=>{
    const id = data.length+1
  })
 }
 
  const styles = {
    main: {
      mainHeight: "100vh",
    },
    form:{
      width:500
    },
  };
  return (
    <div className="main" style={styles.main}>
      <h3>Users</h3>
      <form onSubmit={createUser} style={styles.form}>
        <input type="text" className="" placeholder="Name" value={name} onChange={(e)=>{setName(e.target.value)}}/>
        <input type="text" className="" placeholder="Email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
        <input type="text" className="" placeholder="Age" value={age} onChange={(e)=>{setAge(e.target.value)}}/>
        <input type="text" className="" placeholder="Image" value={image} onChange={(e)=>{setImage(e.target.value)}}/>
        <button>Create</button>

      </form>
    </div>
  );
}

export default App;
