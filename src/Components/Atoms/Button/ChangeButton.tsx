import { Button } from "@chakra-ui/react";
import { SerializedStyles } from "@emotion/react";
import { useAtom, useSetAtom } from "jotai";
import {  gameArray, number, roundArray, roundSum, throwCount } from "../../../Atom";

type Props = {
  style: SerializedStyles;
};



export const ChangeButton = (props: Props) => {
  const { style } = props;

  const setNum = useSetAtom(number);
  const setthrow = useSetAtom(throwCount);
  const setRSum = useSetAtom(roundSum);
  const [rArray,setRArray] = useAtom(roundArray);
  const [gArray,setGArray] = useAtom(gameArray);
  let tmpG:Array<Array<number>> = gArray

  const Change = () => {
    setNum(0);
    setthrow(0);
    setRSum(0);
    setRArray([])
    tmpG.push(rArray)
  };

  return <Button css={style} onClick={() => Change()}></Button>;
};
