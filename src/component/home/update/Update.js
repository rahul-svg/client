import React,{useState} from 'react'
import Modal from 'react-bootstrap/Modal';
import Axios from 'axios';

function Update(props,{handleUpdate,customer}) {
   
   
    
 console.log(customer)
    


  return (
    <Modal
    {...props}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
  >
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter">
        Update Customer
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
    <form class="flex flex-col justify-center">
        <div class="inline-flex justify-around py-2">
        <label class="text-xl font-semibold">User Name</label>
        <input class="border-2 border-black w-3/4" type="text" name="username"    />
        </div>
        <div class="inline-flex justify-around py-2">
        <label class="text-xl font-semibold">Work Email </label> 
        <input class="border-2 border-black w-3/4 text-right" type="email" name="email"   />
        </div>
        <div class="inline-flex justify-around py-2">
        <label class="text-xl font-semibold">Phone No.</label> 
        <input class="border-2 border-black w-3/4 " type="phone" name="phone"  />
        </div>
        <div class="inline-flex justify-around py-2">
        <label class="text-xl font-semibold">Company</label>
        <input class="border-2 border-black w-3/4 " type="text" name="company"  />
        </div>

    </form>
    </Modal.Body>
    <Modal.Footer>
      <button type="submit" onClick={() => handleUpdate()}>Submit</button>
    </Modal.Footer>
  </Modal>
  )
}

export default Update