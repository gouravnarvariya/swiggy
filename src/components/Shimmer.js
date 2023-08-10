import React from "react";

const Shimmer = () => {
  return (
    <div className=" m-2 p-2 h-80 w-60 bg-purple-50 flex justify-between  ">
      {Array(10)
        .fill("sdfsf")
        .map((e, index) => (
          <div key={index} className=" m-2 p-2 h-80 w-60 bg-purple-50">
            <img className="h-24 w-60" alt="pic"></img>
            <ul>
              <li>name</li>
              <li>cost</li>
            </ul>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
