
import { css } from "@emotion/react";
import React from "react";
import { DefaultSegment } from "./DefaultSegment";

export const Triple = () => {

  return (
    <React.Fragment>
      <DefaultSegment magnification={3} styles={styles.triple} />
    </React.Fragment>
  );
};

const styles = {
  triple: css`
    top: 50%;
    left: 50%;
    position: absolute;
    height: 0;
    width: 0;
    border-top: blue 19.5vw solid;
    border-right: 3.1vw solid transparent;
    border-bottom: 0px solid transparent;
    border-left: 3.1vw solid transparent;
    transform-origin: bottom;
    z-index: 4 ;
    &:nth-of-type(2n + 1) {
      border-top: red 19.5vw solid;
    }

    @media screen and (min-width: calc(750px/0.7)) {
      border-top: blue 22.5vh solid;
      border-right: 3.7vh solid transparent;
      border-bottom: 0px solid transparent;
      border-left: 3.7vh solid transparent;
      &:nth-of-type(2n + 1) {
        border-top: red 22.5vh solid;
      }
    }
  `,
};
