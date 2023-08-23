import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./components/commons/Root";
import Home from "./routes/Home";
import NotFound from "./routes/NotFound";
import Items from "./routes/items";
import ProductDetail from "./routes/ProductDetail";
import ShopDetail from "./routes/ShopDetail";
import People from "./routes/People";

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
    ],
  },
]);

export default router;
