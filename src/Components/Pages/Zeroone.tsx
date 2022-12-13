import { Box } from "@chakra-ui/react";
import { css } from "@emotion/react";
import { useAtom } from "jotai";
import { game } from "../../Atom";
import { GameOption } from "../templates/GameOption";

export const Zeroone = () => {
  const [selectGame, setSelectGame] = useAtom(game);

  return (
    <Box css={styles.back}>
      <GameOption />
      {/* {selectGame === "" ? <GameSelectButton /> : <Fat />} */}
    </Box>
  );
};

const styles = {
  back: css`
    background-image: url(../src/assets/back.png);
    width: 100%;
    padding: 50px 5%;
    max-width: 100%;

    &::before {
      content: "";
      display: block;
      width: 100%;
      height: 100%;
      background-color: #3d3d3d4c;
      position: absolute;
      top: 0;
      left: 0;
    }
  `,
};
