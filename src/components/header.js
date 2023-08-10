import React, { useContext } from "react";
import { companyUrl } from "./utils/Urls";
import { Link } from "react-router-dom";
import UserContent from "./utils/userContent";
import { useSelector } from "react-redux";
const Header = () => {
  const cartItems = useSelector(store => store.cart.items);
  const {user} = useContext(UserContent);
  // console.log(cartItems);

  return (
    <div className="flex justify-between p-5 bg-pink-100">
      <img className="h-14 w-14" src={companyUrl} alt="food img"></img>
      <div>
        <ul className="flex justify-between m-4 p-1">
          <li className="m-1 p-1">
            <Link to="/">Home</Link>
          </li>
          <li className="m-1 p-1">
            <Link to="/Contact">Contact</Link>
          </li>
          <li className="m-1 p-1">
            <Link to="/About">About</Link>
          </li>
          <li className="m-1 p-1">
            <Link to="/instamart">Instamart</Link>
          </li>
          <li className="m-1 p-1">
            <Link to="/cart">cart {cartItems.length}  Items</Link>
          </li>
          {/* <li className="m-1 p-1">{user.name}</li>
          <li className="m-1 p-1">{user.email}</li> */}
        </ul>
        
      </div>
    </div>
  );
};

export default Header;
