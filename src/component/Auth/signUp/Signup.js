import Axios from 'axios';
import React,{useState} from 'react'


function Signup() {
    const [form, setForm] = useState({
        "email":"",
        "password":"",
    });
    const handleFormChange = (e) => {
     const fieldName = e.target.getAttribute("name")
     const fieldValue = e.target.value;
     const newUser = {...form}
      newUser[fieldName] = fieldValue
      setForm(newUser);
    }

   



    const handleSignup = (e) => {
      e.preventDefault();
     Axios.post(`http://localhost:3000/users`,form).
     then((res) => {
       console.log(res.data);

     }).catch((error) => {
      console.log(error);
     })
    }

    
  return (
    <div class="flex flex-col justify-evenly items-center w-screen h-screen bg-blue-300 ">
     <img src={require('../../../Assets/main_logo.png')}/>
     <form class="flex flex-col justify-between items-center shadow-lg bg-blue-400 rounded-lg h-3/5 sm:w-5/6 md:w-4/6 lg:w-4/6 xl:w-3/6 w-2/6 py-3">
        <h1>Sign Up</h1>
        <div class="flex flex-col w-4/5 justify-evenly h-2/5">
        <div class="inline-flex justify-between itmes-center my-2 ">
         <label class="font-semibold text-lg sm:text-xs">Email</label>
         <input class=" border-2 h-full py-1 w-4/6 border-black" type="email" name="email" placeholder='Enter your Email ' value={form.email} onChange={handleFormChange}/>
        </div>
        <div  class="inline-flex justify-between itmes-center my-2">
         <label class="font-semibold text-lg sm:text-xs ">Paasowrd</label>
         <input class=" border-2 h-full border-black py-1 w-4/6" type="password" name="password" placeholder='Enter Password' value={form.password} onChange={handleFormChange}/>
        </div>
       
        </div>
        
        <button onClick={handleSignup} class="w-3/12  py-2 bg-blue-600 border-blue-800 border-2 rounded-lg">Submit</button>

        <div>
            <span>Have an account?</span>
            <h4><a class="" href='/'>Sign In</a></h4>
        </div>
     </form>

    </div>
  )
}

export default Signup