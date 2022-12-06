import { Box, Button } from "@chakra-ui/react";
import { css } from "@emotion/react";
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
} from "../../../Atom";
import { Change } from "../../molecules/Change";
import { Clear } from "../../molecules/Clear";
import { GameTable } from "../../molecules/GameTable";
import { SegmentCircle } from "../../organisms/SegmentCircle";

export const Fat = () => {
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
  const [gArray,setGArray] = useAtom(gameArray);
  const [Burst, setBurst] = useAtom(burst);
 
  
let tmpG:Array<number|string> = gArray
    
  let tmp: number[] = rArray;
  let point: number = n * m;
  let sum: number = 0;

  useEffect(() => {
    isFirstRender.current = true;
  }, []);

  useEffect(() => {      
  const tmpscore = score - point
    if (isFirstRender.current || t < 1) {
      isFirstRender.current = false;
    } else {
      sum = rSum + point;
      setRSum(sum);
      tmp.push(point);
      // setRArray(tmp);
      ZerooneLogic(tmpscore) 

      // if(tmpscore < 0){
      //   setScore(tmpscore + rSum)
      //   setBurst(true)
      //   tmpG.push("BURST")
      //  }
      
      if(t === 3){
        change(tmpscore)
      }
    }
  }, [t]);

  const ZerooneLogic = (p:number ) => {
    setScore(p)
    setRArray(tmp);
  };


  const change = (p:number) => {

const total = rArray.reduce((sum, elem) => sum + elem) 
    if(p < 0){
    //  setScore(p + rSum)
    //  setBurst(true)
    //  tmpG.push("BURST")
    }else{
       setNum(0);
       setRSum(0);
       tmpG.push(total)
       setBurst(false)
    }  
     };

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
