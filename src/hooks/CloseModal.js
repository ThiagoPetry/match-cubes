import ReactDOM from "react-dom/client";

const closeModal = () => {
  // const container = document.querySelector("#displayModal");
  // ReactDOM.unmountComponentAtNode(container);

  const root = ReactDOM.createRoot(document.getElementById("displayModal"));
  root.unmount();
}

export { closeModal };
