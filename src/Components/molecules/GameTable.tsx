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
