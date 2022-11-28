import React from 'react';
import { useQuery } from 'react-query';
import useTitle from '../../../hooks/useTitle';
import AdvertiseItem from './AdvertiseItem';

const AdvertiseItems = () => {
    useTitle('AdvertiseItems')
    const {data:advertises =[]}=useQuery({
        queryKey:['advertises'],
        queryFn: async ()=>{
            const res = await fetch('http://localhost:5000/advertises');
            const data = res.json();
            return data;
        }
    })

    return (
        <div>
             {
                advertises.map(advertise=><AdvertiseItem
                key={advertise._id}
                advertise={advertise}
                >

                </AdvertiseItem>)
             }
        </div>
    );
};

export default AdvertiseItems;