import React from 'react';
import Feature from '../Feature/Feature';

const PriceCard = ({price}) => {
    return (
        <div className='bg-indigo-400 mt-4 rounded-md py-4 flex flex-col'>
            <h2 className='text-center'>
                <span className='text-4xl font-bold text-purple-700'>${price.price}</span>
                <span className='text-xl text-white font-bold'>/month</span>
            </h2>
           <h5 className='text-2xl my-6 font-semibold'>{price.name}</h5>

           <p className='underline font-bold text-white '>Features:</p>
           {
            price.features.map((feature, idx) => <Feature key={idx} feature={feature}></Feature>)
           }
           <button className='w-full mt-auto hover:bg-green-700 bg-green-500 rounded-md text-white font-bold p-2'>Buy Now</button>
        </div>
    );
};

export default PriceCard;