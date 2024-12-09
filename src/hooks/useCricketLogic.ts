import { close20, cricketDataArray, cricketTableArray, criPoints, Mark, marks, nowThrowPlayer, playerCount, roundArray } from "./../Atom";
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
import { useClose } from "./useClose";

export const useCricketLogic = () => {
  const n = useAtomValue(number);
  const m = useAtomValue(magnification);
  const t = useAtomValue(throwCount);
  const r = useAtomValue(round);
  const isFirstRender = useRef(false);
  const {isFirstClose20,isFirstClose19,isFirstClose18,isFirstClose17,isFirstClose16,isFirstClose15,isFirstClosebull} = useClose()

  const [criPoint, setCriPoint] = useAtom(criPoints);
  const [mark, setMark] = useAtom(marks);
  const [cdArray, setCdArray] = useAtom(cricketDataArray);
  const [ctArray, setCtArray] = useAtom(cricketTableArray);
  const [pCount,setPCount] = useAtom(playerCount);
  const [ntPlayer, setNtPlayer] = useAtom(nowThrowPlayer);
  const [rArray, setRArray] = useAtom(roundArray);

  
  let point: number = n * m;


  useEffect(() => {
    isFirstRender.current = true;
  }, []);

  useEffect(() => {
    if (isFirstRender.current || t < 1) {
      isFirstRender.current = false;
    } else {
      
      let ctArrayTmp = [...ctArray] 
      let tmp =  [...rArray]
    if(n === 20||n===19||n===18||n===17||n===16||n===15||n===25) {
       tmp.push(m);
    }else{
      tmp.push(0);
    }
      setRArray(tmp);


     

      if(n === 20 && !isFirstClose20.current){
        ctArrayTmp[ntPlayer-1].twenty += m
        setCtArray(ctArrayTmp)
      } 
      else if(n === 19 && !isFirstClose19.current){
        ctArrayTmp[ntPlayer-1].nineteen += m
        setCtArray(ctArrayTmp)
      } 
      else if(n === 18 && !isFirstClose18.current){
        ctArrayTmp[ntPlayer-1].eighteen += m
        setCtArray(ctArrayTmp)
      } 
      else if(n === 17 && !isFirstClose17.current){
        ctArrayTmp[ntPlayer-1].seventeen += m
        setCtArray(ctArrayTmp)
      } 
      else if(n === 16 && !isFirstClose16.current){
        ctArrayTmp[ntPlayer-1].sixteen += m
        setCtArray(ctArrayTmp)
      } 
      else if(n === 15 && !isFirstClose15.current){
        ctArrayTmp[ntPlayer-1].fifteen += m
        setCtArray(ctArrayTmp)
      } 
     else if(n === 25 && !isFirstClosebull.current){
        ctArrayTmp[ntPlayer-1].bull += m
        setCtArray(ctArrayTmp)
      } 

      // if (t === 3) {
      //   // let cdArrayTmp = cdArray;
      //   // cdArrayTmp[0].push(roundArray);
      //   // setCriPoint([]);
      // }
       
    }
 
  }, [t]);


 
  return {
    t,ctArray  
  };
};
