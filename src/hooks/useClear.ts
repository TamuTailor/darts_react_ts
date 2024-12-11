import { close15, close16, close17, close18, close19, close20, closebull, cricketDataArray, cricketTableArray, gameScore } from './../Atom';
import { useSetAtom } from "jotai";
import {
  criPoints,
  game,
  gameArray,
  marks,
  optionSelected,
  playerCount,
  roundArray,
  roundSum,
  sepaOption,
  throwCount,
} from "../Atom";


export const useClear = ()=> {
    const setSelectGame = useSetAtom(game);
    const setGArray = useSetAtom(gameArray);
    const setthrow = useSetAtom(throwCount);
    const setRSum = useSetAtom(roundSum);
    const setRArray = useSetAtom(roundArray);
    const setPlayers = useSetAtom(playerCount);
    const setBullOption = useSetAtom(sepaOption);
    const setSelected = useSetAtom(optionSelected);
    const setMarks = useSetAtom(marks);
    const setCdArray = useSetAtom(cricketDataArray);
    const setCtArray = useSetAtom(cricketTableArray);
    const  setScore = useSetAtom(gameScore);
  
    const setC20 = useSetAtom(close20);
    const setC19 = useSetAtom(close19);
    const setC18 = useSetAtom(close18);
    const setC17 = useSetAtom(close17);
    const setC16 = useSetAtom(close16);
    const setC15 = useSetAtom(close15);
    const setCbull = useSetAtom(closebull);
  
    const clearValue = () => {
      setSelectGame("");
      setGArray([]);
      setthrow(0);
      setRSum(0);
      setRArray([]);
      setBullOption("");
      setPlayers(0);
      setSelected(false);
      setMarks([])
      setCdArray([])
      setCtArray([])
      setC20(0)
      setC19(0)
      setC18(0)
      setC17(0)
      setC16(0)
      setC15(0)
      setCbull(0)
      setScore(0)
    };
    return {clearValue}




}

