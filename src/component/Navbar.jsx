import React from 'react';
import Link from './Link/Link';

const Navbar = () => {
    const routes = [
        { id: 1, navMenu: "Home", path: "/home" },
        { id: 2, navMenu: "Contact", path: "/contact" },
        { id: 3, navMenu: "About Us", path: "/about" },
        { id: 4, navMenu: "Services", path: "/services" },
        { id: 5, navMenu: "FAQ", path: "/faq" }
      ]
      
    return (
        <nav>
            <ul className='md:flex'>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;