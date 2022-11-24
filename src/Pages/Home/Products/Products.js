import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from '../BookingModal/BookingModal';
import Product from './Product';

const Products = () => {
    const products = useLoaderData()
    const newProducts = products.products
    const [bookingInfo, setBookingInfo] = useState(null)
    return (
        <div className='grid grid-cols-1 gap-10'>
            {
                newProducts.map(product=><Product
                key={product._id}
                product={product}
                setBookingInfo={setBookingInfo}
                >
                </Product>)
            }
           {
            bookingInfo &&  <BookingModal
            bookingInfo={bookingInfo}
            setBookingInfo={setBookingInfo}
           ></BookingModal>
           }
        </div>
    );
};

export default Products;