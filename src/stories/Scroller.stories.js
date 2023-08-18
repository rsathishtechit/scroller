import React from "react";
import { useScroller } from "../useScroller";

export default {
  title: "Scroller",
};

export const UseScrollerExample = () => {
  const scroller = useScroller({ x: 200, y: 200, isSmooth: true });
  return (
    <div style={{ height: "1000px" }}>
      <button onClick={scroller}>Click to smooth scroll</button>
    </div>
  );
};
