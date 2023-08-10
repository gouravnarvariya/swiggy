import { useState } from "react";

const Section = ({ title, description,isVisible,setIsVisible}) => {
  
  return (
    <div className=" border border-black p-2 m-2">
      <h1 className="text-3xl p-2 m-2">{title}</h1>
      {isVisible === true ? (
        <button
          onClick={() => {
            setIsVisible(false);
          }}
        >
          hide
        </button>
      ) : (
        <button
          onClick={() => {
            setIsVisible(true);
          }}
        >
          show
        </button>
      )}

      {isVisible && <p className="p-2 m-2">{description}</p>}
    </div>
  );
};

const Instamart = () => {
const [isSection, setIsSection] = useState("about")
console.log(isSection);
  return (
    <div>
      <Section
        title="about instamart"
        description="Specifically, the companies asked Maryland to lift a regulation that requires them to submit a description of any promotional offer, along with its terms and conditions, to gambling regulators for inspection at least two days before putting it into effect.
    —Jeff Barker, Baltimore Sun, 9 June 2023"
    setIsVisible={()=>{isSection==="about"?setIsSection("abou"):setIsSection("about")}}
     isVisible = {isSection==="about"}
    
      />
      <Section
        title="contact instamart"
        description="Specifically, the companies asked Maryland to lift a regulation that requires them to submit a description of any promotional offer, along with its terms and conditions, to gambling regulators for inspection at least two days before putting it into effect.
    —Jeff Barker, Baltimore Sun, 9 June 2023"
    setIsVisible={()=>{isSection==="contact"?setIsSection("con"):setIsSection("contact")}} 
    isVisible = {isSection === "contact"}
    
    
      />
    </div>  
  );
};

export default Instamart;
