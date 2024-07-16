import React from "react";
import { useSnapshot } from "valtio";
import state from "../store";

const ShoeControls = () => {
  const snap = useSnapshot(state);

  return (
    <div className="absolute left-full ml-3 button-grid">
      <button onClick={() => (state.selectedPart = "shoe_low")}>
        Shoe Low
      </button>
      <button onClick={() => (state.selectedPart = "shoe_up")}>Shoe Up</button>
    </div>
  );
};

export default ShoeControls;
