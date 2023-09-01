import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./routes/Root";
import Home from "./routes/Home";
import NotFound from "./routes/NotFound";
import Items from "./routes/items";
import ProductDetail from "./routes/ProductDetail";
import ShopDetail from "./routes/ShopDetail";
import People from "./routes/People";
import ShopManagerDashboard from "./routes/ShopManagerDashboard";
import ShopManagerSettings from "./routes/ShopManagerSettings";
import ShopManagerListings from "./routes/ShopManagerListings";
import ShopManagerMessages from "./routes/ShopManagerMessages";
import ShopManagerOrders from "./routes/ShopManagerOrders";
import ShopManagerRoot from "./components/ShopManager/ShopManagerRoot";
import Cart from "./routes/Cart";
import Payment from "./routes/Payment";
import Messages from "./routes/Messages";
import Account from "./routes/Account";
import AccountBody from "./components/Account/AccountBody";
import SecurityBody from "./components/Account/SecurityBody";
import RegisterShop from "./routes/RegisterShop";
import RegisterProduct from "./routes/RegisterProduct";
import RegisterShopName from "./routes/RegisterShopName";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "items/:category",
        element: <Items />,
      },
      {
        path: "listings/:pk",
        element: <ProductDetail />,
      },
      {
        path: "shop/:pk",
        element: <ShopDetail />,
      },
      {
        path: "people/:pk",
        element: <People />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "payment",
        element: <Payment />,
      },
      {
        path: "messages",
        element: <Messages />,
      },
      {
        path: "your/account",
        element: <Account />,
        children: [
          {
            index: true,
            element: <AccountBody />,
          },
          {
            path: "security",
            element: <SecurityBody />,
          },
        ],
      },

      {
        path: "your/shops/register",
        element: <RegisterShop />,
      },
      {
        path: "your/shops/onboarding/name",
        element: <RegisterShopName />,
      },
      {
        path: "your/shops/:shopPk/onboarding/listings/create",
        element: <RegisterProduct />,
      },
    ],
  },
  {
    path: "/your/shops/me/",
    element: <ShopManagerRoot />,
    errorElement: <NotFound />,
    children: [
      {
        path: "",
        element: <ShopManagerSettings />,
      },
      {
        path: "dashboard",
        element: <ShopManagerDashboard />,
      },
      {
        path: "listings",
        element: <ShopManagerListings />,
      },
      {
        path: "messages",
        element: <ShopManagerMessages />,
      },
      {
        path: "orders-shipping",
        element: <ShopManagerOrders />,
      },
    ],
  },
]);

export default router;
