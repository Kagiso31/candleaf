import { useEffect, useState } from "react";

export const useLocalStorage = (key, intialValue) => {
  const [value, setValue] = useState(() => {
    const jsonValue = localStorage.getItem(key);
    if (jsonValue) return JSON.parse(jsonValue);

    if (typeof intialValue === "function") {
      return intialValue();
    } else {
      return intialValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};
