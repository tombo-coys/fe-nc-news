import React, { Component } from 'react';

class ArticlesFilterBar extends Component {
    state = {
        sortBy: '',
        orderBy: ''
    }

    handleOrder =(event) => {
        this.setState({orderBy: event.target.value})
    }

    handleSort = (event) => {
        this.setState({sortBy: event.target.value})
    }

    render() {
        return (
            <form className='filterBar' onSubmit={(event) => {
                event.preventDefault();
                this.props.handleSubmit(this.state.sortBy, this.state.orderBy)
            }}>
                <label htmlFor='sortByOptions'> Sort by: </label>
                <select onChange={this.handleSort}>
                    <option id='sortByOptions'>Date posted</option>
                    <option id='sortByOptions'>Title</option>
                    <option id='sortByOptions'>Author</option>
                </select>
                <label htmlFor='orderByOptions'>    Order by: </label>
                <select onChange={this.handleOrder}>
                <option id='orderByOptions'>Ascending</option>
                <option id='orderByOptions'>Descending</option>
                </select>
                <button> Search </button>
            </form>
        );
    }
}

export default ArticlesFilterBar;