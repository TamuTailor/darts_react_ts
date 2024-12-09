import { cricketTableArray, nowThrowPlayer, zerooneTableArray } from './../Atom';
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
  const [ztArray, setZtArray] = useAtom(zerooneTableArray);
  const [ntPlayer, setNtPlayer] = useAtom(nowThrowPlayer);

  let tmpG: Array<number | string> = gArray;
  let tmp: number[] = rArray;
  let point: number = n * m;
  let sum: number = 0;
  let ztArrayTmp = [...ztArray] 
  useEffect(() => {
    isFirstRender.current = true;
  }, []);

  useEffect(() => {
    const tmpscore = score - point;
    if (isFirstRender.current || t < 1) {
      isFirstRender.current = false;
    } else {
    
      ztArrayTmp[ntPlayer-1].sum -= point


      if(n === 0 && m===0){
        sum = rSum + point +1;
      }else{
        sum = rSum + point ;
      }
      //Outで出力のために+1？
      setRSum(sum);
      tmp.push(point);

      if (ztArrayTmp[ntPlayer-1].sum < 0) {
        setBurst(true);
        ztArrayTmp[ntPlayer-1].ary.push("BURST")
        tmpG.push("BURST");
      }

      if (t === 3) {
        change(ztArrayTmp[ntPlayer-1].sum);
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
      ztArrayTmp[ntPlayer-1].ary.push(total)
      tmpG.push(total);
      setBurst(false);
    } 
  };

  return {t,score,rSum};
};





