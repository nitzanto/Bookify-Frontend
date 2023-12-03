import { menu, user } from "../assets/icons";
import bookifyLogo from "../assets/images/bookify-logo.png";
import { navLinks } from "../libs/common/index.js";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import Swal from "sweetalert2";
import axios from "axios";
import { AUTH_SERVICE_LOGOUT } from "../libs/common/index.js";

const NavMain = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check for the presence of the authentication cookie
  useEffect(() => {
    const isAuthenticated = Cookies.get("Authentication");
    setIsLoggedIn(!!isAuthenticated);
  }, []);

  const handleSignOut = async () => {
    const jwtToken = Cookies.get("Authentication"); // Retrieve the JWT token from cookies

    // Show a SweetAlert confirmation before logging out
    const shouldLogout = await Swal.fire({
      title: "Logout",
      text: "Are you sure you want to log out?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, logout!",
    });

    if (shouldLogout.isConfirmed) {
      // Clear the JWT token from cookies
      const res = await axios.post(
        AUTH_SERVICE_LOGOUT,
        {},
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
            Authentication: `${jwtToken}`,
          },
        },
      );

      Cookies.remove("Authentication");

      // Set user as not logged in
      setIsLoggedIn(false);

      // Show a success message after logout
      await Swal.fire({
        title: "Logged Out!",
        icon: "success",
      });
    }
  };

  return (
    <header className="padding-x mt-[-40px] absolute z-10 w-full">
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
        <div className="flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24">
          <a href="/">
            <img src={user} width={25} height={25} alt="user icon" />
          </a>
          <span></span>
          {isLoggedIn ? (
            <button onClick={handleSignOut}>Sign Out</button>
          ) : (
            <Link to="/login">Sign in</Link>
          )}
        </div>
        <div className="hidden max-lg:block">
          <img src={menu} alt="hamburger icon" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default NavMain;
