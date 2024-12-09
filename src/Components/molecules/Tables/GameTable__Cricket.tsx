import {
  Box,
  ChakraProvider,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { css } from "@emotion/react";
import { useAtom, useAtomValue } from "jotai";
import { useEffect, useRef } from "react";
import {
  burst,
  cricketDataArray,
  cricketTableArray,
  gameArray,
  gameScore,
  marks,
  playerCount,
  sepaOption,
} from "../../../Atom";
import { useClose } from "../../../hooks/useClose";
import { ThrowPoint } from "../../Atoms/ThrowPoint";
import { ThrowPointCricket } from "../../Atoms/ThrowPointCricket";
import { CricketScore } from "../CricketScore";
import { Score } from "../Score";
import { MarkCount } from "./MarkCount";
const criArray = [20, 19, 18, 17, 16, 15, 25];

export const GameTableCricket = () => {
  const [gArray, setGArray] = useAtom(gameArray);
  const [score, setScore] = useAtom(gameScore);
  const Burst = useAtomValue(burst);
  const sepa = useAtomValue(sepaOption);
  const [mark, setMark] = useAtom(marks);

  const [pNum, setPNum] = useAtom(playerCount);
  const [ctArray, setCtArray] = useAtom(cricketTableArray);
  const ctArrayLength = ctArray.length;
  let sum = 0;

  return (
    <Box css={styles.box}>
      <ThrowPointCricket />
        <Table>
          <Tbody css={styles.body}>
            {criArray.map((num, i) => (
              <Tr css={styles.row} key={num * i}>
                <Box css={ctArrayLength >= 3 ?styles.rowBox3:styles.rowBox1}>
                  {ctArrayLength >= 1 ? <MarkCount n={num} p={1} /> : <></>}
                  {ctArrayLength > 2 ? <MarkCount n={num} p={2} /> : <></>}
                </Box>
                <Td css={styles.num}>{num !== 25 ? num : "BULL"}</Td>
                <Box css={ctArrayLength >= 3 ?styles.rowBox3:styles.rowBox2}>
                  {ctArrayLength === 2 ? <MarkCount n={num} p={2} /> : <></>}
                  {ctArrayLength >= 3 ? <MarkCount n={num} p={3} /> : <></>}
                  {ctArrayLength >= 4 ? <MarkCount n={num} p={4} /> : <></>}
                </Box>
              </Tr>
            ))}
          </Tbody>
        </Table>
      <CricketScore />
    </Box>
  );
};

const styles = {
  box: css`
    min-width: 700px;
    flex-grow: 0.6;
    background-color: #414141;

    @media screen and (max-width: 800px) {
      width: 95%;
      min-width: 300px;
    }
  `,
  td: css`
    display: flex;
  `,
  rowBox1: css`
    flex-basis: 30%;
    display: flex;
    justify-content: right;
  `,
  rowBox2: css`
    flex-basis: 30%;
    display: flex;
    justify-content: left;
  `,
  rowBox3: css`
    flex-basis: 30%;
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 800px) {
      flex-basis: 35%;
    }
  `,
  row: css`
    color: #c2c2c2;
    display: flex;
    height: 85px;
    justify-content: space-around;
    align-items: center;
    padding: 16px;
    box-sizing: border-box;
    overflow: hidden;

    @media screen and (max-width: 600px) {
      height: 50px;
    }

    @media screen and (max-width: 600px) {
      height: 50px;
      padding: 0;
    }
  `,
  body: css`
    /* width: 100% !important; */
  `,
  container: css`
    background-color:blue;
  `,
  head: css`
    /* width: 100% !important; */
    height: 20px;
  `,
  num: css`
    font-size: 48px;
    font-weight: 700;
    width: 120px;
    text-align: center;
    flex-basis: 20%;
    @media screen and (max-width: 600px) {
      width: 80px;
      font-size: 32px;
    }
    @media screen and (max-width: 400px) {
      width: 80px;
      font-size: 24px;
    }
  `,
};
