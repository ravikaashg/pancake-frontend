import { BigNumber } from '@ethersproject/bignumber'
import Trans from 'components/Trans'
import { VaultKey } from 'state/types'
import { CHAIN_ID } from './networks'
import tokens, { serializeTokens } from './tokens'
import { SerializedPoolConfig, PoolCategory } from './types'

const serializedTokens = serializeTokens()

export const MAX_LOCK_DURATION = 31536000
export const UNLOCK_FREE_DURATION = 604800
export const ONE_WEEK_DEFAULT = 604800
export const BOOST_WEIGHT = BigNumber.from('20000000000000')
export const DURATION_FACTOR = BigNumber.from('31536000')

export const vaultPoolConfig = {
  [VaultKey.CakeVaultV1]: {
    name: <Trans>Auto MEGG</Trans>,
    description: <Trans>Automatic restaking</Trans>,
    autoCompoundFrequency: 5000,
    gasLimit: 380000,
    tokenImage: {
      primarySrc: `/images/tokens/${tokens.megg.address}.svg`,
      secondarySrc: '/images/tokens/autorenew.svg',
    },
  },
  [VaultKey.CakeVault]: {
    name: <Trans>Stake MEGG</Trans>,
    description: <Trans>Stake, Earn – And more!</Trans>,
    autoCompoundFrequency: 5000,
    gasLimit: 500000,
    tokenImage: {
      primarySrc: `/images/tokens/${tokens.megg.address}.svg`,
      secondarySrc: '/images/tokens/autorenew.svg',
    },
  },
  [VaultKey.IfoPool]: {
    name: 'IFO MEGG',
    description: <Trans>Stake MEGG to participate in IFOs</Trans>,
    autoCompoundFrequency: 1,
    gasLimit: 500000,
    tokenImage: {
      primarySrc: `/images/tokens/${tokens.megg.address}.svg`,
      secondarySrc: `/images/tokens/ifo-pool-icon.svg`,
    },
  },
} as const

const pools: SerializedPoolConfig[] = [
  {
    sousId: 0,
    stakingToken: serializedTokens.megg,
    earningToken: serializedTokens.megg,
    contractAddress: {
      97: '',
      56: '0xa5f8C5Dbd5F286960b9d90548680aE5ebFf07652',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '10',
    isFinished: false,
  },
  {
    sousId: 284,
    stakingToken: serializedTokens.megg,
    earningToken: serializedTokens.fgg,
    contractAddress: {
      97: '',
      56: '0xF088a8c4e68990C29E538Ee3368CEc8a93E11DfD',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '1937.62',
    version: 3,
  },
].filter((p) => !!p.contractAddress[CHAIN_ID])

// known finished pools
const finishedPools = [
  {
    sousId: 278,
    stakingToken: serializedTokens.megg,
    earningToken: serializedTokens.rpg,
    contractAddress: {
      97: '',
      56: '0xD1c395BCdC2d64ac6544A34A36185483B00530a1',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.06794',
    version: 3,
  },

  {
    sousId: 262,
    stakingToken: serializedTokens.megg,
    earningToken: serializedTokens.ach,
    contractAddress: {
      97: '',
      56: '0xD5668e936B951292Ddf8c84553CC58F85948F816',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    enableEmergencyWithdraw: true,
    tokenPerBlock: '7.502',
  },
]
  .filter((p) => !!p.contractAddress[CHAIN_ID])
  .map((p) => ({ ...p, isFinished: true }))

export default [...pools, ...finishedPools]
