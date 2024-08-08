import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import toast from 'react-hot-toast';
import TopBar from './TopBar';

function Create() {
    let navigate = useNavigate();
    let [name, setName] = useState("");
    let [email, setEmail] = useState("");
    let [phone, setPhone] = useState("");
    let [state, setState] = useState("");
    let [country, setCountry] = useState("");
    let [website, setWebsite] = useState("");
    let [company, setCompany] = useState("");

    

    let handleSubmit = async()=>{
        let body = {
            "name": name,
            "email": email,
            "phone": phone,
            "address":{
                "state": state,
                "country": country,
            },
            "website": website,
            "company": company
        }
        if(!name || !email || !phone || !state || !state || !country || !website || !company){
            alert('All Fields Mandatory');
            return;
        }
        try {
            let res = await axios.post('https://66b2fb2b7fba54a5b7eafe2a.mockapi.io/user', body);
            toast.success("Data Created Successfully");
            navigate('/');
        } catch (error) {
            toast.error(res.response.data)
        }
        
    }

  return <>
    <TopBar/>
    <div style={{padding :"20px"}}>
        <Form>
        <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Name" onChange={(e)=>{setName(e.target.value)
            }}/>
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" onChange={(e)=>{setEmail(e.target.value)}} required/>
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label>Phone</Form.Label>
            <Form.Control type="text" placeholder='Enter Phone'onChange={(e)=>{setPhone(e.target.value)}}/>
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label>State</Form.Label>
            <Form.Control type="text" placeholder="Enter State" onChange={(e)=>{setState(e.target.value)}}/>
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label>Country</Form.Label>
            <Form.Control type="text" placeholder='Enter Country'onChange={(e)=>{setCountry(e.target.value)}}/>
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label>Website</Form.Label>
            <Form.Control type="text" placeholder="Enter Website" onChange={(e)=>{setWebsite(e.target.value)}}/>
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label>Company</Form.Label>
            <Form.Control type="text" placeholder="Company Name" onChange={(e)=>{setCompany(e.target.value)}}/>
        </Form.Group>
        <Button variant="primary" onClick={()=>handleSubmit()}>
            Submit
        </Button>
        </Form>
    </div>
  </>
}

export default Create