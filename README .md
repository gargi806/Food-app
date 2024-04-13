# Namaste React

# parcel :

    - dev build
    - local server
    - HMR: hot module  replacement
    - file watching algo
    - caching - faster builds
    - image optimization
    - minify files
    - bundle files
    - compress files
    - consistent hashing
    - code-splitting
    - differential bundling: support older versions
    - tree shaking: remove unused code
    -

/\* My Food App structure will look like this,

1.  Header - Logo - Nav Items(right side) - Cart 2) Body - Search bar - Restaurant container - Restaurant card - Image - Name - Rating 3) Footer - Links - Copyrights

\*/

  <div className="topRated">
              <button 
                 className="topRated-btn"
                 onClick={()=>{
                    listOfRestaurants= resList.filter(
                        (res)=>res.data.avgRating>4);
                 }}
                  >Top Rated Restaurants
              </button>
      </div>

/_ Select all CSS _/
\*{
margin: 0;
padding: 0;
overflow-x: hidden;
}

/_ Header CSS _/
.head{
display: flex;
justify-content: space-between;
margin: 10px;
width: auto;
border: 1px solid black;;
border-radius: 5px;
box-shadow: -1px 4px 20px 14px rgba(0, 0, 0, 0.2);
color: rgb(148, 100, 100);
font-weight: bold;
}

.logo{
padding-left: 10px;
width: 120px;
}

.nav-items{  
 padding: 15px;
width: auto;
}

.nav-items > ul{
list-style-type: none;
display: flex;

}

.nav-items > ul > li{
padding: 10px 10px 0 0;
font-size: large;
cursor: pointer;
margin: 10px;
}

/_ Body CSS _/

.topRated{
margin: 10px;  
 width: 150px;
}

.topRated-btn{
border: 1px solid rgb(199, 197, 197);
cursor: pointer;
padding: 10px 10px;
border-radius: 50px;
background-color: #7a0f0f0d;
color: #222;
font-size: 14px;

}

.search{
padding: 10px;
margin: 20px;
background-color: rgb(221, 208, 208);
border-radius: 18px;
width: 250px;
padding-left: 20px;
margin-left: 40px;
}

.search-input{
margin: 10px;
width: 220px;
padding: 15px;
border-radius: 17px;
border-color: rgb(250, 250, 248);
border: 1px solid white;
background-color: #faf8f80d;

}

.search-btn{
border: 1px solid white;
cursor: pointer;
padding: 10px 10px;
border-radius: 50px;
background-color: #faf8f80d;
color: #222;
font-size: 14px;
font-weight: 500;

}

.res-container{
width: auto;
display: flex;
flex-wrap: wrap;
justify-content:center;
}

.res-card{
width: 200px;
border-radius: 5px;
box-shadow: -1px 4px 20px 14px rgba(0, 0, 0, 0.2);
padding: 10px;
margin: 20px;
cursor: pointer;
}

.res-card > img{
width: 100%;
border-radius: 10px;
}

.shimmer-container{
display: flex;
flex-wrap: wrap;
}

.shimmer-card{
width: 200px;
height: 300px;
background-color: #f0f0f0;
margin: 20px;
padding:20px;

}

.btn{
padding: 8px 10px;
margin: 10px;
cursor : pointer;
font-size: large;
font-weight: bold;
color: rgb(78, 76, 76);
background-color: rgb(223, 159, 159);
border: 1px solid rgb(141, 56, 56);
}

.filter{
display:flex;

}

.filter-btn{
border: 1px solid white;
cursor: pointer;
background-color: #d6b3b3;
color: #222;
margin: 10px;
padding: 10px;

}

.restaurant-info{

width: 70%;
padding: 20px;
margin: auto;
background-color: rgb(224, 225, 220);

}

.restro{
display: flex;
justify-content: space-around;
align-items: center;
background-color: rgb(38, 136, 51);
color: #f0f0f0;
width: 100%;
height: 240px;

}

.menu-img{
width: 280px;
height: 190px;
border-radius: 15px;
padding: 10px;
margin:10px;

}
.res-name{

    font-size: 22px;
    font-weight: bolder;
    color: white;

}

.resdetails{

     padding:10px;

     line-height: 25px;

}
.res-other{

    font-size: 15px;
    font-weight: bold;
    padding: 20px;

}

.res-ratings{

    padding: 10px;
    margin-right: 10px;
    line-height: 30px;

}

hr.solid {
border-top: 3px solid #bbb;
height: 58px;
}

.res-other>ul>li{
margin: 0px 5px 10px 5px;
}

.oneCard{

    display: flex;
    justify-content: space-between;
    padding:10px;
    margin:10px;

}

.card-info{
width: 700px;
padding:10px;
}

.cardDivider {
border-top: 3px solid #bbb;
}

.item-img{
float: right;
margin-top: 20px;;
width: 100px;
height:80px;
border-radius: 5px;
}

.offer-box{
padding: 10px;
margin: 10px;
width: 280px;
height: 100px;
border: 1px solid black;
}

👍 class based components: normal javascript class, it has a render method which returns jsx.

class UserClass extends React.Component {

    render() {
        return(
            <div>
                class based components
            </div>
        );
    }

}

export default UserClass;

- use super (props ) and constructor .

👍 lifecycle of react class based components:
a) mounting cycle
b) updating cycle
c) unmounting cycle

MOUNTING CYCLE:

1. render phase : constructor, render
2. commit phase:

-parent constructor
-parent render

- first child constructor
- first child render

  - second child constructor
  - second child render

  <DOM updated in single batch>

  - first child componentDidMount
  - second child componentDidMount

- parent componentDidMount

👍 first the render phase of all the children and parent completes then the commit phase begins because in the commit phase the dom is manipulated which is a expensive process .
This is how react is optimizing the app.

UPDATING CYCLE:

- constructor(dummy)
- render(dummy)
  <HTML DUMMY>
- componentdidmount
  <API call>
  state variable is updated
- render(api data)
<html new api data>
component did update

👍 single responsibilty principle: each component should have a unique responsibility.code becomes more reusable, maintainable,testable.

👍 Custom Hooks: hooks are utility functions.

if we take the example of our project , restaurantMenu component right now is not following thw single responsibility principle , as it has the task of fetchibng the data as well as displaying it .

so, to solve this problem we cam simply use custom hooks to fetch the data and then simply use it in the component.

when we work with custom hooks , they need to be made in constants file and with the use keyword like {useRestaurantMenu} .

now, this custom hook is pretty similar to how we fetch data normally in a component.

👍 chunking/ code splitting/ lazy loading/ dynamic bundling /on demand loading: break down your app in smaller chunks.
lazy loading is loading page when needed. so when we click on a button then the code should be loaded not before.

const Grocery = lazy(()=> import("./componnets/grocery));

RES LIST:OLD
"https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.9124336&lng=75.7872709&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"

CDN:OLD
"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"

    .res-container{

    width: auto;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    align-self: stretch;

    }

    .res-card{

     /* Adjust the width as desired */
     width:250px;
    border-radius: 5px;
    box-shadow: -1px 5px 10px 5px rgba(42, 42, 42, 0.2);
    padding: 10px;
    margin: 20px;
    cursor: pointer;
    word-wrap: break-word;
    font-weight: bold;


    }

    .res-card:hover {
        transform: scale(1.03);
      }


    .res-card > img{
    max-width: 100%; /* Make sure the image does not exceed card width */
    max-height: 100%;
    border-radius: 20px;
    display: flex; /* Use flexbox layout */
    justify-content: center; /* Center content horizontally */
    align-items: center;
    padding-bottom: 20px;
    }
