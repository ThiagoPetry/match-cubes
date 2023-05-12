import ReactDOM from "react-dom/client";

const openModal = (component) => {
  const root = ReactDOM.createRoot(document.getElementById("displayModal"));
  root.render(component);
}

export { openModal };
