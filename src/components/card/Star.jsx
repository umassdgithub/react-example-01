import { useState } from "react";

function Star({title,setFavList}){
    const [fav,setFav]=useState(false)
    return <div className={`star ${fav?'active':''}`} 
    onClick={()=>{
        setFav(!fav)
        if(!fav){
            setFavList(d=>[...d,title])
        }
        else{
            setFavList(d=>d.filter(t=>t!==title))
        }
        
        }}>★</div>
}

export default Star;