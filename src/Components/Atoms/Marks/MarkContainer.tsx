import { Box, ChakraComponent } from '@chakra-ui/react'
import { css, SerializedStyles } from '@emotion/react'
import React, { ReactElement, ReactNode } from 'react'

type Props = {
    children:ReactNode,
    size?:string
}
export const MarkContainer = (props:Props) => {
   const {children,size} = props 
  return (
    <Box css={size === "min"?styles.MarkContainerMin:styles.MarkContainer}>
        {children}
    </Box> 
  )
}

const styles = {
    MarkContainer:css`
        background-color: #111111;
        position: relative;
        height: 90px;
        box-sizing: border-box;
        aspect-ratio: 1; 
        @media screen and (max-width: 600px){
            height: 50px;
        }
    `,
    MarkContainerMin:css`
        background-color: transparent;
        position: relative;
        height: 50px;
        box-sizing: border-box;
        aspect-ratio: 1; 
        @media screen and (max-width: 600px){
            height: 50px;
        }
    `

}
