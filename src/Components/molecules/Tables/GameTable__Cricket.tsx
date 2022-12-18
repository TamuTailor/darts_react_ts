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
  import { burst, gameArray, gameScore, marks, sepaOption } from "../../../Atom";
  import { ThrowPoint } from "../../Atoms/ThrowPoint";
  import { Score } from "../Score";
  
  export const GameTableCricket = () => {
    const [gArray, setGArray] = useAtom(gameArray);
    const [score, setScore] = useAtom(gameScore);
    const Burst = useAtomValue(burst);
    const sepa = useAtomValue(sepaOption);
    const [mark, setMark] = useAtom(marks);


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
                {mark.map((e, i) => (
                  <Td key={i} css={styles.td}>
                    {e.map((n,j)=>(
                      <span key={j}>{n.mark === 1 ? "1" : n.mark === 2 ? "2" : n.mark === 3 ? "3" : "0" }</span>
                    ))}
                  </Td>
                ))}
              </Tr>
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
      display: block;
    `,
  };
  