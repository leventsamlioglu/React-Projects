import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, image, job, text } = people[index];

  const surpriseBtn = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if (randomNumber === index) {
      index === people.length - 1
        ? (randomNumber = 0)
        : (randomNumber = index + 1);
    }
    setIndex(randomNumber);
  };

  const prevBtn = () => {
    if (index === 0) {
      setIndex(people.length - 1);
      return;
    }
    setIndex(index - 1);
  };

  const nextBtn = () => {
    if (index === people.length - 1) {
      setIndex(0);
      return;
    }
    setIndex(index + 1);
  };

  return (
    <article className='review'>
      <div className='img-container'>
        <img className='person-img' src={image} alt={name} />
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className='button-container'>
        <button className='prev-btn' onClick={prevBtn}>
          <FaChevronLeft />
        </button>
        <button className='next-btn' onClick={nextBtn}>
          <FaChevronRight />
        </button>
      </div>
      <button className='random-btn' onClick={surpriseBtn}>
        surprise me
      </button>
    </article>
  );
};

export default Review;
