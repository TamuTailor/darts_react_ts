import { Button } from "@chakra-ui/react";
import { useAtom } from "jotai";
import { game, gameScore } from "../../../Atom";
import { useButtonColorChange } from "../../../hooks/useButtonColorChange";

export const GameSelectButton = () => {
  const [selectedGame, setSelectedGame] = useAtom(game);
  const [score, setScore] = useAtom(gameScore);
  const { colorChange, styles, buttonColor } = useButtonColorChange();

  const Select = (e: React.MouseEvent<HTMLButtonElement>) => {
    const p = Number(e.currentTarget.value);
    colorChange(e);
    setSelectedGame(e.currentTarget.value);
    if (typeof p === "number") {
      setScore(p);
    } else {
      setScore(0);
    }
  };

  return (
    <>
      <Button
        value={501}
        onClick={(e: React.MouseEvent<HTMLButtonElement>) => Select(e)}
        css={buttonColor === "501" ? styles.true : styles.false}
      >
        501
      </Button>
      <Button
        value={701}
        onClick={(e: React.MouseEvent<HTMLButtonElement>) => Select(e)}
        css={buttonColor === "701" ? styles.true : styles.false}
      >
        701
      </Button>
    </>
  );
};
