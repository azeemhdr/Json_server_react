import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from 'react';
import axios from 'axios'

function App() {
 const [name,setName]= useState('')
 const [email,setEmail]= useState('')
 const [age,setAge]= useState(0)
 const [image,setImage]= useState('https://picsum.photos/200/200')
 const [users,setUsers] = useState([])
 const [userData,SetUserData] = useState({})

 const createUser= (e)=>{
  e.preventDefault()
  fetch('http://localhost:3000/users').then(response=>response.json()).then((data)=>{
    // console.log(data)
    const id = data.length+1
     
    axios.post('http://localhost:3000/users',{id,name,image,email,age}).then(function(response){
      // console.log(response)
      SetUserData({id,name,image,email,age})
      // fetchUsersData()
    })
  })
 }
//  const fetchUsersData = ()=>{
//  axios.get('http://localhost:3000/users').then((response)=>{
//   SetUserData(response.data)
//  }) 
//  }
 useEffect(()=>{
  axios.get('http://localhost:3000/users').then((response)=>{
    setUsers(response.data)
    // fetchUsersData()
  })
 },[userData])
 
  const styles = {
    main: {
      minHeight: "100vh",
      padding:34
    },
    form:{
      width:500
    },
    image:{
      width:100
    }
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
          <th style={{width:100}}>Image</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {(users.length) !=0?users.map((item,index)=>{
          return <tr key={index}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.age}</td>
            <td><img src={item.image} style={styles.image}/></td>
            <td><button className="btn btn-danger fw-bold">View</button></td>

          </tr>
        }):'Loading...'}
      </tbody>
    </table>
    </div>
  );
}

export default App;
