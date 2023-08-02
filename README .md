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
