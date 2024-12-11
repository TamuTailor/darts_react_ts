import { useLocation } from 'react-router-dom';
import { nowThrowPlayer, playerCount, zerooneTableArray } from './../Atom';

import { useAtom, useSetAtom } from "jotai";
import {
  burst,
  gameArray,
  gameScore,
  roundArray,
  roundSum,
  throwCount,
} from "../Atom";

export const useChangeAction = () => {
  const setthrow = useSetAtom(throwCount);
  const [rsum, setRSum] = useAtom(roundSum);
  const [rArray, setRArray] = useAtom(roundArray);
  const [gArray, setGArray] = useAtom(gameArray);
  const [score, setScore] = useAtom(gameScore);
  const [Burst, setBurst] = useAtom(burst);
  const [ntPlayer, setNtPlayer] = useAtom(nowThrowPlayer);
  let tmpG: Array<number | string> = gArray;
  const [pCount,setPCount] = useAtom(playerCount);
  const [ztArray, setZtArray] = useAtom(zerooneTableArray);
  const path = useLocation()

  const Change = () => {
    if(ntPlayer < pCount){
      setNtPlayer(ntPlayer+1)
    }else{
      setNtPlayer(1)
    }

    if(path.pathname === "/zeroone"){
      if (ztArray[ntPlayer-1].sum < 0) {
      let ztArrayTmp = [...ztArray] 
      ztArrayTmp[ntPlayer-1].sum += rsum
      // setScore(score + rsum);
    }
    }else{
      
    }

    
    setthrow(0);
    setRArray([]);
    setRSum(0);

  };


  return { Change}

}