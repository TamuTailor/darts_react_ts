import { Box } from "@chakra-ui/react";
import { useAtom } from "jotai";
import { game } from "../../Atom";
import { BullOption } from "../Atoms/Button/Options/BullOption";
import { GameSelectButton } from "../Atoms/Button/Options/GameSelectButton";
import { PlayerNum } from "../Atoms/Button/Options/PlayerNum";
import { StartButton } from "../Atoms/Button/StartButton";

export const GameOption = () => {
  return (
    <Box>
      {/* {selectGame === "" ? <GameSelectButton /> : <Fat />} */}
      <GameSelectButton />
      <PlayerNum />
      <BullOption />
      <StartButton />
    </Box>
  );
};
