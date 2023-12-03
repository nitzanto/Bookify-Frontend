import Swal from "sweetalert2";
import { LoadingAnimated } from "../../../assets/images/index.js";

export const showLoadingAlert = () => {
  return Swal.fire({
    title: "Loading...",
    imageUrl: LoadingAnimated,
    allowOutsideClick: false,
    showConfirmButton: false,
  });
};
