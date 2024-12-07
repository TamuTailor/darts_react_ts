
import { useAtom } from "jotai";
import { atom, useAtomValue } from "jotai";

export const optionSelected = atom(false);
// ------01score-------------------

export const number = atom(0);
export const magnification = atom(1);
export const throwCount = atom(0);
export const roundSum = atom(0);
export const round = atom(1);

export const roundArray = atom<number[]>([]);
export const gameArray = atom<number[]>([]);

export const gameScore = atom<number>(0);
export const burst = atom(false);

// ---------crickescore----------------
export type Mark = {
  num: number;
  mark: number;
};
export const criPoints = atom<Array<Mark>>([]);
export const marks = atom<Array<Array<Mark>>>([]);
export const Twenty = atom(0);

type ctAry = {
  player: string;
  twenty: number;
  nineteen: number;
  eighteen: number;
  seventeen: number;
  sixteen: number;
  fifteen: number;
  bull: number;
  sum:number
};
export type roundDataType = Mark[]
export type playerData = Array<roundDataType>

export const cricketTableArray = atom<Array<ctAry>>([]);
export const cricketDataArray = atom<Array<playerData>>([]);

export const close20 = atom(0)
export const close19 = atom(false)
export const close18 = atom(false)
export const close17 = atom(false)
export const close16 = atom(false)
export const close15 = atom(false)
export const closebull = atom(false)

// --------gameoption------------------
export const game = atom<string | number>("");
export const playerCount = atom(0);
export const sepaOption = atom("");

export const nowThrowPlayer = atom(1)


export const increment = atom(0)