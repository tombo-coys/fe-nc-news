import React, { Component } from 'react';

class ArticlesFilterBar extends Component {
    render() {
        return (
            <form className='filterBar'>
                <label htmlFor='sortByOptions'> Sort by: </label>
                <select>
                    <option name='sortByOptions'>Date posted</option>
                    <option name='sortByOptions'>Title</option>
                    <option name='sortByOptions'>Author</option>
                </select>
                <label htmlFor='orderByOptions'>    Order by: </label>
                <select>
                <option name='orderByOptions'>Ascending</option>
                <option name='orderByOptions'>Descending</option>
                </select>
                <button> Search </button>
            </form>
        );
    }
}

export default ArticlesFilterBar;