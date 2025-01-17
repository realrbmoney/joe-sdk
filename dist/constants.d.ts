import JSBI from 'jsbi';
export type BigintIsh = JSBI | bigint | string;
export declare enum ChainId {
    FUJI = 43113,
    AVALANCHE = 43114,
    ARBITRUM_ONE = 42161,
    ARB_GOERLI = 421613,
    BNB_CHAIN = 56,
    BNB_TESTNET = 97
}
export declare enum TradeType {
    EXACT_INPUT = 0,
    EXACT_OUTPUT = 1
}
export declare enum Rounding {
    ROUND_DOWN = 0,
    ROUND_HALF_UP = 1,
    ROUND_UP = 2
}
/**
 * DEX SDK
 */
export declare const FACTORY_ADDRESS: {
    [chainId in ChainId]: string;
};
export declare const ROUTER_ADDRESS: {
    [chainId in ChainId]: string;
};
export declare const JOE_ADDRESS: {
    [chainId in ChainId]: string;
};
export declare const MASTERCHEF_ADDRESS: {
    [chainId in ChainId]: string;
};
export declare const MASTERCHEF_V3_ADDRESS: {
    [chainId in ChainId]: string;
};
export declare const BAR_ADDRESS: {
    [chainId in ChainId]: string;
};
export declare const ZAP_ADDRESS: {
    [chainId in ChainId]: string;
};
export declare const MAKER_ADDRESS: {
    [chainId in ChainId]: string;
};
export declare const ROLL_ADDRESS: {
    [chainId in ChainId]: string;
};
export declare const BORINGHELPER_ADDRESS: {
    [chainId in ChainId]: string;
};
export declare const BORINGHELPER_MCV3_ADDRESS: {
    [chainId in ChainId]: string;
};
export declare const BORINGHELPER_BMCJ_ADDRESS: {
    [chainId in ChainId]: string;
};
export declare const BORINGTOKENSCANNER_ADDRESS: {
    [chainId in ChainId]: string;
};
export declare const BORINGDASHBOARD_ADDRESS: {
    [chainId in ChainId]: string;
};
export declare const LOCKING_WRAPPER_ADDRESS: {
    [chainId in ChainId]: string;
};
export declare const FARMLENS_ADDRESS: {
    [chainId in ChainId]: string;
};
export declare const FARMLENSV2_ADDRESS: {
    [chainId in ChainId]: string;
};
export declare const ROCKET_JOE_TOKEN_ADDRESS: {
    [chainId in ChainId]: string;
};
export declare const LAUNCH_EVENT_LENS_ADDRESS: {
    [chainId in ChainId]: string;
};
export declare const ROCKET_JOE_STAKING_ADDRESS: {
    [chainId in ChainId]: string;
};
export declare const STABLE_JOE_STAKING_ADDRESS: {
    [chainId in ChainId]: string;
};
export declare const MONEY_MAKER_ADDRESS: {
    [chainId in ChainId]: string;
};
export declare const SJOE_REWARD_TOKEN: {
    [chainId in ChainId]: string;
};
export declare const VEJOE_STAKING_ADDRESS: {
    [chainId in ChainId]: string;
};
export declare const VEJOE_TOKEN_ADDRESS: {
    [chainId in ChainId]: string;
};
export declare const BOOSTED_MASTERCHEF_ADDRESS: {
    [chainId in ChainId]: string;
};
export declare const INIT_CODE_HASH: {
    [chainId in ChainId]: string;
};
export declare const MINIMUM_LIQUIDITY: JSBI;
export declare const ZERO: JSBI;
export declare const ONE: JSBI;
export declare const TWO: JSBI;
export declare const THREE: JSBI;
export declare const FIVE: JSBI;
export declare const TEN: JSBI;
export declare const _100: JSBI;
export declare const _997: JSBI;
export declare const _1000: JSBI;
export declare enum SolidityType {
    uint8 = "uint8",
    uint256 = "uint256"
}
export declare const SOLIDITY_TYPE_MAXIMA: {
    uint8: JSBI;
    uint256: JSBI;
};
/**
 * Lending SDK
 */
export declare const UNITROLLER_ADDRESS: {
    [chainId in ChainId]: string;
};
export declare const JOELENS_ADDRESS: {
    [chainId in ChainId]: string;
};
export declare const JAVAX_ADDRESS: {
    [chainId in ChainId]: string;
};
export declare const MAXIMILLION_ADDRESS: {
    [chainId in ChainId]: string;
};
