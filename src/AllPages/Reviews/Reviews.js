// review js 

import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';
import './Reviews.css'

const Reviews = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('persion.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div>
            <div className="reviews">
                <h2 className='text-center reviews-title'>  Guardian's <span> Review's </span> </h2>
                <hr className="new2" />
                <div className="container reviews-content">

                    {
                        reviews.map(review => <Review
                            key={review.id}
                            review={review}

                        ></Review>)
                    }


                </div>
            </div>
        </div>
    );
};

export default Reviews;