import ReactDOM from "react-dom/client";

const openModal = (component) => {
  const root = ReactDOM.createRoot(
    document.getElementById("displayModal")
  );

  const display = document.querySelector("#displayModal");

  if (display && !display?.childNodes?.length) {
    root.render(component);
  }
}

export { openModal };
