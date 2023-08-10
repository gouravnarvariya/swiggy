import { useContext } from "react";
import {  imageCardCdn } from "./utils/Urls";
import UserContent from "./utils/userContent";

const Cards = (props)=>{
    const {user} = useContext(UserContent);
    console.log(user);
    return(<>
  
        <div className=" m-2 p-2 h-80 w-60 bg-purple-50">
<img className="h-34 w-60" src={imageCardCdn+props.cloudinaryImageId} alt="pic"></img>
<ul>
    <li>{props.name}</li>
    <li>{props.area}</li>
    <li>{props.CostForTwo}</li>
    <li>{props.cuisines}</li>
    <li>{props.avgRating}</li>
    
</ul>

</div>
</>
    );
}

export default Cards;