import { Box, Button } from '@chakra-ui/react'
import { css } from '@emotion/react';
import React, { useState } from 'react'

export const BullOption = () => {
    const [buttonColor, setButtonColor] = useState("");
    const bullOption  = (e: React.MouseEvent<HTMLButtonElement>) => {
        setButtonColor(e.currentTarget.value);
        console.log(e.currentTarget.value)
    }
  return (
    <Box>
        <Button value={"fat"} onClick={(e: React.MouseEvent<HTMLButtonElement>)=>bullOption(e)} css={buttonColor === "fat" ? styles.true : styles.false}>50/50</Button>
        <Button value={"sepa"} onClick={(e: React.MouseEvent<HTMLButtonElement>)=>bullOption(e)} css={buttonColor === "sepa" ? styles.true : styles.false}>50/25</Button>
    </Box>
  )
}

const styles = {
    true: css`
      background-color: red;
    `,
    false: css`
      background-color: #ccccccc0;
      border: 1px solid blue;
    `,
  };
  