import React, { useContext, useEffect, useState } from "react";
import Cards from "./cards";
import { swiggyCdn } from "./utils/Urls";
import { Link } from "react-router-dom";
import useOnline from "./utils/useOnline";
import UserContent from "./utils/userContent";
import Shimmer from "./Shimmer";
// import { off } from "process";

const Body = () => {

  
  const { user, setUser } = useContext(UserContent);
  // setUser({name:"gourav"})

  const [allRestaurant, setAllRestaurant] = useState([]);
  const [filterRestaurant, setFilterRestaurant] = useState(allRestaurant);
  const [searchData, setSearchData] = useState("");
  useEffect(() => {
    getDataa();
  }, []);

  async function getDataa() {
    const data = await fetch(swiggyCdn)
    const json = await data.json();

    setAllRestaurant(json?.data?.cards[2]?.card?.card.gridElements?.infoWithStyle?.restaurants
      );
    setFilterRestaurant(json?.data?.cards[2]?.card?.card.gridElements?.infoWithStyle?.restaurants
      );
  

    
  }

  
 
  let offline = useOnline();
  // console.log(offline);
  if (!offline) {
    return <h1>you are offline</h1>;
  }

  if (!allRestaurant) return null;

  return allRestaurant?.length === 0 ? (
    <Shimmer />
  ) : 

  (
    <>
      <input
        className="bg-red-50 m-2 p-2 "
        type="search"
        placeholder="Search Here"
        value={searchData}
        onChange={(e) => {
          setSearchData(e.target.value);
        }}
      ></input>
      <button
        className="m-2 p-2"
        onClick={() => {
          let filterData = [];
          if (allRestaurant.length > 0) {
            filterData = allRestaurant.filter((res) => {
              return res.info.name
                .toLowerCase()
                .includes(searchData.toLocaleLowerCase());
            });
            setFilterRestaurant(filterData);
          }
        }}
      >
        Submit
      </button>
      <button
        className="m-2 p-2 bg-green-200"
        onClick={() => {
          let Rated = allRestaurant.filter((props) => 
          
          {
            
            if (allRestaurant.length > 0) {
              return props?.info?.avgRating > 4;
            }
            return setFilterRestaurant(Rated);
          });
          setFilterRestaurant(Rated);
        }}
      >
        Rated Restaurant
      </button>
      <button
        className="m-2 p-2 bg-blue-100"
        onClick={() => {
          setFilterRestaurant(allRestaurant);
        }}
      >
        Reset Page
      </button>
      <input
        className="m-2 p-2 bg-blue-100"
        value={user.name}
        onChange={(e) => {
          setUser({ name: e.target.value });
        }}
      ></input>
      <input
        className="m-2 p-2 bg-blue-100"
        value={user.email}
        onChange={(e) => {
          setUser({ email: e.target.value });
        }}
      ></input>

      <div className="flex justify-between flex-wrap">
        {filterRestaurant.map((props) => {
         
          return (
            <Link key={props.info.id} to={"/restaurant/" + props.info.id}>
              <Cards
                cloudinaryImageId={props.info.cloudinaryImageId}
                name={props.info.name}
                area={props.info.area}
                CostForTwo={props.info.costForTwoString}
                cuisines={props.info.cuisines}
                avgRating={props.info.avgRating}
              />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
