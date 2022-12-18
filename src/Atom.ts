import {atom} from 'jotai'

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

// --------gameoption------------------
export const game = atom<string | number>("")
export const playerCount = atom(0)
export const sepaOption = atom("")
