import { Box, Text } from "@chakra-ui/react";
import { css } from "@emotion/react";
import { useAtom, useAtomValue } from "jotai";
import {
  close20,
  cricketTableArray,
  nowThrowPlayer,
  playerCount,
  throwCount,
} from "../../Atom";

export const CricketScore = () => {
  const [ctArray, setCtArray] = useAtom(cricketTableArray);
  const [ntPlayer, setNtPlayer] = useAtom(nowThrowPlayer);
  const [pCount, setPCount] = useAtom(playerCount);
  const [c20, setC20] = useAtom(close20);
  const t = useAtomValue(throwCount);
  let Sum = 0;
  let ctArrayTmp = ctArray;

  if (ctArray[ntPlayer - 1].twenty > 3) {
    Sum += (ctArray[ntPlayer - 1].twenty - 3) * 20;
  }
  if (ctArray[ntPlayer - 1].nineteen > 3) {
    Sum += (ctArray[ntPlayer - 1].nineteen - 3) * 19;
  }
  if (ctArray[ntPlayer - 1].eighteen > 3) {
    Sum += (ctArray[ntPlayer - 1].eighteen - 3) * 18;
  }
  if (ctArray[ntPlayer - 1].seventeen > 3) {
    Sum += (ctArray[ntPlayer - 1].seventeen - 3) * 17;
  }
  if (ctArray[ntPlayer - 1].sixteen > 3) {
    Sum += (ctArray[ntPlayer - 1].sixteen - 3) * 16;
  }
  if (ctArray[ntPlayer - 1].fifteen > 3) {
    Sum += (ctArray[ntPlayer - 1].fifteen - 3) * 15;
  }
  if (ctArray[ntPlayer - 1].bull > 3) {
    Sum += (ctArray[ntPlayer - 1].bull - 3) * 25;
  }

  ctArrayTmp[ntPlayer - 1].sum = Sum;
  return (
    <Box css={styles.container}>
      {ctArray.map((e, i) => (
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
          <Text>{`${e.sum}`}</Text>
          <Text css={styles.p}>{`P${i+1}`}</Text>
          
        </Box>
      ))}
    </Box>
  );
};

const styles = {
  container: css`
    background-color: black;
    width: 100%;
    display: flex;
    justify-content: space-around;
    font-size: 28px;
    font-weight: 700;
    @media screen and (max-width: 800px) {
      font-size: 16px;
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
    background-color: #333333ab;

    position: absolute;
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
    background-color: black;
    padding: 0 4px;
    position: relative;
    color: white;
    @media screen and (max-width: 800px) {
      font-size: 32px;
      height: 90px;
    }
    @media screen and (max-width: 400px) {
      font-size: 24px;
      height: 90px;
    }
  `,
};
