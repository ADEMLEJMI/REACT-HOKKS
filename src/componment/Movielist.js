import React from 'react'
import Moviecard from './Moviecard'

const Movielist = ({movies}) => {
  return (
    <div>
        {
            movies.map((el)=> <Moviecard  key={el.id} movie={el} />)
        }
    </div>
  )
}

export default Movielist