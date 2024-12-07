import { Box } from '@chakra-ui/react';
import { css } from '@emotion/react';
import { useAtom, useAtomValue } from 'jotai';
import React from 'react'
import { roundArray, throwCount } from '../../Atom';

export const ThrowPoint = () => {
    const [rArray,setRArray] = useAtom(roundArray);
    const t = useAtomValue(throwCount);
  return (
    
    <Box css = {styles.container}>
        <Box css = {styles.number}>{rArray[0]}&nbsp;</Box>
        <Box css = {styles.number}>{rArray[1]}&nbsp;</Box>
        <Box css = {styles.number}>{rArray[2]}&nbsp;</Box>
    </Box>

  )
}

const styles = {
  container:css`
    display: flex;
    justify-content: space-between;
    font-size: 24px;
    height:60px;
    align-items: center;
  `
  ,
  number:css`
    width: 33%;
    background-color: red;
  `
}
