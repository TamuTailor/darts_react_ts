import { Box, Text } from "@chakra-ui/react";
import { css } from "@emotion/react";
import { gameScore, zerooneTableArray } from "../../Atom";
import { useAtom, useAtomValue } from "jotai";
import React, { useEffect } from "react";
import {
  close20,
  cricketTableArray,
  nowThrowPlayer,
  playerCount,
  throwCount,
} from "../../Atom";

export const Score = () => {
  const [score, setScore] = useAtom(gameScore);

  const [ntPlayer, setNtPlayer] = useAtom(nowThrowPlayer);
  const [pCount, setPCount] = useAtom(playerCount);
  const [c20, setC20] = useAtom(close20);
  const t = useAtomValue(throwCount);
  const [ztArray, setZtArray] = useAtom(zerooneTableArray);

  return (
    <Box css={styles.box}>
      {ztArray.map((e, i) => (
        <Box css={styles.score} key={i}>
          <Box
            css={
              i === 0
                ? [styles.line, styles.red]
                : i === 1
                ? [styles.line, styles.blue]
                : i === 2
                ? [styles.line, styles.yellow]
                : [styles.line, styles.green]
            }
          ></Box>
          {i+1 === ntPlayer ? <></> :<Box css={styles.shadow}></Box>}
          <Text>{e.sum}</Text>
          <Text css={styles.p}>P{i + 1}</Text>
        </Box>
      ))}
    </Box>
  );
};

const styles = {
  box: css`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  `,
  score: css`
    margin-top: 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 64px;
    line-height: 1;
    font-weight: 600;
    height: 130px;
    flex-grow: 1;
    background-color:black;
    padding: 0 4px;
    position: relative;
    @media screen and (max-width: 800px) {
      font-size: 32px;
      height: 90px;
    }
  `,
  red: css`
    background-color: #a10909;
  `,
  blue: css`
    background-color: #1622bd;
  `,
  yellow: css`
    background-color: #b4a90d;
  `,
  green: css`
    background-color: #076907;
  `,
  p: css`
    font-size: 32px;
    @media screen and (max-width: 500px) {
      font-size: 20px;
      
    }
  `,
  line: css`
    height: 6px;
    width: 100%;
  `,
  shadow: css`
    height: 100%;
    width: 100%;
    background-color:#333333ab;
    position: absolute;
  `,
};
