import  Axios from 'axios';
import React, { useState, useEffect } from 'react'
import {useNavigate} from 'react-router-dom'






function Login({isLogin}) {

  const navigate = useNavigate();
  
  const [loginData, setLoginData] = useState({
    "email": "",
    "password": "",
  });
  const [exist,setExist] = useState();
  const [check, setCheck] = useState(false);

  const loginDetails = (e) => {
    const fieldName = e.target.getAttribute("name")
    const fieldValue = e.target.value;
    const newUser = { ...loginData }
    newUser[fieldName] = fieldValue
    setLoginData(newUser);
  }
 
       useEffect(() => {
    
      Axios.get(`http://localhost:3000/users`).then((res) => {
       setExist(res.data);
      }).catch((error) => {
       console.log(error)
    })    
   
  }
)


 const signin = () => {
  let obj = exist.find(o => o.email === loginData.email);
  if(!obj){
    alert("Email Not Found")
  }
  else{
    if(obj.password === loginData.password){
      setCheck(true);
      navigate('/dashboard')
      
    }
    else{
      alert("Invalid Passowrd")
    }
  }
 }



 
  return (
    <div class="flex flex-col justify-evenly items-center w-screen  h-screen bg-blue-300 ">
      <img src={require('../../../Assets/main_logo.png')} />
      <form class="flex flex-col justify-between items-center shadow-lg bg-blue-400 rounded-lg h-3/5 sm:w-5/6 md:w-4/6 lg:w-4/6 xl:w-3/6 w-2/6  py-3">
        <h1>Sign In</h1>
        <div class="flex flex-col w-4/5 justify-evenly h-2/5">
          <div class="inline-flex justify-between itmes-center my-2 ">
            <label class="font-semibold text-lg sm:text-xs">Email</label>
            <input class=" border-2 h-full py-1 w-4/6 border-black" type="email" name="email" placeholder='Enter your Email '  value={loginData.email} onChange={loginDetails}/>
          </div>
          <div class="inline-flex justify-between itmes-center my-2">
            <label class="font-semibold text-lg sm:text-xs ">Paasowrd</label>
            <input class=" border-2 h-full border-black py-1 w-4/6" type="password" name="password" placeholder='Enter Password' value={loginData.password} onChange={loginDetails} />
          </div>

        </div>

        <button onClick={signin} class="w-3/12 sm:text-xs py-2 bg-blue-600 border-blue-800 border-2 rounded-lg">Submit</button>

        <div>
          <span>Don't have an account?</span>
          <h4><a href='/Signup'>Sign up.</a></h4>
        </div>
      </form>

    </div>
  )
}

export default Login