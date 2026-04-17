import { vanilja } from '../rentalItems/vanilja'
import { greenGate } from '../rentalItems/greengate'
import { glasses } from '../rentalItems/glasses'
import { tableClothings } from '../rentalItems/poytaliinat'
import { other } from '../rentalItems/other'
import { serving } from '../rentalItems/serving'
import { decorating } from '../rentalItems/decorating'
import { Group } from '../types'

const rentalItems = vanilja
  .concat(greenGate)
  .concat(serving)
  .concat(glasses)
  .concat(decorating)
  .concat(tableClothings)
  .concat(other)

export function rentalItemsByGroup(group: Group) {
  return rentalItems.filter((item) => item.groups?.includes(group))
}
