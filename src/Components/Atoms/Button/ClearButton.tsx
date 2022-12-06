import { Button } from '@chakra-ui/react';
import { useAtom, useSetAtom } from 'jotai';
import React from 'react'
import { game, gameArray, roundArray, roundSum, throwCount } from '../../../Atom';

export const ClearButton = () => {
    const setSelectGame = useSetAtom(game);
    const setGArray = useSetAtom(gameArray);
    const setthrow = useSetAtom(throwCount);
    const setRSum = useSetAtom(roundSum);
    const setRArray = useSetAtom(roundArray);

    const Clear = () => {
        setSelectGame("")
        setGArray([])
        setthrow(0)
        setRSum(0)
        setRArray([])

    }
  return (
    <Button  onClick={() => Clear()}></Button>
  )
}
