import { Box } from "@chakra-ui/react";
import React, { useEffect, useRef } from "react";
import { Select } from "../molecules/Select";
import { SegmentCircle } from "../organisms/SegmentCircle";
import { CulCrike } from "../templates/Bord/CulCricke";
import { GameTableCricket } from "../molecules/Tables/GameTable__Cricket";
import { useCricketLogic } from "../../hooks/useCricketLogic";
import { Clear } from "../molecules/Clear";
import { Change } from "../molecules/Change";
import { cricketTableArray, playerCount } from "../../Atom";
import { useAtom, useAtomValue } from "jotai";

export const Cricket = () => {
  const { t, } = useCricketLogic();


  return (
    <Box>
      <Box>
        <SegmentCircle />
        <GameTableCricket />
      </Box>
       {/* {score === 0 && rSum !==0 ? <Clear />:t >= 3 ||score < 0 ? <Change /> : <></> } */}
       {t >= 3 ? <Change /> : <></> }
    </Box>
  );
};
