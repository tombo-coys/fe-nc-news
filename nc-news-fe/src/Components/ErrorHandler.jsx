import React, { Component } from 'react';

class ErrorHandler extends Component {
   
    render() {
        const {errorDetails, error} = this.props
        console.log(errorDetails)
        return (
            <div>
            {errorDetails && errorDetails.response && errorDetails.response.status === 404 && <><h3>ERROR</h3> <p>Oh no! <br></br><br></br>Status: {errorDetails.response.status} Page {errorDetails.response.statusText}</p>
             <img className='404Error' src={require(`../Images/404.gif`)}alt='404 error'></img> </> }
             {error && <><h3>ERROR</h3> <p>Oh no! <br></br><br></br>Status: {error.status} {error.msg}</p><img className='400Error' src={require(`../Images/400.gif`)}alt='400 error'></img></>}
             {errorDetails && errorDetails.response && errorDetails.response.status === 400 && <><h3>ERROR</h3> <p>Oh no! <br></br><br></br>Status: {errorDetails.response.status} Page {errorDetails.response.statusText}</p>
             <img className='404Error' src={require(`../Images/404.gif`)}alt='404 error'></img> </> }
             {errorDetails && errorDetails.response && errorDetails.response.status === 500 && <><h3>ERROR</h3> <p>Oh no! <br></br><br></br>Status: {errorDetails.response.status} Page {errorDetails.response.statusText}</p>
             <img className='404Error' src={require(`../Images/404.gif`)}alt='404 error'></img> </> }
            </div>
        );
    }
}

export default ErrorHandler;