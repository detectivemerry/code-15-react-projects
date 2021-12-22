import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0)
  const {name, job, image, text} = people[index]

  const checkIndex = (num) => {
    if(num >= people.length){
      num = 0
    }
    if(num < 0){
      num = people.length - 1
    }
    return num
  }
  
  const prevPerson = () => {
    //accessing current index value
    setIndex((index) => {
      let newIndex = index  - 1 
      return checkIndex(newIndex)
    })
  }

  const nextPerson = () => {
    //accessing current index value
    setIndex((index) => {
      let newIndex = index  + 1 
      return checkIndex(newIndex)
    })
  }

  return (
  <article className = "review">
      <div className = "img-container">
        <img src = {image} alt = {name} className = 'person-img' />
        <span className = 'quote-icon'>
          <FaQuoteRight />
        </span>
        </div>
        <h4 className = "author">{name}</h4>
        <p className = "job">{job}</p>
        <p className = 'info'>{text}</p>
        <div className = 'button-containers'>
          <button className = 'prev-btn' onClick = {prevPerson}>
          <FaChevronLeft/>
          </button>
          <button className = 'next-btn' onClick = {nextPerson}>
            <FaChevronRight/>
          </button>
          <button className = 'random-btn'>surprise me</button>
        </div>
      
  </article>
  )
};

export default Review;
