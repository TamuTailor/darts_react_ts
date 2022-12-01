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
import { useAtom } from "jotai";
import React from "react";
import { gameArray } from "../../Atom";
import { ThrowPoint } from "../Atoms/ThrowPoint";

export const GameTable = () => {
  const [gArray, setGArray] = useAtom(gameArray);

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
              {gArray.map((e) => (
                <Tr>{e[0] + e[1] + e[2]} </Tr>
              ))}
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};


const styles = {
  box:css`
  background-color: pink;
  min-width: 200px;
  width:40%;
  height: 70%;
    
  `
}