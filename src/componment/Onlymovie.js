import React from 'react'
import { useParams } from "react-router";
import { Link } from "react-router-dom";
const Onlymovie = (props) => {
  const parm = useParams();
  const name = parm.name;
  const findmovie = props.data.find((el) => el.title === name);
  return (
    <div>
     <div >{findmovie.title}</div>
     <div >{findmovie.trailer}</div>
     <div>{findmovie.description}</div>
     <Link to="/"><button>Back</button></Link>
     </div>
  )
}

export default Onlymovie;