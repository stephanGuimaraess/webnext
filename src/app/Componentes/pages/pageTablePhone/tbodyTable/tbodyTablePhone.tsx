import React from "react";
import StarRating from "../../pageTablePhone/starRating/starRatingPhone";



interface tBodyRowProps {
  carData: string;
  reservationData: string;
  statusData: string;
  ratingData: number;
  car : string;
}

const CarTableRow: React.FC<tBodyRowProps> = ({
  carData,
  car,
  reservationData,
  statusData,
  ratingData,
 
}) => {


const imgScr = statusData == "Available" ? "../../assets/sucess.png" : "../../assets/fail.png";

  return (
    <tr className="tr-adjust-phone border-b">

    <div className="car-list-phone">


    <div className="bloco-car-img-phone w-fixed">
        
        <img src={imgScr} className="img-available-phone" alt="status" />
        <img src={car}  className = "car-img-phone" alt="Car" />
             
      </div>

      <div className="bloco-td-dados-phone w-fill h-fixed">

      <div className="car-name-reserva-name w-fill">
      <span className="car-name-phone">{carData}</span>
      <td className="car-reserva-phone">Next reservation: {reservationData}</td>   

      </div>   
      <td className="py-2 px-4 star-adjust-phone">
        <StarRating rating={ratingData}/>
      </td>


      <div className="cursor-pointer h-fixed pointer-adjust-phone">      
      <div className="pointer-phone">&#8942;</div>
    </div>


    </div>

    </div>
    </tr>
  );
};

export default CarTableRow;
