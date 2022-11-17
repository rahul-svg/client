import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Axios from 'axios';

function AddModal(props) {
    const [formData,setFormData] = useState({
      "username":"",
      "email":"",
      "phone":"",
      "company":"",
    })
  

    const handleChange = (event) => {
      event.preventDefault();
        setFormData({ ...formData, [event.target.name]: event.target.value });
    }

    //console.log("customer",formData);

    const handleSubmit = () => {
        Axios.post("http://localhost:3000/customers", formData)
          .then((response) => {
            console.log(response);
           alert("Customer Added Successfully")
           
          })
          .catch((err) => {
            console.log(err);
          });
    }
   

    


  return (
    <Modal
    {...props}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
  >
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter" >
        Add Customer
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
    <form class="flex flex-col justify-center">
        <div class="inline-flex justify-around py-2">
        <label class="text-xl font-semibold">User Name</label>
        <input class="border-2 border-black w-3/4" type="text" name="username"  value={formData.username}  onChange={handleChange}/>
        </div>
        <div class="inline-flex justify-around py-2">
        <label class="text-xl font-semibold">Work Email </label> 
        <input class="border-2 border-black w-3/4 " type="email" name="email"  value={formData.email}  onChange={handleChange}/>
        </div>
        <div class="inline-flex justify-around py-2">
        <label class="text-xl font-semibold">Phone No.</label> 
        <input class="border-2 border-black w-3/4 " type="phone" name="phone"  value={formData.phone} onChange={handleChange}/>
        </div>
        <div class="inline-flex justify-around py-2">
        <label class="text-xl font-semibold">Company</label>
        <input class="border-2 border-black w-3/4 " type="text" name="company"  value={formData.company} onChange={handleChange}/>
        </div>

    </form>
    </Modal.Body>
    <Modal.Footer>
    <Button onClick={props.onHide}><button type="submit" onClick={handleSubmit}>Submit</button></Button>
    </Modal.Footer>
  </Modal>
  )
}

export default AddModal