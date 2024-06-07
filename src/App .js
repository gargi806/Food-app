import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/HeaderComponent.js";
import BodyComponent from "./components/BodyComponent.js";
import About from "./components/About.js";
import "../index.css";
import Contact from "./components/Contact.js";
import Error from "./components/Error.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu.js";
import UserContext from "./utils/UserContext.js";
import { Provider } from "react-redux";
import appStore from "./utils/appStore.js";

const AppComponent = () => {
  const [userName, setUserName] = useState();
  //authentication logic
  //making api call

  useEffect(() => {
    //make api call ,receive name ,password
    const data = {
      name: "Gargi Singh",
    };
    setUserName(data.name);
  }, []);

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ LoggedInUser: userName }}>
        <div className="app">
          <HeaderComponent />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppComponent />,
    children: [
      {
        path: "/",
        element: <BodyComponent />,
      },

      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("yes"));

root.render(<RouterProvider router={appRouter} />);
