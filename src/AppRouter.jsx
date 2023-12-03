import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RestaurantPage from "./components/RestaurantPage";
import App from "./App.jsx";
import { LoginPage, OrderComplete, SignUp } from "./components/index.js";
import { NotFound } from "./libs/common/index.js";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/restaurant/:id" element={<RestaurantPage />} />
        <Route path="/order/:id" element={<OrderComplete />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
