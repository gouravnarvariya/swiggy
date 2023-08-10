import { restroMenuCDN } from "./Urls";
import { useState,useEffect } from "react";

const useRestaurant = (resid)=> {
    const [menuList, setMenuList] = useState([]);
    useEffect(()=>{
        getData();
    },[])
   async function getData() {
    const data = await fetch(restroMenuCDN+resid);
    const json = await data.json();
    setMenuList(json.data);}

    return menuList;


}

export default useRestaurant;