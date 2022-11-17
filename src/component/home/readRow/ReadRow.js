import React,{useState} from 'react'
import { ImPencil } from "react-icons/im"
import { AiFillDelete } from "react-icons/ai";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


function ReadRow({customer, handleDelete, handleUpdate}) {
    const [modalShow, setModalShow] = useState(false);
    const [update , setUpdate] = useState(
        {
        "username":customer.username,
      "email":customer.email,
      "phone":customer.phone,
      "company":customer.company,
        }
    );
    
    const handleUpdateChange = (event) => {
        event.preventDefault();
        setUpdate({ ...update, [event.target.name]: event.target.value });
    }

    
    
  return (
    <>
    <tr class="flex   sm:flex-col md:flex-row sm:justify-center sm:items-center w-full border-solid border-2 justify-between">
        <td class=" text-xl  md:text-lg lg:text-base sm:text-xs">{customer.username}</td>
        <td class="text-xl  md:text-lg  lg:text-base sm:text-xs">{customer.email}</td>
        <td class="text-xl md:text-lg lg:text-base sm:text-xs">{customer.phone}</td>
        <td class="text-xl md:text-lg lg:text-base sm:text-xs">{customer.company}</td>
        <td>
    <button class="text-xl" onClick={() => setModalShow(true)} ><ImPencil/></button>&nbsp;

   {/* Update Modal */}
    <Modal
       show={modalShow}
       onHide={() => setModalShow(false)}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter">
        Add Customer
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
    <form class="flex flex-col justify-center">
        <div class="inline-flex justify-around py-2">
        <label class="text-xl font-semibold">User Name</label>
        <input class="border-2 border-black w-3/4" type="text" name="username" value={update.username}   onChange={handleUpdateChange}/>
        </div>
        <div class="inline-flex justify-around py-2">
        <label class="text-xl font-semibold">Work Email </label> 
        <input class="border-2 border-black w-3/4" type="email" name="email"  value={update.email}  onChange={handleUpdateChange}/>
        </div>
        <div class="inline-flex justify-around py-2">
        <label class="text-xl font-semibold">Phone No.</label> 
        <input class="border-2 border-black w-3/4 " type="phone" name="phone"  value={update.phone} onChange={handleUpdateChange}/>
        </div>
        <div class="inline-flex justify-around py-2">
        <label class="text-xl font-semibold">Company</label>
        <input class="border-2 border-black w-3/4 " type="text" name="company"  value={update.company} onChange={handleUpdateChange}/>
        </div>
        

    </form>
    </Modal.Body>
    <Modal.Footer>
      <button type="submit" onClick={() => handleUpdate(update,customer.id)}> <Button onClick={() => setModalShow(false)}>Update</Button></button>
    </Modal.Footer>
    </Modal>

            <button class="text-xl" onClick={() => handleDelete(customer.id)}><AiFillDelete /></button>
        </td>
    </tr>
    </>
  )
}

export default ReadRow



