import { ChainId } from '@pancakeswap/sdk'
import getLpAddress from 'utils/getLpAddress'
import { CHAIN_ID } from './networks'
import tokens from './tokens'
import { FarmAuctionBidderConfig } from './types'

export const whitelistedBidders: FarmAuctionBidderConfig[] =
  Number(CHAIN_ID) === ChainId.MAINNET
    ? [
        // Those farms changed their project wallet address.
        {
          account: '0xA6D19C2A2EA13e9eF02d795155F6c335af764955', // Auction #19
          farmName: 'HAPPY-BNB',
          tokenAddress: '0xF5d8A096CcCb31b9D7bcE5afE812BE23e3D4690d',
          quoteToken: tokens.wbnb,
          tokenName: 'HappyFans',
          projectSite: 'https://happyfans.club/',
        },
      ].map((bidderConfig) => ({
        ...bidderConfig,
        lpAddress: getLpAddress(bidderConfig.tokenAddress, bidderConfig.quoteToken),
      }))
    : []

const UNKNOWN_BIDDER: FarmAuctionBidderConfig = {
  account: '',
  tokenAddress: '',
  quoteToken: tokens.wbnb,
  farmName: 'Unknown',
  tokenName: 'Unknown',
}

export const getBidderInfo = (account: string): FarmAuctionBidderConfig => {
  const matchingBidder = whitelistedBidders.find((bidder) => bidder.account.toLowerCase() === account.toLowerCase())
  if (matchingBidder) {
    return matchingBidder
  }
  return { ...UNKNOWN_BIDDER, account }
}
