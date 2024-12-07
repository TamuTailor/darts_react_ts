import { css } from "@emotion/react";
import React from "react";
import { DefaultSegment } from "./DefaultSegment";

type Props = {
  position: string;
};

export const Single = (props: Props) => {
  const { position } = props;

  return (
    <React.Fragment>
      {position === "inner" ? (
        <DefaultSegment m={1}  styles={styles.inner} />
      ) : (
        <DefaultSegment m={1} styles={styles.outer} />
      )}
    </React.Fragment>
  );
};

const styles = {
  inner: css`
    top: 50%;
    left: 50%;
    width: 0;
    height: 0%;
    position: absolute;
    border-right: 2.7vw solid transparent;
    height: 0 ;
    width: 0;
    border-bottom: 0 solid transparent;
    border-left: 2.7vw solid transparent;
    border-top: 17vw solid white;
    transform-origin: bottom ;
    z-index: 5;

    &:nth-of-type(2n + 1) {
      border-top: 17vw solid black;
    }

    @media screen and (min-width: calc(750px/0.7)) {
      border-right: 3vh solid transparent;
      border-left: 3vh solid transparent;
      border-top: 18.5vh solid white;
      &:nth-of-type(2n + 1) {
        border-top: 18.5vh solid black;
      }
    }
  `,
  outer: css`
    top: 50%;
    left: 50%;
    position: absolute;
    height: 0;
    width: 0;
    border-top: white 27.3vw solid;
    border-right: 4.3vw solid transparent;
    border-bottom: 0px solid transparent;
    border-left: 4.3vw solid transparent;
    transform-origin: bottom;
    z-index: 3;

    &:nth-of-type(2n + 1) {
      border-top: 27.3vw solid black;
    }
    @media screen and (min-width: calc(750px/0.7)) {
      border-right: 4.8vh solid transparent;
      border-left: 4.8vh solid transparent;
      border-top: 30.5vh solid white;
      &:nth-of-type(2n + 1) {
        border-top: 30.5vh solid black;
      }
    }
  `,
};
