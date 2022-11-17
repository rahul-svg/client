import React from 'react'
import {AiFillHome,AiFillSetting } from "react-icons/ai"
import {BsPeopleFill} from "react-icons/bs"
import { GrResources ,GrHostMaintenance} from "react-icons/gr"
import { CiSquareAlert } from "react-icons/ci"


function Navbar() {
  return (
    
   <div class="flex flex-col shrink-0 h-screen bg-white w-1/5 justify-start py-2 overflow-hidden items-center">
    <img class="flex flex-row w-3/4 " src={require('../../Assets/main_logo.png')} alt="CELETEL"/>
    <ul class="flex flex-col  sm:w-3/4 w-full justify-center items-center my-2 pr-6 h-1/4">
      <li class="flex sm:flex-col flex-row sm:justify-center justify-between items-center sm:py-2 hover:bg-blue-600 w-3/4 h-1/6 md:py-4"><span><AiFillSetting/></span><a class=" no-underline  text-xl py-3 sm:py-0 md:text-lg md:py-2 sm:text-xs">Home</a></li>
      <li class="flex sm:flex-col flex-row sm:justify-center justify-between items-center sm:py-2 hover:bg-blue-600 w-3/4 h-1/6 md:py-4"><span><BsPeopleFill/></span><a class =" no-underline  text-xl py-3 sm:py-0 md:text-lg md:py-2 sm:text-xs">Matches</a></li>
      <li class="flex sm:flex-col flex-row sm:justify-center justify-between items-center sm:py-2 hover:bg-blue-600 w-3/4 h-1/6 md:py-4 "><span><GrResources/></span><a class ="  no-underline text-xl py-3 sm:py-0 md:text-lg md:py-2 sm:text-xs">Sources</a></li>
      <li class="flex sm:flex-col flex-row sm:justify-center justify-between items-center sm:py-2 hover:bg-blue-600 w-3/4 h-1/6 md:py-4"><span><GrHostMaintenance/></span><a class =" no-underline  text-xl py-3 sm:py-0 md:py-2 sm:text-xs">Integration</a></li>
      <li class="flex sm:flex-col flex-row sm:justify-center justify-between items-center sm:py-2 hover:bg-blue-600 w-3/4 h-1/6 md:py-4"><span><CiSquareAlert/></span><a class=" no-underline text-xl py-3 sm:text-xs">Alerts</a></li>
      <li class="flex sm:flex-col flex-row sm:justify-center justify-between items-center sm:py-2 hover:bg-blue-600 w-3/4 h-1/6 md:py-4">
        <span><AiFillSetting/></span><a  class="text-xl py-5 sm:text-xs"> Setting</a>
       
      </li>
    </ul>

    
   </div>

   
  )
}

export default Navbar