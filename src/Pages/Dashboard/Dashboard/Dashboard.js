import React from 'react';
import useTitle from '../../../hooks/useTitle';

const Dashboard = () => {
    useTitle('Dashboard')
    return (
        <div className='h-[600px] md:h-[750px] flex justify-center items-center'>
           <div>
           <h5 className='text-4xl'>Welcome to your Dashboard</h5>
           <img  className='w-[600px]' src='https://cdn-icons-png.flaticon.com/512/8662/8662443.png' alt="" />
           </div>
        </div>
    );
};

export default Dashboard;