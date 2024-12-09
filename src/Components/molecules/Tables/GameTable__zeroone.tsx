import {
  Box,
  Heading,
  Text,
} from "@chakra-ui/react";
import { css } from "@emotion/react";
import { useAtom, useAtomValue } from "jotai";
import {
  burst,
  gameArray,
  gameScore,
  nowThrowPlayer,
  sepaOption,
  zerooneTableArray,
} from "../../../Atom";
import { ThrowPoint } from "../../Atoms/ThrowPoint";
import { Score } from "../Score";

export const GameTableZeroone = () => {
  const [gArray, setGArray] = useAtom(gameArray);
  const [score, setScore] = useAtom(gameScore);
  const Burst = useAtomValue(burst);
  const sepa = useAtomValue(sepaOption);
  const [ztArray, setZtArray] = useAtom(zerooneTableArray);
  const [ntPlayer, setNtPlayer] = useAtom(nowThrowPlayer);

  let a = [ztArray[ntPlayer - 1]];

  return (
    <Box css={styles.box}>
      <Box css={styles.boxinner}>
        <Heading  as="h4" size="md">
          {sepa.toUpperCase()}BULL
        </Heading>
        <ThrowPoint />
        <Box css={styles.body}>
          <Text css={styles.score}> {ztArray[ntPlayer - 1].sum}</Text>
          <Score />
        </Box>
      </Box>
      <Box css={styles.tr}>
        <Text>{`Player${ntPlayer}`}</Text>
        {a.map((e, i) =>
          e.ary.map((g, n) => (
            <Box key={i} css={styles.td}>
              <Text>R{n + 1}</Text>
              <Text>{g}</Text>
            </Box>
          ))
        )}
      </Box>
    </Box>
  );
};

const styles = {
  box: css`
    min-width: 300px;
    flex-grow: 1;
    padding-left: 16px;
    height: auto;
    color: white;

    @media screen and (max-width: 1300px) {
      flex-grow: 0;
      margin-left: 0;
      width: 80%;
      min-width: 300px;
      margin: 0 auto;
      margin-top: 16px;
      padding: 0;
    }
    @media screen and (max-width: 800px) {
      width: 95%;
    }
  `,
  boxinner: css`
    background-color: #414141;
    padding-top: 14px;
  `,
  td: css`
    display: flex;
    font-size: 48px;
    min-height: 60px;
    width: 200px;
    border-radius: 3px;
    background-color: #808080a8;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
  
  `,
  tr: css`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  `,
  body: css`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  `,
  score: css`
    flex-grow: 1;
    font-size: 128px;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    text-shadow:
    0 1px #bbb,
    0 2px #aaa,
    0 3px #999,
    0 4px #888,
    0 5px #777,
    0 6px #666,
    0 7px #555,
    0 8px #444,
    0 9px #333,
    0 32px 24px rgba(0,0,0,0.7);
  `,
};
