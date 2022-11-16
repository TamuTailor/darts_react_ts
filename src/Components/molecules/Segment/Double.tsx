
import { css } from "@emotion/react";
import React from "react";
import { DefaultSegment } from "./DefaultSegment";

export const Double = () => {

  return (
    <React.Fragment>
      <DefaultSegment magnification={2} styles={styles.double} />
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
    border-top: blue 29.6vw solid;
    border-right: 4.7vw solid transparent;
    border-bottom: 0px solid transparent;
    border-left: 4.7vw solid transparent;
    transform-origin: bottom;
    z-index: 2;
    &:nth-of-type(2n + 1) {
      border-top: red 29.6vw solid;
    }
   

    @media screen and (min-width: calc(750px/0.7)) {
      border-right: 5.5vh solid transparent;
      border-left: 5.5vh solid transparent;
      border-top: blue 35vh solid;
      &:nth-of-type(2n + 1) {
        border-top: red 35vh solid;
      }
    }
  `,
};
