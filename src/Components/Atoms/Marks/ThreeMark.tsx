import { Box } from "@chakra-ui/react";
import { css, SerializedStyles } from "@emotion/react";
import { MarkContainer } from "./MarkContainer";

  type Props = {
    size?:string
  }
export const ThreeMark = (props:Props) => {
  const {size} = props
  

  return (
    <MarkContainer size={size}>
      <Box css={size === "min"?[styles.one ,styles.min]:styles.one}></Box>
      <Box css={size === "min"?[styles.two ,styles.min]:styles.two}></Box>
      <Box css={size === "min"?[styles.three,styles.minthree ]:styles.three}></Box>
    </MarkContainer>
  );
};

const styles = {
  one: css`
    position: absolute;
    width: 110%;
    height: 10px;
    top: 4%;
    right: 5%;
    background-color: white;
    transform: rotate(-45deg);
    transform-origin: 98% 100%;
    @media screen and (max-width: 600px) {
          height: 6px;
     
    }
    
  `,
  min: css`
    height: 6px;
  `,
  minthree: css`
   border: solid 6px white;
    
  `,

  two: css`
    position: absolute;
    width: 110%;
    height: 10px;
    top: 4%;
    left: 5%;
    background-color: white;
    transform: rotate(45deg);
    transform-origin: 0% 100%;
    @media screen and (max-width: 600px) {
          height: 6px;
    }
  `,
  three: css`
    position: absolute;
    top: 10%;
    right: 10%;
    background-color: transparent;
    transform-origin: 0% 100%;
    display: inline-block;
    width: 80%;
    height:80%;
    border-radius: 50%;
    border: solid 10px white;
    @media screen and (max-width: 600px) {
          border: solid 6px white;
     
    }
  `,
};
