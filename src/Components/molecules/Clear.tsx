import { Box, Text } from "@chakra-ui/react";
import { css } from "@emotion/react";
import React from "react";
import { ClearButton } from "../Atoms/Button/ClearButton";

export const Clear = () => {
    
  return (
    <Box css={styles.box}>
      <Text css={styles.text}>CLEAR!!</Text>
      <ClearButton/>
    </Box>
  );
};

const styles = {
  box: css`
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
  `,
  box_inner: css`
    height: 180px;
    background-color: rgba(0, 0, 0, 0.6);
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 99;
    display: flex;
    justify-content: center;
    transform: translate(-50%, -50%);
    align-items: center;
  `,
  button_container: css`
    position: relative;
    height: 100%;
    width: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 60px;
  `,
  button: css`
    z-index: 100;
    height: 50%;
    aspect-ratio: 2;
    border-top-left-radius: 50%;
    border-top-right-radius: 50%;
    border-bottom-left-radius: 45%;
    border-bottom-right-radius: 45%;
    background-color: red;
    box-shadow: 0px 6px 7px 2px #000000ee, 0px -12px 3px 3px #000000 inset;
  `,
  text: css`
    font-size: 100px;
    color: white;
  `,
  allow: css`
    position: absolute;
    top: 0;
    vertical-align: middle;
    color: #333;
    line-height: 1;
    width: 0;
    height: 0;
    border-style: solid;
    border-color: transparent;
    border-width: 50px 50px;
    border-top-color: red;
    border-bottom: 0;
  `,
};
