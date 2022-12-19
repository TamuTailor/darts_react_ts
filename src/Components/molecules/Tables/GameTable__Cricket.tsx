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
  cricketTableArray,
  gameArray,
  gameScore,
  marks,
  playerCount,
  sepaOption,
  Twenty,
} from "../../../Atom";
import { useCricketLogic } from "../../../hooks/useCricketLogic";
import { OneMark } from "../../Atoms/Marks/OneMark";
import { ThreeMark } from "../../Atoms/Marks/ThreeMark";
import { TwoMark } from "../../Atoms/Marks/TwoMark";
import { ThrowPoint } from "../../Atoms/ThrowPoint";
import { Score } from "../Score";
import { MarkCount } from "./MarkCount";
const criArray = [20, 19, 18, 17, 16, 15, 25];

export const GameTableCricket = () => {
  const [gArray, setGArray] = useAtom(gameArray);
  const [score, setScore] = useAtom(gameScore);
  const Burst = useAtomValue(burst);
  const sepa = useAtomValue(sepaOption);
  const [mark, setMark] = useAtom(marks);

  const [twenty, setTwenty] = useAtom(Twenty);

  const [ctArray, setCTArray] = useAtom(cricketTableArray);
  const [pNum, setPNum] = useAtom(playerCount);
  const ctArrayLength = ctArray.length;

  useEffect(() => {
    console.log(ctArray);
  }, []);

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
              <Tr>
                {ctArrayLength >= 1 ? <MarkCount n={num} p={1} /> : <></>}
                {ctArrayLength >= 2 ? <MarkCount n={num} p={2}  /> : <></>}
                <Td>{num}</Td>
                {ctArrayLength >= 3 ? <MarkCount n={num} p={3}  /> : <></>}
                {ctArrayLength >= 4 ? <MarkCount n={num} p={4}  /> : <></>}
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
      <Score />
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
