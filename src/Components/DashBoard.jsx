import React, { useEffect, useState } from 'react'
import TopBar from './TopBar'
import axios from 'axios'
import Table from 'react-bootstrap/Table';
import toast from 'react-hot-toast';
import Button from 'react-bootstrap/Button';
import { Navigate, useNavigate } from 'react-router-dom';

function DashBoard() {
  let navigate = useNavigate();
  let [data, setData] = useState([]);
  let handleDelete = async(id)=>{
    try {
      let res = await axios.delete(`https://66b2fb2b7fba54a5b7eafe2a.mockapi.io/user/${id}`);
      if(res.status === 200){
        getData();
        toast.success("DataDeleted Successfully")
      }
      
    } catch (error) {
      toast.error(error.response.data)
    }

  }
  let getData = async()=>{
    try{
      let res = await axios.get('https://66b2fb2b7fba54a5b7eafe2a.mockapi.io/user');
      if(res.status === 200){
        setData(res.data);
        toast.success("Data Fetched Successfully");
      }
    }
    catch(error){
      toast.error(error.reponse.data);
    }
      
    }
  useEffect(()=>{
    getData();
  }, []);
  
  return <>
    <TopBar/>
    <div>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Email</th>
          <th>state</th>
          <th>Country</th>
          <th>Phone</th>
          <th>Website</th>
          <th>Company</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {
          data.map((e)=>{
            return <tr key={e.id}>
              <td>{e.id}</td>
              <td>{e.name}</td>
              <td>{e.email}</td>
              <td>{e.address.state}</td>
              <td>{e.address.country}</td>
              <td>{e.phone}</td>
              <td>{e.website}</td>
              <td>{e.company}</td>
              <td><Button variant='primary' onClick={()=>{navigate(`/edit/${e.id}`)}}>Edit</Button>
                  &nbsp; &nbsp;
                  <Button variant='danger' onClick={()=>{handleDelete(e.id)}}>Delete</Button>
              </td>
            </tr>
          })
        }
      </tbody>
    </Table>
    </div>
  </>
}

export default DashBoard