import React from 'react';
import Tour from './Tour';
const Tours = ({tours, removeTour}) => {
  return(
    <section>
      <div className = 'title'>
        <h2>our tours</h2>
        <div className = 'underline'></div>
      </div>
      <div>
      
        {tours.map((tour)=>{
          // ... spread operator, for each tour component, the prop will have access to each property
          return <Tour key = {tour.id} {...tour} removeTour = {removeTour} ></Tour>
          })}
      </div>
    </section>
  )
};

export default Tours;
