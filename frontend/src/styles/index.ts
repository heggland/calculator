import {createGlobalStyle} from "styled-components";

import global from "./global";
import col from "./col";
import color from "./color";
import padding from "./padding";
import height from "./height";
import border from "./border";
import row from "./row";

export default createGlobalStyle`
  ${global}
  ${col}
  ${color}
  ${padding}
  ${height}
  ${border}
  ${row}
`;

