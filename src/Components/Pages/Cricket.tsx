import { Box } from "@chakra-ui/react";
import React, { useEffect, useRef } from "react";
import { Select } from "../molecules/Select";
import { SegmentCircle } from "../organisms/SegmentCircle";
import { CulCrike } from "../templates/Bord/CulCricke";
import { GameTableCricket } from "../molecules/Tables/GameTable__Cricket";
import { useCricketLogic } from "../../hooks/useCricketLogic";
import { Clear } from "../molecules/Clear";
import { Change } from "../molecules/Change";
import { cricketTableArray, playerCount } from "../../Atom";
import { useAtom, useAtomValue } from "jotai";
import { useClose } from "../../hooks/useClose";
import { css } from "@emotion/react";
import { Header } from "../organisms/Header";
import { HomeButton } from "../Atoms/Button/HomeButton";

export const Cricket = () => {
  const { t } = useCricketLogic();
  const { isFirstClose20 } = useClose();

  return (
    <>
      <Header>
        <HomeButton />
      </Header>
      <Box css={styles.back}>
        <Box css={styles.table}>
          <SegmentCircle />
          <GameTableCricket />
        </Box>
        {false ? <Clear /> : t >= 3 ? <Change /> : <></>}
      </Box>
    </>
  );
};
// const styels = {
//   container: css`
//     display: flex;
//     width: 100%;
//     margin: 0 auto;
//     justify-content: space-around;
//     align-items: center;

//     @media screen and (max-width: 1300px) {
//       flex-direction: column;
//     }
//   `,
//   back: css`
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     padding: 50px 5%;
//   `,
// };
const styles = {
  table: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50vw;

    @media screen and (max-width: 1300px) {
      flex-direction: column;
      height: auto;
    }
  `,
  back: css`
    width: 100%;
    padding: 50px 5%;
    max-width: 100%;
    @media screen and (max-width: 1300px) {
      padding: 0;
    }
  `,
};
