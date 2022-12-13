import { Box, Button } from "@chakra-ui/react";
import { css } from "@emotion/react";
import React, { useState } from "react";

export const PlayerNum = () => {
  const [buttonColor, setButtonColor] = useState("");

  const playerCount = (e: React.MouseEvent<HTMLButtonElement>) => {
    setButtonColor(e.currentTarget.value);
  };

  
  return (
    <Box>
      <Button
        onClick={(event: React.MouseEvent<HTMLButtonElement>) =>
          playerCount(event)
        }
        value={1}
        css={buttonColor === "1" ? styles.true : styles.false}
      >
        1Player
      </Button>
      <Button
        onClick={(event: React.MouseEvent<HTMLButtonElement>) =>
          playerCount(event)
        }
        value={2}
        css={buttonColor === "2" ? styles.true : styles.false}
      >
        2Player
      </Button>
      <Button
        onClick={(event: React.MouseEvent<HTMLButtonElement>) =>
          playerCount(event)
        }
        value={3}
        css={buttonColor === "3" ? styles.true : styles.false}
      >
        3Player
      </Button>
      <Button
        onClick={(event: React.MouseEvent<HTMLButtonElement>) =>
          playerCount(event)
        }
        value={4}
        css={buttonColor === "4" ? styles.true : styles.false}
      >
        4Player
      </Button>
    </Box>
  );
};

const styles = {
  true: css`
    background-color: red;
  `,
  false: css`
    background-color: #ccccccc0;
    border: 1px solid blue;
  `,
};
