import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import StarRatingComponent from 'react-star-rating-component';
const Moviecard = ({movie}) => {
  const Navigate=useNavigate();
  return (
    <div onClick={()=>Navigate(`/movie/${movie.title}`)}>

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