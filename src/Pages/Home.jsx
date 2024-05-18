import React from 'react'
import { Row } from 'react-bootstrap'
import useFetch from '../hooks/useFetch'
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';
import { useDispatch } from 'react-redux';
import { addToWishlist } from '../Redux/slices/wishlistSlice';
import {addToCart} from '../Redux/slices/cartSlice';

function Home() {

  const dispatch = useDispatch()
  const result = useFetch("https://dummyjson.com/products")
  console.log(result);

  return (
    <div>
        
     <div className='row mb-5'>
      {
        result?.length > 0 ?result.map((product)=>(
          <div className='col'>
            <MDBCard style={{width:'300px' , height:"500px", margin:"10px"}}>
      <MDBCardImage height={'200px'} src={product.thumbnail}  position='top' alt='...' />
      <MDBCardBody>
        <MDBCardTitle>{product.title}</MDBCardTitle>
        <MDBCardText>
          {product.description}
          <br/>
          price: {product.price}
        </MDBCardText>
        <div className='d-flex justify-content-evenly'>
        <MDBBtn onClick={()=>dispatch(addToWishlist (product))} className='bg-light'><i class="fa-solid fa-heart text-danger fs-3"></i></MDBBtn>
        <MDBBtn onClick={()=>dispatch(addToCart(product))} className='bg-light'><i class="fa-solid fa-cart-shopping text-success fs-3"></i></MDBBtn>
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

export default Home