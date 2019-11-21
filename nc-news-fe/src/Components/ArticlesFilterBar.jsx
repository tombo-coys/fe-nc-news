import React, { Component } from 'react';

class ArticlesFilterBar extends Component {
    state = {
        sort_by: 'created_at',
        order_by: 'asc'
    }

    handleOrder =(event) => {
        this.setState({order_by: event.target.value})
    }

    handleSort = (event) => {
        this.setState({sort_by: event.target.value})
    }

    render() {
        return (
            <form className='filterBar' onSubmit={(event) => {
                event.preventDefault();
                this.props.handleArticleFilter(this.state.sort_by, this.state.order_by)
            }}>
                <label htmlFor='sortByOptions'> Sort by: </label><span></span><span></span>
                <select onChange={this.handleSort}>
                    <option id='sortByOptions' value='created_at'>Date posted</option>
                    <option id='sortByOptions' value='title'>Title</option>
                    <option id='sortByOptions' value='comment_count'>Comment Count</option>
                </select><span></span><span></span>
                <label htmlFor='orderByOptions'>Order by:</label><span></span><span></span>
                <select onChange={this.handleOrder}>
                <option id='orderByOptions' value='asc'>Ascending</option>
                <option id='orderByOptions' value='desc'>Descending</option>
                </select><span></span><span></span>
                <button> Filter Articles </button>
            </form>
        );
    }
}

export default ArticlesFilterBar;