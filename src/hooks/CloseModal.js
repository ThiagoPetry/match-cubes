const closeModal = () => {
  const display = document.querySelector("#displayModal");

  if (display && display?.childNodes?.length) {
    for (const item of display.childNodes) {
      item.remove();
    }
  }
}

export { closeModal };
