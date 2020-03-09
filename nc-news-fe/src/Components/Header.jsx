import React from 'react';
import {Link} from '@reach/router'
import Search from './Search';

const Header = () => {
    return (
        <header className='headerBar'>
            <h1  className='heading'><Link to ='/'>NC News</Link></h1> 
            <Search />
            <nav className='navBar'>
            <h2><Link to='/articles/topic/football'>Football</Link> <span></span><span></span><Link to='/articles/topic/coding'>Coding</Link> <span></span><span></span> <Link to='/articles/topic/cooking'>   Cooking</Link></h2> 
            </nav>
        </header>
    );
};

export default Header;