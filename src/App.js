import { useState } from "react";
import data from "./Data/Data";
import Movielist from "./componment/Movielist";
import Add from "./componment/Add";
import { useRef } from "react";
import Filters from "./componment/Filters";
import {Route,Routes,Link} from "react-router-dom"
import Onlymovie from "./componment/Onlymovie";
function App() {
  const [movies,setMovies]=useState(data)
  const [newMovie,setNewMovie]=useState([])
  const[search,setSearch]=useState("")
 const[rating,setRating]=useState(1)
  const mytitle=useRef()
    const myimg=useRef()
    const myrate=useRef()
    const tosearch=useRef()
 

    const handleAdd = () =>{
      setNewMovie([{
        title: mytitle.current.value,
        img : myimg.current.value,
        rate: myrate.current.value,
    }])
      setMovies([...movies,...newMovie])
    }

 const handleSearch=()=>{
  setSearch(tosearch.current.value)

 }
 const handleRate=(rating)=>{
  setRating(rating)
 }
  return (
    <div className="App">
      <header className="App-header">
        
      
    <Filters handleSearch={handleSearch} tosearch={tosearch} handleRate={handleRate}/>
      
        <Add mytitle={mytitle} myimg={myimg} myrate={myrate} handleAdd={handleAdd}/> 
        <Routes>
        <Route path = "/" element= {< Movielist movies={[...movies,...newMovie].filter(movie => movie.title.toLowerCase().includes(search.toLowerCase()))}/> }/>
       <Route path="/movie/:name" element={<Onlymovie data={data}/>}/>
       </Routes>
      </header>
    </div>
  );
}


export default App;
