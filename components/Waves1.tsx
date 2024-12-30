import React from "react";
import Svg, { Path } from "react-native-svg";

const Waves1 = () => {
  return (
    <Svg viewBox="0 0 500 300" className="absolute bottom-0 w-full h-full">
      <Path
        d="M 0,20 C 180,-30 360,300 550,170 L 500,300 L 0,300"
        fill="white"
        opacity="0.25"
      />
      <Path
        d="M 0,80 C 230,50 230,350 550,80 L 500,300 L 0,300"
        fill="white"
        opacity="0.25"
      ></Path>
      <Path
        d="M 0,140 C 200,230 300,10 550,170 L 500,300 L 0,300"
        fill="white"
        opacity="0.25"
      ></Path>
    </Svg>
  );
};

export default Waves1;
