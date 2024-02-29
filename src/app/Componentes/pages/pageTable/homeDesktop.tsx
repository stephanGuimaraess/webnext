import React from "react";
import TBodyTable from "./tBodyTable/tBody";




const HomeDesktop: React.FC = () => {
  
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

const tableDesk ={
  width:"1376px",
}

  return (
    <div>
      <table className=" bg-white border border-gray-300 table-adjust-desk w-fixed" style={tableDesk}>
        <thead>
          <tr>
            <th className="py-2 px-4 border-b w-fixed text-start font-weight-600 text-size-12 line-height-18 ">CAR</th>
            <th className="py-2 px-4 border-b w-fill text-start font-weight-600 text-size-12 line-height-18">NEXT RESERVATION</th>
            <th className="py-2 px-4 border-b w-fill text-start font-weight-600 text-size-12 line-height-18 ">STATUS</th>
            <th className="py-2 px-4 border-b w-fill text-start font-weight-600 text-size-12 line-height-18 ">RATING</th>
            <th className="py-2 px-4 border-b w-fixed text-size-12 font-weight-600 line-height-18 collun-actions">ACTIONS</th>
          </tr>
        </thead>
        <tbody >
          {data.map((item, index) => (
            <TBodyTable key={index} {...item} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HomeDesktop;