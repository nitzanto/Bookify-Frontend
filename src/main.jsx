import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AppRouter from "./AppRouter.jsx";
import { RestaurantsDataProvider } from "./libs/common/hooks/useRestaurantsData.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RestaurantsDataProvider>
      <AppRouter></AppRouter>
    </RestaurantsDataProvider>
  </React.StrictMode>,
);
