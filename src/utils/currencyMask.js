import { maskCurrency } from "./maskCurrency";

const currencyMask = (e, get) => {
  let value = get ? e.toString() : e.target.value;

  const onlyDigits = value
  .split("")
  .filter(s => /\d/.test(s))
  .join("")
  .padStart(3, "0");

  const digitsFloat = `${onlyDigits.slice(0, -2)}.${onlyDigits.slice(-2)}`;

  if (get) {
    return maskCurrency(digitsFloat);
  } else {
    e.target.value = maskCurrency(digitsFloat);
  }
}

export { currencyMask };
