import React from 'react'
import './body.css'

import puppyOne from '../../assets/images/puppy-1.jpg';
import puppyTwo from '../../assets/images/puppy-2.jpg';
import puppyThree from '../../assets/images/puppy-3.jpg';
import puppyFour from '../../assets/images/puppy-4.jpg';


function Body() {
  return (

    <div className="container my-5">
      <section className="puppies-holder puppies-holder1 row">
        <div className="puppy-one puppies mb-3 mb-md-0 col-md-4">
          <img src= {puppyOne} alt="puppy one image" />
        </div>

        <div className="missing-puppy puppies d-none col-md-4 d-md-flex align-items-center justify-content-center p-5 text-center" >
          <p className="fw-bold fs-2 px-5">Missing Puppy Here!</p>
        </div>

        <div className="puppy-two puppies col-md-4">
          <img src={puppyTwo} alt="puppy two image" />
        </div>
      </section>

      <section className="more-puppies row-cols-md-1">
        <div className="my-4">
          <h2 className="text-center fw-bold">More Puppies</h2>
        </div>
        <div className="puppies-holder puppies-holder2 row">
          <div className="puppy-three puppies mb-3 mb-md-0 col-md-6">
            <img src={puppyThree} alt="puppy three image" />
          </div>
          <div className="puppy-four puppies col-md-6">
            <img src={puppyFour} alt="puppy four image" />
          </div>
        </div>
      </section>
    </div>

  )
}

export default Body
