import React, { Component } from 'react';

class ErrorHandler extends Component {
   
    render() {
        const {errorDetails, error} = this.props
        return (
            <div>
            {errorDetails && errorDetails.response && errorDetails.response.status === 404 && <><h3>ERROR</h3> <p>Oh no! </p> <p>Status: {errorDetails.response.status} Page {errorDetails.response.statusText}. Its very likely  that you have entered a topic or username that does not exist</p>
             <img className='404Error' src={require(`../Images/404.gif`)}alt='404 error'></img> </> }
             {error && <><h3>ERROR</h3> <p>Oh no! </p> <p>Status: {error.status} {error.msg}</p><img className='400Error' src={require(`../Images/400.gif`)}alt='400 error'></img></>}
             {errorDetails && errorDetails.response && errorDetails.response.status === 400 && <><p>Oh no! </p> <p>Status: {errorDetails.response.status} Page {errorDetails.response.statusText}</p>
             <img className='404Error' src={require(`../Images/404.gif`)}alt='404 error'></img> </> }
             {errorDetails && errorDetails.response && errorDetails.response.status === 500 && <><p>Oh no! </p> <p>Status: {errorDetails.response.status} Page {errorDetails.response.statusText}</p>
             <img className='404Error' src={require(`../Images/404.gif`)}alt='404 error'></img> </> }
            </div>
        );
    }
}

export default ErrorHandler;