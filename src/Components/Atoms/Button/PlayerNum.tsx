import { Box, Button } from "@chakra-ui/react";
import { css } from "@emotion/react";
import { useSetAtom } from "jotai";
import React from "react";
import { playerCount } from "../../../Atom";
import { useButtonColorChange } from "../../../hooks/useButtonColorChange";

export const PlayerNum = () => {
  const { colorChange, styles, buttonColor } = useButtonColorChange();
  const setPlayers = useSetAtom(playerCount);

  const playerCounter = (e: React.MouseEvent<HTMLButtonElement>) => {
    const p = Number(e.currentTarget.value);
    setPlayers(p)
    colorChange(e);
  };

  return (
    <Box>
      <Button
        onClick={(event: React.MouseEvent<HTMLButtonElement>) =>
          playerCounter(event)
        }
        value={1}
        css={buttonColor === "1" ? styles.true : styles.false}
      >
        1Player
      </Button>
      <Button
        onClick={(event: React.MouseEvent<HTMLButtonElement>) =>
          playerCounter(event)
        }
        value={2}
        css={buttonColor === "2" ? styles.true : styles.false}
      >
        2Player
      </Button>
      <Button
        onClick={(event: React.MouseEvent<HTMLButtonElement>) =>
          playerCounter(event)
        }
        value={3}
        css={buttonColor === "3" ? styles.true : styles.false}
      >
        3Player
      </Button>
      <Button
        onClick={(event: React.MouseEvent<HTMLButtonElement>) =>
          playerCounter(event)
        }
        value={4}
        css={buttonColor === "4" ? styles.true : styles.false}
      >
        4Player
      </Button>
    </Box>
  );
};
