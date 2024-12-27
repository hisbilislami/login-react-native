import { View } from "react-native";
import React from "react";
import { Svg, Path } from "react-native-svg";

const Waves3 = () => {
  return (
    <View className="absolute bottom-[-5%] w-[100vw] h-[300px]">
      <Svg viewBox="0 0 500 300" className="w-full h-full">
        <Path
          d="M 0,140 C 200,230 300,10 550,170 L 500,300 L 0,300"
          fill="white"
          opacity="0.25"
        ></Path>
      </Svg>
    </View>
  );
};

export default Waves3;
