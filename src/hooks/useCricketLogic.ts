import { criPoints, Mark, marks } from './../Atom';
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { after } from "lodash";
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

export const useCricketLogic = () => {
  const n = useAtomValue(number);
  const m = useAtomValue(magnification);
  const t = useAtomValue(throwCount);
  const r = useAtomValue(round);
  // const [rSum, setRSum] = useAtom(roundSum);
  // const [rArray, setRArray] = useAtom(roundArray);
  const isFirstRender = useRef(false);
  // const [score, setScore] = useAtom(gameScore);
  // const setNum = useSetAtom(number);
  // const setthrow = useSetAtom(throwCount);
  // const [gArray, setGArray] = useAtom(gameArray);
  // const [Burst, setBurst] = useAtom(burst);
  const [criPoint, setCriPoint] = useAtom(criPoints);
  const [mark, setMark] = useAtom(marks);

  // let tmpG: Array<number | string> = gArray;
  // let tmp: number[] = rArray;
  // let point: number = n * m;
  // let sum: number = 0;
let i:Array<Mark> = []


  useEffect(() => {
    isFirstRender.current = true;
  }, []);

  useEffect(() => {
    // const tmpscore = score - point;
    if (isFirstRender.current || t < 1) {
      isFirstRender.current = false;
    } else {
      // sum = rSum + point;
      // setRSum(sum);
      // tmp.push(point);
     
    i[0] = criPoint[0]
    i[1] = criPoint[1]
    i.push({num:n,mark:m})
     
    //  console.log(i)

      setCriPoint((prev) => [...prev, { num: n, mark: m }]);  

        

      if(t === 3){
       setMark((prev)=>(
        [...prev,i]
       ))
       setCriPoint([]) 
        console.log(mark)

      }


      // if (tmpscore < 0) {
      //   setBurst(true);
      //   tmpG.push("BURST");
      // }
    }
  }, [t]);

  return { t, 
    // score, rSum
   };
};

// ほしい変数
// ・マーク数
// ・合計点数
// ・ラウンドのマーク数配列

// after
