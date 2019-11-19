import React from 'react';
import {Link} from '@reach/router'

const Header = () => {
    return (
        <header className='headerBar'>
            <h1  className='heading'><Link to ='/'>NC News</Link></h1> 
            <nav className='navBar'>
               <Link to='/articles/topic/football'>Football</Link> 
               <Link to='/articles/topic/coding'>Coding</Link> 
               <Link to='/articles/topic/cooking'>Cooking</Link>
            </nav>
        </header>
    );
};

export default Header;