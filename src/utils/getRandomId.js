const getRandomId = () => {
  return Math.random().toString(32).slice(4);
}

export { getRandomId };
