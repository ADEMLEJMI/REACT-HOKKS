import React, { useRef } from 'react'

const Add = ({mytitle,myimg,myrate,handleAdd}) => {
    
  return (
    <div>
        <input placeholder='title' type='text'ref={mytitle}/>
        <input placeholder='img' ref={myimg}/>
        <input placeholder='rate'ref={myrate}/>
        <button onClick={handleAdd}>add movie</button>
    </div>
  )
}

export default Add