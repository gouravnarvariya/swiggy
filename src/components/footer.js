import { useContext } from "react";
import UserContent from "./utils/userContent";

function Footer() {
  const { user } = useContext(UserContent);
  console.log(user,"footer");
  return (
    <div>
      <h1>made by abc </h1>
      <h1>2023</h1>
      {/* <h1>{user.name}</h1>
      <h1>{user.email}</h1> */}
    </div>
  );
}

export default Footer;
