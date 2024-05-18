import React, { useEffect, useState } from 'react'
import { Row,Col } from 'react-bootstrap'
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { deleteFromCart, emptyCart } from '../Redux/slices/cartSlice';

function Cart() {
  const cartArray = useSelector((state) => state.cartReducer) //to get the cart Array.
  const dispatch = useDispatch()

  const [cartTotal,setCartTotal] = useState('')

  const getCartTotal=()=>{
    if(cartArray.length>0){
      setCartTotal(cartArray.map(item=>item.price).reduce((p1,p2)=>p1+p2))
    }
    else{
      setCartTotal(0)
    }
  }

  const handleCartOrder=()=>{
    dispatch(emptyCart())
    alert('Your cart order has been placed.')
  }
  useEffect(()=>{
    getCartTotal()
  },[cartArray])
    
  
  return (
    <div>

     
        <div className='col'>
 <Row>
        <Col>
        <MDBTable>
      <MDBTableHead>
        <tr>
          <th scope='col'>Id</th>
          <th scope='col'>Name</th>
          <th scope='col'>Image</th>
          <th scope='col'>Price</th>
          <th scope='col'>Action</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
      {
      cartArray?.length > 0 ?cartArray.map((product)=>(
        <tr>
          <th scope='row'>{product.id}</th>
          <td>{product.title}</td>
          <td>
            <img src={product.thumbnail} width={'100px'} height={'100px'}  alt="" />
            </td>
          <td>{product.price}</td>
          <td><MdDelete onClick={()=>dispatch(deleteFromCart(product.id))}  className='text-danger  fs-3 m-4 '/></td>
        </tr>
      )):'Your cart is empty'}
      </MDBTableBody>
    </MDBTable>
        </Col>


        <Col>
        <MDBCard>
      <MDBCardBody>
        <MDBCardTitle>Cart Summary</MDBCardTitle>
        <MDBCardText>
          Total Cart Item: {cartArray.length} <br>
          </br>
          Total Price : {cartTotal}
        </MDBCardText>
        <MDBBtn onClick={handleCartOrder}>Checkout</MDBBtn>
      </MDBCardBody>
    </MDBCard>
        </Col>
      </Row>


      
        </div>
      
    
    </div>
  )
  
}

export default Cart