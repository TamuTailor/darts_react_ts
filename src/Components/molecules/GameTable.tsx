import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";

export const GameTable = () => {
  return (
    <TableContainer>
      <Table>
        <Thead>
          <Tr>
            <Th>Player1</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td></Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};
