import {
  Box,
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
  Twenty,
} from "../../../Atom";
import { ThrowPoint } from "../../Atoms/ThrowPoint";
import { CricketScore } from "../CricketScore";
import { Score } from "../Score";
import { MarkCount } from "./MarkCount";
const criArray = [20, 19, 18, 17, 16, 15, 25];



export const GameTableCricket = (props) => {
  const {ctArray} = props
  const [gArray, setGArray] = useAtom(gameArray);
  const [score, setScore] = useAtom(gameScore);
  const Burst = useAtomValue(burst);
  const sepa = useAtomValue(sepaOption);
  const [mark, setMark] = useAtom(marks);

  const [twenty, setTwenty] = useAtom(Twenty);
  const [pNum, setPNum] = useAtom(playerCount);
  // const [ctArray, setCtArray] = useAtom(cricketTableArray);
  const ctArrayLength = ctArray.length;
let sum = 0
  // useEffect(() => {
  //   console.log(cdArray);
  
  // }, []);

  

  return (
    <Box css={styles.box}>
      <ThrowPoint />
      <TableContainer>
        <Table>
          <Thead>
            <Tr>
              <Th>P1</Th>
              <Th>Num</Th>
            </Tr>
          </Thead>
          <Tbody>
            {criArray.map((num, i) => (
              <Tr key={i}>
                {ctArrayLength >= 1 ? <MarkCount ctArray={ctArray} n={num} p={1} /> : <></>}
                {ctArrayLength > 2 ? <MarkCount n={num} p={2}  /> : <></>}
                <Td>{num}</Td>
                {ctArrayLength === 2 ? <MarkCount n={num} p={2}  /> : <></>}
                {ctArrayLength >= 3 ? <MarkCount n={num} p={3}  /> : <></>}
                {ctArrayLength >= 4 ? <MarkCount n={num} p={4}  /> : <></>}
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
      <CricketScore />
      <p>as{
      sum
} lll</p>
      <p>{sepa}</p>
    </Box>
  );
};

const styles = {
  box: css`
    background-color: pink;
    min-width: 200px;
    width: 40%;
    height: 70%;
  `,
  td: css`
    display: flex;
  `,
};

// <Tr>
// {mark.map((e, i) => (
//   <Td key={i} css={styles.td}>
//     {e.map((n, j) => (
//       <span key={j}>
//         {n.mark === 1 ? (
//           <OneMark />
//         ) : n.mark === 2 ? (
//           <TwoMark />
//         ) : n.mark === 3 ? (
//           <ThreeMark />
//         ) : (
//           "0"
//         )}
//       </span>
//     ))}
//   </Td>
// ))}
// </Tr>
