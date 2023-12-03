import Swal from "sweetalert2";
import axios from "axios";
import Cookies from "js-cookie";

export const logoutUser = async (logoutEndpoint, setIsLoggedIn) => {
  const jwtToken = Cookies.get("Authentication");

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
    try {
      const res = await axios.post(
        logoutEndpoint,
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
      setIsLoggedIn(false);

      await Swal.fire({
        title: "Logged Out!",
        icon: "success",
      });
    } catch (error) {
      console.error("Logout failed", error);
    }
  }
};
