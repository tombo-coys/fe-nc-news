import React from 'react';
import {Router, Link} from '@reach/router'

const Header = () => {
    return (
        <header className='headerBar'>
            <h1  className='heading'><Link to ='/'>NC News</Link></h1> 
            <nav className='navBar'>
               <h3><Link to='/articles/topics/football'>Football</Link> <Link to='/articles/topics/coding'>Coding</Link> <Link to='/articles/topics/cooking'>Cooking</Link></h3> 
            </nav>
        </header>
    );
};

export default Header;