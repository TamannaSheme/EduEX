import React from 'react';
import choice from '../../images/why.png';
import './Choice.css'

const Choice = () => {
    return (
        <div className='container'>
            <h3 className='text-center mt-5 choice-title'> Why <span> Choice me? </span>  </h3>
            <hr className="new1" />
            <div className="row d-flex choice-container">
                <div className="col-12 col-md-6 col-lg 6 choice-content">
                    <p> I have a thorough understanding of the school's mission and I believe that my personality and skills put me in the right position to help create a stimulating learning environment. Since I identify with your values and mission, I am committed to inspiring students to adopt them too.
                        This response uses a specific percentage to demonstrate the candidate's ability to perform the job responsibilities effectively. The more descriptive and accurate you can get, the better your chances of landing the job. If you can show your direct impact on an organization, the hiring manager will remember that and will be more likely to recommend you for the position. </p>

                </div>
                <div className="col-12 col-md-6 col-lg 6">

                    <img className='choice-img' src={choice} alt="" />
                </div>

            </div>
        </div>
    );
};

export default Choice;