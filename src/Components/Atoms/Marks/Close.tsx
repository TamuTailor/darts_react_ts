import { Box } from '@chakra-ui/react'
import { css } from '@emotion/react'
import { ReactElement, ReactNode } from 'react'
 type Props = {
    children: ReactNode
 }

export const Close = (props:Props) => {
    const {children} = props
  return (
    <Box css={styels.close}>
        {children}
    </Box>
  )
}
const styels = {
    close:css`
    position: relative;

 
   ::after{
    position: absolute;
    display: block;
    background-color: #000000;
    width: 1000px;
    height: 5px;
    content: "";
    left: -50%;
    z-index: 100;
    top:50%;

   }
   
  
        /* @media screen and (max-width: 600px){
            height: 50px;
        } */
    `
  
  }
  
