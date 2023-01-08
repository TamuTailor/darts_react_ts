import { cricketDataArray, cricketTableArray, criPoints, Mark, marks, nowThrowPlayer, playerCount } from "./../Atom";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { after } from "lodash";
import React, { useEffect, useRef } from "react";
import {
  number,
  magnification,
  throwCount,
  roundSum,
  round,
  gameScore,
  gameArray,
} from "../Atom";

export const useCricketLogic = () => {
  const n = useAtomValue(number);
  const m = useAtomValue(magnification);
  const t = useAtomValue(throwCount);
  const r = useAtomValue(round);
  const isFirstRender = useRef(false);

  const [criPoint, setCriPoint] = useAtom(criPoints);
  const [mark, setMark] = useAtom(marks);
  const [cdArray, setCdArray] = useAtom(cricketDataArray);
  const [ctArray, setCtArray] = useAtom(cricketTableArray);
  const [pCount,setPCount] = useAtom(playerCount);
  const [ntPlayer, setNtPlayer] = useAtom(nowThrowPlayer);

  let i: Array<Mark> = [];

  useEffect(() => {
    isFirstRender.current = true;
  }, []);

  useEffect(() => {
    if (isFirstRender.current || t < 1) {
      isFirstRender.current = false;
    } else {
      let roundArray = criPoint;
      let ctArrayTmp = ctArray
      // i[0] = criPoint[0];
      // i[1] = criPoint[1];
      // i.push({ num: n, mark: m });
      roundArray.push({ num: n, mark: m });
      // setCriPoint((prev) => [...prev, { num: n, mark: m }]);
      
      if(n === 20){
        ctArrayTmp[ntPlayer-1].twenty += m
      } 
      if(n === 19){
        ctArrayTmp[ntPlayer-1].nineteen += m
      } 
      if(n === 18){
        ctArrayTmp[ntPlayer-1].eighteen += m
      } 
      if(n === 17){
        ctArrayTmp[ntPlayer-1].seventeen += m
      } 
      if(n === 16){
        ctArrayTmp[ntPlayer-1].sixteen += m
      } 
      if(n === 15){
        ctArrayTmp[ntPlayer-1].fifteen += m
      } 
      if(n === 25){
        ctArrayTmp[ntPlayer-1].bull += m
      } 

console.log(ctArray)
      if (t === 3) {
        let cdArrayTmp = cdArray;

        // setMark((prev) => [...prev, i]);
        cdArrayTmp[0].push(roundArray);
        // cdArrayTmp.push(roundArray)

        //  setCdArray(cdArrayTmp)
        setCriPoint([]);
      }
      // if (tmpscore < 0) {
      //   setBurst(true);
      //   tmpG.push("BURST");
      // }
    }
  }, [t]);

  return {
    t,
    // score, rSum
  };
};

// ほしい変数
// ・マーク数
// ・合計点数
// ・ラウンドのマーク数配列

// after
