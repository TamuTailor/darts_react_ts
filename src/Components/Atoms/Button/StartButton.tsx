import { Button } from '@chakra-ui/react'
import { useAtomValue, useSetAtom } from 'jotai'
import { game, optionSelected, playerCount, sepaOption } from '../../../Atom'

export const StartButton = () => {
    const selectedGame = useAtomValue(game)
    const players = useAtomValue(playerCount)
    const bullOption = useAtomValue(sepaOption)
    const setSelected = useSetAtom(optionSelected) 


    const start = ( ) => {
        if(selectedGame !=="" && players !==0 && bullOption !==""){
             setSelected(true)
        }
    }


  return (
    <Button onClick={start}>GameStart</Button>
  )
}
