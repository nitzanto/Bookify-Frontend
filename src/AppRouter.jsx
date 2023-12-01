import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RestaurantPage from "./components/RestaurantPage";
import App from "./App.jsx";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="/restaurant/:id" element={<RestaurantPage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
