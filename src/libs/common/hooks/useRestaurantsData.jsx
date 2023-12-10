import { createContext, useContext, useState, useEffect } from "react";
import { restaurantsData as fetchRestaurantsData } from "../data/index.js";

const RestaurantsDataContext = createContext(undefined);

export const useRestaurantsData = () => {
  return useContext(RestaurantsDataContext);
};

export const RestaurantsDataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchRestaurantsData();
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const value = { data, loading, error };

  return (
    <RestaurantsDataContext.Provider value={value}>
      {children}
    </RestaurantsDataContext.Provider>
  );
};
