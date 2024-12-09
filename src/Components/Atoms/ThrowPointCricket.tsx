import { Box } from "@chakra-ui/react";
import { css } from "@emotion/react";
import { useAtom, useAtomValue } from "jotai";
import {
  magnification,
  number,
  roundArray,
} from "../../Atom";
import { OneMark } from "./Marks/OneMark";
import { ThreeMark } from "./Marks/ThreeMark";
import { TwoMark } from "./Marks/TwoMark";

export const ThrowPointCricket = () => {
  const n = useAtomValue(number);
  const m = useAtomValue(magnification);

  const [rArray, setRArray] = useAtom(roundArray);

  console.log(rArray);
  return (
    <Box css={styles.container}>
      {
        <>
          <Box css={styles.number}>
            {rArray[0] === 1 ? (
              <OneMark size={"min"}/>
            ) : rArray[0] === 2 ? (
              <TwoMark  size={"min"}/>
            ) : rArray[0] === 3 ? (
              <ThreeMark  size={"min"}/>
            ) : (rArray[0] === 0 ?
              <Box css={styles.no}></Box>:
              <></>
            )}
            &nbsp;
          </Box>
          <Box css={styles.number}>
            {rArray[1] === 1 ? (
              <OneMark  size={"min"}/>
            ) : rArray[1] === 2 ? (
              <TwoMark  size={"min"}/>
            ) : rArray[1] === 3 ? (
              <ThreeMark  size={"min"}/>
            ) : (
              <></>
            )}
            &nbsp;
          </Box>
          <Box css={styles.number}>
            {rArray[2] === 1 ? (
              <OneMark  size={"min"}/>
            ) : rArray[2] === 2 ? (
              <TwoMark  size={"min"}/>
            ) : rArray[2] === 3 ? (
              <ThreeMark  size={"min"}/>
            ) : (
              <></>
            )}
            &nbsp;
          </Box>
  
        </>
      }
    </Box>
  );
};

const styles = {
  container: css`
    display: flex;
    justify-content: space-between;
    font-size: 24px;
    height: 60px;
    align-items: center;
    width: 100%;
    margin-bottom: 16px;
    margin-top: 16px;
  `,
  number: css`
    width: 33%;
    background-color: black;
    position: relative;
    height:100%;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  no: css`
  position: absolute;
    width: 20%;
    height:10px;
    top:50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background-color: white;
  `,
};
