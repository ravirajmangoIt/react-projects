import React, { useState } from "react";
import Form from "./form";
import ColorList from "./colorList";
import Values from "values.js";
import { ToastContainer, toast } from "react-toastify";

const ColorGenerator = () => {
  const [colors, setColors] = useState(new Values("#f15025").all(5));
  const addColor = (color) => {
    console.log(color);
    try {
      const newColor = new Values(color).all(5);
      setColors(newColor);
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <div className="main-container">
      <Form addColor={addColor} />
      <ColorList colors={colors} />
      <ToastContainer position="top-center" />
    </div>
  );
};

export default ColorGenerator;
