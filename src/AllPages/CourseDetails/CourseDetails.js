import React from 'react';
import { Link, useParams } from 'react-router-dom';

const CourseDetails = () => {
    const { courseId } = useParams();
    // console.log(courseId);
    return (
        <div className='container '>

            <h2> Course Details {courseId} </h2>
            <h2 className='text-center text-primary mt-5'> Complete Full  Syllabus  </h2>
            <div className="row table-container mt-5">
                <div className="col-12 col-md-6 col-lg-6">
                    <h3> Physics 1 <sup> st</sup> paper </h3>
                    <h4> Chapter </h4>
                    <li> 1.Vector </li>
                    <li> 2. Dynamics </li>
                    <li> 3.Newtonian Mechanics </li>
                    <li> 4. Work,Power and Energy </li>
                </div>
                <div className="col-12 col-md-6 col-lg-6">

                    <h3> Physics 2<sup> nd </sup> paper </h3>
                    <h4> Chapter </h4>
                    <li> 1.Thermo   Dynamics</li>
                    <li> 2. Static Current </li>
                    <li> 3. Dynamic Electricity </li>
                    <li> 4. Magnesium </li>

                </div>
                <Link to="/checkout">  <button> check out </button>  </Link>
            </div>
            {/* Math course  */}
            <div className="row table-container mt-5">
                <div className="col-12 col-md-6 col-lg-6">
                    <h3> Math 1 <sup> st</sup> paper </h3>
                    <h4> Chapter </h4>
                    <li> 1.Vector </li>
                    <li> 2. Dynamics </li>
                    <li> 3.Newtonian Mechanics </li>
                    <li> 4. Work,Power and Energy </li>
                </div>
                <div className="col-12 col-md-6 col-lg-6">

                    <h3> Math2<sup> nd </sup> paper </h3>
                    <h4> Chapter </h4>
                    <li> 1.Thermo   Dynamics</li>
                    <li> 2. Static Current </li>
                    <li> 3. Dynamic Electricity </li>
                    <li> 4. Magnesium </li>

                </div>
                <Link to="/checkout">  <button> check out </button>  </Link>
            </div>
            {/* chemistry course  */}

            <div className="row table-container mt-5">
                <div className="col-12 col-md-6 col-lg-6">
                    <h3> Chemistry 1 <sup> st</sup> paper </h3>
                    <h4> Chapter </h4>
                    <li> 1.Vector </li>
                    <li> 2. Dynamics </li>
                    <li> 3.Newtonian Mechanics </li>
                    <li> 4. Work,Power and Energy </li>
                </div>
                <div className="col-12 col-md-6 col-lg-6">

                    <h3>Chemistry 2<sup> nd </sup> paper </h3>
                    <h4> Chapter </h4>
                    <li> 1.Thermo   Dynamics</li>
                    <li> 2. Static Current </li>
                    <li> 3. Dynamic Electricity </li>
                    <li> 4. Magnesium </li>

                </div>
                <Link to="/checkout">  <button> check out </button>  </Link>
            </div>





        </div>
    );
};

export default CourseDetails;