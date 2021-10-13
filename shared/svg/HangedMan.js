import React from "react";
import Svg, { Circle, Line } from "react-native-svg";

const HangedMan = () => {
  return (
    <Svg
      width={200}
      height={250}
      viewBox="0 0 200 250"
      fill="none"
      stroke="black"
      fillRule="evenodd"
      strokeLinecap="round"
      strokeLineJoin="round"
      strokeWidth="5.5"
    >
      <Line x1="60" y1="20" x2="140" y2="20" />
      <Line x1="140" y1="20" x2="140" y2="50" />
      <Line x1="60" y1="20" x2="60" y2="230" />
      <Line x1="20" y1="230" x2="100" y2="230" />
      <Circle cx="140" cy="70" r="20" />
      <Line x1="140" y1="90" x2="140" y2="150" />
      <Line x1="140" y1="120" x2="120" y2="100" />
      <Line x1="140" y1="120" x2="160" y2="100" />
      <Line x1="140" y1="150" x2="120" y2="180" />
      <Line x1="140" y1="150" x2="160" y2="180" />
    </Svg>
  );
};

export default HangedMan;
