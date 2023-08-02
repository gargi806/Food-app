import { useEffect, useState } from "react";
import Shimmer from "./shimmer";
import {FaStar} from "react-icons/fa";
import { CDN_URL } from "../utils/constants";
import { useParams } from "react-router-dom"; 

 
const RestaurantMenu = () => {
 
    const[resInfo,setResInfo]= useState(null);
    
        const {resId} = useParams();


    useEffect(()=>{
        fetchMenu()
    },[]);
  
    const fetchMenu = async()=>{
    const data = await fetch(
       "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER");
      const json = await data.json();

      console.log(json)

      setResInfo(json?.data);
      
    }


    if(resInfo === null) return <Shimmer/>;

    const {name,
        cuisines,
        locality,
        avgRating,
        totalRatingsString,
        costForTwoMessage,
        sla,
        cloudinaryImageId
    } = resInfo?.cards[0]?.card?.card?.info;

    const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
console.log(itemCards);

    return (
        <div className="restaurant-info">

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

           <div className="menu">
            <div className="header-menu">
            <h1>Menu</h1>
            </div>

            <div className="menu-container">
                
                    { itemCards.map((item) => (
                        
                       <div className="oneCard" key={item.card.info.id} >
                        <div className="card-info">
                        <p>{item.card.info.ribbon.text}</p>
                         <h2>{item.card.info.name}</h2> 
                          <h4>{"Rs."}{item.card.info.price/100}</h4>
                          <h5>{item.card.info.description}</h5>
                        </div>
                        
                    <div className="card-img">
                         <img className="item-img" src={ CDN_URL + item.card?.info?.imageId}></img>
                        </div>
                       
                        </div>
                           
                    ))} ; 

                     
                              
                     
                           
            </div>
            

           </div>

           

             


      </div>

    )
};

export default RestaurantMenu;