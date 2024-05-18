import React from 'react'
import {
  MDBBtn,
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand
} from 'mdb-react-ui-kit';
import { FaShoppingCart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {
  const wishlistArray = useSelector((state) => state.wishlistReducer) //to get the wishlist Array
  const cartArray = useSelector((state) => state.cartReducer) // to get the cart Array
  return (
    <div>
      <MDBNavbar style={{ height: '90px' }} light bgColor='info'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#'>
            <FaShoppingCart className='text-dark fs-3 mx-3' />
            ShopNShop
          </MDBNavbarBrand>
          <div className='d-flex position-absolute top-0 end-0'>
            <Link to="/wishlist">
              <div className='d-flex flex-column '>

                <FaHeart className="text-danger fs-2 ms-1 me-5 mt-1  " />
                <MDBBtn className='btn btn-secondary mt-2 w-25'>{wishlistArray.length}</MDBBtn>

              </div>
            </Link>

            <Link to="/cart">
              <div className='d-flex flex-column '>

                <FaCartPlus className="text-success fs-2 ms-1 me-5 mt-1  " />
                <MDBBtn className='btn btn-secondary mt-2 w-25'>{cartArray.length}</MDBBtn>

              </div>
            </Link>
          </div>



        </MDBContainer>
      </MDBNavbar>



    </div>
  )
}

export default Header