import React from 'react'
import StarRatingComponent from 'react-star-rating-component';
const Moviecard = ({movie}) => {
  return (
    <div>
    <img src={movie.img}/>
    <div>{movie.title}</div>
    <StarRatingComponent 
          name="rate1" 
          starCount={5}
          value={movie.rate}
          //onStarClick={this.onStarClick.bind(this)}
        />
    </div>


  )
}

export default Moviecard