import { Box, Button } from "@chakra-ui/react";
import { css } from "@emotion/react";
import { useSetAtom } from "jotai";
import React, { useState } from "react";
import { sepaOption } from "../../../Atom";
import { useButtonColorChange } from "../../../hooks/useButtonColorChange";

export const BullOption = () => {
  const { colorChange, styles, buttonColor } = useButtonColorChange();
  const setSepaoption = useSetAtom(sepaOption)

  const bullOption = (e: React.MouseEvent<HTMLButtonElement>) => {
    setSepaoption(e.currentTarget.value)
    colorChange(e);
  };
  return (
    <Box>
      <Button
        value={"fat"}
        onClick={(e: React.MouseEvent<HTMLButtonElement>) => bullOption(e)}
        css={buttonColor === "fat" ? styles.true : styles.false}
      >
        50/50
      </Button>
      <Button
        value={"sepa"}
        onClick={(e: React.MouseEvent<HTMLButtonElement>) => bullOption(e)}
        css={buttonColor === "sepa" ? styles.true : styles.false}
      >
        50/25
      </Button>
    </Box>
  );
};
