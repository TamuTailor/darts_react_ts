import { Button } from '@chakra-ui/react'
import { useAtom, useAtomValue, useSetAtom } from 'jotai'
import { game, gameScore, nowThrowPlayer, optionSelected, playerCount, sepaOption, zerooneTableArray } from '../../../Atom'

export const StartButton = () => {
    const selectedGame = useAtomValue(game)
    const players = useAtomValue(playerCount)
    const bullOption = useAtomValue(sepaOption)
    const setSelected = useSetAtom(optionSelected) 
    const [score, setScore] = useAtom(gameScore);
    const [ztArray, setZtArray] = useAtom(zerooneTableArray);
    const [ntPlayer, setNtPlayer] = useAtom(nowThrowPlayer);
    const [pNum,setPlayers] = useAtom(playerCount);  


    const start = ( ) => {
        if(selectedGame !=="" && players !==0 && bullOption !==""){
             setSelected(true)
             let ztArrayTmp = [...ztArray] 
             for(let i = 0;i < pNum;i++){
              ztArrayTmp[i].sum = score
             }
        }
    }


  return (
    <Button onClick={start}>GameStart</Button>
  )
}
