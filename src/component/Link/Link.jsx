import React from 'react';

const Link = ({route}) => {

    return (
        <li className='mr-12 md:py-2 hover:bg-purple-600 px-4'>
            <a href={route.path}>{route.navMenu}</a>
        </li>
    );
};

export default Link;