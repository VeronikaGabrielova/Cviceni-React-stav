import React, { useState } from "react";

// Zadání 1: Vytvoř stavovou proměnnou s výchozí hodnotou `'možná'`.
// Zadání 2: Proměnnou vypiš místo `ano/ne/možná`.
// Zadání 3: Po kliknutí na tlačítko změň `možná` na `ano`, `ano` na `ne`, případně `ne` na `možná`.

export const Uloha8 = () => {
  const [rainy, setrainy] = useState("možná");
  const handleClick = () => {
    if (rainy === "možná") {
      setrainy("ano");
    } else if (rainy === "ano") {
      setrainy("ne");
    } else {
      setrainy("možná");
    }
  };

  return (
    <>
      <h3>Prší v Brně: {rainy}</h3>

      <button onClick={handleClick}>změnit</button>
    </>
  );
};
