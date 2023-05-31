import React from "react";
import CustomButton from "./CustomButton";
const Title = ({ title, setTitle }) => {
  return (
    <div className="aipicker-container">
      <p className="text-gray-500 text-sm">
        Add some text on your T-Shirt.
        <hr />
      </p>
      <input
        type="text"
        className="aipicker-textarea"
        placeholder="Spidey"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <div className="flex flex-wrap gap-3">
        <CustomButton type="filled" title="Add Title" customStyles="text-xs" />
      </div>
    </div>
  );
};

export default Title;
