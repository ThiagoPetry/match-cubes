import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const toastConfig = {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "dark",
}

const errorNotify = (msg) => {
  toast.error(msg, toastConfig);
}

const warnNotify = (msg) => {
  toast.warn(msg, toastConfig);
}

const successNotify = (msg) => {
  toast.success(msg, toastConfig);
}

const infoNotify = (msg) => {
  toast.info(msg, toastConfig);
}

export {
  errorNotify,
  warnNotify,
  successNotify,
  infoNotify,
};
