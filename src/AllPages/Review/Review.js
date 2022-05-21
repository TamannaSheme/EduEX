import React from 'react';
import './Review.css'

const Review = ({ review }) => {
    console.log(review);
    const { img, name, comment, designation } = review;
    return (
        <div>
            <div className="container">
                <div className="card-body">
                    <img src={img} alt="" className="guardin-img" />
                    <p className="comments"> " {comment} " </p>
                    <h6 className="guardin-name"> {name} </h6>
                    <p className="designation"> {designation} </p>
                </div>
            </div>
        </div>
    );
};

export default Review;