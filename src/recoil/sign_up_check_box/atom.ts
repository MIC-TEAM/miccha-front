import { atom } from 'recoil'

export const allCheckItemAtom = atom<boolean>({
  key: 'allCheckItemAtom',
  default: false,
})

export const subCheckItemsAtom = atom<boolean[]>({
  key: 'subCheckItemsAtom',
  default: [false, false, false, false],
})
