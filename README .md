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

👍 Higher order components: function that takes a component as input and then enhances or modifies it and returns a new component. (building promoted feature)

## for categories:

1. for fetching all the categories data u have to use filter method on the cards array.

const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
(c) =>
c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
);

2.  after fetching data u have to map over these categories.

categories.map((category) =>(<ResMenuCategories data={category.card.card}/>)

3.  resMenucategories contains a title, accordian, item list.

4.  we will do the same for item list like we did for res info or res menu categories, where we mention that it is a separate component and from where it is fetching data : <itemList items={data.itemCards}/>

5.  make new component item list and use map again and dispaly your title, price ,descriptipn,img etc.

6.  we want to make the categories clickable , to do that we use on click method . onClick={handleClick}.
    handle click is a function that will show/hide the list

7.  to make the categories collapsible we need to change the state of the item list . useState
    { showItems && <itemList items={data.itemCards}/>}
    (trying to conditionally render itemlist based on the value of showitems)

\*\* all the react applications have two layers : UI layer and data layer. Data layer consists of state, props,local variables. UI layer is powered by data layer.UI layer mostly consists of JSX.

## controlled and uncontrolled components :

An uncontrolled component is an input element that manages its own state internally. Instead of using the React state
It’s useful to consider components as “controlled” (driven by props) or “uncontrolled” (driven by state).

## Lifting the state up:

Sometimes, you want the state of two components to always change together. To do it, remove state from both of them, move it to their closest common parent, and then pass it down to them via props. This is known as lifting state up,

But now let’s say you want to change it so that only one panel is expanded at any given time. With that design, expanding the second panel should collapse the first one. How would you do that?

To coordinate these two panels, you need to “lift their state up” to a parent component in three steps:

1. Remove state from the child components.
2. Pass hardcoded data from the common parent.
3. Add state to the common parent and pass it down together with the event handlers.
   This will allow the Accordion component to coordinate both Panels and only expand one at a time.

recap:
When you want to coordinate two components, move their state to their common parent.
Then pass the information down through props from their common parent.
Finally, pass the event handlers down so that the children can change the parent’s state.

## props drilling:

Usually, you will pass information from a parent component to a child component via props. But passing props can become verbose and inconvenient if you have to pass them through many components in the middle, or if many components in your app need the same information.

Context lets a parent component provide data to the entire tree below it.

use cases: logged in , dark mode

## Redux 👍

     1) redux is not mandatory all the time, when building large scale app where data is a lot then it is needed more.

     2) redux and react are different libraries.

     3) redux is not the only library which is used for state management. There are more like Zustand

     4) redux advantages : large scale app, handling data, managing store, applications become easier to debug,

     5) works with other libraries as well.

     6) redux has 2 libraries: react-redux and redux toolkit.

     7) use redux toolkit: standard way to write redux logic.(RTK)

## Redux store 👍

add button (click) --- dispatch ---reducer ---cartslice ---selector --- update cart

     1) it is like a big js object with a lot of data in it and it is kept in a central global place.

     2) any component can access this store,can read and write data fron that store, we keep major data of our app in this.

     3) it is completely ok to keep all the data in redux store but just because the data doesnot become clumsy, there is something called slice which is like portions in redux store.

     4) slice is basically a logical separation of data like logic for cart , or user slice , theme slice etc.

     5) cart slice will now hold all the data of cart, initially this cart can be an empty array.

     6) u cannot directly modify slice. there is a process:

      : (to write data) [from add button to cart slice]

          - dispatch action
          - this action calls a function : function is known as a reducer
          - this function modifies the cart slice

       : (to read data)[from cart slice to cart on the header to show the number of items present in the cart]

          - we will use a selector and this selector will modify : this phenomenon is known as suscribing to the store. we will use useSelector hook to get this done.

          - useDispatch hook is used to dispatch

          - header component is subscribed to the store because of the useSelector which means it is in sync with the store ,that is why it is called subscribing to the store.

## Build redux store:

      1) install libraries: @reduxjs/toolkit and react-redux

              npm install @reduxjs/toolkit
              npm install react-redux

      2) build our store

              build store inside utils called appStore.js

      3) connect our store to our app

               using provider in app.js


      4) create a cart slice

                cartSlice file in utils

      5) dispatch(action)
      6) selector

## use state:

const [resInfo, setResInfo] = useState(null); //data hasn't been fetched yet or is in the process of being fetched.

const [resOffers, setResOffers] = useState(); //it could be assigned an array, an object, or any other type of data later on.

const [resMenu, setResMenu] = useState([]); //initial state is no menu items, and you expect an array of menu items to be loaded later.

//use effect takes two arguments, call back function and dependency array. no dependency array means data will be called again and again, empty array means called once.
useEffect(() => {
fetchMenu();
}, []);

## onClick={() => handleCartItem(item)}:

This way, handleCartItem will be called with item as an argument when the button is clicked, not before.

## onClick={handleCartItem(item)}:

This actually calls the function handleCartItem immediately during the rendering phase, not when the button is clicked.

## onClick={handleCartItem}:

This is typically used when the function does not need any arguments or if it can handle the event object directly.

## Testing:

developer testing 👍

- unit testing : testing one unit in isolation
- integration testing :
- end to end testing

libraries used for testing: react testing library which uses jest

1.  rest testing library - npm install -D @testing-library/react
2.  install jest - npm i -D jest
3.  install jest for babel - npm install --save-dev babel-jest @babel/core @babel/preset-env
4.  configure babel
5.  configure .parcelrc file to disable default babel transpilation
6.  jest configuration

command to run test cases : npm run test
npx jest --init : to execute jest test cases

7. install jsDom library

\*\* \_ \_ is called dunder

test("", ()=>{

})

8. install @babel/preset-react
9. add this in babel.config.js
10. install @testing-library/jest-dom
