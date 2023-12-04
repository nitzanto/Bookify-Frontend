import { useState } from "react";
import { menu } from "../../../assets/icons/index.js";
import { Link } from "react-router-dom";

const MobileNav = ({ isLoggedIn, handleSignOut }) => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="sm:hidden flex relative z-100">
      <img
        src={menu}
        alt="hamburger icon"
        width={25}
        height={25}
        onClick={() => setToggleMenu(!toggleMenu)}
        className={`cursor-pointer transition-transform transform ${
          toggleMenu ? "rotate-90" : "rotate-0"
        }`}
      />

      {toggleMenu && (
        <div className="dropdown absolute top-16 right-0 bg-white p-4 shadow-md z-9999">
          {isLoggedIn ? (
            <>
              <button
                type="button"
                onClick={() => {
                  setToggleMenu(false);
                  handleSignOut();
                }}
                className="mt-2 w-full black_btn"
              >
                Logout
              </button>
            </>
          ) : (
            <button
              type="button"
              onClick={() => {
                setToggleMenu(false);
              }}
              className="black_btn mt-2 w-full"
            >
              <Link to="/login">Login</Link>
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default MobileNav;
