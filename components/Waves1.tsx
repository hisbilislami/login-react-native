import { View, Text } from "react-native";
import React from "react";
import Svg, { Path } from "react-native-svg";

const Waves1 = () => {
  return (
    <View className="absolute bottom-[-5%] w-[100vw] h-[300px]">
      <Svg viewBox="0 0 500 300" className="w-full h-full">
        <Path
          d="M 0,20 C 180,-30 360,300 550,170 L 500,300 L 0,300"
          fill="white"
          opacity="0.25"
        />
      </Svg>
    </View>
  );
};

export default Waves1;
