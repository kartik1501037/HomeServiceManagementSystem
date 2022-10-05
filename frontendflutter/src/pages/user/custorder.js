import React from 'react'
import { useParams } from 'react-router-dom';
import { useState,useEffect } from 'react';
import  axios  from 'axios';
import config from '../config';

export default function CustOrder() {

    const params = useParams()
    const [Orders,SetOrders]=useState([])

    useEffect(()=>{
        console.log(params.id)
        orderlist();
        
        },[])
        
        const orderlist=()=>{
          const url = config.serverURL+`/user/order/${params.id}`
      
          axios.get(url).
          then(response=>{
            const result = response.data
            console.log(result)
      
            SetOrders(result)
          })
        }

  return (
    <div className="container">
      <h1 style={{ textAlign: "center", color: "navy" ,marginTop:30}}>Orders</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Service Name</th>
            <th>Booking Time </th>
            <th>Employee Name</th>
            <th>Employee Phone</th>
            <th>Order Status</th>
          </tr>
        </thead>
        <tbody>
          {Orders.map((order) => {
            return (
              <tr>
                <td>{order.service.serviceName}</td>
                <td>{order.bookingtime}</td>
                <td>{order?.emp.firstName}</td>
                <td>{order.emp.phoneNum}</td>
                <td>{order.status}</td>

              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  )
}

