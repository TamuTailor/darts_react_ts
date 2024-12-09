
import { css } from "@emotion/react";
import React from "react";
import { DefaultSegment } from "./DefaultSegment";

export const Double = () => {

  return (
    <React.Fragment>
      <DefaultSegment m={2} styles={styles.double} />
    </React.Fragment>
  );
};

const styles = {
  double: css`
    top: 50%;
    left: 50%;
    position: absolute;
    height: 0;
    width: 0;
    border-top: #1924b9 31vw solid;
    border-right: 5vw solid transparent;
    border-bottom: 0px solid transparent;
    border-left: 5vw solid transparent;
    transform-origin: bottom;
    z-index: 2;
    &:nth-of-type(2n + 1) {
      border-top: #d81c1c 31vw solid;
    }
   

    @media screen and (min-width: calc(750px/0.7)) {
      border-right: 5vh solid transparent;
      border-left: 5vh solid transparent;
      border-top: #1924b9 30vh solid;
      &:nth-of-type(2n + 1) {
        border-top: #d81c1c 30vh solid;
      }
    }
  `,
};
