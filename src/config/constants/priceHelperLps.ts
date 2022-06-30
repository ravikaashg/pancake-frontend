import tokens from './tokens'
import { SerializedFarmConfig } from './types'

const priceHelperLps: SerializedFarmConfig[] = [
  /**
   * These LPs are just used to help with price calculation for MasterChef LPs (farms.ts).
   * This list is added to the MasterChefLps and passed to fetchFarm. The calls to get contract information about the token/quoteToken in the LP are still made.
   * The absence of a PID means the masterchef contract calls are skipped for this farm.
   * Prices are then fetched for all farms (masterchef + priceHelperLps).
   * Before storing to redux, farms without a PID are filtered out.
   */
  {
    pid: null,
    lpSymbol: 'ANKR-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x3147F98B8f9C53Acdf8F16332eaD12B592a1a4ae',
    },
    token: tokens.ankr,
    quoteToken: tokens.wbnb,
  },
  {
    pid: null,
    lpSymbol: 'FGG-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0xF088a8c4e68990C29E538Ee3368CEc8a93E11DfD',
    },
    token: tokens.fgg,
    quoteToken: tokens.busd,
  },
]

export default priceHelperLps
