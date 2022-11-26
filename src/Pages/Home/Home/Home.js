import React from 'react';
import Banner from '../Banner/Banner';
import Brands from '../Brands/Brands';
import Categories from '../Categories/Categories';

const Home = () => {
    return (
        <div className='bg-secondary bg-opacity-10'>
            <Banner></Banner>
            <Brands></Brands>
            <Categories></Categories>
        </div>
    );
};

export default Home;