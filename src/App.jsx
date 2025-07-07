import './App.css'
import Card from "./components/card/Card"
import paintings from "../data/paintings.json"
import { useState } from 'react'


function App() {
   

    const [favList, setFavList] = useState([])
    const paintingsList = paintings.map((d,i)=><Card key={i} filename={d.filename} title={d.title} artist={d.artist} setFavList={setFavList}/>)
    console.log(favList)
  return (
    <>
    <div>
      {favList.map(d=><p>{d}</p>)}
    </div>
    <div className='container'>
      {paintingsList}
    </div>
    </>
  )
}

export default App
