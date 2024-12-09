import { close15, close16, close17, close18, close19, closebull } from "./../Atom";
import { SetStateAction, useAtom, useAtomValue } from "jotai";
import React, { useEffect, useRef } from "react";
import {
  close20,
  cricketTableArray,
  increment,
  nowThrowPlayer,
  playerCount,
  throwCount,
} from "../Atom";

export const useClose = () => {
  const [ctArray, setCTArray] = useAtom(cricketTableArray);
  const [c20, setC20] = useAtom(close20);
  const [c19, setC19] = useAtom(close19);
  const [c18, setC18] = useAtom(close18);
  const [c17, setC17] = useAtom(close17);
  const [c16, setC16] = useAtom(close16);
  const [c15, setC15] = useAtom(close15);
  const [cBull, setCBull] = useAtom(closebull);
  const [ntPlayer, setNtPlayer] = useAtom(nowThrowPlayer);
  const [pCount, setPCount] = useAtom(playerCount);
  const t = useAtomValue(throwCount);
  const [inc, setInc] = useAtom(increment);
  const isFirstClose20 = useRef(false);
  const isFirstClose19 = useRef(false);
  const isFirstClose18 = useRef(false);
  const isFirstClose17 = useRef(false);
  const isFirstClose16 = useRef(false);
  const isFirstClose15 = useRef(false);
  const isFirstClosebull = useRef(false);

  let twentyOpen = 0;
  let nineteenOpen = 0;
  let eighteenOpen = 0;
  let seventeenOpen = 0;
  let sixteenOpen = 0;
  let fifteenOpen = 0;
  let bullOpen = 0;

  ctArray.map((e) => {
    e.twenty >= 3 ? (twentyOpen += 1) : twentyOpen;
    e.nineteen >= 3 ? (nineteenOpen += 1) : nineteenOpen;
    e.eighteen >= 3 ? (eighteenOpen += 1) : eighteenOpen;
    e.seventeen >= 3 ? (seventeenOpen += 1) : seventeenOpen;
    e.sixteen >= 3 ? (sixteenOpen += 1) : sixteenOpen;
    e.fifteen >= 3 ? (fifteenOpen += 1) : fifteenOpen;
    e.bull >= 3 ? (bullOpen += 1) : bullOpen;
  });

  // if (twentyOpen >= pCount && !isFirstClose20.current) {
  //   const cp = ntPlayer;
  //   setC20(cp);
  //   isFirstClose20.current = true;
  // }

  // useEffect(() => {
  //   if (isFirstClose20.current) {
  //     ctArray[c20 - 1].twenty = 3;
  //   }
  // }, [c20, isFirstClose20]);

  // if (c20 > 0) {
  //   ctArray[c20 - 1].twenty = 3;
  // }
  type n =
    | "twenty"
    | "nineteen"
    | "eighteen"
    | "seventeen"
    | "sixteen"
    | "fifteen"
    | "bull";

  const closeLozic = (
    isFirstClose: React.MutableRefObject<boolean>,
    n: n,
    open: number,
    cNum: number,
    set: (update: SetStateAction<number>) => void
  ) => {
    if (open >= pCount && !isFirstClose.current) {
      const cp = ntPlayer;
      set(cp);
      isFirstClose.current = true;
    }

    useEffect(() => {
      if (isFirstClose.current) {
        ctArray[cNum - 1][n] = 3;
      }
    }, [cNum, isFirstClose]);

    if (cNum > 0) {
      ctArray[cNum - 1][n] = 3;
    }
  };

  closeLozic(isFirstClose20, "twenty", twentyOpen, c20, setC20);
  closeLozic(isFirstClose19, "nineteen", nineteenOpen, c19, setC19);
  closeLozic(isFirstClose18, "eighteen", eighteenOpen, c18, setC18);
  closeLozic(isFirstClose17, "seventeen", seventeenOpen, c17, setC17);
  closeLozic(isFirstClose16, "sixteen", sixteenOpen, c16, setC16);
  closeLozic(isFirstClose15, "fifteen", fifteenOpen, c15, setC15);
  closeLozic(isFirstClosebull, "bull", bullOpen, cBull, setCBull);


  return { isFirstClose20,isFirstClose19,isFirstClose18,isFirstClose17,isFirstClose16,isFirstClose15,isFirstClosebull };
};
