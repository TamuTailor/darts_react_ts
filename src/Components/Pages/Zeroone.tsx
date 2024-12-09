import { Box } from "@chakra-ui/react";
import { css } from "@emotion/react";
import { useAtom } from "jotai";
import React from "react";
import { nowThrowPlayer, zerooneTableArray } from "../../Atom";
import { useZerooneLogic } from "../../hooks/useZeroOneLogic";
import { HomeButton } from "../Atoms/Button/HomeButton";
import { Change } from "../molecules/Change";
import { Clear } from "../molecules/Clear";
import { GameTableZeroone } from "../molecules/Tables/GameTable__zeroone";
import { Header } from "../organisms/Header";
import { SegmentCircle } from "../organisms/SegmentCircle";

export const Zeroone = () => {
  const { t, score, rSum } = useZerooneLogic();
  const [ztArray, setZtArray] = useAtom(zerooneTableArray);
  const [ntPlayer, setNtPlayer] = useAtom(nowThrowPlayer);

  return (
    <>
      <Header>
        <HomeButton />
      </Header>
      <Box css={styles.back}>
        <Box css={styles.table}>
          <SegmentCircle />
          <GameTableZeroone />
        </Box>
        {score === 0 && rSum !== 0 ? (
          <Clear />
        ) : t >= 3 || ztArray[ntPlayer - 1].sum < 0 ? (
          <Change />
        ) : (
          <></>
        )}
      </Box>
    </>
  );
};

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
