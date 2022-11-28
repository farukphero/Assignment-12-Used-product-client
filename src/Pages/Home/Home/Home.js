import React from 'react';
import useTitle from '../../../hooks/useTitle';
import AdvertiseItems from '../AdvertiseItems/AdvertiseItems';
import Banner from '../Banner/Banner';
import Brands from '../Brands/Brands';
import Categories from '../Categories/Categories';

const Home = () => {
    useTitle('Home')
    return (
        <div className='bg-secondary bg-opacity-10'>
            <Banner></Banner>
            <Brands></Brands>
            <Categories></Categories>
            <AdvertiseItems></AdvertiseItems>
        </div>
    );
};

export default Home;