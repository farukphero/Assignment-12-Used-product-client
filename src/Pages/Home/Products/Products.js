import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from './Product';

const Products = () => {
    const products = useLoaderData()
    const newProducts = products.products
    return (
        <div className='grid grid-cols-1 gap-10'>
            {
                newProducts.map(product=><Product
                key={product._id}
                product={product}
                >
                </Product>)
            }
        </div>
    );
};

export default Products;