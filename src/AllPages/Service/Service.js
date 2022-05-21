import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({ cource }) => {
    const {id, cource_payment, img, cource_name, cource_details,teacher,rating} = cource;

    const navigate =useNavigate();
    const courseDetails = id =>{
        navigate(`/service/${id}`);
    }
    
    return (
        <div className='container'>
            <div className="card-container"> 
               <img className='cource-img' src={img} alt="" />
                <h4 className='cource-title'> {cource_name}</h4>
                <h6 className='cource-payment'> <span className='text-dark'> Course Fee </span> :  {cource_payment} </h6>
                <p className='cource_details'> {cource_details} </p>
                <h4 className='cource-teacher'> Instructor : <span>  {teacher} </span> </h4>
                <h5 className='cource-rating'> Rating:  {rating} </h5>
                <button onClick={() =>courseDetails(id)} className='course-btn'>  See More </button>
               
            </div>
        </div>
    );
};

export default Service;