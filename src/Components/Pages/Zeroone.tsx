import { Box, StylesProvider } from '@chakra-ui/react'
import { css } from '@emotion/react'
import { Linkbar } from '../molecules/Linkbar'
import { Fat } from '../templates/Bord/Fat'

export const Zeroone = () => {
  return (
    <Box css={styles.back}>
        <Linkbar />
        <Fat />
    </Box>
  )
}

const styles = {
  back:css`
    background-image:url(../src/assets/back.png);
    width:100%;
    padding: 50px 5%;
    max-width: 100%;

    &::before{
      content: "";
      display: block;
      width: 100%;
      height: 100%;
      background-color: #3d3d3d4c;
      position: absolute;
      top:0;
      left: 0;

    }
    
  `
}
