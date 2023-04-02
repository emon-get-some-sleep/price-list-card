import React from 'react';

const PriceCard = ({price}) => {
    return (
        <div className='bg-indigo-400 mt-4 rounded-md p-4 '>
            <h2 className='text-center'>
                <span className='text-4xl font-bold text-purple-700'>${price.price}</span>
                <span className='text-xl text-white font-bold'>/month</span>
            </h2>
           <h5 className='text-2xl my-6 font-semibold'>{price.name}</h5>

           <p>Features:</p>
           {
            price.features.map(feature => <li>{feature}</li>)
           }
        </div>
    );
};

export default PriceCard;