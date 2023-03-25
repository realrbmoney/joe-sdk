import JSBI from 'jsbi'

// exports for external consumption
export type BigintIsh = JSBI | bigint | string

export enum ChainId {
  FUJI = 43113,
  AVALANCHE = 43114,
  ARBITRUM_ONE = 42161,
  ARB_GOERLI = 421613,
  BNB_CHAIN = 56,
  BNB_TESTNET = 97
}

export enum TradeType {
  EXACT_INPUT,
  EXACT_OUTPUT
}

export enum Rounding {
  ROUND_DOWN,
  ROUND_HALF_UP,
  ROUND_UP
}

/**
 * DEX SDK
 */
export const FACTORY_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.FUJI]: '0xF5c7d9733e5f53abCC1695820c4818C59B457C2C',
  [ChainId.AVALANCHE]: '0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10',
  [ChainId.ARBITRUM_ONE]: '0x6EcCab422D763aC031210895C81787E87B43A652',
  [ChainId.ARB_GOERLI]: '0x1886D09C9Ade0c5DB822D85D21678Db67B6c2982',
  [ChainId.BNB_CHAIN]: '0x4f8bdc85E3eec5b9dE67097c3f59B6Db025d9986',
  [ChainId.BNB_TESTNET]: '0x4f953EFDbcE2B8CAe76e5b4779A682d9ab0c941c'
}

export const ROUTER_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.FUJI]: '0xd7f655E3376cE2D7A2b08fF01Eb3B1023191A901',
  [ChainId.AVALANCHE]: '0x60aE616a2155Ee3d9A68541Ba4544862310933d4',
  [ChainId.ARBITRUM_ONE]: '0xc873fEcbd354f5A56E00E710B90EF4201db2448d',
  [ChainId.ARB_GOERLI]: '0x454206AD825cAfaE03c9581014AF6b74f7D53713',
  [ChainId.BNB_CHAIN]: '0x89Fa1974120d2a7F83a0cb80df3654721c6a38Cd',
  [ChainId.BNB_TESTNET]: '0x0007963AE06b1771Ee5E979835D82d63504Cf11d'
}

export const JOE_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.FUJI]: '0x477Fd10Db0D80eAFb773cF623B258313C3739413',
  [ChainId.AVALANCHE]: '0x6e84a6216eA6dACC71eE8E6b0a5B7322EEbC0fDd',
  [ChainId.ARBITRUM_ONE]: '0x371c7ec6D8039ff7933a2AA28EB827Ffe1F52f07',
  [ChainId.ARB_GOERLI]: '0x0000000000000000000000000000000000000000',
  [ChainId.BNB_CHAIN]: '0x371c7ec6D8039ff7933a2AA28EB827Ffe1F52f07',
  [ChainId.BNB_TESTNET]: '0x0000000000000000000000000000000000000000'
}

export const MASTERCHEF_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.FUJI]: '0xEAA9637E54D4Da88d7A56E797C2EAa4950111033',
  [ChainId.AVALANCHE]: '0xd6a4F121CA35509aF06A0Be99093d08462f53052',
  [ChainId.ARBITRUM_ONE]: '0x0000000000000000000000000000000000000000',
  [ChainId.ARB_GOERLI]: '0x0000000000000000000000000000000000000000',
  [ChainId.BNB_CHAIN]: '0x0000000000000000000000000000000000000000',
  [ChainId.BNB_TESTNET]: '0x0000000000000000000000000000000000000000'
}

export const MASTERCHEF_V3_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.FUJI]: '0x47e4B09651D76609e902183c2315b0638fa8375E',
  [ChainId.AVALANCHE]: '0x188bED1968b795d5c9022F6a0bb5931Ac4c18F00',
  [ChainId.ARBITRUM_ONE]: '0x0000000000000000000000000000000000000000',
  [ChainId.ARB_GOERLI]: '0x0000000000000000000000000000000000000000',
  [ChainId.BNB_CHAIN]: '0x0000000000000000000000000000000000000000',
  [ChainId.BNB_TESTNET]: '0x0000000000000000000000000000000000000000'
}

export const BAR_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.FUJI]: '0x200BdB3Ed6bF347421329FdbF1813dE87F1A456a',
  [ChainId.AVALANCHE]: '0x57319d41F71E81F3c65F2a47CA4e001EbAFd4F33',
  [ChainId.ARBITRUM_ONE]: '0x0000000000000000000000000000000000000000',
  [ChainId.ARB_GOERLI]: '0x0000000000000000000000000000000000000000',
  [ChainId.BNB_CHAIN]: '0x0000000000000000000000000000000000000000',
  [ChainId.BNB_TESTNET]: '0x0000000000000000000000000000000000000000'
}

export const ZAP_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.FUJI]: '0x035CA9dB0e001808cB8CD20D1d1C592dF1250107',
  [ChainId.AVALANCHE]: '0x2C7B8e971c704371772eDaf16e0dB381A8D02027',
  [ChainId.ARBITRUM_ONE]: '0x0000000000000000000000000000000000000000',
  [ChainId.ARB_GOERLI]: '0x0000000000000000000000000000000000000000',
  [ChainId.BNB_CHAIN]: '0x0000000000000000000000000000000000000000',
  [ChainId.BNB_TESTNET]: '0x0000000000000000000000000000000000000000'
}

export const MAKER_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.FUJI]: '0x6De03a4221d325Edc9707CEdeff9C150e99d6eC5',
  [ChainId.AVALANCHE]: '0x861726BFE27931A4E22a7277bDe6cb8432b65856',
  [ChainId.ARBITRUM_ONE]: '0x0000000000000000000000000000000000000000',
  [ChainId.ARB_GOERLI]: '0x0000000000000000000000000000000000000000',
  [ChainId.BNB_CHAIN]: '0x0000000000000000000000000000000000000000',
  [ChainId.BNB_TESTNET]: '0x0000000000000000000000000000000000000000'
}

export const ROLL_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.FUJI]: '0x41d5f5F66e4cEd197Ff273308A1c194E9E249f4F',
  [ChainId.AVALANCHE]: '0xacFF0fBf56bAeb9Ef677DE19ADED8F7A950BCb58',
  [ChainId.ARBITRUM_ONE]: '0x0000000000000000000000000000000000000000',
  [ChainId.ARB_GOERLI]: '0x0000000000000000000000000000000000000000',
  [ChainId.BNB_CHAIN]: '0x0000000000000000000000000000000000000000',
  [ChainId.BNB_TESTNET]: '0x0000000000000000000000000000000000000000'
}

export const BORINGHELPER_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.FUJI]: '0x832452DBa66232193C0fb525D5165a3A58b6811B',
  [ChainId.AVALANCHE]: '0x1dd4D86180EEe39ac4fB35ECa67CACF608Ab5741',
  [ChainId.ARBITRUM_ONE]: '0x0000000000000000000000000000000000000000',
  [ChainId.ARB_GOERLI]: '0x0000000000000000000000000000000000000000',
  [ChainId.BNB_CHAIN]: '0x0000000000000000000000000000000000000000',
  [ChainId.BNB_TESTNET]: '0x0000000000000000000000000000000000000000'
}

export const BORINGHELPER_MCV3_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.FUJI]: '0x87631c1Ec5312e030D4874231d8e0AFc545928A2',
  [ChainId.AVALANCHE]: '0xce63ECA0C8A2084C1BaEcE7737dB88f10c412c5E',
  [ChainId.ARBITRUM_ONE]: '0x0000000000000000000000000000000000000000',
  [ChainId.ARB_GOERLI]: '0x0000000000000000000000000000000000000000',
  [ChainId.BNB_CHAIN]: '0x0000000000000000000000000000000000000000',
  [ChainId.BNB_TESTNET]: '0x0000000000000000000000000000000000000000'
}

export const BORINGHELPER_BMCJ_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.FUJI]: '0x9B427cBE6cee480773Fb889ec7067B8b1541dA7f',
  [ChainId.AVALANCHE]: '0x80242b13F37eEB5B59fFe0e988d69133f1b19747',
  [ChainId.ARBITRUM_ONE]: '0x0000000000000000000000000000000000000000',
  [ChainId.ARB_GOERLI]: '0x0000000000000000000000000000000000000000',
  [ChainId.BNB_CHAIN]: '0x0000000000000000000000000000000000000000',
  [ChainId.BNB_TESTNET]: '0x0000000000000000000000000000000000000000'
}

export const BORINGTOKENSCANNER_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.FUJI]: '0xD28be693a573a26f50195213613EC893Ad5c4460',
  [ChainId.AVALANCHE]: '0x5cFcA5b2149A20A166508B28e5FCFA65c44c6B9c',
  [ChainId.ARBITRUM_ONE]: '0x0000000000000000000000000000000000000000',
  [ChainId.ARB_GOERLI]: '0x0000000000000000000000000000000000000000',
  [ChainId.BNB_CHAIN]: '0x0000000000000000000000000000000000000000',
  [ChainId.BNB_TESTNET]: '0x0000000000000000000000000000000000000000'
}

export const BORINGDASHBOARD_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.FUJI]: '0xD28be693a573a26f50195213613EC893Ad5c4460',
  [ChainId.AVALANCHE]: '0x1Af353148F2316487b5311Fcd522c037842D232c',
  [ChainId.ARBITRUM_ONE]: '0x0000000000000000000000000000000000000000',
  [ChainId.ARB_GOERLI]: '0x0000000000000000000000000000000000000000',
  [ChainId.BNB_CHAIN]: '0x0000000000000000000000000000000000000000',
  [ChainId.BNB_TESTNET]: '0x0000000000000000000000000000000000000000'
}

export const LOCKING_WRAPPER_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.FUJI]: '0x0000000000000000000000000000000000000000',
  [ChainId.AVALANCHE]: '0xDc3B37B5F0Fe5d3f8b8701a3F8d81A02EE8A1E1a',
  [ChainId.ARBITRUM_ONE]: '0x0000000000000000000000000000000000000000',
  [ChainId.ARB_GOERLI]: '0x0000000000000000000000000000000000000000',
  [ChainId.BNB_CHAIN]: '0x0000000000000000000000000000000000000000',
  [ChainId.BNB_TESTNET]: '0x0000000000000000000000000000000000000000'
}

export const FARMLENS_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.FUJI]: '0x0000000000000000000000000000000000000000',
  [ChainId.AVALANCHE]: '0x8A6FA314799b5E5553Cbce7fab3d9EAdEf5ee85a',
  [ChainId.ARBITRUM_ONE]: '0x0000000000000000000000000000000000000000',
  [ChainId.ARB_GOERLI]: '0x0000000000000000000000000000000000000000',
  [ChainId.BNB_CHAIN]: '0x0000000000000000000000000000000000000000',
  [ChainId.BNB_TESTNET]: '0x0000000000000000000000000000000000000000'
}

export const FARMLENSV2_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.FUJI]: '0x6B41A932D2A9f00476229733980D80EE11Dd1617',
  [ChainId.AVALANCHE]: '0xF16d25Eba0D8E51cEAF480141bAf577aE55bfdd2',
  [ChainId.ARBITRUM_ONE]: '0x0000000000000000000000000000000000000000',
  [ChainId.ARB_GOERLI]: '0x0000000000000000000000000000000000000000',
  [ChainId.BNB_CHAIN]: '0x0000000000000000000000000000000000000000',
  [ChainId.BNB_TESTNET]: '0x0000000000000000000000000000000000000000'
}

export const ROCKET_JOE_TOKEN_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.FUJI]: '0x2Dc95E863BE58a6EFfe9b5B5D8275537e83bfbE4',
  [ChainId.AVALANCHE]: '0x5483ce08659fABF0277f9314868Cc4f78687BD08',
  [ChainId.ARBITRUM_ONE]: '0x0000000000000000000000000000000000000000',
  [ChainId.ARB_GOERLI]: '0x0000000000000000000000000000000000000000',
  [ChainId.BNB_CHAIN]: '0x0000000000000000000000000000000000000000',
  [ChainId.BNB_TESTNET]: '0x0000000000000000000000000000000000000000'
}

export const LAUNCH_EVENT_LENS_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.FUJI]: '0xBeC83e09C4e461de91fD0F65AFbEd17046F3D9DD',
  [ChainId.AVALANCHE]: '0x039AA5d3FC07f6f265656793A8c437055b653d68',
  [ChainId.ARBITRUM_ONE]: '0x0000000000000000000000000000000000000000',
  [ChainId.ARB_GOERLI]: '0x0000000000000000000000000000000000000000',
  [ChainId.BNB_CHAIN]: '0x0000000000000000000000000000000000000000',
  [ChainId.BNB_TESTNET]: '0x0000000000000000000000000000000000000000'
}

export const ROCKET_JOE_STAKING_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.FUJI]: '0x1a1171b5faa9954A68F3679EF91E4dACd6D2c247',
  [ChainId.AVALANCHE]: '0x102D195C3eE8BF8A9A89d63FB3659432d3174d81',
  [ChainId.ARBITRUM_ONE]: '0x0000000000000000000000000000000000000000',
  [ChainId.ARB_GOERLI]: '0x0000000000000000000000000000000000000000',
  [ChainId.BNB_CHAIN]: '0x0000000000000000000000000000000000000000',
  [ChainId.BNB_TESTNET]: '0x0000000000000000000000000000000000000000'
}

export const STABLE_JOE_STAKING_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.FUJI]: '0x5Fd0A10CA299a02429418EAAcC7286482a5f075D',
  [ChainId.AVALANCHE]: '0x1a731B2299E22FbAC282E7094EdA41046343Cb51',
  [ChainId.ARBITRUM_ONE]: '0x0000000000000000000000000000000000000000',
  [ChainId.ARB_GOERLI]: '0x0000000000000000000000000000000000000000',
  [ChainId.BNB_CHAIN]: '0x0000000000000000000000000000000000000000',
  [ChainId.BNB_TESTNET]: '0x0000000000000000000000000000000000000000'
}

export const MONEY_MAKER_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.FUJI]: '0x6De03a4221d325Edc9707CEdeff9C150e99d6eC5',
  [ChainId.AVALANCHE]: '0x63C0CF90aE12190B388F9914531369aC1e4e4e47',
  [ChainId.ARBITRUM_ONE]: '0x0000000000000000000000000000000000000000',
  [ChainId.ARB_GOERLI]: '0x0000000000000000000000000000000000000000',
  [ChainId.BNB_CHAIN]: '0x0000000000000000000000000000000000000000',
  [ChainId.BNB_TESTNET]: '0x0000000000000000000000000000000000000000'
}

export const SJOE_REWARD_TOKEN: { [chainId in ChainId]: string } = {
  [ChainId.FUJI]: '0x950c6f4f97dd62bd3ca76f084663224fd2e6b555',
  [ChainId.AVALANCHE]: '0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E',
  [ChainId.ARBITRUM_ONE]: '0x0000000000000000000000000000000000000000',
  [ChainId.ARB_GOERLI]: '0x0000000000000000000000000000000000000000',
  [ChainId.BNB_CHAIN]: '0x0000000000000000000000000000000000000000',
  [ChainId.BNB_TESTNET]: '0x0000000000000000000000000000000000000000'
}

export const VEJOE_STAKING_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.FUJI]: '0x63064873AC2e94bbe82479265BD252417b34C462',
  [ChainId.AVALANCHE]: '0x25D85E17dD9e544F6E9F8D44F99602dbF5a97341',
  [ChainId.ARBITRUM_ONE]: '0x0000000000000000000000000000000000000000',
  [ChainId.ARB_GOERLI]: '0x0000000000000000000000000000000000000000',
  [ChainId.BNB_CHAIN]: '0x0000000000000000000000000000000000000000',
  [ChainId.BNB_TESTNET]: '0x0000000000000000000000000000000000000000'
}

export const VEJOE_TOKEN_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.FUJI]: '0x8043E85a15c7F4Ad58a24712Cf08C624B52fAa34',
  [ChainId.AVALANCHE]: '0x3cabf341943Bc8466245e4d6F1ae0f8D071a1456',
  [ChainId.ARBITRUM_ONE]: '0x0000000000000000000000000000000000000000',
  [ChainId.ARB_GOERLI]: '0x0000000000000000000000000000000000000000',
  [ChainId.BNB_CHAIN]: '0x0000000000000000000000000000000000000000',
  [ChainId.BNB_TESTNET]: '0x0000000000000000000000000000000000000000'
}

export const BOOSTED_MASTERCHEF_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.FUJI]: '0xEE7B7871755bCe3CD1B0aa1d01320Dd311b08279',
  [ChainId.AVALANCHE]: '0x4483f0b6e2F5486D06958C20f8C39A7aBe87bf8F',
  [ChainId.ARBITRUM_ONE]: '0x0000000000000000000000000000000000000000',
  [ChainId.ARB_GOERLI]: '0x0000000000000000000000000000000000000000',
  [ChainId.BNB_CHAIN]: '0x0000000000000000000000000000000000000000',
  [ChainId.BNB_TESTNET]: '0x0000000000000000000000000000000000000000'
}

export const INIT_CODE_HASH: { [chainId in ChainId]: string } = {
  [ChainId.FUJI]: '0x6c67ac67d0dad54be7b066edd9b4154fb5a0ab7d01232259b9ff26ebc1739ba2',
  [ChainId.AVALANCHE]: '0x0bbca9af0511ad1a1da383135cf3a8d2ac620e549ef9f6ae3a4c33c2fed0af91',
  [ChainId.ARBITRUM_ONE]: '0xa856464ae65f7619087bc369daaf7e387dae1e5af69cfa7935850ebf754b04c1',
  [ChainId.ARB_GOERLI]: '0xb6ca21329f2e28f35a5fc6848619516b62c84c068b584d1497decf19662bb190',
  [ChainId.BNB_CHAIN]: '0x75e986a1d8c57bd5530b4b59ab7dd63c4d4ad267f147e17774264956de33c282',
  [ChainId.BNB_TESTNET]: '0x75e986a1d8c57bd5530b4b59ab7dd63c4d4ad267f147e17774264956de33c282'
}

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const TWO = JSBI.BigInt(2)
export const THREE = JSBI.BigInt(3)
export const FIVE = JSBI.BigInt(5)
export const TEN = JSBI.BigInt(10)
export const _100 = JSBI.BigInt(100)
export const _997 = JSBI.BigInt(997)
export const _1000 = JSBI.BigInt(1000)

export enum SolidityType {
  uint8 = 'uint8',
  uint256 = 'uint256'
}

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt('0xff'),
  [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
}

/**
 * Lending SDK
 */

export const UNITROLLER_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.FUJI]: '0xf817f74bb514cb0AF7d3b56299c33C33895630f2',
  [ChainId.AVALANCHE]: '0xdc13687554205E5b89Ac783db14bb5bba4A1eDaC',
  [ChainId.ARBITRUM_ONE]: '0x0000000000000000000000000000000000000000',
  [ChainId.ARB_GOERLI]: '0x0000000000000000000000000000000000000000',
  [ChainId.BNB_CHAIN]: '0x0000000000000000000000000000000000000000',
  [ChainId.BNB_TESTNET]: '0x0000000000000000000000000000000000000000'
}

// used to get jToken balances, jToken metadata, account’s borrow limit & claimable rewards
export const JOELENS_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.FUJI]: '0x3A2C79d45EEdcE68d3993F807336D4b0b41741b0',
  [ChainId.AVALANCHE]: '0x994Ed0698F5145211Fd5DAE458dD7d91c2da6CEC',
  [ChainId.ARBITRUM_ONE]: '0x0000000000000000000000000000000000000000',
  [ChainId.ARB_GOERLI]: '0x0000000000000000000000000000000000000000',
  [ChainId.BNB_CHAIN]: '0x0000000000000000000000000000000000000000',
  [ChainId.BNB_TESTNET]: '0x0000000000000000000000000000000000000000'
}

export const JAVAX_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.FUJI]: '0xE2b2CF0Cc751223C4F2Dc9EF1Cd8d2F27f92a84a',
  [ChainId.AVALANCHE]: '0xC22F01ddc8010Ee05574028528614634684EC29e',
  [ChainId.ARBITRUM_ONE]: '0x0000000000000000000000000000000000000000',
  [ChainId.ARB_GOERLI]: '0x0000000000000000000000000000000000000000',
  [ChainId.BNB_CHAIN]: '0x0000000000000000000000000000000000000000',
  [ChainId.BNB_TESTNET]: '0x0000000000000000000000000000000000000000'
}

// used to repay an account’s borrow amount in the jAvax market
export const MAXIMILLION_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.FUJI]: '0x7b647D11b2E9354fA570B8613BD361AE51e51c27',
  [ChainId.AVALANCHE]: '0xe5cDdAFd0f7Af3DEAf4bd213bBaee7A5927AB7E7',
  [ChainId.ARBITRUM_ONE]: '0x0000000000000000000000000000000000000000',
  [ChainId.ARB_GOERLI]: '0x0000000000000000000000000000000000000000',
  [ChainId.BNB_CHAIN]: '0x0000000000000000000000000000000000000000',
  [ChainId.BNB_TESTNET]: '0x0000000000000000000000000000000000000000'
}
