import React, { useState } from 'react';
import Link from './Link/Link';
import {  Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
const Navbar = () => {

    const [open, setOpen] = useState(false);
    const routes = [
        { id: 1, navMenu: "Home", path: "/home" },
        { id: 2, navMenu: "Contact", path: "/contact" },
        { id: 3, navMenu: "About Us", path: "/about" },
        { id: 4, navMenu: "Services", path: "/services" },
        { id: 5, navMenu: "FAQ", path: "/faq" }
      ]
      
    return (
        <nav className='bg-purple-400'>
             <div className='md:hidden' onClick={() => setOpen(!open)}>
                <span>{
                open === true ?
                <XMarkIcon className="h-6 w-6 text-purple-500" />
                : <Bars3Icon className="h-6 w-6 text-purple-500" /> 
                }</span>
                
                
             </div>
            <ul className={`md:flex pl-8 pb-4 bg-purple-400 duration-1000 absolute sm:static ${open ? 'top-6 py-2' : '-top-48'}`}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
                
            </ul>
        </nav>
    );
};

export default Navbar;