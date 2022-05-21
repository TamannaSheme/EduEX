import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [cources, setCources] = useState([]);

    //  console.log(cources);

   useEffect( () =>{

      fetch('fakeData.json')
      .then(res=>res.json())
       .then(data=>setCources(data))
    

   } ,[]);



    return (
        <div>
            <div className='container'>
            <h2 className='text-center mt-5 cource-title'> My All <span> Courses </span> </h2>
            <hr className='line-style'/>
            <div className='cource-container'>
               {
                   cources.map(cource=><Service
                    key={cource.id}
                    cource={cource}
                   ></Service>)
               }

            </div>
        </div>
        </div>
    );
};

export default Services;