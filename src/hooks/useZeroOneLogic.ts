import { useAtom, useAtomValue, useSetAtom } from "jotai";
import React, { useEffect, useRef } from "react";
import {
  number,
  magnification,
  throwCount,
  roundSum,
  round,
  roundArray,
  gameScore,
  gameArray,
  burst,
} from "../Atom";

export const useZerooneLogic = () => {
  const n = useAtomValue(number);
  const m = useAtomValue(magnification);
  const t = useAtomValue(throwCount);
  const r = useAtomValue(round);
  const [rSum, setRSum] = useAtom(roundSum);
  const [rArray, setRArray] = useAtom(roundArray);
  const isFirstRender = useRef(false);
  const [score, setScore] = useAtom(gameScore);
  const setNum = useSetAtom(number);
  const setthrow = useSetAtom(throwCount);
  const [gArray, setGArray] = useAtom(gameArray);
  const [Burst, setBurst] = useAtom(burst);

  let tmpG: Array<number | string> = gArray;
  let tmp: number[] = rArray;
  let point: number = n * m;
  let sum: number = 0;

  useEffect(() => {
    isFirstRender.current = true;
  }, []);

  useEffect(() => {
    const tmpscore = score - point;
    if (isFirstRender.current || t < 1) {
      isFirstRender.current = false;
    } else {
      sum = rSum + point;
      setRSum(sum);
      tmp.push(point);
      ZerooneLogic(tmpscore);

      if (t === 3) {
        change(tmpscore);
      }
    }
  }, [t]);

  const ZerooneLogic = (p: number) => {
    setScore(p);
    setRArray(tmp);
  };

  const change = (p: number) => {
    const total = rArray.reduce((sum, elem) => sum + elem);
    if (p >= 0) {
      setNum(0);
      tmpG.push(total);
      setBurst(false);
    } else {
      setBurst(true);
      tmpG.push("BURST");
    }
  };

  return {t,score,rSum};
};
