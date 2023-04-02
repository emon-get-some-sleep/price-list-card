import React, { useEffect, useState } from 'react';
import PriceCard from '../PriceCard/PriceCard';

const PriceList = () => {
    const [prices, setPrices] = useState([]);

    useEffect(() => {
        fetch('prices.json')
        .then(res => res.json())
        .then(data => setPrices(data));
    }, [])

    return (
        <div className='mx-12'>
            <h2 className='text-2xl md:text-6xl md:p-4 text-center bg-purple-300 font-bold text-purple-900'>Awesome affordable Prices</h2>

            <div className='grid md:grid-cols-3 gap-3'>
            {
                prices.map(price => <PriceCard price={price} key={price.id}></PriceCard>)
            }
            </div>
        </div>
    );
};

export default PriceList;