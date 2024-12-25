import logo from "./logo.svg";
import "./App.css";
import { useState } from 'react';
import axios from 'axios'

function App() {
 const [name,setName]= useState('')
 const [email,setEmail]= useState('')
 const [age,setAge]= useState(0)
 const [image,setImage]= useState('')

 const createUser= (e)=>{
  e.preventDefault()
  fetch('http://localhost:3000/users').then(response=>response.json()).then((data)=>{
    // console.log(data)
    const id = data.length+1
    const userData ={id,name,image,email,age}
    axios.post('http://localhost:3000/users',userData).then(function(response){
      console.log(response)
    })
  })
 }
 
  const styles = {
    main: {
      minHeight: "100vh",
      padding:34
    },
    form:{
      width:500
    },
  };
  return (
    <div className="main " style={styles.main} data-bs-theme="dark">
      <h3>Users</h3>
      <form onSubmit={createUser} style={styles.form}>
        <input type="text" className="form-control mb-3" placeholder="Name" value={name} onChange={(e)=>{setName(e.target.value)}}/>
        <input type="text" className="form-control mb-3" placeholder="Email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
        <input type="text" className="form-control mb-3" placeholder="Age" value={age} onChange={(e)=>{setAge(e.target.value)}}/>
        <input type="text" className="form-control mb-3" placeholder="Image" value={image} onChange={(e)=>{setImage(e.target.value)}}/>
        <button className="btn btn-success">Create</button>
      </form>
      <hr/>
    <table className="table table-bordered ">
      <thead>
        <tr>
         <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Age</th>
          <th>Image</th>
          <th>Action</th>
        </tr>
      </thead>
    </table>
    </div>
  );
}

export default App;
