// import { useState } from "react";
// import heroImg from "./assets/hero.png";
// import Header from "./components/header";
// import Body from "./components/Body";
// import "./App.css";

// const App = () => {
//   return (
//     <div className="app">
//       <Header />
//       <Body />
//     </div>
//   );
// };

// export default App;

import React, { lazy, Suspense, useEffect, useState } from "react";

import Header from "./components/Header";
import Body from "./components/Body";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Cart from "./components/Cart";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router";

import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

// Chunking
// Code Splitting
// Dynamic Bundling
// lazy Loading
// on demand loading
// dynamic import
const Grocery = lazy(() => import("./components/Grocery"));
const About = lazy(() => import("./components/About"));

// Layout
const AppLayout = () => {
  const [userName, setUserName] = useState();

  // Authentication
  useEffect(() => {
    // Make an API call and send username and password

    const data = {
      name: "Akanksha Garg",
    };

    setUserName(data.name);
  }, []);

  return (
    <Provider store={appStore}>
      <UserContext.Provider
        value={{
          loggedInUser: userName,
          setUserName,
        }}
      >
        <div className="app">
          <Header />

          {/* Child routes will render here */}
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

// Router configuration
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,

    children: [
      {
        path: "/",
        element: <Body />,
      },

      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading....</h1>}>
            <About />
          </Suspense>
        ),
      },

      {
        path: "/contact",
        element: <Contact />,
      },

      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading....</h1>}>
            <Grocery />
          </Suspense>
        ),
      },

      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },

      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

// App component
const App = () => {
  return <RouterProvider router={appRouter} />;
};

export default App;