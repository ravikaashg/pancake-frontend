import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 198 199" {...props}>
      <image width="250" height="250" href="/images/metaegg.png" />
    </Svg>
  );
};

export default Icon;
