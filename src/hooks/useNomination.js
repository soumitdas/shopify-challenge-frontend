import { useState } from "react";

export default function useNomination() {
  const [nominations, setNominations] = useState(() => {
    try {
      const storedNominations = window.localStorage.getItem("__nominations");

      return storedNominations ? JSON.parse(storedNominations) : [];
    } catch {
      return [];
    }
  });

  const customSetNominations = (value) => {
    setNominations(value);
    window.localStorage.setItem("__nominations", JSON.stringify(value));
  };

  const addNomination = (movie) => {
    if (typeof movie !== "object") return;
    if (nominations.length === 5) {
      alert("You cannot nominate more that 5 films...");
      return;
    }
    const index = nominations.findIndex(
      (nomination) => nomination.imdbID === movie.imdbID
    );
    if (index > -1) {
      alert(`You have already nominated "${movie.Title}"`);
      return;
    }
    customSetNominations([...nominations, movie]);
  };
  const removeNomination = (id) => {
    const index = nominations.findIndex(
      (nomination) => nomination.imdbID === id
    );
    if (index > -1) {
      const tempNominations = nominations;
      tempNominations.splice(index, 1);
      customSetNominations([...tempNominations]);
    } else {
      alert("Nomination cannot be found for deletation");
    }
  };

  return {
    nominations,
    addNomination,
    removeNomination,
  };
}
