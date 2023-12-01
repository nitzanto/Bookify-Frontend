import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RestaurantPage from "./components/RestaurantPage";
import App from "./App.jsx"; // Import your RestaurantPage component

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="/restaurant/:id" component={RestaurantPage} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
