import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import { FaShoppingCart } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';
import { useDispatch, useSelector } from 'react-redux';
import { deleteFromWishlist } from '../Redux/slices/wishlistSlice';
import { addToCart } from '../Redux/slices/cartSlice';

function Wishlist() {
  const wishlistArray = useSelector((state) => state.wishlistReducer) //to get the wishlist Array
  const dispatch = useDispatch()
  const handleWishListCart = (product)=>{
    dispatch(addToCart(product))
    dispatch(deleteFromWishlist(product.id))
  }
  
  return (
    <div>
    <div className='row mb-5'>
      {
        wishlistArray?.length > 0 ?wishlistArray.map((product)=>(
          <div className='col'>
            <MDBCard style={{width:'300px' , height:"500px", margin:"10px"}}>
      <MDBCardImage height={'200px'} src={product.thumbnail}  position='top' alt='...' />
      <MDBCardBody>
        <MDBCardTitle>{product.title}</MDBCardTitle>
        <MDBCardText>
          {product.description.slice(0,30)}
          <br/>
          price: {product.price}
        </MDBCardText>
        <div className='d-flex justify-content-evenly'>
        <MDBBtn  onClick={()=>dispatch(deleteFromWishlist(product.id))} className='bg-light'><i class="fa-solid fa-trash text-danger fs-3"></i></MDBBtn>
        <MDBBtn onClick={()=>handleWishListCart(product)} className='bg-light'><i class="fa-solid fa-cart-shopping text-success fs-3"></i></MDBBtn>
        </div>
      </MDBCardBody>
    </MDBCard>

          </div>
        )):'null'
      }

     </div>
    </div>
  )
}

export default Wishlist