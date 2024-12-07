import { Box, ChakraComponent } from '@chakra-ui/react'
import { css } from '@emotion/react'
import React, { ReactElement, ReactNode } from 'react'

type Props = {
    children:ReactNode
}
export const MarkContainer = (props:Props) => {
   const {children} = props
  return (
    <Box css={styels.MarkContainer}>
        {children}
    </Box> 
  )
}

const styels = {
    MarkContainer:css`
        background-color: red;
        position: relative;
        width: 45px;
        aspect-ratio: 1;
    `

}
