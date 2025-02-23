import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/Layout/Layout.jsx";
import Home from "./Components/Home/Home.jsx";
import Cart from "./Components/Cart/Cart.jsx";
import Categories from "./Components/Categories/Categories.jsx";
import Brands from "./Components/Brands/Brands.jsx";
import Products from "./Components/Products/Products.jsx";
import Login from "./Components/Login/Login.jsx";
import Register from "./Components/Register/Register.jsx";
import NotFound from "./Components/NotFound/NotFound.jsx";
import UsersContextProvider, { UsersContext } from "./stores/UsersContext.jsx";
import ProtectedRoute from "./Components/ProtectedRoute.jsx";
import '@fortawesome/fontawesome-free/css/all.min.css';
import ProductDetail from "./Components/ProductDetail.jsx";
import CartContextProvider from "./stores/CartContext.jsx";
import { Toaster } from "react-hot-toast";
import Checkout from "./Components/Checkout.jsx";
import AllOrders from "./Components/AllOrders.jsx";
import { store } from "./redux/store.js";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import ForgetPassword from "./ForgetPassword.jsx";
import Verify from "./Components/Verify.jsx";
import ResetPassword from "./Components/ResetPassword.jsx";
import Wishlist from "./Components/Wishlist.jsx";
import WishlistContextProvider from "./stores/WishlistContext.jsx";


const query = new QueryClient();

let routers = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { index: true, element: <Register /> },
      { path: "login", element: <Login /> },
      { path: "home", element: <ProtectedRoute ><Home /></ProtectedRoute> },
      { path: "cart", element: <ProtectedRoute ><Cart /></ProtectedRoute> },
      { path: "brands", element: <ProtectedRoute ><Brands /></ProtectedRoute> },
      { path: "categories", element: <ProtectedRoute ><Categories /></ProtectedRoute> },
      { path: "productdetails/:id", element: <ProtectedRoute ><ProductDetail /></ProtectedRoute> },
      { path: "checkout", element: <ProtectedRoute ><Checkout /></ProtectedRoute> },
      { path: "allorders", element: <ProtectedRoute ><AllOrders /></ProtectedRoute> },
      { path: "products", element: <ProtectedRoute ><Products /> </ProtectedRoute>},
      { path: "wishlist", element: <ProtectedRoute ><Wishlist /> </ProtectedRoute>},
      { path: "forgetpassword", element: <ForgetPassword />},
      { path: "verify", element: <Verify />},
      { path: "resetpassword", element: <ResetPassword />},
      
      { path: "*", element: <NotFound /> },
    ],
  },
]);
function App() {
  return (
    <>
    <QueryClientProvider client={query}>

      <Provider store={store}>
        <WishlistContextProvider>
      <CartContextProvider>
      <UsersContextProvider>
        <RouterProvider router={routers}></RouterProvider>
        <ReactQueryDevtools/>
        <Toaster />
      </UsersContextProvider>
      </CartContextProvider>
      </WishlistContextProvider>
      </Provider>
    </QueryClientProvider>
    </>
  );
}

export default App;
