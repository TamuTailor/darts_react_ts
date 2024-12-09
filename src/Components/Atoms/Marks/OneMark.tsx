import { Box } from '@chakra-ui/react'
import { css, SerializedStyles } from '@emotion/react'
import React from 'react'
import { MarkContainer } from './MarkContainer'

type Props = {
  size?:string
}

export const OneMark = (props:Props) => {
  const {size} = props

  return (
    <MarkContainer size={size}>
       <Box css={size === "min"?styles.onemin :styles.one} ></Box>
    </MarkContainer>
  )
}

const styles = {
    one:css`
    position: absolute;
        width: 110%;
        height: 10px;
        top: 5%;
        right: 5%;
        background-color: white;
        transform: rotate(-45deg);
        transform-origin: 98% 100%;
        @media screen and (max-width: 600px) {
          height: 6px;
    }
    `,
    onemin:css`
    position: absolute;
        width: 110%;
        height: 6px;
        top: 5%;
        right: 5%;
        background-color: white;
        transform: rotate(-45deg);
        transform-origin: 98% 100%;
        @media screen and (max-width: 600px) {
          height: 6px;
    }
    `,

}