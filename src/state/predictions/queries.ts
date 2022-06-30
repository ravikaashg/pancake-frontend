import {
  getRoundBaseFields as getRoundBaseFieldsBNB,
  getBetBaseFields as getBetBaseFieldsBNB,
  getUserBaseFields as getUserBaseFieldsBNB,
} from './bnbQueries'
import {
  getRoundBaseFields as getRoundBaseFieldsCAKE,
  getBetBaseFields as getBetBaseFieldsCAKE,
  getUserBaseFields as getUserBaseFieldsCAKE,
} from './cakeQueries'

export const getRoundBaseFields = (tokenSymbol: string) =>
  tokenSymbol === 'MEGG' ? getRoundBaseFieldsCAKE() : getRoundBaseFieldsBNB()

export const getBetBaseFields = (tokenSymbol: string) =>
  tokenSymbol === 'MEGG' ? getBetBaseFieldsCAKE() : getBetBaseFieldsBNB()

export const getUserBaseFields = (tokenSymbol: string) =>
  tokenSymbol === 'MEGG' ? getUserBaseFieldsCAKE() : getUserBaseFieldsBNB()
