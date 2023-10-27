import React from 'react'
import StarRatingComponent from 'react-star-rating-component';
const Filters = ({tosearch,handleRate,handleSearch}) => {
  return (
    <div>
        <StarRatingComponent 
          name="rate1" 
          starCount={5}
          //value={movie.rate}
          onStarClick={(value)=>handleRate=(value)}
        />
        <input placeholder='search' type='text' ref={tosearch} />
        <button onClick={handleSearch}>search</button>
    </div>
  )
}

export default Filters