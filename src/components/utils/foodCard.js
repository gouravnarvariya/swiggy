
import { imageCardCdn } from "./Urls";

const FoodCard = (props)=> {
    return (
        <div className=" m-2 p-2 h-80 w-60 bg-purple-50">


<img className="h-24 w-60" src={imageCardCdn+props.cloudinaryImageId} alt="pic"></img>   
<li>{props.name}</li>
<li>{props.description}</li>
        
    


</div>
    );
}

export default FoodCard