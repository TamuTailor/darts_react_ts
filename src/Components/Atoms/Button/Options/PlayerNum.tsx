import { Box, Button } from "@chakra-ui/react";
import { css } from "@emotion/react";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import React, { useEffect, useRef } from "react";
import { cricketDataArray, cricketTableArray, playerCount } from "../../../../Atom";
import { useButtonColorChange } from "../../../../hooks/useButtonColorChange";

export const PlayerNum = () => {
  const { colorChange, styles, buttonColor } = useButtonColorChange();
  const setPlayers = useSetAtom(playerCount);  
  const [ctArray,setCTArray] = useAtom(cricketTableArray) 

  const [cdArray, setCdArray] = useAtom(cricketDataArray);
  const cdArrayTmp = []


  const playerCounter = (e: React.MouseEvent<HTMLButtonElement>) => {
    const p = Number(e.currentTarget.value);
    setPlayers(p);
    colorChange(e);
    const pNArray = []
    for(let i = 1;i < p +1 ; i++){
      pNArray.push(  {player:`player${i}`,
              twenty:0,
              nineteen:0,
              eighteen:0,
              seventeen:0,
              sixteen:0,
              fifteen:0,
              bull:0,
              sum:0
            }
)     
  }
  for(let i = 0; i < p  ;i++)
    {
      cdArrayTmp.push([])
       setCdArray(cdArrayTmp)
    }
   
  setCTArray(pNArray)
  };

  const pNum = useAtomValue(playerCount)


  return (
    <Box>
      <Button
        onClick={(event: React.MouseEvent<HTMLButtonElement>) =>
          playerCounter(event)
        }
        value={1}
        css={buttonColor === "1" ? styles.true : styles.false}
      >
        1Player
      </Button>
      <Button
        onClick={(event: React.MouseEvent<HTMLButtonElement>) =>
          playerCounter(event)
        }
        value={2}
        css={buttonColor === "2" ? styles.true : styles.false}
      >
        2Player
      </Button>
      <Button
        onClick={(event: React.MouseEvent<HTMLButtonElement>) =>
          playerCounter(event)
        }
        value={3}
        css={buttonColor === "3" ? styles.true : styles.false}
      >
        3Player
      </Button>
      <Button
        onClick={(event: React.MouseEvent<HTMLButtonElement>) =>
          playerCounter(event)
        }
        value={4}
        css={buttonColor === "4" ? styles.true : styles.false}
      >
        4Player
      </Button>
    </Box>
  );
};
