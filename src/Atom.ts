import { useAtom } from 'jotai';
import {atom, useAtomValue} from 'jotai'

export const optionSelected = atom(false)
// ------01score-------------------

export const number = atom(0)
export const magnification = atom(1)
export const throwCount = atom(0)
export const roundSum = atom(0)
export const round = atom(1)

export const roundArray = atom<number[]>([])
export const gameArray= atom<number[]>([])


export const gameScore = atom<number>(0)
export const burst = atom(false)

// ---------crickescore----------------
export type Mark ={
    num:number
    ,mark:number

} 
export const criPoints= atom<Array<Mark>>([])
export const marks= atom<Array<Array<Mark>>> ([])
export const Twenty = atom(0)

type ctAry = {
    player:string,
    twenty:number,
    nineteen:number,
    eighteen:number,
    seventeen:number,
    sixteen:number,
    fifteen:number,
    bull:number
}

export const cricketTableArray = atom<Array<ctAry>>([])

// --------gameoption------------------
export const game = atom<string | number>("")
export const playerCount = atom(0)
export const sepaOption = atom("")



// const pNum = useAtomValue(playerCount)
// const [ctArray,setCTArray] = useAtom(cricketTableArray) 
// for(let i = 1;i < pNum +1 ; i++){
//     setCTArray((prev)=>(
//         [...prev,{
//             player:`player${i}`,
//             20:"",
//             19:"",
//             18:"",
//             17:"",
//             16:"",
//             15:"",
//         }]
//     ))
// }

