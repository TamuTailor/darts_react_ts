import { useAtomValue } from "jotai";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { optionSelected, playerCount } from "../Atom";
import { PlayerNum } from "../Components/Atoms/Button/Options/PlayerNum";
import { Cricket } from "../Components/Pages/Cricket";
import { Home } from "../Components/Pages/Home";
import { Zeroone } from "../Components/Pages/Zeroone";
import { GameOption } from "../Components/templates/GameOption";


export const Router = () => {
  const selected = useAtomValue(optionSelected)
  const players = useAtomValue(playerCount)

  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/`} element={<Home />} />
        <Route path={`/zeroone`} element={selected ? <Zeroone />:<GameOption />} />
        <Route path={`/cricket`} element={players !== 0 ? <Cricket/>: <PlayerNum />} /> 
      </Routes>
    </BrowserRouter>
  );
};
