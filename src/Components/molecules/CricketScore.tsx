import { Text } from '@chakra-ui/react'
import { useAtom } from 'jotai';
import React from 'react'
import { cricketTableArray, nowThrowPlayer } from '../../Atom';

export const CricketScore = () => {
    const [ctArray, setCtArray] = useAtom(cricketTableArray);
    const [ntPlayer, setNtPlayer] = useAtom(nowThrowPlayer);
    let Sum = 0
    let ctArrayTmp = ctArray

    if(ctArray[ntPlayer -1].twenty  > 3){
       Sum += (ctArray[ntPlayer -1 ].twenty-3)*20
       
    } 
      if(ctArray[ntPlayer -1].nineteen  > 3){
        Sum += (ctArray[ntPlayer -1].nineteen-3)*19
    }
      if(ctArray[ntPlayer -1].eighteen  > 3){
        Sum += (ctArray[ntPlayer -1].eighteen-3)*18
    }
      if(ctArray[ntPlayer -1].seventeen  > 3){
        Sum += (ctArray[ntPlayer -1].seventeen-3)*17
    }
      if(ctArray[ntPlayer -1].sixteen  > 3){
        Sum += (ctArray[ntPlayer -1].sixteen-3)*16
    }
      if(ctArray[ntPlayer -1].fifteen  > 3){
        Sum += (ctArray[ntPlayer -1].fifteen-3)*15
    }
    ctArrayTmp[ntPlayer -1].sum = Sum
  return (
    <>
        {ctArray.map((e)=>(
            <Text>
                {`${e.player}${e.sum}`} 
            </Text>
        )) 
        }

    </>
  )
}
