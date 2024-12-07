import { useSetAtom } from "jotai";
import {
  game,
  gameArray,
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
  
    const clearValue = () => {
      setSelectGame("");
      setGArray([]);
      setthrow(0);
      setRSum(0);
      setRArray([]);
      setBullOption("");
      setPlayers(0);
      setSelected(false);
    };
    return {clearValue}




}

