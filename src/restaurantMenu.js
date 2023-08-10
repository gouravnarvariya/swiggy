import Shimmer from "./components/utils/shimmer";
import { useParams } from "react-router-dom";
import useRestaurant from "./components/utils/useRestaurant";
import { useDispatch } from "react-redux";
import { addItem, clearCart, removeCart } from "./components/utils/cartSlice";

function RestaurantMenu() {
  const dispatch = useDispatch();
  const handleItems = ()=>{
    dispatch(addItem("grapes"));
    
    }
    const clearItems = ()=>{
      dispatch(clearCart([]));
    }
    const handleAddItem = (items)=>{
      dispatch(addItem(items))
    }
    const removeItems = ()=>{
      dispatch(removeCart())
    }

  const { resid } = useParams();
  let menuList = useRestaurant(resid);
  if (menuList.length === 0) {
    return <Shimmer></Shimmer>;
  }
  const { name } = menuList?.cards[0]?.card?.card?.info;
  const { costForTwoMessage } = menuList?.cards[0]?.card?.card?.info;
  const itemCards =
    menuList?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;
  const arr = Object.entries(itemCards);
  const final = arr[2][1];
  

  return (
    <div className="flex  justify-between flex-wrap">
      <ul>
        <li>{name}</li>
        <li>{costForTwoMessage}</li>
        <li>bottle</li>
      </ul>
      <div>
        <button onClick={()=>{handleItems();}} >addItems</button>
        <button onClick={()=>{clearItems();}} >clearItems</button>
        
      </div>
      <div>
        <h1>Menu</h1>
        <button onClick={()=>{removeItems();}} >removeItems</button>
        <ul>
          {final.map((props) => {
       
            return <div key={props?.card?.info?.id}>
            
            <li > {props?.card?.info?.name}
            <button 
            className="p-2 m-2 bg-green-100"
             onClick={ () => {
              // console.log(props);
              handleAddItem(props);
              }}>
              addedItem
              </button>
              </li>
            
            </div>
          })}
        </ul>
      </div>
    </div>
  );
}

export default RestaurantMenu;
