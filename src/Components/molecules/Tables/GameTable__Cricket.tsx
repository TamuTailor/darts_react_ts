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
const criArray = [20, 19,
    18, 17, 16, 15, 25
  ];

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

  useEffect(()=>{
    console.log(ctArray)
  },[])



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
                {ctArrayLength === 1 ? (
                <>
                 {num === 20 ? <Td>{ctArray[0].twenty === 1 ? <OneMark /> :ctArray[0].twenty === 2 ?<TwoMark />:ctArray[0].twenty >=3 ? <ThreeMark />:<></> }</Td>:<></>}
                 {num === 19 ? <Td>{ctArray[0].nineteen}</Td>:<></>}
                 {num === 18 ? <Td>{ctArray[0].eighteen}</Td>:<></>}
                 {num === 17 ? <Td>{ctArray[0].seventeen}</Td>:<></>}
                 {num === 16 ? <Td>{ctArray[0].sixteen}</Td>:<></>}
                 {num === 15 ? <Td>{ctArray[0].fifteen}</Td>:<></>}
                 {num === 25 ? <Td>{ctArray[0].bull}</Td>:<></>}
                </>
                  
                 
                ) : (
                  <></>
                )}
                <Td>{num}</Td>
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
