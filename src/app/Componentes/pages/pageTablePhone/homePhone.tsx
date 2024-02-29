import React from "react";
import TBodyTable from "../pageTablePhone/tbodyTable/tbodyTablePhone";




const HomePhone: React.FC = () => {
  
  const data = [
    {
      carData: "Mini Cooper 2020",
      reservationData: "11/07",
      car : "../../assets/car.png",
      statusData: "Available",
      ratingData:0
      
    },
    {
      carData: "Mini Cooper 2020",
      reservationData: "11/07",
      car : "../../assets/car.png",
      statusData: "Available",
      ratingData:0
     
    },
    {
        carData: "Mini Cooper 2020",
        reservationData: "11/07",
        car : "../../assets/car.png",
        statusData: "Available",
        ratingData:0
       
      },
     
  ];



  return (
    <div className="body-adjust-phone">
      <table className=" min-w-full bg-white border border-gray-300 table-shadow table-adjust-phone "> 
       
        <tbody>
          {data.map((item, index) => (
            <TBodyTable key={index} {...item} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HomePhone;