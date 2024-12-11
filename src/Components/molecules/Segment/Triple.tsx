
import { css } from "@emotion/react";
import React from "react";
import { DefaultSegment } from "./DefaultSegment";

export const Triple = () => {

  return (
    <React.Fragment>
      <DefaultSegment m={3} styles={styles.triple} />
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
    border-top:#1924b9 21vw solid;
    border-right: 3.4vw solid transparent;
    border-bottom: 0px solid transparent;
    border-left: 3.4vw solid transparent;
    transform-origin: bottom;
    z-index: 4 ;
    &:nth-of-type(2n + 1) {
      border-top: #d81c1c 21vw solid;
    }

    @media screen and (min-width: calc(750px/0.7)) {
      border-top: #1924b9 18vh solid;
      border-right: 3vh solid transparent;
      border-bottom: 0px solid transparent;
      border-left: 3vh solid transparent;
      &:nth-of-type(2n + 1) {
        border-top: #d81c1c 18vh solid;
      }
    }
  `,
};
