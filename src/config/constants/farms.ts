import tokens from './tokens'
import { FarmConfig } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    lpSymbol: 'PINE',
    isTokenOnly: true,
    lpAddresses: {
      200101: '0x9F6D4aAbAfDcf7d3a63BC61b2d7be9E3EED6e916',
      56: '0x9F6D4aAbAfDcf7d3a63BC61b2d7be9E3EED6e916', /* 0x3e76bd1edb5f6d981dd14d9d2ab711f0c2a0a6a0 */
    },
    token: tokens.pine,
    quoteToken: tokens.busd,
  },
  {
    pid: 1,
    lpSymbol: 'PINE-ADA LP',
    lpAddresses: {
      200101: '0xaAC5BB0f4749D8D317f016327f94107D17870f1b',
      56: '0xaAC5BB0f4749D8D317f016327f94107D17870f1b',
    },
    token: tokens.pine,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 2,
    lpSymbol: 'DAI-ADA LP',
    lpAddresses: {
      200101: '0xa021a60250a7d5af3941542927a154bafdde2393',
      56: '0x58f876857a02d6762e0101bb5c46a8c1ed44dc16',
    },
    quoteToken: tokens.wbnb,
    token: tokens.busd,
  },
  {
    pid: 3,
    lpSymbol: 'PINE-DAI LP',
    lpAddresses: {
      200101: '0x0ADC86ee9bE178F490833b6A904D2A731662C4bf',
      56: '',
    },
    token: tokens.pine,
    quoteToken: tokens.busd,
  },
  {
    pid: 4,
    lpSymbol: 'WADA',
    isTokenOnly: true,
    lpAddresses: {
      200101: '0x65a51E52eCD17B641f8F0D1d56a6c9738951FDC9',
      56: '0x152E2D46798f2827d46F2DAd098bf7Cd8B985538', /* 0x152E2D46798f2827d46F2DAd098bf7Cd8B985538 */
    },
    token: tokens.wbnb,
    quoteToken: tokens.busd,
  },
  {
    pid: 5,
    lpSymbol: 'DAI',
    isTokenOnly: true,
    lpAddresses: {
      200101: '0xf8B13C34A1c8b8a3207e55d00bc947212949C6AC',
      56: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
    },
    token: tokens.busd,
    quoteToken: tokens.busd,
  },

]

export default farms
