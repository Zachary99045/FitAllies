import React from "react";
import Svg, {Path, Defs, LinearGradient, Stop} from "react-native-svg";


const Heart = () => {
    return(
      <Svg
      width={35}
      height={31}
      fill="none"
    >
      <Path
        fill="url(#a)"
        d="M25.865.934c-5.88 0-8.365 4.09-8.365 4.09S15.015.917 9.135.917C4.165.934 0 5.024 0 9.909c0 11.2 17.5 20.175 17.5 20.175S35 21.109 35 9.909C35 5.024 30.835.934 25.865.934Z"
      />
      <Defs>
        <LinearGradient
          id="a"
          x1={3.333}
          x2={41.667}
          y1={15.5}
          y2={4.875}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#FFCACA" />
          <Stop offset={1} stopColor="#87AECF" />
        </LinearGradient>
      </Defs>
    </Svg>
    )
}
export default Heart;