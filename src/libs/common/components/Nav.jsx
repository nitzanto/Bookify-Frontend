import { menu, user } from "../../../assets/icons/index.js";
import { logoutUser, navLinks, useAuthentication } from "../index.js";
import { Link, useLocation } from "react-router-dom";
import { AUTH_SERVICE_LOGOUT } from "../index.js";
import { bookifyLogo } from "../../../assets/images/index.js";
import MobileNav from "./MobileNav.jsx";

const Nav = () => {
  const location = useLocation();
  const isMainPage = location.pathname === "/";
  const { isLoggedIn, setIsLoggedIn } = useAuthentication();

  const handleSignOut = async () => {
    await logoutUser(AUTH_SERVICE_LOGOUT, setIsLoggedIn);
  };

  return (
    <header
      className={`padding-x mt-[-40px] ${
        isMainPage ? "absolute" : ""
      } z-10 w-full`}
    >
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
        <MobileNav isLoggedIn={isLoggedIn} handleSignOut={handleSignOut} />
      </nav>
    </header>
  );
};
export default Nav;
