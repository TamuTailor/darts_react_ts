import { Button } from "@chakra-ui/react";
import { SerializedStyles } from "@emotion/react";
import { useAtom, useSetAtom } from "jotai";
import {  gameArray, gameScore, number, roundArray, roundSum, throwCount } from "../../../Atom";


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
  let tmpG:Array<Array<number>> = gArray

  const Change = () => {
 if(score < 0){
  setScore(score + rsum)
  tmpG.push([0,0,0])
  setRArray([])

 }else{
    setNum(0);
    setthrow(0);
    setRSum(0);
    setRArray([])
    tmpG.push(rArray)
 }

    
  };



  return <Button css={style} onClick={() => Change()}></Button>;
};
