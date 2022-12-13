
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
  let tmpG: Array<number | string> = gArray;

  const Change = () => {
    if (score < 0) {
      setScore(score + rsum);
    }
    setthrow(0);
    setRArray([]);
    setRSum(0);
  };


  return { Change}

}