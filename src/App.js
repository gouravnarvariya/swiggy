
import ReactDom from "react-dom/client";
import Header from "./components/header";
import Body from "./components/body";
import Footer from "./components/footer";
import About from "./components/about";
import Contact from "./components/contact";
import RestaurantMenu from "./restaurantMenu";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { lazy, Suspense, useState } from "react";
import Shimmer from "./components/utils/shimmer";
import UserContent from "./components/utils/userContent";
import { Provider } from "react-redux";
import store from "./components/utils/store";
import Cart from "./components/utils/cart";

const Instamart = lazy(()=>import("./components/instamart"));

function AppLayout() {
  const [userss, setUser] = useState( {
    name:"namaste",
     email:"xyz@gamil.com"});
  
  
  return (
    <Provider store={store}>
    
     <UserContent.Provider 
     value={{user:userss,
    setUser:setUser
     }}>
      <Header />
      <Outlet></Outlet>
      <Footer />
      </UserContent.Provider>
    </Provider>
  );
}

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/About", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/", element: <Body
       
      /> },
      { path: "/restaurant/:resid", element: <RestaurantMenu/> },
      { path: "/instamart", element: <Suspense fallback={<Shimmer/>}><Instamart/></Suspense> },
      { path:"/cart", element:<Cart/>}
    ],
  },
]);



const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={AppRouter} />);
