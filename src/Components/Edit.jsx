import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useParams } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import toast from 'react-hot-toast';
import TopBar from './TopBar';
import axios from 'axios';

function Edit() {
    let {id} = useParams();
    let navigate = useNavigate();
    let [data, setData] = useState({});
    let [name, setName] = useState("");
    let [email, setEmail] = useState("");
    let [phone, setPhone] = useState("");
    let [state, setState] = useState("");
    let [country, setCountry] = useState("");
    let [website, setWebsite] = useState("");
    let [company, setCompany] = useState("");

    const getData = async(id)=>{
        try {
            let res = await axios.get(`https://66b2fb2b7fba54a5b7eafe2a.mockapi.io/user/${id}`);
            setName(res.data.name);
            setState(res.data.address.state);
            setCountry(res.data.address.country);
            setEmail(res.data.email);
            setPhone(res.data.phone);
            setWebsite(res.data.website);
            setCompany(res.data.company);
            if(res.status === 200){
                toast.success('Data Fetched Successfully');
            }
        } catch (error) {
            toast.error(error.response.data)
        }
        
    }

    let handleSubmit = async(id)=>{
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
        console.log(body);
        
        try {
            let res = await axios.put(`https://66b2fb2b7fba54a5b7eafe2a.mockapi.io/user/${id}`, body);
            toast.success("Data Created Successfully");
            navigate('/');
        } catch (error) {
            toast.error(res.response.data)
        }
        
    }

    useEffect(()=>{
        getData(id)
    }, [])
  return <>
    <TopBar/>
    <div style={{padding :"20px"}}>
        <Form>
        <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Name" value={name} onChange={(e)=>{setName(e.target.value)
            }}/>
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label>Phone</Form.Label>
            <Form.Control type="text" placeholder='Enter Phone'value={phone} onChange={(e)=>{setPhone(e.target.value)}}/>
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label>state</Form.Label>
            <Form.Control type="text" placeholder="Enter State" value={state} onChange={(e)=>{setState(e.target.value)}}/>
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label>Country</Form.Label>
            <Form.Control type="text" placeholder='Enter Country' value={country} onChange={(e)=>{setCountry(e.target.value)}}/>
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label>Website</Form.Label>
            <Form.Control type="text" placeholder="Enter Website" value={website} onChange={(e)=>{setWebsite(e.target.value)}}/>
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label>Company</Form.Label>
            <Form.Control type="text" placeholder="Company Name" value={company} onChange={(e)=>{setCompany(e.target.value)}}/>
        </Form.Group>
        <Button variant="primary" onClick={()=>handleSubmit(id)}>
            Submit
        </Button>
        </Form>
    </div>
  </>
}

export default Edit