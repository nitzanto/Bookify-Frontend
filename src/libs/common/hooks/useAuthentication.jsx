import { useEffect, useState } from "react";
import Cookies from "js-cookie";

const useAuthentication = () => {
  const [isLoggedIn, setIsLoggedInState] = useState(false);

  useEffect(() => {
    const isAuthenticated = Cookies.get("Authentication");
    setIsLoggedInState(!!isAuthenticated);
  }, []);

  const setIsLoggedIn = (value) => {
    setIsLoggedInState(value);
  };

  return { isLoggedIn, setIsLoggedIn };
};

export default useAuthentication;
