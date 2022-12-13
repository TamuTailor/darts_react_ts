import { Box } from "@chakra-ui/react";
import { css } from "@emotion/react";
import { useAtom, useAtomValue } from "jotai";
import {  sepaOption } from "../../Atom";
import { Fat } from "../templates/Bord/Fat";
import { GameOption } from "../templates/GameOption";
import React from "react";
import { useZerooneLogic } from "../../hooks/useZeroOneLogic";
import { Change } from "../molecules/Change";
import { Clear } from "../molecules/Clear";
import { GameTable } from "../molecules/GameTable";
import { SegmentCircle } from "../organisms/SegmentCircle";

export const Zeroone = () => {
  const {t, score,rSum} = useZerooneLogic()

  return (
    <Box css={styles.back}>
         <React.Fragment>
      <Box css={styles.table}>
        <SegmentCircle />
        <GameTable />
      </Box>
      {score === 0 && rSum !==0 ? <Clear />:t >= 3 ||score < 0 ? <Change /> : <></>}
    </React.Fragment>
    </Box>
  );
};

const styles = {
  table: css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: red;
  height: 50vw;
`,
  back: css`
    background-image: url(../src/assets/back.png);
    width: 100%;
    padding: 50px 5%;
    max-width: 100%;

    &::before {
      content: "";
      display: block;
      width: 100%;
      height: 100%;
      background-color: #3d3d3d4c;
      position: absolute;
      top: 0;
      left: 0;
    }
  `,
};
