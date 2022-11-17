import React,{useState,useEffect} from 'react'
import Navbar from './navbar/Navbar'
import Home from './home/Home'
import Axios from 'axios';



function Main() {
  
  
  
  const [apiData, setApiData] = useState();
  

    useEffect(() => {
      Axios.get(`http://localhost:3000/customers`).then((res) => {
        const users = res.data
        setApiData(users);
       }).catch((error) => {
          console.log("error",error)
       })
   })



   const handleDelete = (id) => {
    Axios.delete(`http://localhost:3000/customers/${id}`).then((res) => {
      console.log(res)
     alert("Deleted Successfully")
      
    }).catch(error => {
      console.log(error)
  });
  }


  const handleUpdate = (updatedCustomer,id) => {
    Axios.put(`http://localhost:3000/customers/${id}`, updatedCustomer)
    .then((res) => { 
      console.log(res)
      alert("Updated Successfully")
    })
    .catch(error => {
        console.log(error)
    });
  }

  
  

  
  return (
    <div class="flex flex-row w-screen h-screen  ">
     <>
      <Navbar/>
     </>
     <>
      <Home data={apiData}
      handleDelete={handleDelete}
      handleUpdate={handleUpdate}
      />
     </>
    </div>
  )
}

export default Main