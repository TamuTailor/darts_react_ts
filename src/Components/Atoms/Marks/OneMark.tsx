import { Box } from '@chakra-ui/react'
import { css } from '@emotion/react'
import React from 'react'
import { MarkContainer } from './MarkContainer'

export const OneMark = () => {
  return (
    <MarkContainer>
       <Box css={styels.one} ></Box>
    </MarkContainer>
  )
}

const styels = {
    one:css`
    position: absolute;
        width: 140%;
        height: 2px;
        top: 0;
        right: 0px;
        background-color: white;
        transform: rotate(-45deg);
        transform-origin: 98% 100%;
    `,

}