import { Box, Button } from "@chakra-ui/react";
import { css } from "@emotion/react";
import { useAtom, useAtomValue } from "jotai";
import React, { useEffect, useRef } from "react";
import {
  number,
  magnification,
  throwCount,
  roundSum,
  round,
  roundArray,
} from "../../../Atom";
import { Change } from "../../molecules/Change";
import { GameTable } from "../../molecules/GameTable";
import { ThrowPoint } from "../../Atoms/ThrowPoint";
import { SegmentCircle } from "../../organisms/SegmentCircle";

export const Fat = () => {
  const n = useAtomValue(number);
  const m = useAtomValue(magnification);
  const t = useAtomValue(throwCount);
  const r = useAtomValue(round);
  const [rSum, setRSum] = useAtom(roundSum);
  const [rArray, setRArray] = useAtom(roundArray);
  const isFirstRender = useRef(false);

  let tmp: number[] = rArray;
  let point: number = n * m;
  let sum: number = 0;

  useEffect(() => {
    isFirstRender.current = true;
  }, []);

  useEffect(() => {
    if (isFirstRender.current || t < 1) {
      isFirstRender.current = false;
    } else {
      sum = rSum + point;
      setRSum(sum);
      tmp.push(point);
      setRArray(tmp);
      console.log(rArray);
    }
  }, [t]);

  return (
    <React.Fragment>
      <p>ラウンド得点{n * m}</p>
      <p>round{t}</p>
      <p>合計pp{rSum}</p>
      <p>合計{rArray}</p>

      <Box css={styles.table}>
        <SegmentCircle />
        <GameTable /> 
      </Box>
      {t >= 3 ? <Change /> : <></>}
    </React.Fragment>
  );
};

const styles = {
  table: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: red;
    height:50vw;
  `,
};
