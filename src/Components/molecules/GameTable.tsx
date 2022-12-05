import {
  Box,
  StylesProvider,
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
import { burst, gameArray, gameScore } from "../../Atom";
import { ThrowPoint } from "../Atoms/ThrowPoint";
import { Score } from "./Score";

export const GameTable = () => {
  const [gArray, setGArray] = useAtom(gameArray);
  const [score, setScore] = useAtom(gameScore);
  const Burst = useAtomValue(burst);
  console.log(gArray);

  return (
    <Box css={styles.box}>
      <ThrowPoint />
      <TableContainer>
        <Table>
          <Thead>
            <Tr>
              <Th>Player1</Th>
            </Tr>
          </Thead>
          <Tbody>
            {/* <Tr>
              {gArray.map((e, i) =>
                 Burst ? (
                // e.reduce((sum, elem) => sum + elem) === 0 && score < 0 ? (
                  <Td key={i}>BURST</Td>
                ) : (
                  <Td key={i}>{e.reduce((sum, elem) => sum + elem)}</Td>
                )
              )}
            </Tr> */}
            <Tr>
              {gArray.map((e, i) =>(
                  <Td key={i} css={styles.td}>{e}</Td>
                )
              )}
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
      <Score />
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
  td:css`
    display: block;
  `
};
