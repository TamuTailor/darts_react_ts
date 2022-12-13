import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Cricket } from "../Components/Pages/Cricket";
import { Home } from "../Components/Pages/Home";
import { Zeroone } from "../Components/Pages/Zeroone";
import { GameOption } from "../Components/templates/GameOption";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/`} element={<Home />} />
        <Route path={`/zeroone`} element={<Zeroone />} />
        <Route path={`/zeroone/option`} element={<GameOption />} />
        <Route path={`/cricket`} element={<Cricket/>} />
      </Routes>
    </BrowserRouter>
  );
};
