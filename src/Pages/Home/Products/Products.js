import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from '../BookingModal/BookingModal';
import Product from './Product';

const Products = () => {
    const products = useLoaderData()
    console.log(products)
    const [bookingInfo, setBookingInfo] = useState(null)
    const [postDate, setPostDate] = useState(new Date());
    return (
        <div className='grid grid-cols-1 gap-10 mb-20 mt-10'>
            {
                products.map(product=><Product
                key={product._id}
                product={product}
                postDate={postDate}
                setPostDate={setPostDate}
                setBookingInfo={setBookingInfo}
                >
                </Product>)
            }
           {
            bookingInfo &&  <BookingModal
            bookingInfo={bookingInfo}
            setBookingInfo={setBookingInfo}
            postDate={postDate}
           ></BookingModal>
           }
        </div>
    );
};

export default Products;