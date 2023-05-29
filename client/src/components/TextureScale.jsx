import React, { useState } from "react";
import { useSnapshot } from "valtio";
import { SketchPicker } from "react-color";
import state from "../store";
const TextureScale = () => {
  const snap = useSnapshot(state);
  return (
    <div className="filepicker-container">
      <div className="flex-1 flex flex-col">
        <p className="text-gray-500 text-sm">
          Resize your T-Shirt's texture design.
        </p>
        <hr />
        <br />
        <input
          id="texture-scale"
          type="range"
          min={15}
          max={100}
          value={snap.value}
          onChange={(value) => (state.value = value.target.value)}
        />
        <br />
        <p className="text-gray-500 text-sm">
          Current value: {snap.value * 5}%
        </p>
      </div>
    </div>
  );
};

export default TextureScale;
