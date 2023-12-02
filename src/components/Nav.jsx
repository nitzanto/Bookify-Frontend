import { menu, user } from "../assets/icons";
import bookifyLogo from "../assets/images/bookify-logo.png";
import { navLinks } from "../constants";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";

const NavMain = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check for the presence of the authentication cookie
  useEffect(() => {
    const isAuthenticated = Cookies.get("Authentication");
    setIsLoggedIn(!!isAuthenticated);
  }, []);

  const handleSignOut = async () => {
    const response = await axios.get("http://34.160.44.153/auth/logout", {
      withCredentials: true,
    });
    setIsLoggedIn(false);
  };

  return (
    <header className="padding-x mt-[-40px] z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img
            src={bookifyLogo}
            alt="logo"
            width={180}
            height={150}
            className="m-0 w-[180px] h-[180px]"
          />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block">
          <img src={menu} alt="hamburger icon" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default NavMain;
