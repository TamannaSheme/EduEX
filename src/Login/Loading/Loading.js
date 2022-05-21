import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div className='container'>
             <h2>   

             <Spinner animation="border" variant="danger" />

             </h2>
        </div>
    );
};

export default Loading;