import { Button } from "@chakra-ui/react";
import { useAtom } from "jotai";
import { game, gameScore } from "../../../Atom";

export const GameSelectButton = () => {
  const [selectGame, setSelectGame] = useAtom(game);
  const [score, setScore] = useAtom(gameScore);

  const Select = (children: string | number) => {
    setSelectGame(children);
    if (typeof children === "number") {
      setScore(children);
    } else {
      setScore(0);
    }
  };

  return (
    <>
      <Button onClick={() => Select(501)}>501</Button>
      <Button onClick={() => Select(701)}>701</Button>
    </>
  );
};
