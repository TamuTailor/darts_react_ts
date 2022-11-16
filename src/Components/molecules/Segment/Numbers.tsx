import { Text } from "@chakra-ui/react";
import { css } from "@emotion/react";
import React from "react";

export const Numbers = () => {
  const counts = [
    20, 1, 18, 4, 13, 6, 10, 15, 2, 17, 3, 19, 7, 16, 8, 11, 14, 9, 12, 5,
  ];

  return (
    <React.Fragment>
      {counts.map((count, index) => (
        <Text
          css={styles.point}
          sx={{
            transform: `translate(-50%,-100%) rotate(${18 * index - 1}deg)`,
          }}
        >
          {count}
        </Text>
      ))}
    </React.Fragment>
  );
};

const styles = {
  point: css`
    position: absolute;
    top: 50%;
    font-size: 4.5vw;
    left: calc(50%);
    display: inline-block;
    width: 60px;
    height: 36vw;
    transform-origin: center bottom;
    text-align: center;
    color: azure;
    z-index: 1;

    @media screen and (min-width: calc(750px/0.7)) {
      font-size: 6vh;
      width: 80px;
      height: 45vh;
    }
  `,
};
