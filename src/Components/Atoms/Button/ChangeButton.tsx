import { Button } from "@chakra-ui/react";
import { SerializedStyles } from "@emotion/react";
import { useAtom, useSetAtom } from "jotai";
import {  burst, gameArray, gameScore, number, roundArray, roundSum, throwCount } from "../../../Atom";


type Props = {
  style: SerializedStyles;
};



export const ChangeButton = (props: Props) => {
  const { style } = props;

  const setNum = useSetAtom(number);
  const setthrow = useSetAtom(throwCount);
  const [rsum,setRSum] = useAtom(roundSum);
  const [rArray,setRArray] = useAtom(roundArray);
  const [gArray,setGArray] = useAtom(gameArray);
  const [score, setScore] = useAtom(gameScore);
  const [Burst, setBurst] = useAtom(burst);
  let tmpG:Array<number|string> = gArray
  const total = rArray.reduce((sum, elem) => sum + elem)

  const Change = () => {
 if(score < 0){
  setScore(score + rsum)
  // tmpG.push(0)
  setBurst(true)
  tmpG.push("BURST")
 }else{
    setNum(0);
    setRSum(0);
    tmpG.push(total)
    setBurst(false)
 }
  setthrow(0);    
  setRArray([])
    
  };



  return <Button css={style} onClick={() => Change()}></Button>;
};
