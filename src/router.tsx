import { createHashRouter } from "react-router-dom";
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
import RegisterProductComplete from "./routes/RegisterProductComplete";
import RegisterPayments from "./routes/RegisterPayments";
import RegisterBilling from "./routes/RegisterBilling";
import ShopManagerListingEditing from "./routes/ShopManagerListingEditing";
import ShopManagerArtantSeller from "./routes/ShopMangerArtantSeller";
import ShopManagerStats from "./routes/ShopManagerStats";
import ShopManagerFinance from "./routes/ShopManagerFinance";
import ShopManagerEditShop from "./routes/ShopManagerEditShop";

const router = createHashRouter(
  [
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
        {
          path: "your/shops/:shopPk/onboarding/listings/:productPk",
          element: <RegisterProductComplete />,
        },
        {
          path: "your/shops/:shopPk/onboarding/payments",
          element: <RegisterPayments />,
        },
        {
          path: "your/shops/:shopPk/onboarding/billing",
          element: <RegisterBilling />,
        },
        {
          path: "your/shops/me/",
          element: <ShopManagerRoot />,
          errorElement: <NotFound />,
          children: [
            {
              path: "",
              element: <ShopManagerDashboard />,
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
              path: "listings/:pk",
              element: <ShopManagerListingEditing />,
            },
            {
              path: "messages",
              element: <ShopManagerMessages />,
            },
            {
              path: "orders-shipping",
              element: <ShopManagerOrders />,
            },
            {
              path: "star-seller",
              element: <ShopManagerArtantSeller />,
            },
            {
              path: "stats",
              element: <ShopManagerStats />,
            },
            {
              path: "finances",
              element: <ShopManagerFinance />,
            },
            {
              path: "setting",
              element: <ShopManagerSettings />,
            },
            {
              path: "editShop",
              element: <ShopManagerEditShop />,
            },
          ],
        },
      ],
    },
  ],
  {
    basename: process.env.PUBLIC_URL,
  }
);

export default router;
