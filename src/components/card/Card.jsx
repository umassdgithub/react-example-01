import Image from "./Image"
import Title from "./Title";
import Artist from "./Artist"
import Star from "./Star"

function Card({filename, title, artist,setFavList}){



    return <><div className="card">
        <Image filename={filename}/>
        <Title title={title}/>
        
        <Artist artist={artist}/>
        
        <div className="star-container">
        <Star title={title} setFavList={setFavList}/>
        </div>
    </div></>
}
export default Card;