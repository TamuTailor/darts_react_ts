import { Box, Button } from "@chakra-ui/react";
import { css } from "@emotion/react";
import { useAtom, useAtomValue } from "jotai";
import React, { createContext, Dispatch, SetStateAction, useEffect, useState } from "react";
import { number,magnification, throwCount,roundSum} from "../../../Atom";
import { Change } from "../../molecules/Change";
import { GameTable } from "../../molecules/GameTable";
import { SegmentCircle } from "../../organisms/SegmentCircle";



type setTypeObject = {
    setNumber: Dispatch<SetStateAction<number>>;
    setMagnification: Dispatch<SetStateAction<number>>;
    setthrowCount: Dispatch<SetStateAction<number>>;
    throwCount:number
    setRoundSum: Dispatch<SetStateAction<number>>;
  };
export const gameoption = createContext("");
export const setStateContext = createContext({} as setTypeObject);



export const Fat = () => {

  const n = useAtomValue(number)
  const m = useAtomValue(magnification)
  const t = useAtomValue(throwCount)
  const [rSum,setRSum] = useAtom(roundSum)

  useEffect(()=>{
    let point:number = n*m
    let sum:number = 0

        sum = rSum + point
        setRSum(sum)
        setRSum(sum)
    
  },[t])

 
  return (
    <React.Fragment>  
        {/* <p>ラウンド得点{number*magnification}</p> */}
         <p>ラウンド得点{n*m}</p> 

        <p>round{t}</p>
        <p>合計{rSum}</p>
        
     
          <Box css={styles.table}>
             <SegmentCircle  />
             {/* <GameTable /> */}
            
          </Box>
          {
            t >=3  ? 
             <Change />:<></>
          }
 
    </React.Fragment>
  );
};

const styles = {
  table:css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: red;
  `
}
