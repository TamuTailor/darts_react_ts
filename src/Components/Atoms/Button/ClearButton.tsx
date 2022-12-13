import { Button } from '@chakra-ui/react';
import { useAtom, useSetAtom } from 'jotai';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { game, gameArray, optionSelected, playerCount, roundArray, roundSum, sepaOption, throwCount } from '../../../Atom';

export const ClearButton = () => {
    const setSelectGame = useSetAtom(game);
    const setGArray = useSetAtom(gameArray);
    const setthrow = useSetAtom(throwCount);
    const setRSum = useSetAtom(roundSum);
    const setRArray = useSetAtom(roundArray);

    const setPlayers = useSetAtom(playerCount)
    const setBullOption = useSetAtom(sepaOption)
    const setSelected = useSetAtom(optionSelected) 
    const navigate = useNavigate()


    const Clear = () => {
        setSelectGame("")
        setGArray([])
        setthrow(0)
        setRSum(0)
        setRArray([])
        setBullOption("")
        setPlayers(0)
        setSelected(false)
         navigate("/")

    }
  return (
    <Button  onClick={() => Clear()}></Button>
  )
}
