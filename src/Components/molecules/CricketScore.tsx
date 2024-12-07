import { Text } from "@chakra-ui/react";
import { useAtom, useAtomValue } from "jotai";
import React, { useEffect } from "react";
import {
  close20,
  cricketTableArray,
  nowThrowPlayer,
  playerCount,
  throwCount,
  Twenty,
} from "../../Atom";

export const CricketScore = () => {
  const [ctArray, setCtArray] = useAtom(cricketTableArray);
  const [ntPlayer, setNtPlayer] = useAtom(nowThrowPlayer);
  const [pCount, setPCount] = useAtom(playerCount);
  const [c20, setC20] = useAtom(close20);
  const t = useAtomValue(throwCount);
  let Sum = 0;
  let ctArrayTmp = ctArray;
  let twentyOpen = 0;
  
 let cp = c20
  

//   ctArray.map((e) => {
//     e.twenty >= 3 ? (twentyOpen += 1) : twentyOpen;
//   });
  
//    useEffect(() => {
//     console.log(c20)
//     if(c20 > 0){
//     ctArrayTmp[c20 -1].twenty = 3
//   }
//     if (twentyOpen >= pCount && (cp === 0)) { 
//         cp = ntPlayer
//         setC20(cp);
//         console.log(ctArray)
//     }  
//    }, [t]);
 
 

  if (ctArray[ntPlayer - 1].twenty > 3) {
    Sum += (ctArray[ntPlayer - 1].twenty - 3) * 20;
  }
  if (ctArray[ntPlayer - 1].nineteen > 3) {
    Sum += (ctArray[ntPlayer - 1].nineteen - 3) * 19;
  }
  if (ctArray[ntPlayer - 1].eighteen > 3) {
    Sum += (ctArray[ntPlayer - 1].eighteen - 3) * 18;
  }
  if (ctArray[ntPlayer - 1].seventeen > 3) {
    Sum += (ctArray[ntPlayer - 1].seventeen - 3) * 17;
  }
  if (ctArray[ntPlayer - 1].sixteen > 3) {
    Sum += (ctArray[ntPlayer - 1].sixteen - 3) * 16;
  }
  if (ctArray[ntPlayer - 1].fifteen > 3) {
    Sum += (ctArray[ntPlayer - 1].fifteen - 3) * 15;
  }

  ctArrayTmp[ntPlayer - 1].sum = Sum;
  return (
    <>
      {ctArray.map((e) => (
        <Text>{`${e.player}${e.sum}`}</Text>
      ))}
    </>
  );
};
