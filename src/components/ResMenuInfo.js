import {FaStar} from "react-icons/fa";
import { CDN_URL } from "../utils/constants";

const ResMenuInfo = (props) =>{

const{restroInfo}= props;

    const {name,
        cuisines,
        locality,
        avgRating,
        totalRatingsString,
        costForTwoMessage,
        sla,
        cloudinaryImageId
    } = restroInfo;

    return(

        <div className="restro">

        <div className={"resMenu-img"}>
          <img className="menu-img" src={ CDN_URL + cloudinaryImageId}/>
          </div>

            <div className="resdetails">
                
                <p className="res-name">{name}</p>
                <p className="res-cuisines">{cuisines.join(",")}</p>
                <p className="res-locality">{locality}</p>
                
          </div>

          <hr className="solid"></hr>

          <div className="res-other">
            <ul>
                <li>{[sla.slaString]} </li>
                <li>{costForTwoMessage} </li>
            </ul>
            
         </div>

         <hr className="solid"></hr>

            <div className="res-ratings">
                 <p> <FaStar/>{avgRating} </p>
                 
                 <p>{totalRatingsString}</p>
            </div>

</div>
    );

    
}

export default ResMenuInfo;