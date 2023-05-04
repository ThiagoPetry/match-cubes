import { maskCurrency } from "./maskCurrency";

const currencyMask = (e) => {
  const onlyDigits = e.target.value
  .split("")
  .filter(s => /\d/.test(s))
  .join("")
  .padStart(3, "0");

  const digitsFloat = `${onlyDigits.slice(0, -2)}.${onlyDigits.slice(-2)}`;
  e.target.value = maskCurrency(digitsFloat);
}

export { currencyMask };
