import { Td } from "@chakra-ui/react";
import { useAtom, useAtomValue } from "jotai";
import React, { useEffect, useRef } from "react";
import { close20, cricketTableArray, increment, nowThrowPlayer, playerCount, throwCount } from "../../../Atom";
import { OneMark } from "../../Atoms/Marks/OneMark";
import { ThreeMark } from "../../Atoms/Marks/ThreeMark";
import { TwoMark } from "../../Atoms/Marks/TwoMark";

type Props = {
    s?:any,
    n:number,
    p:number
}

export const MarkCount = (props:Props) => {
  const { n ,p} = props;
  const [ctArray, setCTArray] = useAtom(cricketTableArray);
  const [c20,setC20] = useAtom(close20);
  const [ntPlayer, setNtPlayer] = useAtom(nowThrowPlayer);
  const [pCount, setPCount] = useAtom(playerCount);
  const t = useAtomValue(throwCount);
  const [inc, setInc] = useAtom(increment)
  const isFirstClose = useRef(false);
 
 let ctArrayTmp = []
 ctArrayTmp=ctArray


  
// useEffect(()=>{
//  ctArray.map((e) => {
//     e.twenty >= 3 ? (twentyOpen += 1) : twentyOpen;
//   });
//   // },[inc])
//     if (twentyOpen >= pCount && !isFirstClose.current) { 
//       const cp = ntPlayer
//         setC20(cp);
//         isFirstClose.current = true  
//     }  



// useEffect(()=>{ 
//    if(isFirstClose.current){
//     ctArrayTmp[c20 -1].twenty = 3
   
//     console.log(c20)
//   } 
// },[c20,isFirstClose])


  // if(c20 > 0){
  //   ctArrayTmp[c20 -1].twenty = 3
  // }
  return (
    <>
      {n === 20 ? (
        <Td>
          {ctArray[p-1].twenty === 1 ? (
            <OneMark />
          ) : ctArray[p-1].twenty === 2 ? (
            <TwoMark />
          ) : ctArray[p-1].twenty >= 3 ? (
            isFirstClose.current ? <p>close<ThreeMark />
              </p>:<ThreeMark />
          ) : (
            <>{ctArrayTmp[p-1].twenty}</>
          )}
        </Td>
      ) : (
        <></>
      )}
      {/* {n === 19 ? (
        <Td>
          {ctArray[p-1].nineteen === 1 ? (
            <OneMark />
          ) : ctArray[p-1].nineteen === 2 ? (
            <TwoMark />
          ) : ctArray[p-1].nineteen >= 3 ? (
            <ThreeMark />
          ) : (
            <></>
          )}
        </Td>
      ) : (
        <></>
      )}
      {n === 18 ? (
        <Td>
          {ctArray[p-1].eighteen === 1 ? (
            <OneMark />
          ) : ctArray[p-1].eighteen === 2 ? (
            <TwoMark />
          ) : ctArray[p-1].eighteen >= 3 ? (
            <ThreeMark />
          ) : (
            <></>
          )}
        </Td>
      ) : (
        <></>
      )}
      {n === 17 ? (
        <Td>
          {ctArray[p-1].seventeen === 1 ? (
            <OneMark />
          ) : ctArray[p-1].seventeen === 2 ? (
            <TwoMark />
          ) : ctArray[p-1].seventeen >= 3 ? (
            <ThreeMark />
          ) : (
            <></>
          )}
        </Td>
      ) : (
        <></>
      )}
      {n === 16 ? (
        <Td>
          {ctArray[p-1].sixteen === 1 ? (
            <OneMark />
          ) : ctArray[p-1].sixteen === 2 ? (
            <TwoMark />
          ) : ctArray[p-1].sixteen >= 3 ? (
            <ThreeMark />
          ) : (
            <></>
          )}
        </Td>
      ) : (
        <></>
      )}
      {n === 15 ? (
        <Td>
          {ctArray[p-1].fifteen === 1 ? (
            <OneMark />
          ) : ctArray[p-1].fifteen === 2 ? (
            <TwoMark />
          ) : ctArray[p-1].fifteen >= 3 ? (
            <ThreeMark />
          ) : (
            <></>
          )}
        </Td>
      ) : (
        <></>
      )}
      {n === 25 ? (
        <Td>
          {ctArray[p-1].bull === 1 ? (
            <OneMark />
          ) : ctArray[p-1].bull === 2 ? (
            <TwoMark />
          ) : ctArray[p-1].bull >= 3 ? (
            <ThreeMark />
          ) : (
            <></>
          )}
        </Td>
      ) : (
        <></>
      )} */}
    </>
  );
};
