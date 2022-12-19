import { Box } from "@chakra-ui/react";
import { css } from "@emotion/react";
import { MarkContainer } from "./MarkContainer";

export const ThreeMark = () => {
  return (
    <MarkContainer>
      <Box css={styels.one}></Box>
      <Box css={styels.two}></Box>
      <Box css={styels.three}></Box>
    </MarkContainer>
  );
};

const styels = {
  one: css`
    position: absolute;
    width: 140%;
    height: 2px;
    top: 0;
    right: 0px;
    background-color: white;
    transform: rotate(-45deg);
    transform-origin: 98% 100%;
  `,

  two: css`
    position: absolute;
    width: 140%;
    height: 2px;
    top: 0;
    left: 0px;
    background-color: white;
    transform: rotate(45deg);
    transform-origin: 0% 100%;
  `,
  three: css`
    position: absolute;
    top: 0;
    left: 0px;
    background-color: transparent;
    transform-origin: 0% 100%;
    display: inline-block;
    width: 100%;
    height:100%;
    border-radius: 50%;
    border: solid 3px white;
  `,
};
