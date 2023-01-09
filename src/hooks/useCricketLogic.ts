import { close20, cricketDataArray, cricketTableArray, criPoints, Mark, marks, nowThrowPlayer, playerCount } from "./../Atom";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
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
  const [c20, setC20] = useAtom(close20);

  let i: Array<Mark> = [];

  useEffect(() => {
    isFirstRender.current = true;
  }, []);

  useEffect(() => {
    if (isFirstRender.current || t < 1) {
      isFirstRender.current = false;
    } else {
      let roundArray = criPoint;
      let ctArrayTmp = [...ctArray] 
      console.log(ctArrayTmp)
      // i[0] = criPoint[0];
      // i[1] = criPoint[1];
      // i.push({ num: n, mark: m });
      roundArray.push({ num: n, mark: m });
      // setCriPoint((prev) => [...prev, { num: n, mark: m }]);

      if(n === 20){
        ctArrayTmp[ntPlayer-1].twenty += m
        setCtArray(ctArrayTmp)

      } 
      else if(n === 19){
        ctArrayTmp[ntPlayer-1].nineteen += m
      } 
      else if(n === 18){
        ctArrayTmp[ntPlayer-1].eighteen += m
      } 
      else if(n === 17){
        ctArrayTmp[ntPlayer-1].seventeen += m
      } 
      else if(n === 16){
        ctArrayTmp[ntPlayer-1].sixteen += m
      } 
      else if(n === 15){
        ctArrayTmp[ntPlayer-1].fifteen += m
      } 
     else if(n === 25){
        ctArrayTmp[ntPlayer-1].bull += m
      } 

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
    t,ctArray   
  };
};
