import { Box } from '@chakra-ui/react'
import { useAtom } from 'jotai';
import { game } from '../../Atom';
import { BullOption } from '../Atoms/Button/BullOption';
import { GameSelectButton } from '../Atoms/Button/GameSelectButton';
import { PlayerNum } from '../Atoms/Button/PlayerNum';
import { StartButton } from '../Atoms/Button/StartButton';

export const GameOption = () => {
    
  return (
    <Box>
         {/* {selectGame === "" ? <GameSelectButton /> : <Fat />} */}
         <GameSelectButton />
         <PlayerNum />
         <BullOption />
         <StartButton />
    </Box>
         
  )
}

