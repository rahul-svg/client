
import React,{Fragment,useState,useEffect} from 'react'
import {BsSearch } from "react-icons/bs"
import { IoFilterSharp } from "react-icons/io5"
import { GrAdd } from "react-icons/gr"
import ReadRow from './readRow/ReadRow'
import AddModal from '../add/AddModal'






function Home({data, handleDelete, handleUpdate}) {
 
  
  const [modalShow, setModalShow] = useState(false);
   const [query,setQuery] = useState();

   
   

   const keys = ["username","email","phone","company"];
 
   const searchFilter = (data) => {
    if(!query){
      return data;
    }
    else{ 
      return data.filter((item) =>
      keys.some((key) => item[key].toString()?.includes(query)))
  }}

  

 console.log("query",query)

 
  return (
    <div class=" flex flex-col w-11/12 py-2 overflow-hidden h-screen bg-slate-200 ">
      <div class="inline-flex justify-between w-4/8 h-1/6  mx-3">
        <div class="inline-flex md:justify-center justify-start bg-white items-center border-2 border-black md:w-3/5 w-9/12 mx-1 md:h-1/5 h-1/4 mx-3" >
          <span><BsSearch/></span> 
          <input class="md:w-full w-full pl-5 md:pl-0 h-full" type="text" placeholder='Search'  onChange={(e) => setQuery(e.target.value)}/>
        </div>
        <div class="inline-flex ">
          <img class="md:w-2/6 md:h-1/5 w-4/6 h-1/4 mr-1" src={require('../../Assets/bell.png')} alt="notifications"/>
          <label class="rounded-full bg-red-400 px-2 md:w-2/6 md:h-1/5 w-4/6 h-1/4 mr-1 ">A</label>
          
        </div>
      </div>

      <div class="w-full  h-3/4 md:mx-0">
        <h1 class="text-left font-semibold md:py-2 py-0 md:text-2xl text-4xl px-2">Customer Details</h1>
        <div class="flex sm:flex-col md:flex-row md:justify-center   justify-between w-full  pt-5 px-2 md:items-center items-start w-full">
          <h2 class="inline-flex font-medium md:text-lg text-2xl w-full justify-start items-start">The terms you are Tracking</h2>
          <div class="flex flex-row  w-full justify-end py-2">
           <button class="w-24 md:h-6 h-full py-1  mx-2 rounded-lg inline-flex justify-center  items-center border-2 border-stone-600"><IoFilterSharp/>Filter
           </button>
  
           <button onClick={() => setModalShow(true)} class="w-24 md:h-6 h-full py-1  mx-2 rounded-lg inline-flex justify-center  items-center border-2 bg-red-300">
            <GrAdd/>Add
           </button>

      <AddModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

          
          </div>
        </div>

        <table class="flex flex-col border-collapse text-lg md:w-11/12 sm:w-9/12 ml-8 h-full justify-center  h-auto overflow-hidden 	sm:mx-1 shadow-lg   bg-white my-20  ">
          <thead class=" w-full md:px-5  px-2">
            <tr class="flex   sm:flex-col md:flex-row sm:justify-center  sm:items-center w-full border-solid border-2 justify-between ">
              <th class="sm:text-xs md:text-lg lg:text-base text-xl">Username</th>
              <th class="sm:text-xs md:text-lg lg:text-base text-xl">Email Address</th>
              <th class="sm:text-xs md:text-lg lg:text-base text-xl">Phone Number</th>
              <th class="sm:text-xs md:text-lg lg:text-base text-xl">Company</th>
              <th class="sm:text-xs md:text-lg lg:text-base text-xl">Action</th>
            </tr>
          </thead>
          <tbody class=" w-full px-2 md:px-5">
                {searchFilter(data)?.map((customer) => (
                  <Fragment key={customer.id}>
                    <ReadRow
                      customer={customer}
                      handleDelete={handleDelete}
                      handleUpdate={handleUpdate}
                    />
                  </Fragment>
                ))}
              </tbody>
        </table>
      </div>

    </div>
  )
}

export default Home