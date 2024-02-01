import { createBrowserRouter } from "react-router-dom";
import Root from "./routes/Root";
import Home from "./routes/Home";
import NotFound from "./routes/NotFound";
import Items from "./routes/items";
import ProductDetail from "./routes/ProductDetail";
import ShopDetail from "./routes/ShopDetail";
import People from "./routes/People";
import ShopManagerDashboard from "./routes/ShopManager/ShopManagerDashboard";
import ShopManagerSettings from "./routes/ShopManager/ShopManagerSettings";
import ShopManagerListings from "./routes/ShopManager/ShopManagerListings";
import ShopManagerMessages from "./routes/ShopManager/ShopManagerMessages";
import ShopManagerOrders from "./routes/ShopManager/ShopManagerOrders";
import ShopManagerRoot from "./components/ShopManager/ShopManagerRoot";
import Cart from "./routes/Cart";
import Payment from "./routes/Payment";
import Messages from "./routes/Messages";
import Account from "./routes/Account";
import AccountBody from "./components/Account/AccountBody";
import SecurityBody from "./components/Account/SecurityBody";
import RegisterShop from "./routes/ShopRegister/RegisterShop";
import RegisterProduct from "./routes/ShopRegister/RegisterProduct";
import RegisterShopName from "./routes/ShopRegister/RegisterShopName";
import RegisterProductComplete from "./routes/ShopRegister/RegisterProductComplete";
import RegisterPayments from "./routes/ShopRegister/RegisterPayments";
import RegisterBilling from "./routes/ShopRegister/RegisterBilling";
import ShopManagerListingEditing from "./routes/ShopManager/ShopManagerListingEditing";
import ShopManagerArtantSeller from "./routes/ShopManager/ShopMangerArtantSeller";
import ShopManagerStats from "./routes/ShopManager/ShopManagerStats";
import ShopManagerFinance from "./routes/ShopManager/ShopManagerFinance";
import ShopManagerEditShop from "./routes/ShopManager/ShopManagerEditShop";
import ShopManagerAddProduct from "./routes/ShopManager/ShopManagerAddProduct";
import Review from "./routes/Review";
import EventDetail from "./routes/EventDetail";
import EventDetailTwo from "./routes/EventDetailTwo";
import ShopManagerCommunity from "./routes/ShopManager/ShopManagerCommunity";
import ItemsTag from "./routes/itemsTag";
import Signup from "./routes/Signup";
import KakaoConfirm from "./routes/KakaoConfirm";
import CorporateSignup from "./routes/CorporateSignup";
import AccountRecovery from "./routes/AccountRecovery";
import ResetPassword from "./routes/ResetPassword";

const router = createBrowserRouter(
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
          path: "signup",
          element: <Signup />,
        },
        {
          path: "reset-password",
          element: <ResetPassword />,
        },
        {
          path: "account-recovery",
          element: <AccountRecovery />,
        },
        {
          path: "corportate_signup",
          element: <CorporateSignup />,
        },
        {
          path: "items/:category",
          element: <Items />,
        },
        {
          path: "items/tag/:tag",
          element: <ItemsTag />,
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
          path: "reviews",
          element: <Review />,
        },
        {
          path: "events/:id",
          element: <EventDetail />,
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
              path: "listings/:productPK",
              element: <ShopManagerListingEditing />,
            },
            {
              path: "listings/create",
              element: <ShopManagerAddProduct />,
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
              path: "community",
              element: <ShopManagerCommunity />,
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
