import { css } from "@emotion/react";
import { useState } from "react";
export const useButtonColorChange = () => {
  const [buttonColor, setButtonColor] = useState("");

const colorChange = (e: React.MouseEvent<HTMLButtonElement>) => {
    setButtonColor(e.currentTarget.value);
  };

  
const styles = {
    true: css`
      background-color: red;
    `,
    false: css`
      background-color: #ccccccc0;
      border: 1px solid blue;
    `,
  };
  
  return {styles , colorChange,buttonColor}
};
