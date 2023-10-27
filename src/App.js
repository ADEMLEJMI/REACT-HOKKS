import { useState } from "react";
import data from "./Data/Data";
import Movielist from "./componment/Movielist";
import Add from "./componment/Add";
import { useRef } from "react";
import Filters from "./componment/Filters";

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
       <Movielist movies={[...movies,...newMovie].filter(movie => movie.title.toLowerCase().includes(search.toLowerCase()))}/> 
      </header>
    </div>
  );
}

export default App;
