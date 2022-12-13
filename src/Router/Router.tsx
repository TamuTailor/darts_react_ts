import { useAtomValue } from "jotai";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { optionSelected } from "../Atom";
import { Cricket } from "../Components/Pages/Cricket";
import { Home } from "../Components/Pages/Home";
import { Zeroone } from "../Components/Pages/Zeroone";
import { GameOption } from "../Components/templates/GameOption";


export const Router = () => {
  const selected = useAtomValue(optionSelected)

  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/`} element={<Home />} />
        <Route path={`/zeroone`} element={selected ? <Zeroone />:<GameOption />} />
        <Route path={`/cricket`} element={<Cricket/>} />
      </Routes>
    </BrowserRouter>
  );
};
