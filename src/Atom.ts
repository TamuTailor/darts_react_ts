import { atom} from 'jotai'

export const number = atom(0)
export const magnification = atom(1)
export const throwCount = atom(0)
export const roundSum = atom(0)
export const round = atom(1)

export const roundArray = atom<number[]>([])
export const gameArray= atom<number[][]>([])



export const game = atom<string | number>("")
export const gameScore = atom<number>(0)

