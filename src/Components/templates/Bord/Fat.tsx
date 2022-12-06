import { Box} from "@chakra-ui/react";
import { css } from "@emotion/react";
import React from "react";
import { useZerooneLogic } from "../../../hooks/useZeroOneLogic";
import { Change } from "../../molecules/Change";
import { Clear } from "../../molecules/Clear";
import { GameTable } from "../../molecules/GameTable";
import { SegmentCircle } from "../../organisms/SegmentCircle";

export const Fat = () => {
  const {t, score,rSum} = useZerooneLogic()
  

  return (
    <React.Fragment>
      <Box css={styles.table}>
        <SegmentCircle />
        <GameTable />
      </Box>
      {score === 0 && rSum !==0 ? <Clear />:t >= 3 ||score < 0 ? <Change /> : <></>}
    </React.Fragment>
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
};
