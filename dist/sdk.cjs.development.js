'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var JSBI = _interopDefault(require('jsbi'));
var invariant = _interopDefault(require('tiny-invariant'));
var warning = _interopDefault(require('tiny-warning'));
var address = require('@ethersproject/address');
var _Big = _interopDefault(require('big.js'));
var toFormat = _interopDefault(require('toformat'));
var _Decimal = _interopDefault(require('decimal.js-light'));
var solidity = require('@ethersproject/solidity');
var contracts = require('@ethersproject/contracts');
var networks = require('@ethersproject/networks');
var providers = require('@ethersproject/providers');

var _FACTORY_ADDRESS, _ROUTER_ADDRESS, _JOE_ADDRESS, _MASTERCHEF_ADDRESS, _MASTERCHEF_V3_ADDRES, _BAR_ADDRESS, _ZAP_ADDRESS, _MAKER_ADDRESS, _ROLL_ADDRESS, _BORINGHELPER_ADDRESS, _BORINGHELPER_MCV3_AD, _BORINGHELPER_BMCJ_AD, _BORINGTOKENSCANNER_A, _BORINGDASHBOARD_ADDR, _LOCKING_WRAPPER_ADDR, _FARMLENS_ADDRESS, _FARMLENSV2_ADDRESS, _ROCKET_JOE_TOKEN_ADD, _LAUNCH_EVENT_LENS_AD, _ROCKET_JOE_STAKING_A, _STABLE_JOE_STAKING_A, _MONEY_MAKER_ADDRESS, _SJOE_REWARD_TOKEN, _VEJOE_STAKING_ADDRES, _VEJOE_TOKEN_ADDRESS, _BOOSTED_MASTERCHEF_A, _INIT_CODE_HASH, _SOLIDITY_TYPE_MAXIMA, _UNITROLLER_ADDRESS, _JOELENS_ADDRESS, _JAVAX_ADDRESS, _MAXIMILLION_ADDRESS;
(function (ChainId) {
  ChainId[ChainId["FUJI"] = 43113] = "FUJI";
  ChainId[ChainId["AVALANCHE"] = 43114] = "AVALANCHE";
  ChainId[ChainId["ARBITRUM_ONE"] = 42161] = "ARBITRUM_ONE";
  ChainId[ChainId["ARB_GOERLI"] = 421613] = "ARB_GOERLI";
  ChainId[ChainId["BNB_CHAIN"] = 56] = "BNB_CHAIN";
  ChainId[ChainId["BNB_TESTNET"] = 97] = "BNB_TESTNET";
})(exports.ChainId || (exports.ChainId = {}));
(function (TradeType) {
  TradeType[TradeType["EXACT_INPUT"] = 0] = "EXACT_INPUT";
  TradeType[TradeType["EXACT_OUTPUT"] = 1] = "EXACT_OUTPUT";
})(exports.TradeType || (exports.TradeType = {}));
(function (Rounding) {
  Rounding[Rounding["ROUND_DOWN"] = 0] = "ROUND_DOWN";
  Rounding[Rounding["ROUND_HALF_UP"] = 1] = "ROUND_HALF_UP";
  Rounding[Rounding["ROUND_UP"] = 2] = "ROUND_UP";
})(exports.Rounding || (exports.Rounding = {}));
/**
 * DEX SDK
 */
var FACTORY_ADDRESS = (_FACTORY_ADDRESS = {}, _FACTORY_ADDRESS[exports.ChainId.FUJI] = '0xF5c7d9733e5f53abCC1695820c4818C59B457C2C', _FACTORY_ADDRESS[exports.ChainId.AVALANCHE] = '0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10', _FACTORY_ADDRESS[exports.ChainId.ARBITRUM_ONE] = '0x6EcCab422D763aC031210895C81787E87B43A652', _FACTORY_ADDRESS[exports.ChainId.ARB_GOERLI] = '0x1886D09C9Ade0c5DB822D85D21678Db67B6c2982', _FACTORY_ADDRESS[exports.ChainId.BNB_CHAIN] = '0x4f8bdc85E3eec5b9dE67097c3f59B6Db025d9986', _FACTORY_ADDRESS[exports.ChainId.BNB_TESTNET] = '0x4f953EFDbcE2B8CAe76e5b4779A682d9ab0c941c', _FACTORY_ADDRESS);
var ROUTER_ADDRESS = (_ROUTER_ADDRESS = {}, _ROUTER_ADDRESS[exports.ChainId.FUJI] = '0xd7f655E3376cE2D7A2b08fF01Eb3B1023191A901', _ROUTER_ADDRESS[exports.ChainId.AVALANCHE] = '0x60aE616a2155Ee3d9A68541Ba4544862310933d4', _ROUTER_ADDRESS[exports.ChainId.ARBITRUM_ONE] = '0xc873fEcbd354f5A56E00E710B90EF4201db2448d', _ROUTER_ADDRESS[exports.ChainId.ARB_GOERLI] = '0x454206AD825cAfaE03c9581014AF6b74f7D53713', _ROUTER_ADDRESS[exports.ChainId.BNB_CHAIN] = '0x89Fa1974120d2a7F83a0cb80df3654721c6a38Cd', _ROUTER_ADDRESS[exports.ChainId.BNB_TESTNET] = '0x0007963AE06b1771Ee5E979835D82d63504Cf11d', _ROUTER_ADDRESS);
var JOE_ADDRESS = (_JOE_ADDRESS = {}, _JOE_ADDRESS[exports.ChainId.FUJI] = '0x477Fd10Db0D80eAFb773cF623B258313C3739413', _JOE_ADDRESS[exports.ChainId.AVALANCHE] = '0x6e84a6216eA6dACC71eE8E6b0a5B7322EEbC0fDd', _JOE_ADDRESS[exports.ChainId.ARBITRUM_ONE] = '0x371c7ec6D8039ff7933a2AA28EB827Ffe1F52f07', _JOE_ADDRESS[exports.ChainId.ARB_GOERLI] = '0x0000000000000000000000000000000000000000', _JOE_ADDRESS[exports.ChainId.BNB_CHAIN] = '0x371c7ec6D8039ff7933a2AA28EB827Ffe1F52f07', _JOE_ADDRESS[exports.ChainId.BNB_TESTNET] = '0x0000000000000000000000000000000000000000', _JOE_ADDRESS);
var MASTERCHEF_ADDRESS = (_MASTERCHEF_ADDRESS = {}, _MASTERCHEF_ADDRESS[exports.ChainId.FUJI] = '0xEAA9637E54D4Da88d7A56E797C2EAa4950111033', _MASTERCHEF_ADDRESS[exports.ChainId.AVALANCHE] = '0xd6a4F121CA35509aF06A0Be99093d08462f53052', _MASTERCHEF_ADDRESS[exports.ChainId.ARBITRUM_ONE] = '0x0000000000000000000000000000000000000000', _MASTERCHEF_ADDRESS[exports.ChainId.ARB_GOERLI] = '0x0000000000000000000000000000000000000000', _MASTERCHEF_ADDRESS[exports.ChainId.BNB_CHAIN] = '0x0000000000000000000000000000000000000000', _MASTERCHEF_ADDRESS[exports.ChainId.BNB_TESTNET] = '0x0000000000000000000000000000000000000000', _MASTERCHEF_ADDRESS);
var MASTERCHEF_V3_ADDRESS = (_MASTERCHEF_V3_ADDRES = {}, _MASTERCHEF_V3_ADDRES[exports.ChainId.FUJI] = '0x47e4B09651D76609e902183c2315b0638fa8375E', _MASTERCHEF_V3_ADDRES[exports.ChainId.AVALANCHE] = '0x188bED1968b795d5c9022F6a0bb5931Ac4c18F00', _MASTERCHEF_V3_ADDRES[exports.ChainId.ARBITRUM_ONE] = '0x0000000000000000000000000000000000000000', _MASTERCHEF_V3_ADDRES[exports.ChainId.ARB_GOERLI] = '0x0000000000000000000000000000000000000000', _MASTERCHEF_V3_ADDRES[exports.ChainId.BNB_CHAIN] = '0x0000000000000000000000000000000000000000', _MASTERCHEF_V3_ADDRES[exports.ChainId.BNB_TESTNET] = '0x0000000000000000000000000000000000000000', _MASTERCHEF_V3_ADDRES);
var BAR_ADDRESS = (_BAR_ADDRESS = {}, _BAR_ADDRESS[exports.ChainId.FUJI] = '0x200BdB3Ed6bF347421329FdbF1813dE87F1A456a', _BAR_ADDRESS[exports.ChainId.AVALANCHE] = '0x57319d41F71E81F3c65F2a47CA4e001EbAFd4F33', _BAR_ADDRESS[exports.ChainId.ARBITRUM_ONE] = '0x0000000000000000000000000000000000000000', _BAR_ADDRESS[exports.ChainId.ARB_GOERLI] = '0x0000000000000000000000000000000000000000', _BAR_ADDRESS[exports.ChainId.BNB_CHAIN] = '0x0000000000000000000000000000000000000000', _BAR_ADDRESS[exports.ChainId.BNB_TESTNET] = '0x0000000000000000000000000000000000000000', _BAR_ADDRESS);
var ZAP_ADDRESS = (_ZAP_ADDRESS = {}, _ZAP_ADDRESS[exports.ChainId.FUJI] = '0x035CA9dB0e001808cB8CD20D1d1C592dF1250107', _ZAP_ADDRESS[exports.ChainId.AVALANCHE] = '0x2C7B8e971c704371772eDaf16e0dB381A8D02027', _ZAP_ADDRESS[exports.ChainId.ARBITRUM_ONE] = '0x0000000000000000000000000000000000000000', _ZAP_ADDRESS[exports.ChainId.ARB_GOERLI] = '0x0000000000000000000000000000000000000000', _ZAP_ADDRESS[exports.ChainId.BNB_CHAIN] = '0x0000000000000000000000000000000000000000', _ZAP_ADDRESS[exports.ChainId.BNB_TESTNET] = '0x0000000000000000000000000000000000000000', _ZAP_ADDRESS);
var MAKER_ADDRESS = (_MAKER_ADDRESS = {}, _MAKER_ADDRESS[exports.ChainId.FUJI] = '0x6De03a4221d325Edc9707CEdeff9C150e99d6eC5', _MAKER_ADDRESS[exports.ChainId.AVALANCHE] = '0x861726BFE27931A4E22a7277bDe6cb8432b65856', _MAKER_ADDRESS[exports.ChainId.ARBITRUM_ONE] = '0x0000000000000000000000000000000000000000', _MAKER_ADDRESS[exports.ChainId.ARB_GOERLI] = '0x0000000000000000000000000000000000000000', _MAKER_ADDRESS[exports.ChainId.BNB_CHAIN] = '0x0000000000000000000000000000000000000000', _MAKER_ADDRESS[exports.ChainId.BNB_TESTNET] = '0x0000000000000000000000000000000000000000', _MAKER_ADDRESS);
var ROLL_ADDRESS = (_ROLL_ADDRESS = {}, _ROLL_ADDRESS[exports.ChainId.FUJI] = '0x41d5f5F66e4cEd197Ff273308A1c194E9E249f4F', _ROLL_ADDRESS[exports.ChainId.AVALANCHE] = '0xacFF0fBf56bAeb9Ef677DE19ADED8F7A950BCb58', _ROLL_ADDRESS[exports.ChainId.ARBITRUM_ONE] = '0x0000000000000000000000000000000000000000', _ROLL_ADDRESS[exports.ChainId.ARB_GOERLI] = '0x0000000000000000000000000000000000000000', _ROLL_ADDRESS[exports.ChainId.BNB_CHAIN] = '0x0000000000000000000000000000000000000000', _ROLL_ADDRESS[exports.ChainId.BNB_TESTNET] = '0x0000000000000000000000000000000000000000', _ROLL_ADDRESS);
var BORINGHELPER_ADDRESS = (_BORINGHELPER_ADDRESS = {}, _BORINGHELPER_ADDRESS[exports.ChainId.FUJI] = '0x832452DBa66232193C0fb525D5165a3A58b6811B', _BORINGHELPER_ADDRESS[exports.ChainId.AVALANCHE] = '0x1dd4D86180EEe39ac4fB35ECa67CACF608Ab5741', _BORINGHELPER_ADDRESS[exports.ChainId.ARBITRUM_ONE] = '0x0000000000000000000000000000000000000000', _BORINGHELPER_ADDRESS[exports.ChainId.ARB_GOERLI] = '0x0000000000000000000000000000000000000000', _BORINGHELPER_ADDRESS[exports.ChainId.BNB_CHAIN] = '0x0000000000000000000000000000000000000000', _BORINGHELPER_ADDRESS[exports.ChainId.BNB_TESTNET] = '0x0000000000000000000000000000000000000000', _BORINGHELPER_ADDRESS);
var BORINGHELPER_MCV3_ADDRESS = (_BORINGHELPER_MCV3_AD = {}, _BORINGHELPER_MCV3_AD[exports.ChainId.FUJI] = '0x87631c1Ec5312e030D4874231d8e0AFc545928A2', _BORINGHELPER_MCV3_AD[exports.ChainId.AVALANCHE] = '0xce63ECA0C8A2084C1BaEcE7737dB88f10c412c5E', _BORINGHELPER_MCV3_AD[exports.ChainId.ARBITRUM_ONE] = '0x0000000000000000000000000000000000000000', _BORINGHELPER_MCV3_AD[exports.ChainId.ARB_GOERLI] = '0x0000000000000000000000000000000000000000', _BORINGHELPER_MCV3_AD[exports.ChainId.BNB_CHAIN] = '0x0000000000000000000000000000000000000000', _BORINGHELPER_MCV3_AD[exports.ChainId.BNB_TESTNET] = '0x0000000000000000000000000000000000000000', _BORINGHELPER_MCV3_AD);
var BORINGHELPER_BMCJ_ADDRESS = (_BORINGHELPER_BMCJ_AD = {}, _BORINGHELPER_BMCJ_AD[exports.ChainId.FUJI] = '0x9B427cBE6cee480773Fb889ec7067B8b1541dA7f', _BORINGHELPER_BMCJ_AD[exports.ChainId.AVALANCHE] = '0x80242b13F37eEB5B59fFe0e988d69133f1b19747', _BORINGHELPER_BMCJ_AD[exports.ChainId.ARBITRUM_ONE] = '0x0000000000000000000000000000000000000000', _BORINGHELPER_BMCJ_AD[exports.ChainId.ARB_GOERLI] = '0x0000000000000000000000000000000000000000', _BORINGHELPER_BMCJ_AD[exports.ChainId.BNB_CHAIN] = '0x0000000000000000000000000000000000000000', _BORINGHELPER_BMCJ_AD[exports.ChainId.BNB_TESTNET] = '0x0000000000000000000000000000000000000000', _BORINGHELPER_BMCJ_AD);
var BORINGTOKENSCANNER_ADDRESS = (_BORINGTOKENSCANNER_A = {}, _BORINGTOKENSCANNER_A[exports.ChainId.FUJI] = '0xD28be693a573a26f50195213613EC893Ad5c4460', _BORINGTOKENSCANNER_A[exports.ChainId.AVALANCHE] = '0x5cFcA5b2149A20A166508B28e5FCFA65c44c6B9c', _BORINGTOKENSCANNER_A[exports.ChainId.ARBITRUM_ONE] = '0x0000000000000000000000000000000000000000', _BORINGTOKENSCANNER_A[exports.ChainId.ARB_GOERLI] = '0x0000000000000000000000000000000000000000', _BORINGTOKENSCANNER_A[exports.ChainId.BNB_CHAIN] = '0x0000000000000000000000000000000000000000', _BORINGTOKENSCANNER_A[exports.ChainId.BNB_TESTNET] = '0x0000000000000000000000000000000000000000', _BORINGTOKENSCANNER_A);
var BORINGDASHBOARD_ADDRESS = (_BORINGDASHBOARD_ADDR = {}, _BORINGDASHBOARD_ADDR[exports.ChainId.FUJI] = '0xD28be693a573a26f50195213613EC893Ad5c4460', _BORINGDASHBOARD_ADDR[exports.ChainId.AVALANCHE] = '0x1Af353148F2316487b5311Fcd522c037842D232c', _BORINGDASHBOARD_ADDR[exports.ChainId.ARBITRUM_ONE] = '0x0000000000000000000000000000000000000000', _BORINGDASHBOARD_ADDR[exports.ChainId.ARB_GOERLI] = '0x0000000000000000000000000000000000000000', _BORINGDASHBOARD_ADDR[exports.ChainId.BNB_CHAIN] = '0x0000000000000000000000000000000000000000', _BORINGDASHBOARD_ADDR[exports.ChainId.BNB_TESTNET] = '0x0000000000000000000000000000000000000000', _BORINGDASHBOARD_ADDR);
var LOCKING_WRAPPER_ADDRESS = (_LOCKING_WRAPPER_ADDR = {}, _LOCKING_WRAPPER_ADDR[exports.ChainId.FUJI] = '0x0000000000000000000000000000000000000000', _LOCKING_WRAPPER_ADDR[exports.ChainId.AVALANCHE] = '0xDc3B37B5F0Fe5d3f8b8701a3F8d81A02EE8A1E1a', _LOCKING_WRAPPER_ADDR[exports.ChainId.ARBITRUM_ONE] = '0x0000000000000000000000000000000000000000', _LOCKING_WRAPPER_ADDR[exports.ChainId.ARB_GOERLI] = '0x0000000000000000000000000000000000000000', _LOCKING_WRAPPER_ADDR[exports.ChainId.BNB_CHAIN] = '0x0000000000000000000000000000000000000000', _LOCKING_WRAPPER_ADDR[exports.ChainId.BNB_TESTNET] = '0x0000000000000000000000000000000000000000', _LOCKING_WRAPPER_ADDR);
var FARMLENS_ADDRESS = (_FARMLENS_ADDRESS = {}, _FARMLENS_ADDRESS[exports.ChainId.FUJI] = '0x0000000000000000000000000000000000000000', _FARMLENS_ADDRESS[exports.ChainId.AVALANCHE] = '0x8A6FA314799b5E5553Cbce7fab3d9EAdEf5ee85a', _FARMLENS_ADDRESS[exports.ChainId.ARBITRUM_ONE] = '0x0000000000000000000000000000000000000000', _FARMLENS_ADDRESS[exports.ChainId.ARB_GOERLI] = '0x0000000000000000000000000000000000000000', _FARMLENS_ADDRESS[exports.ChainId.BNB_CHAIN] = '0x0000000000000000000000000000000000000000', _FARMLENS_ADDRESS[exports.ChainId.BNB_TESTNET] = '0x0000000000000000000000000000000000000000', _FARMLENS_ADDRESS);
var FARMLENSV2_ADDRESS = (_FARMLENSV2_ADDRESS = {}, _FARMLENSV2_ADDRESS[exports.ChainId.FUJI] = '0x6B41A932D2A9f00476229733980D80EE11Dd1617', _FARMLENSV2_ADDRESS[exports.ChainId.AVALANCHE] = '0xF16d25Eba0D8E51cEAF480141bAf577aE55bfdd2', _FARMLENSV2_ADDRESS[exports.ChainId.ARBITRUM_ONE] = '0x0000000000000000000000000000000000000000', _FARMLENSV2_ADDRESS[exports.ChainId.ARB_GOERLI] = '0x0000000000000000000000000000000000000000', _FARMLENSV2_ADDRESS[exports.ChainId.BNB_CHAIN] = '0x0000000000000000000000000000000000000000', _FARMLENSV2_ADDRESS[exports.ChainId.BNB_TESTNET] = '0x0000000000000000000000000000000000000000', _FARMLENSV2_ADDRESS);
var ROCKET_JOE_TOKEN_ADDRESS = (_ROCKET_JOE_TOKEN_ADD = {}, _ROCKET_JOE_TOKEN_ADD[exports.ChainId.FUJI] = '0x2Dc95E863BE58a6EFfe9b5B5D8275537e83bfbE4', _ROCKET_JOE_TOKEN_ADD[exports.ChainId.AVALANCHE] = '0x5483ce08659fABF0277f9314868Cc4f78687BD08', _ROCKET_JOE_TOKEN_ADD[exports.ChainId.ARBITRUM_ONE] = '0x0000000000000000000000000000000000000000', _ROCKET_JOE_TOKEN_ADD[exports.ChainId.ARB_GOERLI] = '0x0000000000000000000000000000000000000000', _ROCKET_JOE_TOKEN_ADD[exports.ChainId.BNB_CHAIN] = '0x0000000000000000000000000000000000000000', _ROCKET_JOE_TOKEN_ADD[exports.ChainId.BNB_TESTNET] = '0x0000000000000000000000000000000000000000', _ROCKET_JOE_TOKEN_ADD);
var LAUNCH_EVENT_LENS_ADDRESS = (_LAUNCH_EVENT_LENS_AD = {}, _LAUNCH_EVENT_LENS_AD[exports.ChainId.FUJI] = '0xBeC83e09C4e461de91fD0F65AFbEd17046F3D9DD', _LAUNCH_EVENT_LENS_AD[exports.ChainId.AVALANCHE] = '0x039AA5d3FC07f6f265656793A8c437055b653d68', _LAUNCH_EVENT_LENS_AD[exports.ChainId.ARBITRUM_ONE] = '0x0000000000000000000000000000000000000000', _LAUNCH_EVENT_LENS_AD[exports.ChainId.ARB_GOERLI] = '0x0000000000000000000000000000000000000000', _LAUNCH_EVENT_LENS_AD[exports.ChainId.BNB_CHAIN] = '0x0000000000000000000000000000000000000000', _LAUNCH_EVENT_LENS_AD[exports.ChainId.BNB_TESTNET] = '0x0000000000000000000000000000000000000000', _LAUNCH_EVENT_LENS_AD);
var ROCKET_JOE_STAKING_ADDRESS = (_ROCKET_JOE_STAKING_A = {}, _ROCKET_JOE_STAKING_A[exports.ChainId.FUJI] = '0x1a1171b5faa9954A68F3679EF91E4dACd6D2c247', _ROCKET_JOE_STAKING_A[exports.ChainId.AVALANCHE] = '0x102D195C3eE8BF8A9A89d63FB3659432d3174d81', _ROCKET_JOE_STAKING_A[exports.ChainId.ARBITRUM_ONE] = '0x0000000000000000000000000000000000000000', _ROCKET_JOE_STAKING_A[exports.ChainId.ARB_GOERLI] = '0x0000000000000000000000000000000000000000', _ROCKET_JOE_STAKING_A[exports.ChainId.BNB_CHAIN] = '0x0000000000000000000000000000000000000000', _ROCKET_JOE_STAKING_A[exports.ChainId.BNB_TESTNET] = '0x0000000000000000000000000000000000000000', _ROCKET_JOE_STAKING_A);
var STABLE_JOE_STAKING_ADDRESS = (_STABLE_JOE_STAKING_A = {}, _STABLE_JOE_STAKING_A[exports.ChainId.FUJI] = '0x5Fd0A10CA299a02429418EAAcC7286482a5f075D', _STABLE_JOE_STAKING_A[exports.ChainId.AVALANCHE] = '0x1a731B2299E22FbAC282E7094EdA41046343Cb51', _STABLE_JOE_STAKING_A[exports.ChainId.ARBITRUM_ONE] = '0x0000000000000000000000000000000000000000', _STABLE_JOE_STAKING_A[exports.ChainId.ARB_GOERLI] = '0x0000000000000000000000000000000000000000', _STABLE_JOE_STAKING_A[exports.ChainId.BNB_CHAIN] = '0x0000000000000000000000000000000000000000', _STABLE_JOE_STAKING_A[exports.ChainId.BNB_TESTNET] = '0x0000000000000000000000000000000000000000', _STABLE_JOE_STAKING_A);
var MONEY_MAKER_ADDRESS = (_MONEY_MAKER_ADDRESS = {}, _MONEY_MAKER_ADDRESS[exports.ChainId.FUJI] = '0x6De03a4221d325Edc9707CEdeff9C150e99d6eC5', _MONEY_MAKER_ADDRESS[exports.ChainId.AVALANCHE] = '0x63C0CF90aE12190B388F9914531369aC1e4e4e47', _MONEY_MAKER_ADDRESS[exports.ChainId.ARBITRUM_ONE] = '0x0000000000000000000000000000000000000000', _MONEY_MAKER_ADDRESS[exports.ChainId.ARB_GOERLI] = '0x0000000000000000000000000000000000000000', _MONEY_MAKER_ADDRESS[exports.ChainId.BNB_CHAIN] = '0x0000000000000000000000000000000000000000', _MONEY_MAKER_ADDRESS[exports.ChainId.BNB_TESTNET] = '0x0000000000000000000000000000000000000000', _MONEY_MAKER_ADDRESS);
var SJOE_REWARD_TOKEN = (_SJOE_REWARD_TOKEN = {}, _SJOE_REWARD_TOKEN[exports.ChainId.FUJI] = '0x950c6f4f97dd62bd3ca76f084663224fd2e6b555', _SJOE_REWARD_TOKEN[exports.ChainId.AVALANCHE] = '0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E', _SJOE_REWARD_TOKEN[exports.ChainId.ARBITRUM_ONE] = '0x0000000000000000000000000000000000000000', _SJOE_REWARD_TOKEN[exports.ChainId.ARB_GOERLI] = '0x0000000000000000000000000000000000000000', _SJOE_REWARD_TOKEN[exports.ChainId.BNB_CHAIN] = '0x0000000000000000000000000000000000000000', _SJOE_REWARD_TOKEN[exports.ChainId.BNB_TESTNET] = '0x0000000000000000000000000000000000000000', _SJOE_REWARD_TOKEN);
var VEJOE_STAKING_ADDRESS = (_VEJOE_STAKING_ADDRES = {}, _VEJOE_STAKING_ADDRES[exports.ChainId.FUJI] = '0x63064873AC2e94bbe82479265BD252417b34C462', _VEJOE_STAKING_ADDRES[exports.ChainId.AVALANCHE] = '0x25D85E17dD9e544F6E9F8D44F99602dbF5a97341', _VEJOE_STAKING_ADDRES[exports.ChainId.ARBITRUM_ONE] = '0x0000000000000000000000000000000000000000', _VEJOE_STAKING_ADDRES[exports.ChainId.ARB_GOERLI] = '0x0000000000000000000000000000000000000000', _VEJOE_STAKING_ADDRES[exports.ChainId.BNB_CHAIN] = '0x0000000000000000000000000000000000000000', _VEJOE_STAKING_ADDRES[exports.ChainId.BNB_TESTNET] = '0x0000000000000000000000000000000000000000', _VEJOE_STAKING_ADDRES);
var VEJOE_TOKEN_ADDRESS = (_VEJOE_TOKEN_ADDRESS = {}, _VEJOE_TOKEN_ADDRESS[exports.ChainId.FUJI] = '0x8043E85a15c7F4Ad58a24712Cf08C624B52fAa34', _VEJOE_TOKEN_ADDRESS[exports.ChainId.AVALANCHE] = '0x3cabf341943Bc8466245e4d6F1ae0f8D071a1456', _VEJOE_TOKEN_ADDRESS[exports.ChainId.ARBITRUM_ONE] = '0x0000000000000000000000000000000000000000', _VEJOE_TOKEN_ADDRESS[exports.ChainId.ARB_GOERLI] = '0x0000000000000000000000000000000000000000', _VEJOE_TOKEN_ADDRESS[exports.ChainId.BNB_CHAIN] = '0x0000000000000000000000000000000000000000', _VEJOE_TOKEN_ADDRESS[exports.ChainId.BNB_TESTNET] = '0x0000000000000000000000000000000000000000', _VEJOE_TOKEN_ADDRESS);
var BOOSTED_MASTERCHEF_ADDRESS = (_BOOSTED_MASTERCHEF_A = {}, _BOOSTED_MASTERCHEF_A[exports.ChainId.FUJI] = '0xEE7B7871755bCe3CD1B0aa1d01320Dd311b08279', _BOOSTED_MASTERCHEF_A[exports.ChainId.AVALANCHE] = '0x4483f0b6e2F5486D06958C20f8C39A7aBe87bf8F', _BOOSTED_MASTERCHEF_A[exports.ChainId.ARBITRUM_ONE] = '0x0000000000000000000000000000000000000000', _BOOSTED_MASTERCHEF_A[exports.ChainId.ARB_GOERLI] = '0x0000000000000000000000000000000000000000', _BOOSTED_MASTERCHEF_A[exports.ChainId.BNB_CHAIN] = '0x0000000000000000000000000000000000000000', _BOOSTED_MASTERCHEF_A[exports.ChainId.BNB_TESTNET] = '0x0000000000000000000000000000000000000000', _BOOSTED_MASTERCHEF_A);
var INIT_CODE_HASH = (_INIT_CODE_HASH = {}, _INIT_CODE_HASH[exports.ChainId.FUJI] = '0x6c67ac67d0dad54be7b066edd9b4154fb5a0ab7d01232259b9ff26ebc1739ba2', _INIT_CODE_HASH[exports.ChainId.AVALANCHE] = '0x0bbca9af0511ad1a1da383135cf3a8d2ac620e549ef9f6ae3a4c33c2fed0af91', _INIT_CODE_HASH[exports.ChainId.ARBITRUM_ONE] = '0xa856464ae65f7619087bc369daaf7e387dae1e5af69cfa7935850ebf754b04c1', _INIT_CODE_HASH[exports.ChainId.ARB_GOERLI] = '0xb6ca21329f2e28f35a5fc6848619516b62c84c068b584d1497decf19662bb190', _INIT_CODE_HASH[exports.ChainId.BNB_CHAIN] = '0x75e986a1d8c57bd5530b4b59ab7dd63c4d4ad267f147e17774264956de33c282', _INIT_CODE_HASH[exports.ChainId.BNB_TESTNET] = '0x75e986a1d8c57bd5530b4b59ab7dd63c4d4ad267f147e17774264956de33c282', _INIT_CODE_HASH);
var MINIMUM_LIQUIDITY = /*#__PURE__*/JSBI.BigInt(1000);
// exports for internal consumption
var ZERO = /*#__PURE__*/JSBI.BigInt(0);
var ONE = /*#__PURE__*/JSBI.BigInt(1);
var TWO = /*#__PURE__*/JSBI.BigInt(2);
var THREE = /*#__PURE__*/JSBI.BigInt(3);
var FIVE = /*#__PURE__*/JSBI.BigInt(5);
var TEN = /*#__PURE__*/JSBI.BigInt(10);
var _100 = /*#__PURE__*/JSBI.BigInt(100);
var _997 = /*#__PURE__*/JSBI.BigInt(997);
var _1000 = /*#__PURE__*/JSBI.BigInt(1000);
var SolidityType;
(function (SolidityType) {
  SolidityType["uint8"] = "uint8";
  SolidityType["uint256"] = "uint256";
})(SolidityType || (SolidityType = {}));
var SOLIDITY_TYPE_MAXIMA = (_SOLIDITY_TYPE_MAXIMA = {}, _SOLIDITY_TYPE_MAXIMA[SolidityType.uint8] = /*#__PURE__*/JSBI.BigInt('0xff'), _SOLIDITY_TYPE_MAXIMA[SolidityType.uint256] = /*#__PURE__*/JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'), _SOLIDITY_TYPE_MAXIMA);
/**
 * Lending SDK
 */
var UNITROLLER_ADDRESS = (_UNITROLLER_ADDRESS = {}, _UNITROLLER_ADDRESS[exports.ChainId.FUJI] = '0xf817f74bb514cb0AF7d3b56299c33C33895630f2', _UNITROLLER_ADDRESS[exports.ChainId.AVALANCHE] = '0xdc13687554205E5b89Ac783db14bb5bba4A1eDaC', _UNITROLLER_ADDRESS[exports.ChainId.ARBITRUM_ONE] = '0x0000000000000000000000000000000000000000', _UNITROLLER_ADDRESS[exports.ChainId.ARB_GOERLI] = '0x0000000000000000000000000000000000000000', _UNITROLLER_ADDRESS[exports.ChainId.BNB_CHAIN] = '0x0000000000000000000000000000000000000000', _UNITROLLER_ADDRESS[exports.ChainId.BNB_TESTNET] = '0x0000000000000000000000000000000000000000', _UNITROLLER_ADDRESS);
// used to get jToken balances, jToken metadata, account’s borrow limit & claimable rewards
var JOELENS_ADDRESS = (_JOELENS_ADDRESS = {}, _JOELENS_ADDRESS[exports.ChainId.FUJI] = '0x3A2C79d45EEdcE68d3993F807336D4b0b41741b0', _JOELENS_ADDRESS[exports.ChainId.AVALANCHE] = '0x994Ed0698F5145211Fd5DAE458dD7d91c2da6CEC', _JOELENS_ADDRESS[exports.ChainId.ARBITRUM_ONE] = '0x0000000000000000000000000000000000000000', _JOELENS_ADDRESS[exports.ChainId.ARB_GOERLI] = '0x0000000000000000000000000000000000000000', _JOELENS_ADDRESS[exports.ChainId.BNB_CHAIN] = '0x0000000000000000000000000000000000000000', _JOELENS_ADDRESS[exports.ChainId.BNB_TESTNET] = '0x0000000000000000000000000000000000000000', _JOELENS_ADDRESS);
var JAVAX_ADDRESS = (_JAVAX_ADDRESS = {}, _JAVAX_ADDRESS[exports.ChainId.FUJI] = '0xE2b2CF0Cc751223C4F2Dc9EF1Cd8d2F27f92a84a', _JAVAX_ADDRESS[exports.ChainId.AVALANCHE] = '0xC22F01ddc8010Ee05574028528614634684EC29e', _JAVAX_ADDRESS[exports.ChainId.ARBITRUM_ONE] = '0x0000000000000000000000000000000000000000', _JAVAX_ADDRESS[exports.ChainId.ARB_GOERLI] = '0x0000000000000000000000000000000000000000', _JAVAX_ADDRESS[exports.ChainId.BNB_CHAIN] = '0x0000000000000000000000000000000000000000', _JAVAX_ADDRESS[exports.ChainId.BNB_TESTNET] = '0x0000000000000000000000000000000000000000', _JAVAX_ADDRESS);
// used to repay an account’s borrow amount in the jAvax market
var MAXIMILLION_ADDRESS = (_MAXIMILLION_ADDRESS = {}, _MAXIMILLION_ADDRESS[exports.ChainId.FUJI] = '0x7b647D11b2E9354fA570B8613BD361AE51e51c27', _MAXIMILLION_ADDRESS[exports.ChainId.AVALANCHE] = '0xe5cDdAFd0f7Af3DEAf4bd213bBaee7A5927AB7E7', _MAXIMILLION_ADDRESS[exports.ChainId.ARBITRUM_ONE] = '0x0000000000000000000000000000000000000000', _MAXIMILLION_ADDRESS[exports.ChainId.ARB_GOERLI] = '0x0000000000000000000000000000000000000000', _MAXIMILLION_ADDRESS[exports.ChainId.BNB_CHAIN] = '0x0000000000000000000000000000000000000000', _MAXIMILLION_ADDRESS[exports.ChainId.BNB_TESTNET] = '0x0000000000000000000000000000000000000000', _MAXIMILLION_ADDRESS);

function _regeneratorRuntime() {
  _regeneratorRuntime = function () {
    return exports;
  };
  var exports = {},
    Op = Object.prototype,
    hasOwn = Op.hasOwnProperty,
    defineProperty = Object.defineProperty || function (obj, key, desc) {
      obj[key] = desc.value;
    },
    $Symbol = "function" == typeof Symbol ? Symbol : {},
    iteratorSymbol = $Symbol.iterator || "@@iterator",
    asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
    toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
  function define(obj, key, value) {
    return Object.defineProperty(obj, key, {
      value: value,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), obj[key];
  }
  try {
    define({}, "");
  } catch (err) {
    define = function (obj, key, value) {
      return obj[key] = value;
    };
  }
  function wrap(innerFn, outerFn, self, tryLocsList) {
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
      generator = Object.create(protoGenerator.prototype),
      context = new Context(tryLocsList || []);
    return defineProperty(generator, "_invoke", {
      value: makeInvokeMethod(innerFn, self, context)
    }), generator;
  }
  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }
  exports.wrap = wrap;
  var ContinueSentinel = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });
  var getProto = Object.getPrototypeOf,
    NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }
  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if ("throw" !== record.type) {
        var result = record.arg,
          value = result.value;
        return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
          invoke("next", value, resolve, reject);
        }, function (err) {
          invoke("throw", err, resolve, reject);
        }) : PromiseImpl.resolve(value).then(function (unwrapped) {
          result.value = unwrapped, resolve(result);
        }, function (error) {
          return invoke("throw", error, resolve, reject);
        });
      }
      reject(record.arg);
    }
    var previousPromise;
    defineProperty(this, "_invoke", {
      value: function (method, arg) {
        function callInvokeWithMethodAndArg() {
          return new PromiseImpl(function (resolve, reject) {
            invoke(method, arg, resolve, reject);
          });
        }
        return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(innerFn, self, context) {
    var state = "suspendedStart";
    return function (method, arg) {
      if ("executing" === state) throw new Error("Generator is already running");
      if ("completed" === state) {
        if ("throw" === method) throw arg;
        return doneResult();
      }
      for (context.method = method, context.arg = arg;;) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }
        if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {
          if ("suspendedStart" === state) throw state = "completed", context.arg;
          context.dispatchException(context.arg);
        } else "return" === context.method && context.abrupt("return", context.arg);
        state = "executing";
        var record = tryCatch(innerFn, self, context);
        if ("normal" === record.type) {
          if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
          return {
            value: record.arg,
            done: context.done
          };
        }
        "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
      }
    };
  }
  function maybeInvokeDelegate(delegate, context) {
    var methodName = context.method,
      method = delegate.iterator[methodName];
    if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel;
    var record = tryCatch(method, delegate.iterator, context.arg);
    if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
    var info = record.arg;
    return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
  }
  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };
    1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
  }
  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal", delete record.arg, entry.completion = record;
  }
  function Context(tryLocsList) {
    this.tryEntries = [{
      tryLoc: "root"
    }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) return iteratorMethod.call(iterable);
      if ("function" == typeof iterable.next) return iterable;
      if (!isNaN(iterable.length)) {
        var i = -1,
          next = function next() {
            for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;
            return next.value = undefined, next.done = !0, next;
          };
        return next.next = next;
      }
    }
    return {
      next: doneResult
    };
  }
  function doneResult() {
    return {
      value: undefined,
      done: !0
    };
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), defineProperty(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {
    var ctor = "function" == typeof genFun && genFun.constructor;
    return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
  }, exports.mark = function (genFun) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
  }, exports.awrap = function (arg) {
    return {
      __await: arg
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    void 0 === PromiseImpl && (PromiseImpl = Promise);
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {
    return this;
  }), define(Gp, "toString", function () {
    return "[object Generator]";
  }), exports.keys = function (val) {
    var object = Object(val),
      keys = [];
    for (var key in object) keys.push(key);
    return keys.reverse(), function next() {
      for (; keys.length;) {
        var key = keys.pop();
        if (key in object) return next.value = key, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, exports.values = values, Context.prototype = {
    constructor: Context,
    reset: function (skipTempReset) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
    },
    stop: function () {
      this.done = !0;
      var rootRecord = this.tryEntries[0].completion;
      if ("throw" === rootRecord.type) throw rootRecord.arg;
      return this.rval;
    },
    dispatchException: function (exception) {
      if (this.done) throw exception;
      var context = this;
      function handle(loc, caught) {
        return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
      }
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i],
          record = entry.completion;
        if ("root" === entry.tryLoc) return handle("end");
        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc"),
            hasFinally = hasOwn.call(entry, "finallyLoc");
          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
          } else {
            if (!hasFinally) throw new Error("try statement without catch or finally");
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          }
        }
      }
    },
    abrupt: function (type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }
      finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
      var record = finallyEntry ? finallyEntry.completion : {};
      return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
    },
    complete: function (record, afterLoc) {
      if ("throw" === record.type) throw record.arg;
      return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
    },
    finish: function (finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
      }
    },
    catch: function (tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if ("throw" === record.type) {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }
      throw new Error("illegal catch attempt");
    },
    delegateYield: function (iterable, resultName, nextLoc) {
      return this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
    }
  }, exports;
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  _setPrototypeOf(subClass, superClass);
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}
function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct.bind();
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }
  return _construct.apply(null, arguments);
}
function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;
  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;
    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }
    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);
      _cache.set(Class, Wrapper);
    }
    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }
    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };
  return _wrapNativeSuper(Class);
}
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _createForOfIteratorHelperLoose(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (it) return (it = it.call(o)).next.bind(it);
  if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
    if (it) o = it;
    var i = 0;
    return function () {
      if (i >= o.length) return {
        done: true
      };
      return {
        done: false,
        value: o[i++]
      };
    };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _toPrimitive(input, hint) {
  if (typeof input !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (typeof res !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return typeof key === "symbol" ? key : String(key);
}

// see https://stackoverflow.com/a/41102306
var CAN_SET_PROTOTYPE = ('setPrototypeOf' in Object);
/**
 * Indicates that the pair has insufficient reserves for a desired output amount. I.e. the amount of output cannot be
 * obtained by sending any amount of input.
 */
var InsufficientReservesError = /*#__PURE__*/function (_Error) {
  _inheritsLoose(InsufficientReservesError, _Error);
  function InsufficientReservesError() {
    var _this;
    _this = _Error.call(this) || this;
    _this.isInsufficientReservesError = true;
    _this.name = _this.constructor.name;
    if (CAN_SET_PROTOTYPE) Object.setPrototypeOf(_assertThisInitialized(_this), (this instanceof InsufficientReservesError ? this.constructor : void 0).prototype);
    return _this;
  }
  return InsufficientReservesError;
}( /*#__PURE__*/_wrapNativeSuper(Error));
/**
 * Indicates that the input amount is too small to produce any amount of output. I.e. the amount of input sent is less
 * than the price of a single unit of output after fees.
 */
var InsufficientInputAmountError = /*#__PURE__*/function (_Error2) {
  _inheritsLoose(InsufficientInputAmountError, _Error2);
  function InsufficientInputAmountError() {
    var _this2;
    _this2 = _Error2.call(this) || this;
    _this2.isInsufficientInputAmountError = true;
    _this2.name = _this2.constructor.name;
    if (CAN_SET_PROTOTYPE) Object.setPrototypeOf(_assertThisInitialized(_this2), (this instanceof InsufficientInputAmountError ? this.constructor : void 0).prototype);
    return _this2;
  }
  return InsufficientInputAmountError;
}( /*#__PURE__*/_wrapNativeSuper(Error));

function validateSolidityTypeInstance(value, solidityType) {
  !JSBI.greaterThanOrEqual(value, ZERO) ?  invariant(false, value + " is not a " + solidityType + ".")  : void 0;
  !JSBI.lessThanOrEqual(value, SOLIDITY_TYPE_MAXIMA[solidityType]) ?  invariant(false, value + " is not a " + solidityType + ".")  : void 0;
}
// warns if addresses are not checksummed
function validateAndParseAddress(address$1) {
  try {
    var checksummedAddress = address.getAddress(address$1);
    "development" !== "production" ? warning(address$1 === checksummedAddress, address$1 + " is not checksummed.") : void 0;
    return checksummedAddress;
  } catch (error) {
      invariant(false, address$1 + " is not a valid address.")  ;
  }
}
function parseBigintIsh(bigintIsh) {
  return bigintIsh instanceof JSBI ? bigintIsh : typeof bigintIsh === 'bigint' ? JSBI.BigInt(bigintIsh.toString()) : JSBI.BigInt(bigintIsh);
}
// mock the on-chain sqrt function
function sqrt(y) {
  validateSolidityTypeInstance(y, SolidityType.uint256);
  var z = ZERO;
  var x;
  if (JSBI.greaterThan(y, THREE)) {
    z = y;
    x = JSBI.add(JSBI.divide(y, TWO), ONE);
    while (JSBI.lessThan(x, z)) {
      z = x;
      x = JSBI.divide(JSBI.add(JSBI.divide(y, x), x), TWO);
    }
  } else if (JSBI.notEqual(y, ZERO)) {
    z = ONE;
  }
  return z;
}
// given an array of items sorted by `comparator`, insert an item into its sort index and constrain the size to
// `maxSize` by removing the last item
function sortedInsert(items, add, maxSize, comparator) {
  !(maxSize > 0) ?  invariant(false, 'MAX_SIZE_ZERO')  : void 0;
  // this is an invariant because the interface cannot return multiple removed items if items.length exceeds maxSize
  !(items.length <= maxSize) ?  invariant(false, 'ITEMS_SIZE')  : void 0;
  // short circuit first item add
  if (items.length === 0) {
    items.push(add);
    return null;
  } else {
    var isFull = items.length === maxSize;
    // short circuit if full and the additional item does not come before the last item
    if (isFull && comparator(items[items.length - 1], add) <= 0) {
      return add;
    }
    var lo = 0,
      hi = items.length;
    while (lo < hi) {
      var mid = lo + hi >>> 1;
      if (comparator(items[mid], add) <= 0) {
        lo = mid + 1;
      } else {
        hi = mid;
      }
    }
    items.splice(lo, 0, add);
    return isFull ? items.pop() : null;
  }
}

var _WNATIVE;
/**
 * Represents an ERC20 token with a unique address and some metadata.
 */
var Token = /*#__PURE__*/function () {
  /**
   * The contract address on the chain on which this token lives
   */

  function Token(chainId, address, decimals, symbol, name) {
    this.decimals = void 0;
    this.symbol = void 0;
    this.name = void 0;
    this.isNative = false;
    this.isToken = true;
    this.chainId = void 0;
    this.address = void 0;
    this.chainId = chainId;
    this.decimals = decimals;
    this.symbol = symbol;
    this.name = name;
    this.address = validateAndParseAddress(address);
  }
  /**
   * Returns true if the two tokens are equivalent, i.e. have the same chainId and address.
   * @param other other token to compare
   */
  var _proto = Token.prototype;
  _proto.equals = function equals(other) {
    // short circuit on reference equality
    if (this === other) {
      return true;
    }
    return this.chainId === other.chainId && this.address === other.address;
  }
  /**
   * Returns true if the address of this token sorts before the address of the other token
   * @param other other token to compare
   * @throws if the tokens have the same address
   * @throws if the tokens are on different chains
   */;
  _proto.sortsBefore = function sortsBefore(other) {
    !(this.chainId === other.chainId) ?  invariant(false, 'CHAIN_IDS')  : void 0;
    !(this.address !== other.address) ?  invariant(false, 'ADDRESSES')  : void 0;
    return this.address.toLowerCase() < other.address.toLowerCase();
  };
  return Token;
}();
/**
 * Compares two currencies for equality
 */
function currencyEquals(currencyA, currencyB) {
  if (currencyA instanceof Token && currencyB instanceof Token) {
    return currencyA.equals(currencyB);
  } else if (currencyA instanceof Token) {
    return false;
  } else if (currencyB instanceof Token) {
    return false;
  } else {
    return currencyA === currencyB;
  }
}
var WNATIVE = (_WNATIVE = {}, _WNATIVE[exports.ChainId.FUJI] = /*#__PURE__*/new Token(exports.ChainId.FUJI, '0xd00ae08403B9bbb9124bB305C09058E32C39A48c', 18, 'WAVAX', 'Wrapped AVAX'), _WNATIVE[exports.ChainId.AVALANCHE] = /*#__PURE__*/new Token(exports.ChainId.AVALANCHE, '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7', 18, 'WAVAX', 'Wrapped AVAX'), _WNATIVE[exports.ChainId.ARBITRUM_ONE] = /*#__PURE__*/new Token(exports.ChainId.ARBITRUM_ONE, '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1', 18, 'WETH', 'Wrapped ETH'), _WNATIVE[exports.ChainId.ARB_GOERLI] = /*#__PURE__*/new Token(exports.ChainId.ARB_GOERLI, '0xaE4EC9901c3076D0DdBe76A520F9E90a6227aCB7', 18, 'WETH', 'Wrapped ETH'), _WNATIVE[exports.ChainId.BNB_CHAIN] = /*#__PURE__*/new Token(exports.ChainId.BNB_CHAIN, '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c', 18, 'WBNB', 'Wrapped BNB'), _WNATIVE[exports.ChainId.BNB_TESTNET] = /*#__PURE__*/new Token(exports.ChainId.BNB_TESTNET, '0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd', 18, 'WBNB', 'Wrapped BNB'), _WNATIVE);
var WAVAX = WNATIVE;

/**
 * Represents the native currency of the chain on which it resides, e.g. ETH, AVAX
 */
var NativeCurrency = /*#__PURE__*/function () {
  /**
   * Constructs an instance of the base class `NativeCurrency`.
   * @param chainId the chain ID on which this currency resides
   * @param decimals decimals of the currency
   * @param symbol symbol of the currency
   * @param name of the currency
   */
  function NativeCurrency(chainId, decimals, symbol, name) {
    this.decimals = void 0;
    this.symbol = void 0;
    this.name = void 0;
    this.isNative = true;
    this.isToken = false;
    this.chainId = void 0;
    validateSolidityTypeInstance(JSBI.BigInt(decimals), SolidityType.uint8);
    this.chainId = chainId;
    this.decimals = decimals;
    this.symbol = symbol;
    this.name = name;
  }
  var _proto = NativeCurrency.prototype;
  _proto.equals = function equals(other) {
    return other.isNative && other.chainId === this.chainId;
  };
  return NativeCurrency;
}();
/*
 * CNATIVE is the main usage of a 'native' currency, i.e. ETH, AVAX, BNB
 */
var CNATIVE = /*#__PURE__*/function (_NativeCurrency) {
  _inheritsLoose(CNATIVE, _NativeCurrency);
  function CNATIVE(chainId) {
    var symbol = [43113, 43114].includes(chainId) ? 'AVAX' : 56 === chainId ? 'BNB' : 97 === chainId ? 'tBNB' : 'ETH';
    var name = [43113, 43114].includes(chainId) ? 'Avalanche' : [56, 97].includes(chainId) ? 'BNB' : 'Ethereum';
    return _NativeCurrency.call(this, chainId, 18, symbol, name) || this;
  }
  var _proto2 = CNATIVE.prototype;
  _proto2.equals = function equals(other) {
    return other.isNative && other.chainId === this.chainId;
  };
  CNATIVE.onChain = function onChain(chainId) {
    var _this$_etherCache$cha;
    return (_this$_etherCache$cha = this._etherCache[chainId]) != null ? _this$_etherCache$cha : this._etherCache[chainId] = new CNATIVE(chainId);
  };
  return CNATIVE;
}(NativeCurrency);
/**
 * for backward compatibility
 */
CNATIVE._etherCache = {};
var CAVAX = /*#__PURE__*/CNATIVE.onChain(43114);

var _toSignificantRoundin, _toFixedRounding;
var Decimal = /*#__PURE__*/toFormat(_Decimal);
var Big = /*#__PURE__*/toFormat(_Big);
var toSignificantRounding = (_toSignificantRoundin = {}, _toSignificantRoundin[exports.Rounding.ROUND_DOWN] = Decimal.ROUND_DOWN, _toSignificantRoundin[exports.Rounding.ROUND_HALF_UP] = Decimal.ROUND_HALF_UP, _toSignificantRoundin[exports.Rounding.ROUND_UP] = Decimal.ROUND_UP, _toSignificantRoundin);
var toFixedRounding = (_toFixedRounding = {}, _toFixedRounding[exports.Rounding.ROUND_DOWN] = 0, _toFixedRounding[exports.Rounding.ROUND_HALF_UP] = 1, _toFixedRounding[exports.Rounding.ROUND_UP] = 3, _toFixedRounding);
var Fraction = /*#__PURE__*/function () {
  function Fraction(numerator, denominator) {
    if (denominator === void 0) {
      denominator = ONE;
    }
    this.numerator = void 0;
    this.denominator = void 0;
    this.numerator = parseBigintIsh(numerator);
    this.denominator = parseBigintIsh(denominator);
  }
  // performs floor division
  var _proto = Fraction.prototype;
  _proto.invert = function invert() {
    return new Fraction(this.denominator, this.numerator);
  };
  _proto.add = function add(other) {
    var otherParsed = other instanceof Fraction ? other : new Fraction(parseBigintIsh(other));
    if (JSBI.equal(this.denominator, otherParsed.denominator)) {
      return new Fraction(JSBI.add(this.numerator, otherParsed.numerator), this.denominator);
    }
    return new Fraction(JSBI.add(JSBI.multiply(this.numerator, otherParsed.denominator), JSBI.multiply(otherParsed.numerator, this.denominator)), JSBI.multiply(this.denominator, otherParsed.denominator));
  };
  _proto.subtract = function subtract(other) {
    var otherParsed = other instanceof Fraction ? other : new Fraction(parseBigintIsh(other));
    if (JSBI.equal(this.denominator, otherParsed.denominator)) {
      return new Fraction(JSBI.subtract(this.numerator, otherParsed.numerator), this.denominator);
    }
    return new Fraction(JSBI.subtract(JSBI.multiply(this.numerator, otherParsed.denominator), JSBI.multiply(otherParsed.numerator, this.denominator)), JSBI.multiply(this.denominator, otherParsed.denominator));
  };
  _proto.lessThan = function lessThan(other) {
    var otherParsed = other instanceof Fraction ? other : new Fraction(parseBigintIsh(other));
    return JSBI.lessThan(JSBI.multiply(this.numerator, otherParsed.denominator), JSBI.multiply(otherParsed.numerator, this.denominator));
  };
  _proto.equalTo = function equalTo(other) {
    var otherParsed = other instanceof Fraction ? other : new Fraction(parseBigintIsh(other));
    return JSBI.equal(JSBI.multiply(this.numerator, otherParsed.denominator), JSBI.multiply(otherParsed.numerator, this.denominator));
  };
  _proto.greaterThan = function greaterThan(other) {
    var otherParsed = other instanceof Fraction ? other : new Fraction(parseBigintIsh(other));
    return JSBI.greaterThan(JSBI.multiply(this.numerator, otherParsed.denominator), JSBI.multiply(otherParsed.numerator, this.denominator));
  };
  _proto.multiply = function multiply(other) {
    var otherParsed = other instanceof Fraction ? other : new Fraction(parseBigintIsh(other));
    return new Fraction(JSBI.multiply(this.numerator, otherParsed.numerator), JSBI.multiply(this.denominator, otherParsed.denominator));
  };
  _proto.divide = function divide(other) {
    var otherParsed = other instanceof Fraction ? other : new Fraction(parseBigintIsh(other));
    return new Fraction(JSBI.multiply(this.numerator, otherParsed.denominator), JSBI.multiply(this.denominator, otherParsed.numerator));
  };
  _proto.toSignificant = function toSignificant(significantDigits, format, rounding) {
    if (format === void 0) {
      format = {
        groupSeparator: ''
      };
    }
    if (rounding === void 0) {
      rounding = exports.Rounding.ROUND_HALF_UP;
    }
    !Number.isInteger(significantDigits) ?  invariant(false, significantDigits + " is not an integer.")  : void 0;
    !(significantDigits > 0) ?  invariant(false, significantDigits + " is not positive.")  : void 0;
    Decimal.set({
      precision: significantDigits + 1,
      rounding: toSignificantRounding[rounding]
    });
    var quotient = new Decimal(this.numerator.toString()).div(this.denominator.toString()).toSignificantDigits(significantDigits);
    return quotient.toFormat(quotient.decimalPlaces(), format);
  };
  _proto.toFixed = function toFixed(decimalPlaces, format, rounding) {
    if (format === void 0) {
      format = {
        groupSeparator: ''
      };
    }
    if (rounding === void 0) {
      rounding = exports.Rounding.ROUND_HALF_UP;
    }
    !Number.isInteger(decimalPlaces) ?  invariant(false, decimalPlaces + " is not an integer.")  : void 0;
    !(decimalPlaces >= 0) ?  invariant(false, decimalPlaces + " is negative.")  : void 0;
    Big.DP = decimalPlaces;
    Big.RM = toFixedRounding[rounding];
    return new Big(this.numerator.toString()).div(this.denominator.toString()).toFormat(decimalPlaces, format);
  };
  _createClass(Fraction, [{
    key: "quotient",
    get: function get() {
      return JSBI.divide(this.numerator, this.denominator);
    }
    // remainder after floor division
  }, {
    key: "remainder",
    get: function get() {
      return new Fraction(JSBI.remainder(this.numerator, this.denominator), this.denominator);
    }
  }]);
  return Fraction;
}();

var Big$1 = /*#__PURE__*/toFormat(_Big);
var CurrencyAmount = /*#__PURE__*/function (_Fraction) {
  _inheritsLoose(CurrencyAmount, _Fraction);
  /**
   * Helper that calls the constructor with the CNATIVE currency
   * @param chainId the chain on which the CNATIVE exists
   * @param rawAmount CNATIVE amount in wei
   */
  CurrencyAmount.ether = function ether(chainId, amount) {
    return new CurrencyAmount(CNATIVE.onChain(chainId), amount);
  }
  // amount _must_ be raw, i.e. in the native representation
  ;
  function CurrencyAmount(currency, amount) {
    var _this;
    var parsedAmount = parseBigintIsh(amount);
    validateSolidityTypeInstance(parsedAmount, SolidityType.uint256);
    _this = _Fraction.call(this, parsedAmount, JSBI.exponentiate(TEN, JSBI.BigInt(currency.decimals))) || this;
    _this.currency = void 0;
    _this.currency = currency;
    return _this;
  }
  var _proto = CurrencyAmount.prototype;
  _proto.add = function add(other) {
    !currencyEquals(this.currency, other.currency) ?  invariant(false, 'TOKEN')  : void 0;
    return new CurrencyAmount(this.currency, JSBI.add(this.raw, other.raw));
  };
  _proto.subtract = function subtract(other) {
    !currencyEquals(this.currency, other.currency) ?  invariant(false, 'TOKEN')  : void 0;
    return new CurrencyAmount(this.currency, JSBI.subtract(this.raw, other.raw));
  };
  _proto.toSignificant = function toSignificant(significantDigits, format, rounding) {
    if (significantDigits === void 0) {
      significantDigits = 6;
    }
    if (rounding === void 0) {
      rounding = exports.Rounding.ROUND_DOWN;
    }
    return _Fraction.prototype.toSignificant.call(this, significantDigits, format, rounding);
  };
  _proto.toFixed = function toFixed(decimalPlaces, format, rounding) {
    if (decimalPlaces === void 0) {
      decimalPlaces = this.currency.decimals;
    }
    if (rounding === void 0) {
      rounding = exports.Rounding.ROUND_DOWN;
    }
    !(decimalPlaces <= this.currency.decimals) ?  invariant(false, 'DECIMALS')  : void 0;
    return _Fraction.prototype.toFixed.call(this, decimalPlaces, format, rounding);
  };
  _proto.toExact = function toExact(format) {
    if (format === void 0) {
      format = {
        groupSeparator: ''
      };
    }
    Big$1.DP = this.currency.decimals;
    return new Big$1(this.numerator.toString()).div(this.denominator.toString()).toFormat(format);
  };
  _createClass(CurrencyAmount, [{
    key: "raw",
    get: function get() {
      return this.numerator;
    }
  }]);
  return CurrencyAmount;
}(Fraction);

var TokenAmount = /*#__PURE__*/function (_CurrencyAmount) {
  _inheritsLoose(TokenAmount, _CurrencyAmount);
  // amount _must_ be raw, i.e. in the native representation
  function TokenAmount(token, amount) {
    var _this;
    _this = _CurrencyAmount.call(this, token, amount) || this;
    _this.token = void 0;
    _this.token = token;
    return _this;
  }
  var _proto = TokenAmount.prototype;
  _proto.add = function add(other) {
    !this.token.equals(other.token) ?  invariant(false, 'TOKEN')  : void 0;
    return new TokenAmount(this.token, JSBI.add(this.raw, other.raw));
  };
  _proto.subtract = function subtract(other) {
    !this.token.equals(other.token) ?  invariant(false, 'TOKEN')  : void 0;
    return new TokenAmount(this.token, JSBI.subtract(this.raw, other.raw));
  };
  return TokenAmount;
}(CurrencyAmount);

var Price = /*#__PURE__*/function (_Fraction) {
  _inheritsLoose(Price, _Fraction);
  // input i.e. denominator
  // output i.e. numerator
  // used to adjust the raw fraction w/r/t the decimals of the {base,quote}Token
  Price.fromRoute = function fromRoute(route) {
    var prices = [];
    for (var _iterator = _createForOfIteratorHelperLoose(route.pairs.entries()), _step; !(_step = _iterator()).done;) {
      var _step$value = _step.value,
        i = _step$value[0],
        pair = _step$value[1];
      prices.push(route.path[i].equals(pair.token0) ? new Price(pair.reserve0.currency, pair.reserve1.currency, pair.reserve0.raw, pair.reserve1.raw) : new Price(pair.reserve1.currency, pair.reserve0.currency, pair.reserve1.raw, pair.reserve0.raw));
    }
    return prices.slice(1).reduce(function (accumulator, currentValue) {
      return accumulator.multiply(currentValue);
    }, prices[0]);
  }
  // denominator and numerator _must_ be raw, i.e. in the native representation
  ;
  function Price(baseCurrency, quoteCurrency, denominator, numerator) {
    var _this;
    _this = _Fraction.call(this, numerator, denominator) || this;
    _this.baseCurrency = void 0;
    _this.quoteCurrency = void 0;
    _this.scalar = void 0;
    _this.baseCurrency = baseCurrency;
    _this.quoteCurrency = quoteCurrency;
    _this.scalar = new Fraction(JSBI.exponentiate(TEN, JSBI.BigInt(baseCurrency.decimals)), JSBI.exponentiate(TEN, JSBI.BigInt(quoteCurrency.decimals)));
    return _this;
  }
  var _proto = Price.prototype;
  _proto.invert = function invert() {
    return new Price(this.quoteCurrency, this.baseCurrency, this.numerator, this.denominator);
  };
  _proto.multiply = function multiply(other) {
    !currencyEquals(this.quoteCurrency, other.baseCurrency) ?  invariant(false, 'TOKEN')  : void 0;
    var fraction = _Fraction.prototype.multiply.call(this, other);
    return new Price(this.baseCurrency, other.quoteCurrency, fraction.denominator, fraction.numerator);
  }
  // performs floor division on overflow
  ;
  _proto.quote = function quote(currencyAmount) {
    !currencyEquals(currencyAmount.currency, this.baseCurrency) ?  invariant(false, 'TOKEN')  : void 0;
    if (this.quoteCurrency instanceof Token) {
      return new TokenAmount(this.quoteCurrency, _Fraction.prototype.multiply.call(this, currencyAmount.raw).quotient);
    }
    return CurrencyAmount.ether(currencyAmount.currency.chainId, _Fraction.prototype.multiply.call(this, currencyAmount.raw).quotient);
  };
  _proto.toSignificant = function toSignificant(significantDigits, format, rounding) {
    if (significantDigits === void 0) {
      significantDigits = 6;
    }
    return this.adjusted.toSignificant(significantDigits, format, rounding);
  };
  _proto.toFixed = function toFixed(decimalPlaces, format, rounding) {
    if (decimalPlaces === void 0) {
      decimalPlaces = 4;
    }
    return this.adjusted.toFixed(decimalPlaces, format, rounding);
  };
  _createClass(Price, [{
    key: "raw",
    get: function get() {
      return new Fraction(this.numerator, this.denominator);
    }
  }, {
    key: "adjusted",
    get: function get() {
      return _Fraction.prototype.multiply.call(this, this.scalar);
    }
  }]);
  return Price;
}(Fraction);

var PAIR_ADDRESS_CACHE = {};
var Pair = /*#__PURE__*/function () {
  Pair.getAddress = function getAddress(tokenA, tokenB, chainId) {
    var _PAIR_ADDRESS_CACHE, _PAIR_ADDRESS_CACHE$t;
    var tokens = tokenA.sortsBefore(tokenB) ? [tokenA, tokenB] : [tokenB, tokenA]; // does safety checks
    if (((_PAIR_ADDRESS_CACHE = PAIR_ADDRESS_CACHE) == null ? void 0 : (_PAIR_ADDRESS_CACHE$t = _PAIR_ADDRESS_CACHE[tokens[0].address]) == null ? void 0 : _PAIR_ADDRESS_CACHE$t[tokens[1].address]) === undefined) {
      var _PAIR_ADDRESS_CACHE2, _extends2, _extends3;
      PAIR_ADDRESS_CACHE = _extends({}, PAIR_ADDRESS_CACHE, (_extends3 = {}, _extends3[tokens[0].address] = _extends({}, (_PAIR_ADDRESS_CACHE2 = PAIR_ADDRESS_CACHE) == null ? void 0 : _PAIR_ADDRESS_CACHE2[tokens[0].address], (_extends2 = {}, _extends2[tokens[1].address] = address.getCreate2Address(FACTORY_ADDRESS[chainId], solidity.keccak256(['bytes'], [solidity.pack(['address', 'address'], [tokens[0].address, tokens[1].address])]), INIT_CODE_HASH[chainId]), _extends2)), _extends3));
    }
    return PAIR_ADDRESS_CACHE[tokens[0].address][tokens[1].address];
  };
  function Pair(tokenAmountA, tokenAmountB, chainId) {
    this.liquidityToken = void 0;
    this.tokenAmounts = void 0;
    var tokenAmounts = tokenAmountA.token.sortsBefore(tokenAmountB.token) // does safety checks
    ? [tokenAmountA, tokenAmountB] : [tokenAmountB, tokenAmountA];
    this.liquidityToken = new Token(tokenAmounts[0].token.chainId, Pair.getAddress(tokenAmounts[0].token, tokenAmounts[1].token, chainId), 18, 'JLP', 'Joe Liquidity');
    this.tokenAmounts = tokenAmounts;
  }
  /**
   * Returns true if the token is either token0 or token1
   * @param token to check
   */
  var _proto = Pair.prototype;
  _proto.involvesToken = function involvesToken(token) {
    return token.equals(this.token0) || token.equals(this.token1);
  }
  /**
   * Returns the current mid price of the pair in terms of token0, i.e. the ratio of reserve1 to reserve0
   */;
  /**
   * Return the price of the given token in terms of the other token in the pair.
   * @param token token to return price of
   */
  _proto.priceOf = function priceOf(token) {
    !this.involvesToken(token) ?  invariant(false, 'TOKEN')  : void 0;
    return token.equals(this.token0) ? this.token0Price : this.token1Price;
  }
  /**
   * Returns the chain ID of the tokens in the pair.
   */;
  _proto.reserveOf = function reserveOf(token) {
    !this.involvesToken(token) ?  invariant(false, 'TOKEN')  : void 0;
    return token.equals(this.token0) ? this.reserve0 : this.reserve1;
  };
  _proto.getOutputAmount = function getOutputAmount(inputAmount, chainId) {
    !this.involvesToken(inputAmount.token) ?  invariant(false, 'TOKEN')  : void 0;
    if (JSBI.equal(this.reserve0.raw, ZERO) || JSBI.equal(this.reserve1.raw, ZERO)) {
      throw new InsufficientReservesError();
    }
    var inputReserve = this.reserveOf(inputAmount.token);
    var outputReserve = this.reserveOf(inputAmount.token.equals(this.token0) ? this.token1 : this.token0);
    var inputAmountWithFee = JSBI.multiply(inputAmount.raw, _997);
    var numerator = JSBI.multiply(inputAmountWithFee, outputReserve.raw);
    var denominator = JSBI.add(JSBI.multiply(inputReserve.raw, _1000), inputAmountWithFee);
    var outputAmount = new TokenAmount(inputAmount.token.equals(this.token0) ? this.token1 : this.token0, JSBI.divide(numerator, denominator));
    if (JSBI.equal(outputAmount.raw, ZERO)) {
      throw new InsufficientInputAmountError();
    }
    return [outputAmount, new Pair(inputReserve.add(inputAmount), outputReserve.subtract(outputAmount), chainId)];
  };
  _proto.getInputAmount = function getInputAmount(outputAmount, chainId) {
    !this.involvesToken(outputAmount.token) ?  invariant(false, 'TOKEN')  : void 0;
    if (JSBI.equal(this.reserve0.raw, ZERO) || JSBI.equal(this.reserve1.raw, ZERO) || JSBI.greaterThanOrEqual(outputAmount.raw, this.reserveOf(outputAmount.token).raw)) {
      throw new InsufficientReservesError();
    }
    var outputReserve = this.reserveOf(outputAmount.token);
    var inputReserve = this.reserveOf(outputAmount.token.equals(this.token0) ? this.token1 : this.token0);
    var numerator = JSBI.multiply(JSBI.multiply(inputReserve.raw, outputAmount.raw), _1000);
    var denominator = JSBI.multiply(JSBI.subtract(outputReserve.raw, outputAmount.raw), _997);
    var inputAmount = new TokenAmount(outputAmount.token.equals(this.token0) ? this.token1 : this.token0, JSBI.add(JSBI.divide(numerator, denominator), ONE));
    return [inputAmount, new Pair(inputReserve.add(inputAmount), outputReserve.subtract(outputAmount), chainId)];
  };
  _proto.getLiquidityMinted = function getLiquidityMinted(totalSupply, tokenAmountA, tokenAmountB) {
    !totalSupply.token.equals(this.liquidityToken) ?  invariant(false, 'LIQUIDITY')  : void 0;
    var tokenAmounts = tokenAmountA.token.sortsBefore(tokenAmountB.token) // does safety checks
    ? [tokenAmountA, tokenAmountB] : [tokenAmountB, tokenAmountA];
    !(tokenAmounts[0].token.equals(this.token0) && tokenAmounts[1].token.equals(this.token1)) ?  invariant(false, 'TOKEN')  : void 0;
    var liquidity;
    if (JSBI.equal(totalSupply.raw, ZERO)) {
      liquidity = JSBI.subtract(sqrt(JSBI.multiply(tokenAmounts[0].raw, tokenAmounts[1].raw)), MINIMUM_LIQUIDITY);
    } else {
      var amount0 = JSBI.divide(JSBI.multiply(tokenAmounts[0].raw, totalSupply.raw), this.reserve0.raw);
      var amount1 = JSBI.divide(JSBI.multiply(tokenAmounts[1].raw, totalSupply.raw), this.reserve1.raw);
      liquidity = JSBI.lessThanOrEqual(amount0, amount1) ? amount0 : amount1;
    }
    if (!JSBI.greaterThan(liquidity, ZERO)) {
      throw new InsufficientInputAmountError();
    }
    return new TokenAmount(this.liquidityToken, liquidity);
  };
  _proto.getLiquidityValue = function getLiquidityValue(token, totalSupply, liquidity, feeOn, kLast) {
    if (feeOn === void 0) {
      feeOn = false;
    }
    !this.involvesToken(token) ?  invariant(false, 'TOKEN')  : void 0;
    !totalSupply.token.equals(this.liquidityToken) ?  invariant(false, 'TOTAL_SUPPLY')  : void 0;
    !liquidity.token.equals(this.liquidityToken) ?  invariant(false, 'LIQUIDITY')  : void 0;
    !JSBI.lessThanOrEqual(liquidity.raw, totalSupply.raw) ?  invariant(false, 'LIQUIDITY')  : void 0;
    var totalSupplyAdjusted;
    if (!feeOn) {
      totalSupplyAdjusted = totalSupply;
    } else {
      !!!kLast ?  invariant(false, 'K_LAST')  : void 0;
      var kLastParsed = parseBigintIsh(kLast);
      if (!JSBI.equal(kLastParsed, ZERO)) {
        var rootK = sqrt(JSBI.multiply(this.reserve0.raw, this.reserve1.raw));
        var rootKLast = sqrt(kLastParsed);
        if (JSBI.greaterThan(rootK, rootKLast)) {
          var numerator = JSBI.multiply(totalSupply.raw, JSBI.subtract(rootK, rootKLast));
          var denominator = JSBI.add(JSBI.multiply(rootK, FIVE), rootKLast);
          var feeLiquidity = JSBI.divide(numerator, denominator);
          totalSupplyAdjusted = totalSupply.add(new TokenAmount(this.liquidityToken, feeLiquidity));
        } else {
          totalSupplyAdjusted = totalSupply;
        }
      } else {
        totalSupplyAdjusted = totalSupply;
      }
    }
    return new TokenAmount(token, JSBI.divide(JSBI.multiply(liquidity.raw, this.reserveOf(token).raw), totalSupplyAdjusted.raw));
  };
  _createClass(Pair, [{
    key: "token0Price",
    get: function get() {
      return new Price(this.token0, this.token1, this.tokenAmounts[0].raw, this.tokenAmounts[1].raw);
    }
    /**
     * Returns the current mid price of the pair in terms of token1, i.e. the ratio of reserve0 to reserve1
     */
  }, {
    key: "token1Price",
    get: function get() {
      return new Price(this.token1, this.token0, this.tokenAmounts[1].raw, this.tokenAmounts[0].raw);
    }
  }, {
    key: "chainId",
    get: function get() {
      return this.token0.chainId;
    }
  }, {
    key: "token0",
    get: function get() {
      return this.tokenAmounts[0].token;
    }
  }, {
    key: "token1",
    get: function get() {
      return this.tokenAmounts[1].token;
    }
  }, {
    key: "reserve0",
    get: function get() {
      return this.tokenAmounts[0];
    }
  }, {
    key: "reserve1",
    get: function get() {
      return this.tokenAmounts[1];
    }
  }]);
  return Pair;
}();

var Route = /*#__PURE__*/function () {
  function Route(pairs, input, output) {
    this.pairs = void 0;
    this.path = void 0;
    this.input = void 0;
    this.output = void 0;
    this.midPrice = void 0;
    !(pairs.length > 0) ?  invariant(false, 'PAIRS')  : void 0;
    !pairs.every(function (pair) {
      return pair.chainId === pairs[0].chainId;
    }) ?  invariant(false, 'CHAIN_IDS')  : void 0;
    !(input instanceof Token && pairs[0].involvesToken(input) || input.isNative && pairs[0].involvesToken(WAVAX[pairs[0].chainId])) ?  invariant(false, 'INPUT')  : void 0;
    !(typeof output === 'undefined' || output instanceof Token && pairs[pairs.length - 1].involvesToken(output) || output.isNative && pairs[pairs.length - 1].involvesToken(WAVAX[pairs[0].chainId])) ?  invariant(false, 'OUTPUT')  : void 0;
    var path = [input instanceof Token ? input : WAVAX[pairs[0].chainId]];
    for (var _iterator = _createForOfIteratorHelperLoose(pairs.entries()), _step; !(_step = _iterator()).done;) {
      var _step$value = _step.value,
        i = _step$value[0],
        pair = _step$value[1];
      var currentInput = path[i];
      !(currentInput.equals(pair.token0) || currentInput.equals(pair.token1)) ?  invariant(false, 'PATH')  : void 0;
      var _output = currentInput.equals(pair.token0) ? pair.token1 : pair.token0;
      path.push(_output);
    }
    this.pairs = pairs;
    this.path = path;
    this.midPrice = Price.fromRoute(this);
    this.input = input;
    this.output = output != null ? output : path[path.length - 1];
  }
  _createClass(Route, [{
    key: "chainId",
    get: function get() {
      return this.pairs[0].chainId;
    }
  }]);
  return Route;
}();

var _100_PERCENT = /*#__PURE__*/new Fraction(_100);
var Percent = /*#__PURE__*/function (_Fraction) {
  _inheritsLoose(Percent, _Fraction);
  function Percent() {
    return _Fraction.apply(this, arguments) || this;
  }
  var _proto = Percent.prototype;
  _proto.toSignificant = function toSignificant(significantDigits, format, rounding) {
    if (significantDigits === void 0) {
      significantDigits = 5;
    }
    return this.multiply(_100_PERCENT).toSignificant(significantDigits, format, rounding);
  };
  _proto.toFixed = function toFixed(decimalPlaces, format, rounding) {
    if (decimalPlaces === void 0) {
      decimalPlaces = 2;
    }
    return this.multiply(_100_PERCENT).toFixed(decimalPlaces, format, rounding);
  };
  return Percent;
}(Fraction);

/**
 * Returns the percent difference between the mid price and the execution price, i.e. price impact.
 * @param midPrice mid price before the trade
 * @param inputAmount the input amount of the trade
 * @param outputAmount the output amount of the trade
 */
function computePriceImpact(midPrice, inputAmount, outputAmount) {
  var exactQuote = midPrice.raw.multiply(inputAmount.raw);
  // calculate slippage := (exactQuote - outputAmount) / exactQuote
  var slippage = exactQuote.subtract(outputAmount.raw).divide(exactQuote);
  return new Percent(slippage.numerator, slippage.denominator);
}
// comparator function that allows sorting trades by their output amounts, in decreasing order, and then input amounts
// in increasing order. i.e. the best trades have the most outputs for the least inputs and are sorted first
function inputOutputComparator(a, b) {
  // must have same input and output token for comparison
  !currencyEquals(a.inputAmount.currency, b.inputAmount.currency) ?  invariant(false, 'INPUT_CURRENCY')  : void 0;
  !currencyEquals(a.outputAmount.currency, b.outputAmount.currency) ?  invariant(false, 'OUTPUT_CURRENCY')  : void 0;
  if (a.outputAmount.equalTo(b.outputAmount)) {
    if (a.inputAmount.equalTo(b.inputAmount)) {
      return 0;
    }
    // trade A requires less input than trade B, so A should come first
    if (a.inputAmount.lessThan(b.inputAmount)) {
      return -1;
    } else {
      return 1;
    }
  } else {
    // tradeA has less output than trade B, so should come second
    if (a.outputAmount.lessThan(b.outputAmount)) {
      return 1;
    } else {
      return -1;
    }
  }
}
// extension of the input output comparator that also considers other dimensions of the trade in ranking them
function tradeComparator(a, b) {
  var ioComp = inputOutputComparator(a, b);
  if (ioComp !== 0) {
    return ioComp;
  }
  // consider lowest slippage next, since these are less likely to fail
  if (a.priceImpact.lessThan(b.priceImpact)) {
    return -1;
  } else if (a.priceImpact.greaterThan(b.priceImpact)) {
    return 1;
  }
  // finally consider the number of hops since each hop costs gas
  return a.route.path.length - b.route.path.length;
}
/**
 * Given a currency amount and a chain ID, returns the equivalent representation as the token amount.
 * In other words, if the currency is ETHER, returns the WETH token amount for the given chain. Otherwise, returns
 * the input currency amount.
 */
function wrappedAmount(currencyAmount, chainId) {
  if (currencyAmount instanceof TokenAmount) return currencyAmount;
  if (currencyAmount.currency.isNative) return new TokenAmount(WAVAX[chainId], currencyAmount.raw);
    invariant(false, 'CURRENCY')  ;
}
function wrappedCurrency(currency, chainId) {
  if (currency instanceof Token) return currency;
  if (currency.isNative) return WAVAX[chainId];
    invariant(false, 'CURRENCY')  ;
}
/**
 * Represents a trade executed against a list of pairs.
 * Does not account for slippage, i.e. trades that front run this trade and move the price.
 */
var Trade = /*#__PURE__*/function () {
  /**
   * The route of the trade, i.e. which pairs the trade goes through.
   */
  /**
   * The type of the trade, either exact in or exact out.
   */
  /**
   * The input amount for the trade assuming no slippage.
   */
  /**
   * The output amount for the trade assuming no slippage.
   */
  /**
   * The price expressed in terms of output amount/input amount.
   */
  /**
   * The mid price after the trade executes assuming no slippage.
   */
  /**
   * The percent difference between the mid price before the trade and the trade execution price.
   */
  /**
   * Constructs an exact in trade with the given amount in and route
   * @param route route of the exact in trade
   * @param amountIn the amount being passed in
   */
  Trade.exactIn = function exactIn(route, amountIn, chainId) {
    return new Trade(route, amountIn, exports.TradeType.EXACT_INPUT, chainId);
  }
  /**
   * Constructs an exact out trade with the given amount out and route
   * @param route route of the exact out trade
   * @param amountOut the amount returned by the trade
   */;
  Trade.exactOut = function exactOut(route, amountOut, chainId) {
    return new Trade(route, amountOut, exports.TradeType.EXACT_OUTPUT, chainId);
  };
  function Trade(route, amount, tradeType, chainId) {
    this.route = void 0;
    this.tradeType = void 0;
    this.inputAmount = void 0;
    this.outputAmount = void 0;
    this.executionPrice = void 0;
    this.nextMidPrice = void 0;
    this.priceImpact = void 0;
    this.chainId = void 0;
    var amounts = new Array(route.path.length);
    var nextPairs = new Array(route.pairs.length);
    if (tradeType === exports.TradeType.EXACT_INPUT) {
      !currencyEquals(amount.currency, route.input) ?  invariant(false, 'INPUT')  : void 0;
      amounts[0] = wrappedAmount(amount, route.chainId);
      for (var i = 0; i < route.path.length - 1; i++) {
        var pair = route.pairs[i];
        var _pair$getOutputAmount = pair.getOutputAmount(amounts[i], chainId),
          outputAmount = _pair$getOutputAmount[0],
          nextPair = _pair$getOutputAmount[1];
        amounts[i + 1] = outputAmount;
        nextPairs[i] = nextPair;
      }
    } else {
      !currencyEquals(amount.currency, route.output) ?  invariant(false, 'OUTPUT')  : void 0;
      amounts[amounts.length - 1] = wrappedAmount(amount, route.chainId);
      for (var _i = route.path.length - 1; _i > 0; _i--) {
        var _pair = route.pairs[_i - 1];
        var _pair$getInputAmount = _pair.getInputAmount(amounts[_i], chainId),
          inputAmount = _pair$getInputAmount[0],
          _nextPair = _pair$getInputAmount[1];
        amounts[_i - 1] = inputAmount;
        nextPairs[_i - 1] = _nextPair;
      }
    }
    this.route = route;
    this.tradeType = tradeType;
    this.inputAmount = tradeType === exports.TradeType.EXACT_INPUT ? amount : route.input.isNative ? CurrencyAmount.ether(chainId, amounts[0].raw) : amounts[0];
    this.outputAmount = tradeType === exports.TradeType.EXACT_OUTPUT ? amount : route.output.isNative ? CurrencyAmount.ether(chainId, amounts[amounts.length - 1].raw) : amounts[amounts.length - 1];
    this.executionPrice = new Price(this.inputAmount.currency, this.outputAmount.currency, this.inputAmount.raw, this.outputAmount.raw);
    this.nextMidPrice = Price.fromRoute(new Route(nextPairs, route.input));
    this.priceImpact = computePriceImpact(route.midPrice, this.inputAmount, this.outputAmount);
    this.chainId = chainId;
  }
  /**
   * Get the minimum amount that must be received from this trade for the given slippage tolerance
   * @param slippageTolerance tolerance of unfavorable slippage from the execution price of this trade
   */
  var _proto = Trade.prototype;
  _proto.minimumAmountOut = function minimumAmountOut(slippageTolerance) {
    !!slippageTolerance.lessThan(ZERO) ?  invariant(false, 'SLIPPAGE_TOLERANCE')  : void 0;
    if (this.tradeType === exports.TradeType.EXACT_OUTPUT) {
      return this.outputAmount;
    } else {
      var slippageAdjustedAmountOut = new Fraction(ONE).add(slippageTolerance).invert().multiply(this.outputAmount.raw).quotient;
      return this.outputAmount instanceof TokenAmount ? new TokenAmount(this.outputAmount.token, slippageAdjustedAmountOut) : CurrencyAmount.ether(this.chainId, slippageAdjustedAmountOut);
    }
  }
  /**
   * Get the maximum amount in that can be spent via this trade for the given slippage tolerance
   * @param slippageTolerance tolerance of unfavorable slippage from the execution price of this trade
   */;
  _proto.maximumAmountIn = function maximumAmountIn(slippageTolerance) {
    !!slippageTolerance.lessThan(ZERO) ?  invariant(false, 'SLIPPAGE_TOLERANCE')  : void 0;
    if (this.tradeType === exports.TradeType.EXACT_INPUT) {
      return this.inputAmount;
    } else {
      var slippageAdjustedAmountIn = new Fraction(ONE).add(slippageTolerance).multiply(this.inputAmount.raw).quotient;
      return this.inputAmount instanceof TokenAmount ? new TokenAmount(this.inputAmount.token, slippageAdjustedAmountIn) : CurrencyAmount.ether(this.chainId, slippageAdjustedAmountIn);
    }
  }
  /**
   * Given a list of pairs, and a fixed amount in, returns the top `maxNumResults` trades that go from an input token
   * amount to an output token, making at most `maxHops` hops.
   * Note this does not consider aggregation, as routes are linear. It's possible a better route exists by splitting
   * the amount in among multiple routes.
   * @param pairs the pairs to consider in finding the best trade
   * @param currencyAmountIn exact amount of input currency to spend
   * @param currencyOut the desired currency out
   * @param maxNumResults maximum number of results to return
   * @param maxHops maximum number of hops a returned trade can make, e.g. 1 hop goes through a single pair
   * @param currentPairs used in recursion; the current list of pairs
   * @param originalAmountIn used in recursion; the original value of the currencyAmountIn parameter
   * @param bestTrades used in recursion; the current list of best trades
   */;
  Trade.bestTradeExactIn = function bestTradeExactIn(pairs, currencyAmountIn, currencyOut, _temp,
  // used in recursion.
  currentPairs, originalAmountIn, bestTrades) {
    var _ref = _temp === void 0 ? {} : _temp,
      _ref$maxNumResults = _ref.maxNumResults,
      maxNumResults = _ref$maxNumResults === void 0 ? 3 : _ref$maxNumResults,
      _ref$maxHops = _ref.maxHops,
      maxHops = _ref$maxHops === void 0 ? 3 : _ref$maxHops;
    if (currentPairs === void 0) {
      currentPairs = [];
    }
    if (originalAmountIn === void 0) {
      originalAmountIn = currencyAmountIn;
    }
    if (bestTrades === void 0) {
      bestTrades = [];
    }
    !(pairs.length > 0) ?  invariant(false, 'PAIRS')  : void 0;
    !(maxHops > 0) ?  invariant(false, 'MAX_HOPS')  : void 0;
    !(originalAmountIn === currencyAmountIn || currentPairs.length > 0) ?  invariant(false, 'INVALID_RECURSION')  : void 0;
    var chainId = currencyAmountIn instanceof TokenAmount ? currencyAmountIn.token.chainId : currencyOut instanceof Token ? currencyOut.chainId : undefined;
    !(chainId !== undefined) ?  invariant(false, 'CHAIN_ID')  : void 0;
    var amountIn = wrappedAmount(currencyAmountIn, chainId);
    var tokenOut = wrappedCurrency(currencyOut, chainId);
    for (var i = 0; i < pairs.length; i++) {
      var pair = pairs[i];
      // pair irrelevant
      if (!pair.token0.equals(amountIn.token) && !pair.token1.equals(amountIn.token)) continue;
      if (pair.reserve0.equalTo(ZERO) || pair.reserve1.equalTo(ZERO)) continue;
      var amountOut = void 0;
      try {
        ;
        var _pair$getOutputAmount2 = pair.getOutputAmount(amountIn, chainId);
        amountOut = _pair$getOutputAmount2[0];
      } catch (error) {
        // input too low
        if (error instanceof InsufficientInputAmountError) {
          continue;
        }
        throw error;
      }
      // we have arrived at the output token, so this is the final trade of one of the paths
      if (amountOut.token.equals(tokenOut)) {
        sortedInsert(bestTrades, new Trade(new Route([].concat(currentPairs, [pair]), originalAmountIn.currency, currencyOut), originalAmountIn, exports.TradeType.EXACT_INPUT, chainId), maxNumResults, tradeComparator);
      } else if (maxHops > 1 && pairs.length > 1) {
        var pairsExcludingThisPair = pairs.slice(0, i).concat(pairs.slice(i + 1, pairs.length));
        // otherwise, consider all the other paths that lead from this token as long as we have not exceeded maxHops
        Trade.bestTradeExactIn(pairsExcludingThisPair, amountOut, currencyOut, {
          maxNumResults: maxNumResults,
          maxHops: maxHops - 1
        }, [].concat(currentPairs, [pair]), originalAmountIn, bestTrades);
      }
    }
    return bestTrades;
  }
  /**
   * similar to the above method but instead targets a fixed output amount
   * given a list of pairs, and a fixed amount out, returns the top `maxNumResults` trades that go from an input token
   * to an output token amount, making at most `maxHops` hops
   * note this does not consider aggregation, as routes are linear. it's possible a better route exists by splitting
   * the amount in among multiple routes.
   * @param pairs the pairs to consider in finding the best trade
   * @param currencyIn the currency to spend
   * @param currencyAmountOut the exact amount of currency out
   * @param maxNumResults maximum number of results to return
   * @param maxHops maximum number of hops a returned trade can make, e.g. 1 hop goes through a single pair
   * @param currentPairs used in recursion; the current list of pairs
   * @param originalAmountOut used in recursion; the original value of the currencyAmountOut parameter
   * @param bestTrades used in recursion; the current list of best trades
   */;
  Trade.bestTradeExactOut = function bestTradeExactOut(pairs, currencyIn, currencyAmountOut, _temp2,
  // used in recursion.
  currentPairs, originalAmountOut, bestTrades) {
    var _ref2 = _temp2 === void 0 ? {} : _temp2,
      _ref2$maxNumResults = _ref2.maxNumResults,
      maxNumResults = _ref2$maxNumResults === void 0 ? 3 : _ref2$maxNumResults,
      _ref2$maxHops = _ref2.maxHops,
      maxHops = _ref2$maxHops === void 0 ? 3 : _ref2$maxHops;
    if (currentPairs === void 0) {
      currentPairs = [];
    }
    if (originalAmountOut === void 0) {
      originalAmountOut = currencyAmountOut;
    }
    if (bestTrades === void 0) {
      bestTrades = [];
    }
    !(pairs.length > 0) ?  invariant(false, 'PAIRS')  : void 0;
    !(maxHops > 0) ?  invariant(false, 'MAX_HOPS')  : void 0;
    !(originalAmountOut === currencyAmountOut || currentPairs.length > 0) ?  invariant(false, 'INVALID_RECURSION')  : void 0;
    var chainId = currencyAmountOut instanceof TokenAmount ? currencyAmountOut.token.chainId : currencyIn instanceof Token ? currencyIn.chainId : undefined;
    !(chainId !== undefined) ?  invariant(false, 'CHAIN_ID')  : void 0;
    var amountOut = wrappedAmount(currencyAmountOut, chainId);
    var tokenIn = wrappedCurrency(currencyIn, chainId);
    for (var i = 0; i < pairs.length; i++) {
      var pair = pairs[i];
      // pair irrelevant
      if (!pair.token0.equals(amountOut.token) && !pair.token1.equals(amountOut.token)) continue;
      if (pair.reserve0.equalTo(ZERO) || pair.reserve1.equalTo(ZERO)) continue;
      var amountIn = void 0;
      try {
        ;
        var _pair$getInputAmount2 = pair.getInputAmount(amountOut, chainId);
        amountIn = _pair$getInputAmount2[0];
      } catch (error) {
        // not enough liquidity in this pair
        if (error instanceof InsufficientReservesError) {
          continue;
        }
        throw error;
      }
      // we have arrived at the input token, so this is the first trade of one of the paths
      if (amountIn.token.equals(tokenIn)) {
        sortedInsert(bestTrades, new Trade(new Route([pair].concat(currentPairs), currencyIn, originalAmountOut.currency), originalAmountOut, exports.TradeType.EXACT_OUTPUT, chainId), maxNumResults, tradeComparator);
      } else if (maxHops > 1 && pairs.length > 1) {
        var pairsExcludingThisPair = pairs.slice(0, i).concat(pairs.slice(i + 1, pairs.length));
        // otherwise, consider all the other paths that arrive at this token as long as we have not exceeded maxHops
        Trade.bestTradeExactOut(pairsExcludingThisPair, currencyIn, amountIn, {
          maxNumResults: maxNumResults,
          maxHops: maxHops - 1
        }, [pair].concat(currentPairs), originalAmountOut, bestTrades);
      }
    }
    return bestTrades;
  };
  return Trade;
}();

function toHex(currencyAmount) {
  return "0x" + currencyAmount.raw.toString(16);
}
var ZERO_HEX = '0x0';
/**
 * Represents the Uniswap V2 Router, and has static methods for helping execute trades.
 */
var Router = /*#__PURE__*/function () {
  /**
   * Cannot be constructed.
   */
  function Router() {}
  /**
   * Produces the on-chain method name to call and the hex encoded parameters to pass as arguments for a given trade.
   * @param trade to produce call parameters for
   * @param options options for the call parameters
   */
  Router.swapCallParameters = function swapCallParameters(trade, options) {
    var etherIn = trade.inputAmount.currency.isNative;
    var etherOut = trade.outputAmount.currency.isNative;
    // the router does not support both ether in and out
    !!(etherIn && etherOut) ?  invariant(false, 'ETHER_IN_OUT')  : void 0;
    !(!('ttl' in options) || options.ttl > 0) ?  invariant(false, 'TTL')  : void 0;
    var to = validateAndParseAddress(options.recipient);
    var amountIn = toHex(trade.maximumAmountIn(options.allowedSlippage));
    var amountOut = toHex(trade.minimumAmountOut(options.allowedSlippage));
    var path = trade.route.path.map(function (token) {
      return token.address;
    });
    var deadline = 'ttl' in options ? "0x" + (Math.floor(new Date().getTime() / 1000) + options.ttl).toString(16) : "0x" + options.deadline.toString(16);
    var useFeeOnTransfer = Boolean(options.feeOnTransfer);
    var methodName;
    var args;
    var value;
    switch (trade.tradeType) {
      case exports.TradeType.EXACT_INPUT:
        if (etherIn) {
          methodName = useFeeOnTransfer ? 'swapExactAVAXForTokensSupportingFeeOnTransferTokens' : 'swapExactAVAXForTokens';
          // (uint amountOutMin, address[] calldata path, address to, uint deadline)
          args = [amountOut, path, to, deadline];
          value = amountIn;
        } else if (etherOut) {
          methodName = useFeeOnTransfer ? 'swapExactTokensForAVAXSupportingFeeOnTransferTokens' : 'swapExactTokensForAVAX';
          // (uint amountIn, uint amountOutMin, address[] calldata path, address to, uint deadline)
          args = [amountIn, amountOut, path, to, deadline];
          value = ZERO_HEX;
        } else {
          methodName = useFeeOnTransfer ? 'swapExactTokensForTokensSupportingFeeOnTransferTokens' : 'swapExactTokensForTokens';
          // (uint amountIn, uint amountOutMin, address[] calldata path, address to, uint deadline)
          args = [amountIn, amountOut, path, to, deadline];
          value = ZERO_HEX;
        }
        break;
      case exports.TradeType.EXACT_OUTPUT:
        !!useFeeOnTransfer ?  invariant(false, 'EXACT_OUT_FOT')  : void 0;
        if (etherIn) {
          methodName = 'swapAVAXForExactTokens';
          // (uint amountOut, address[] calldata path, address to, uint deadline)
          args = [amountOut, path, to, deadline];
          value = amountIn;
        } else if (etherOut) {
          methodName = 'swapTokensForExactAVAX';
          // (uint amountOut, uint amountInMax, address[] calldata path, address to, uint deadline)
          args = [amountOut, amountIn, path, to, deadline];
          value = ZERO_HEX;
        } else {
          methodName = 'swapTokensForExactTokens';
          // (uint amountOut, uint amountInMax, address[] calldata path, address to, uint deadline)
          args = [amountOut, amountIn, path, to, deadline];
          value = ZERO_HEX;
        }
        break;
    }
    return {
      methodName: methodName,
      args: args,
      value: value
    };
  };
  return Router;
}();

var ERC20ABI = [
	{
		inputs: [
			{
				internalType: "string",
				name: "name_",
				type: "string"
			},
			{
				internalType: "string",
				name: "symbol_",
				type: "string"
			}
		],
		stateMutability: "nonpayable",
		type: "constructor"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "owner",
				type: "address"
			},
			{
				indexed: true,
				internalType: "address",
				name: "spender",
				type: "address"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "value",
				type: "uint256"
			}
		],
		name: "Approval",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "from",
				type: "address"
			},
			{
				indexed: true,
				internalType: "address",
				name: "to",
				type: "address"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "value",
				type: "uint256"
			}
		],
		name: "Transfer",
		type: "event"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "owner",
				type: "address"
			},
			{
				internalType: "address",
				name: "spender",
				type: "address"
			}
		],
		name: "allowance",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "spender",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "amount",
				type: "uint256"
			}
		],
		name: "approve",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool"
			}
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "account",
				type: "address"
			}
		],
		name: "balanceOf",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "decimals",
		outputs: [
			{
				internalType: "uint8",
				name: "",
				type: "uint8"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "spender",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "subtractedValue",
				type: "uint256"
			}
		],
		name: "decreaseAllowance",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool"
			}
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "spender",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "addedValue",
				type: "uint256"
			}
		],
		name: "increaseAllowance",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool"
			}
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
		],
		name: "name",
		outputs: [
			{
				internalType: "string",
				name: "",
				type: "string"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "symbol",
		outputs: [
			{
				internalType: "string",
				name: "",
				type: "string"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "totalSupply",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "recipient",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "amount",
				type: "uint256"
			}
		],
		name: "transfer",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool"
			}
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "sender",
				type: "address"
			},
			{
				internalType: "address",
				name: "recipient",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "amount",
				type: "uint256"
			}
		],
		name: "transferFrom",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool"
			}
		],
		stateMutability: "nonpayable",
		type: "function"
	}
];

var JoePairABI = [
	{
		inputs: [
		],
		stateMutability: "nonpayable",
		type: "constructor"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "owner",
				type: "address"
			},
			{
				indexed: true,
				internalType: "address",
				name: "spender",
				type: "address"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "value",
				type: "uint256"
			}
		],
		name: "Approval",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "sender",
				type: "address"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "amount0",
				type: "uint256"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "amount1",
				type: "uint256"
			},
			{
				indexed: true,
				internalType: "address",
				name: "to",
				type: "address"
			}
		],
		name: "Burn",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "sender",
				type: "address"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "amount0",
				type: "uint256"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "amount1",
				type: "uint256"
			}
		],
		name: "Mint",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "sender",
				type: "address"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "amount0In",
				type: "uint256"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "amount1In",
				type: "uint256"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "amount0Out",
				type: "uint256"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "amount1Out",
				type: "uint256"
			},
			{
				indexed: true,
				internalType: "address",
				name: "to",
				type: "address"
			}
		],
		name: "Swap",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: "uint112",
				name: "reserve0",
				type: "uint112"
			},
			{
				indexed: false,
				internalType: "uint112",
				name: "reserve1",
				type: "uint112"
			}
		],
		name: "Sync",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "from",
				type: "address"
			},
			{
				indexed: true,
				internalType: "address",
				name: "to",
				type: "address"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "value",
				type: "uint256"
			}
		],
		name: "Transfer",
		type: "event"
	},
	{
		inputs: [
		],
		name: "DOMAIN_SEPARATOR",
		outputs: [
			{
				internalType: "bytes32",
				name: "",
				type: "bytes32"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "MINIMUM_LIQUIDITY",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "PERMIT_TYPEHASH",
		outputs: [
			{
				internalType: "bytes32",
				name: "",
				type: "bytes32"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			},
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		name: "allowance",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "spender",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "value",
				type: "uint256"
			}
		],
		name: "approve",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool"
			}
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		name: "balanceOf",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "to",
				type: "address"
			}
		],
		name: "burn",
		outputs: [
			{
				internalType: "uint256",
				name: "amount0",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "amount1",
				type: "uint256"
			}
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
		],
		name: "decimals",
		outputs: [
			{
				internalType: "uint8",
				name: "",
				type: "uint8"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "factory",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "getReserves",
		outputs: [
			{
				internalType: "uint112",
				name: "_reserve0",
				type: "uint112"
			},
			{
				internalType: "uint112",
				name: "_reserve1",
				type: "uint112"
			},
			{
				internalType: "uint32",
				name: "_blockTimestampLast",
				type: "uint32"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "_token0",
				type: "address"
			},
			{
				internalType: "address",
				name: "_token1",
				type: "address"
			}
		],
		name: "initialize",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
		],
		name: "kLast",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "to",
				type: "address"
			}
		],
		name: "mint",
		outputs: [
			{
				internalType: "uint256",
				name: "liquidity",
				type: "uint256"
			}
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
		],
		name: "name",
		outputs: [
			{
				internalType: "string",
				name: "",
				type: "string"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		name: "nonces",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "owner",
				type: "address"
			},
			{
				internalType: "address",
				name: "spender",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "value",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "deadline",
				type: "uint256"
			},
			{
				internalType: "uint8",
				name: "v",
				type: "uint8"
			},
			{
				internalType: "bytes32",
				name: "r",
				type: "bytes32"
			},
			{
				internalType: "bytes32",
				name: "s",
				type: "bytes32"
			}
		],
		name: "permit",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
		],
		name: "price0CumulativeLast",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "price1CumulativeLast",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "to",
				type: "address"
			}
		],
		name: "skim",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "amount0Out",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "amount1Out",
				type: "uint256"
			},
			{
				internalType: "address",
				name: "to",
				type: "address"
			},
			{
				internalType: "bytes",
				name: "data",
				type: "bytes"
			}
		],
		name: "swap",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
		],
		name: "symbol",
		outputs: [
			{
				internalType: "string",
				name: "",
				type: "string"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "sync",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
		],
		name: "token0",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "token1",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "totalSupply",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "to",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "value",
				type: "uint256"
			}
		],
		name: "transfer",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool"
			}
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "from",
				type: "address"
			},
			{
				internalType: "address",
				name: "to",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "value",
				type: "uint256"
			}
		],
		name: "transferFrom",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool"
			}
		],
		stateMutability: "nonpayable",
		type: "function"
	}
];

var TOKEN_DECIMALS_CACHE = {};
/**
 * Contains methods for constructing instances of pairs and tokens from on-chain data.
 */
var Fetcher = /*#__PURE__*/function () {
  /**
   * Cannot be constructed.
   */
  function Fetcher() {}
  /**
   * Fetch information for a given token on the given chain, using the given ethers provider.
   * @param chainId chain of the token
   * @param address address of the token on the chain
   * @param provider provider used to fetch the token
   * @param symbol optional symbol of the token
   * @param name optional name of the token
   */
  Fetcher.fetchTokenData =
  /*#__PURE__*/
  function () {
    var _fetchTokenData = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(chainId, address, provider, symbol, name) {
      var _TOKEN_DECIMALS_CACHE, _TOKEN_DECIMALS_CACHE2;
      var parsedDecimals;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (provider === void 0) {
              provider = /*#__PURE__*/providers.getDefaultProvider( /*#__PURE__*/networks.getNetwork(chainId));
            }
            if (!(typeof ((_TOKEN_DECIMALS_CACHE = TOKEN_DECIMALS_CACHE) == null ? void 0 : (_TOKEN_DECIMALS_CACHE2 = _TOKEN_DECIMALS_CACHE[chainId]) == null ? void 0 : _TOKEN_DECIMALS_CACHE2[address]) === 'number')) {
              _context.next = 5;
              break;
            }
            _context.t0 = TOKEN_DECIMALS_CACHE[chainId][address];
            _context.next = 8;
            break;
          case 5:
            _context.next = 7;
            return new contracts.Contract(address, ERC20ABI, provider).decimals().then(function (decimals) {
              var _TOKEN_DECIMALS_CACHE3, _extends2, _extends3;
              TOKEN_DECIMALS_CACHE = _extends({}, TOKEN_DECIMALS_CACHE, (_extends3 = {}, _extends3[chainId] = _extends({}, (_TOKEN_DECIMALS_CACHE3 = TOKEN_DECIMALS_CACHE) == null ? void 0 : _TOKEN_DECIMALS_CACHE3[chainId], (_extends2 = {}, _extends2[address] = decimals, _extends2)), _extends3));
              return decimals;
            });
          case 7:
            _context.t0 = _context.sent;
          case 8:
            parsedDecimals = _context.t0;
            return _context.abrupt("return", new Token(chainId, address, parsedDecimals, symbol, name));
          case 10:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    function fetchTokenData(_x, _x2, _x3, _x4, _x5) {
      return _fetchTokenData.apply(this, arguments);
    }
    return fetchTokenData;
  }()
  /**
   * Fetches information about a pair and constructs a pair from the given two tokens.
   * @param tokenA first token
   * @param tokenB second token
   * @param provider the provider to use to fetch the data
   */
  ;
  Fetcher.fetchPairData =
  /*#__PURE__*/
  function () {
    var _fetchPairData = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(tokenA, tokenB, provider) {
      var address, _yield$Contract$getRe, reserves0, reserves1, balances;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            if (provider === void 0) {
              provider = /*#__PURE__*/providers.getDefaultProvider( /*#__PURE__*/networks.getNetwork(tokenA.chainId));
            }
            !(tokenA.chainId === tokenB.chainId) ?  invariant(false, 'CHAIN_ID')  : void 0;
            address = Pair.getAddress(tokenA, tokenB, tokenA.chainId);
            _context2.next = 5;
            return new contracts.Contract(address, JoePairABI, provider).getReserves();
          case 5:
            _yield$Contract$getRe = _context2.sent;
            reserves0 = _yield$Contract$getRe[0];
            reserves1 = _yield$Contract$getRe[1];
            balances = tokenA.sortsBefore(tokenB) ? [reserves0, reserves1] : [reserves1, reserves0];
            return _context2.abrupt("return", new Pair(new TokenAmount(tokenA, balances[0]), new TokenAmount(tokenB, balances[1]), tokenA.chainId));
          case 10:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    function fetchPairData(_x6, _x7, _x8) {
      return _fetchPairData.apply(this, arguments);
    }
    return fetchPairData;
  }();
  return Fetcher;
}();

var ERC20ABI$1 = [{
  inputs: [{
    internalType: 'string',
    name: 'name_',
    type: 'string'
  }, {
    internalType: 'string',
    name: 'symbol_',
    type: 'string'
  }],
  stateMutability: 'nonpayable',
  type: 'constructor'
}, {
  anonymous: false,
  inputs: [{
    indexed: true,
    internalType: 'address',
    name: 'owner',
    type: 'address'
  }, {
    indexed: true,
    internalType: 'address',
    name: 'spender',
    type: 'address'
  }, {
    indexed: false,
    internalType: 'uint256',
    name: 'value',
    type: 'uint256'
  }],
  name: 'Approval',
  type: 'event'
}, {
  anonymous: false,
  inputs: [{
    indexed: true,
    internalType: 'address',
    name: 'from',
    type: 'address'
  }, {
    indexed: true,
    internalType: 'address',
    name: 'to',
    type: 'address'
  }, {
    indexed: false,
    internalType: 'uint256',
    name: 'value',
    type: 'uint256'
  }],
  name: 'Transfer',
  type: 'event'
}, {
  inputs: [{
    internalType: 'address',
    name: 'owner',
    type: 'address'
  }, {
    internalType: 'address',
    name: 'spender',
    type: 'address'
  }],
  name: 'allowance',
  outputs: [{
    internalType: 'uint256',
    name: '',
    type: 'uint256'
  }],
  stateMutability: 'view',
  type: 'function'
}, {
  inputs: [{
    internalType: 'address',
    name: 'spender',
    type: 'address'
  }, {
    internalType: 'uint256',
    name: 'amount',
    type: 'uint256'
  }],
  name: 'approve',
  outputs: [{
    internalType: 'bool',
    name: '',
    type: 'bool'
  }],
  stateMutability: 'nonpayable',
  type: 'function'
}, {
  inputs: [{
    internalType: 'address',
    name: 'account',
    type: 'address'
  }],
  name: 'balanceOf',
  outputs: [{
    internalType: 'uint256',
    name: '',
    type: 'uint256'
  }],
  stateMutability: 'view',
  type: 'function'
}, {
  inputs: [],
  name: 'decimals',
  outputs: [{
    internalType: 'uint8',
    name: '',
    type: 'uint8'
  }],
  stateMutability: 'view',
  type: 'function'
}, {
  inputs: [{
    internalType: 'address',
    name: 'spender',
    type: 'address'
  }, {
    internalType: 'uint256',
    name: 'subtractedValue',
    type: 'uint256'
  }],
  name: 'decreaseAllowance',
  outputs: [{
    internalType: 'bool',
    name: '',
    type: 'bool'
  }],
  stateMutability: 'nonpayable',
  type: 'function'
}, {
  inputs: [{
    internalType: 'address',
    name: 'spender',
    type: 'address'
  }, {
    internalType: 'uint256',
    name: 'addedValue',
    type: 'uint256'
  }],
  name: 'increaseAllowance',
  outputs: [{
    internalType: 'bool',
    name: '',
    type: 'bool'
  }],
  stateMutability: 'nonpayable',
  type: 'function'
}, {
  inputs: [],
  name: 'name',
  outputs: [{
    internalType: 'string',
    name: '',
    type: 'string'
  }],
  stateMutability: 'view',
  type: 'function'
}, {
  inputs: [],
  name: 'symbol',
  outputs: [{
    internalType: 'string',
    name: '',
    type: 'string'
  }],
  stateMutability: 'view',
  type: 'function'
}, {
  inputs: [],
  name: 'totalSupply',
  outputs: [{
    internalType: 'uint256',
    name: '',
    type: 'uint256'
  }],
  stateMutability: 'view',
  type: 'function'
}, {
  inputs: [{
    internalType: 'address',
    name: 'recipient',
    type: 'address'
  }, {
    internalType: 'uint256',
    name: 'amount',
    type: 'uint256'
  }],
  name: 'transfer',
  outputs: [{
    internalType: 'bool',
    name: '',
    type: 'bool'
  }],
  stateMutability: 'nonpayable',
  type: 'function'
}, {
  inputs: [{
    internalType: 'address',
    name: 'sender',
    type: 'address'
  }, {
    internalType: 'address',
    name: 'recipient',
    type: 'address'
  }, {
    internalType: 'uint256',
    name: 'amount',
    type: 'uint256'
  }],
  name: 'transferFrom',
  outputs: [{
    internalType: 'bool',
    name: '',
    type: 'bool'
  }],
  stateMutability: 'nonpayable',
  type: 'function'
}];

var JoePairABI$1 = [{
  inputs: [],
  stateMutability: 'nonpayable',
  type: 'constructor'
}, {
  anonymous: false,
  inputs: [{
    indexed: true,
    internalType: 'address',
    name: 'owner',
    type: 'address'
  }, {
    indexed: true,
    internalType: 'address',
    name: 'spender',
    type: 'address'
  }, {
    indexed: false,
    internalType: 'uint256',
    name: 'value',
    type: 'uint256'
  }],
  name: 'Approval',
  type: 'event'
}, {
  anonymous: false,
  inputs: [{
    indexed: true,
    internalType: 'address',
    name: 'sender',
    type: 'address'
  }, {
    indexed: false,
    internalType: 'uint256',
    name: 'amount0',
    type: 'uint256'
  }, {
    indexed: false,
    internalType: 'uint256',
    name: 'amount1',
    type: 'uint256'
  }, {
    indexed: true,
    internalType: 'address',
    name: 'to',
    type: 'address'
  }],
  name: 'Burn',
  type: 'event'
}, {
  anonymous: false,
  inputs: [{
    indexed: true,
    internalType: 'address',
    name: 'sender',
    type: 'address'
  }, {
    indexed: false,
    internalType: 'uint256',
    name: 'amount0',
    type: 'uint256'
  }, {
    indexed: false,
    internalType: 'uint256',
    name: 'amount1',
    type: 'uint256'
  }],
  name: 'Mint',
  type: 'event'
}, {
  anonymous: false,
  inputs: [{
    indexed: true,
    internalType: 'address',
    name: 'sender',
    type: 'address'
  }, {
    indexed: false,
    internalType: 'uint256',
    name: 'amount0In',
    type: 'uint256'
  }, {
    indexed: false,
    internalType: 'uint256',
    name: 'amount1In',
    type: 'uint256'
  }, {
    indexed: false,
    internalType: 'uint256',
    name: 'amount0Out',
    type: 'uint256'
  }, {
    indexed: false,
    internalType: 'uint256',
    name: 'amount1Out',
    type: 'uint256'
  }, {
    indexed: true,
    internalType: 'address',
    name: 'to',
    type: 'address'
  }],
  name: 'Swap',
  type: 'event'
}, {
  anonymous: false,
  inputs: [{
    indexed: false,
    internalType: 'uint112',
    name: 'reserve0',
    type: 'uint112'
  }, {
    indexed: false,
    internalType: 'uint112',
    name: 'reserve1',
    type: 'uint112'
  }],
  name: 'Sync',
  type: 'event'
}, {
  anonymous: false,
  inputs: [{
    indexed: true,
    internalType: 'address',
    name: 'from',
    type: 'address'
  }, {
    indexed: true,
    internalType: 'address',
    name: 'to',
    type: 'address'
  }, {
    indexed: false,
    internalType: 'uint256',
    name: 'value',
    type: 'uint256'
  }],
  name: 'Transfer',
  type: 'event'
}, {
  inputs: [],
  name: 'DOMAIN_SEPARATOR',
  outputs: [{
    internalType: 'bytes32',
    name: '',
    type: 'bytes32'
  }],
  stateMutability: 'view',
  type: 'function'
}, {
  inputs: [],
  name: 'MINIMUM_LIQUIDITY',
  outputs: [{
    internalType: 'uint256',
    name: '',
    type: 'uint256'
  }],
  stateMutability: 'view',
  type: 'function'
}, {
  inputs: [],
  name: 'PERMIT_TYPEHASH',
  outputs: [{
    internalType: 'bytes32',
    name: '',
    type: 'bytes32'
  }],
  stateMutability: 'view',
  type: 'function'
}, {
  inputs: [{
    internalType: 'address',
    name: '',
    type: 'address'
  }, {
    internalType: 'address',
    name: '',
    type: 'address'
  }],
  name: 'allowance',
  outputs: [{
    internalType: 'uint256',
    name: '',
    type: 'uint256'
  }],
  stateMutability: 'view',
  type: 'function'
}, {
  inputs: [{
    internalType: 'address',
    name: 'spender',
    type: 'address'
  }, {
    internalType: 'uint256',
    name: 'value',
    type: 'uint256'
  }],
  name: 'approve',
  outputs: [{
    internalType: 'bool',
    name: '',
    type: 'bool'
  }],
  stateMutability: 'nonpayable',
  type: 'function'
}, {
  inputs: [{
    internalType: 'address',
    name: '',
    type: 'address'
  }],
  name: 'balanceOf',
  outputs: [{
    internalType: 'uint256',
    name: '',
    type: 'uint256'
  }],
  stateMutability: 'view',
  type: 'function'
}, {
  inputs: [{
    internalType: 'address',
    name: 'to',
    type: 'address'
  }],
  name: 'burn',
  outputs: [{
    internalType: 'uint256',
    name: 'amount0',
    type: 'uint256'
  }, {
    internalType: 'uint256',
    name: 'amount1',
    type: 'uint256'
  }],
  stateMutability: 'nonpayable',
  type: 'function'
}, {
  inputs: [],
  name: 'decimals',
  outputs: [{
    internalType: 'uint8',
    name: '',
    type: 'uint8'
  }],
  stateMutability: 'view',
  type: 'function'
}, {
  inputs: [],
  name: 'factory',
  outputs: [{
    internalType: 'address',
    name: '',
    type: 'address'
  }],
  stateMutability: 'view',
  type: 'function'
}, {
  inputs: [],
  name: 'getReserves',
  outputs: [{
    internalType: 'uint112',
    name: '_reserve0',
    type: 'uint112'
  }, {
    internalType: 'uint112',
    name: '_reserve1',
    type: 'uint112'
  }, {
    internalType: 'uint32',
    name: '_blockTimestampLast',
    type: 'uint32'
  }],
  stateMutability: 'view',
  type: 'function'
}, {
  inputs: [{
    internalType: 'address',
    name: '_token0',
    type: 'address'
  }, {
    internalType: 'address',
    name: '_token1',
    type: 'address'
  }],
  name: 'initialize',
  outputs: [],
  stateMutability: 'nonpayable',
  type: 'function'
}, {
  inputs: [],
  name: 'kLast',
  outputs: [{
    internalType: 'uint256',
    name: '',
    type: 'uint256'
  }],
  stateMutability: 'view',
  type: 'function'
}, {
  inputs: [{
    internalType: 'address',
    name: 'to',
    type: 'address'
  }],
  name: 'mint',
  outputs: [{
    internalType: 'uint256',
    name: 'liquidity',
    type: 'uint256'
  }],
  stateMutability: 'nonpayable',
  type: 'function'
}, {
  inputs: [],
  name: 'name',
  outputs: [{
    internalType: 'string',
    name: '',
    type: 'string'
  }],
  stateMutability: 'view',
  type: 'function'
}, {
  inputs: [{
    internalType: 'address',
    name: '',
    type: 'address'
  }],
  name: 'nonces',
  outputs: [{
    internalType: 'uint256',
    name: '',
    type: 'uint256'
  }],
  stateMutability: 'view',
  type: 'function'
}, {
  inputs: [{
    internalType: 'address',
    name: 'owner',
    type: 'address'
  }, {
    internalType: 'address',
    name: 'spender',
    type: 'address'
  }, {
    internalType: 'uint256',
    name: 'value',
    type: 'uint256'
  }, {
    internalType: 'uint256',
    name: 'deadline',
    type: 'uint256'
  }, {
    internalType: 'uint8',
    name: 'v',
    type: 'uint8'
  }, {
    internalType: 'bytes32',
    name: 'r',
    type: 'bytes32'
  }, {
    internalType: 'bytes32',
    name: 's',
    type: 'bytes32'
  }],
  name: 'permit',
  outputs: [],
  stateMutability: 'nonpayable',
  type: 'function'
}, {
  inputs: [],
  name: 'price0CumulativeLast',
  outputs: [{
    internalType: 'uint256',
    name: '',
    type: 'uint256'
  }],
  stateMutability: 'view',
  type: 'function'
}, {
  inputs: [],
  name: 'price1CumulativeLast',
  outputs: [{
    internalType: 'uint256',
    name: '',
    type: 'uint256'
  }],
  stateMutability: 'view',
  type: 'function'
}, {
  inputs: [{
    internalType: 'address',
    name: 'to',
    type: 'address'
  }],
  name: 'skim',
  outputs: [],
  stateMutability: 'nonpayable',
  type: 'function'
}, {
  inputs: [{
    internalType: 'uint256',
    name: 'amount0Out',
    type: 'uint256'
  }, {
    internalType: 'uint256',
    name: 'amount1Out',
    type: 'uint256'
  }, {
    internalType: 'address',
    name: 'to',
    type: 'address'
  }, {
    internalType: 'bytes',
    name: 'data',
    type: 'bytes'
  }],
  name: 'swap',
  outputs: [],
  stateMutability: 'nonpayable',
  type: 'function'
}, {
  inputs: [],
  name: 'symbol',
  outputs: [{
    internalType: 'string',
    name: '',
    type: 'string'
  }],
  stateMutability: 'view',
  type: 'function'
}, {
  inputs: [],
  name: 'sync',
  outputs: [],
  stateMutability: 'nonpayable',
  type: 'function'
}, {
  inputs: [],
  name: 'token0',
  outputs: [{
    internalType: 'address',
    name: '',
    type: 'address'
  }],
  stateMutability: 'view',
  type: 'function'
}, {
  inputs: [],
  name: 'token1',
  outputs: [{
    internalType: 'address',
    name: '',
    type: 'address'
  }],
  stateMutability: 'view',
  type: 'function'
}, {
  inputs: [],
  name: 'totalSupply',
  outputs: [{
    internalType: 'uint256',
    name: '',
    type: 'uint256'
  }],
  stateMutability: 'view',
  type: 'function'
}, {
  inputs: [{
    internalType: 'address',
    name: 'to',
    type: 'address'
  }, {
    internalType: 'uint256',
    name: 'value',
    type: 'uint256'
  }],
  name: 'transfer',
  outputs: [{
    internalType: 'bool',
    name: '',
    type: 'bool'
  }],
  stateMutability: 'nonpayable',
  type: 'function'
}, {
  inputs: [{
    internalType: 'address',
    name: 'from',
    type: 'address'
  }, {
    internalType: 'address',
    name: 'to',
    type: 'address'
  }, {
    internalType: 'uint256',
    name: 'value',
    type: 'uint256'
  }],
  name: 'transferFrom',
  outputs: [{
    internalType: 'bool',
    name: '',
    type: 'bool'
  }],
  stateMutability: 'nonpayable',
  type: 'function'
}];

var RocketJoeStakingABI = [{
  anonymous: false,
  inputs: [{
    indexed: true,
    internalType: 'address',
    name: 'user',
    type: 'address'
  }, {
    indexed: false,
    internalType: 'uint256',
    name: 'amount',
    type: 'uint256'
  }],
  name: 'Deposit',
  type: 'event'
}, {
  anonymous: false,
  inputs: [{
    indexed: true,
    internalType: 'address',
    name: 'user',
    type: 'address'
  }, {
    indexed: false,
    internalType: 'uint256',
    name: 'amount',
    type: 'uint256'
  }],
  name: 'EmergencyWithdraw',
  type: 'event'
}, {
  anonymous: false,
  inputs: [{
    indexed: true,
    internalType: 'address',
    name: 'previousOwner',
    type: 'address'
  }, {
    indexed: true,
    internalType: 'address',
    name: 'newOwner',
    type: 'address'
  }],
  name: 'OwnershipTransferred',
  type: 'event'
}, {
  anonymous: false,
  inputs: [{
    indexed: true,
    internalType: 'address',
    name: 'user',
    type: 'address'
  }, {
    indexed: false,
    internalType: 'uint256',
    name: '_rJoePerSec',
    type: 'uint256'
  }],
  name: 'UpdateEmissionRate',
  type: 'event'
}, {
  anonymous: false,
  inputs: [{
    indexed: true,
    internalType: 'address',
    name: 'user',
    type: 'address'
  }, {
    indexed: false,
    internalType: 'uint256',
    name: 'amount',
    type: 'uint256'
  }],
  name: 'Withdraw',
  type: 'event'
}, {
  inputs: [],
  name: 'MAX_EMISSION_RATE',
  outputs: [{
    internalType: 'uint256',
    name: '',
    type: 'uint256'
  }],
  stateMutability: 'view',
  type: 'function'
}, {
  inputs: [],
  name: 'accRJoePerShare',
  outputs: [{
    internalType: 'uint256',
    name: '',
    type: 'uint256'
  }],
  stateMutability: 'view',
  type: 'function'
}, {
  inputs: [{
    internalType: 'uint256',
    name: '_amount',
    type: 'uint256'
  }],
  name: 'deposit',
  outputs: [],
  stateMutability: 'nonpayable',
  type: 'function'
}, {
  inputs: [],
  name: 'emergencyWithdraw',
  outputs: [],
  stateMutability: 'nonpayable',
  type: 'function'
}, {
  inputs: [{
    internalType: 'contract IERC20Upgradeable',
    name: '_joe',
    type: 'address'
  }, {
    internalType: 'contract RocketJoeToken',
    name: '_rJoe',
    type: 'address'
  }, {
    internalType: 'uint256',
    name: '_rJoePerSec',
    type: 'uint256'
  }, {
    internalType: 'uint256',
    name: '_startTime',
    type: 'uint256'
  }],
  name: 'initialize',
  outputs: [],
  stateMutability: 'nonpayable',
  type: 'function'
}, {
  inputs: [],
  name: 'joe',
  outputs: [{
    internalType: 'contract IERC20Upgradeable',
    name: '',
    type: 'address'
  }],
  stateMutability: 'view',
  type: 'function'
}, {
  inputs: [],
  name: 'lastRewardTimestamp',
  outputs: [{
    internalType: 'uint256',
    name: '',
    type: 'uint256'
  }],
  stateMutability: 'view',
  type: 'function'
}, {
  inputs: [],
  name: 'owner',
  outputs: [{
    internalType: 'address',
    name: '',
    type: 'address'
  }],
  stateMutability: 'view',
  type: 'function'
}, {
  inputs: [{
    internalType: 'address',
    name: '_user',
    type: 'address'
  }],
  name: 'pendingRJoe',
  outputs: [{
    internalType: 'uint256',
    name: '',
    type: 'uint256'
  }],
  stateMutability: 'view',
  type: 'function'
}, {
  inputs: [],
  name: 'rJoe',
  outputs: [{
    internalType: 'contract RocketJoeToken',
    name: '',
    type: 'address'
  }],
  stateMutability: 'view',
  type: 'function'
}, {
  inputs: [],
  name: 'rJoePerSec',
  outputs: [{
    internalType: 'uint256',
    name: '',
    type: 'uint256'
  }],
  stateMutability: 'view',
  type: 'function'
}, {
  inputs: [],
  name: 'renounceOwnership',
  outputs: [],
  stateMutability: 'nonpayable',
  type: 'function'
}, {
  inputs: [],
  name: 'totalJoeStaked',
  outputs: [{
    internalType: 'uint256',
    name: '',
    type: 'uint256'
  }],
  stateMutability: 'view',
  type: 'function'
}, {
  inputs: [{
    internalType: 'address',
    name: 'newOwner',
    type: 'address'
  }],
  name: 'transferOwnership',
  outputs: [],
  stateMutability: 'nonpayable',
  type: 'function'
}, {
  inputs: [{
    internalType: 'uint256',
    name: '_rJoePerSec',
    type: 'uint256'
  }],
  name: 'updateEmissionRate',
  outputs: [],
  stateMutability: 'nonpayable',
  type: 'function'
}, {
  inputs: [],
  name: 'updatePool',
  outputs: [],
  stateMutability: 'nonpayable',
  type: 'function'
}, {
  inputs: [{
    internalType: 'address',
    name: '',
    type: 'address'
  }],
  name: 'userInfo',
  outputs: [{
    internalType: 'uint256',
    name: 'amount',
    type: 'uint256'
  }, {
    internalType: 'uint256',
    name: 'rewardDebt',
    type: 'uint256'
  }],
  stateMutability: 'view',
  type: 'function'
}, {
  inputs: [{
    internalType: 'uint256',
    name: '_amount',
    type: 'uint256'
  }],
  name: 'withdraw',
  outputs: [],
  stateMutability: 'nonpayable',
  type: 'function'
}];

var RouterABI = [{
  inputs: [{
    internalType: 'address',
    name: '_factory',
    type: 'address'
  }, {
    internalType: 'address',
    name: '_WAVAX',
    type: 'address'
  }],
  stateMutability: 'nonpayable',
  type: 'constructor'
}, {
  inputs: [],
  name: 'WAVAX',
  outputs: [{
    internalType: 'address',
    name: '',
    type: 'address'
  }],
  stateMutability: 'view',
  type: 'function'
}, {
  inputs: [{
    internalType: 'address',
    name: 'tokenA',
    type: 'address'
  }, {
    internalType: 'address',
    name: 'tokenB',
    type: 'address'
  }, {
    internalType: 'uint256',
    name: 'amountADesired',
    type: 'uint256'
  }, {
    internalType: 'uint256',
    name: 'amountBDesired',
    type: 'uint256'
  }, {
    internalType: 'uint256',
    name: 'amountAMin',
    type: 'uint256'
  }, {
    internalType: 'uint256',
    name: 'amountBMin',
    type: 'uint256'
  }, {
    internalType: 'address',
    name: 'to',
    type: 'address'
  }, {
    internalType: 'uint256',
    name: 'deadline',
    type: 'uint256'
  }],
  name: 'addLiquidity',
  outputs: [{
    internalType: 'uint256',
    name: 'amountA',
    type: 'uint256'
  }, {
    internalType: 'uint256',
    name: 'amountB',
    type: 'uint256'
  }, {
    internalType: 'uint256',
    name: 'liquidity',
    type: 'uint256'
  }],
  stateMutability: 'nonpayable',
  type: 'function'
}, {
  inputs: [{
    internalType: 'address',
    name: 'token',
    type: 'address'
  }, {
    internalType: 'uint256',
    name: 'amountTokenDesired',
    type: 'uint256'
  }, {
    internalType: 'uint256',
    name: 'amountTokenMin',
    type: 'uint256'
  }, {
    internalType: 'uint256',
    name: 'amountAVAXMin',
    type: 'uint256'
  }, {
    internalType: 'address',
    name: 'to',
    type: 'address'
  }, {
    internalType: 'uint256',
    name: 'deadline',
    type: 'uint256'
  }],
  name: 'addLiquidityAVAX',
  outputs: [{
    internalType: 'uint256',
    name: 'amountToken',
    type: 'uint256'
  }, {
    internalType: 'uint256',
    name: 'amountAVAX',
    type: 'uint256'
  }, {
    internalType: 'uint256',
    name: 'liquidity',
    type: 'uint256'
  }],
  stateMutability: 'payable',
  type: 'function'
}, {
  inputs: [],
  name: 'factory',
  outputs: [{
    internalType: 'address',
    name: '',
    type: 'address'
  }],
  stateMutability: 'view',
  type: 'function'
}, {
  inputs: [{
    internalType: 'uint256',
    name: 'amountOut',
    type: 'uint256'
  }, {
    internalType: 'uint256',
    name: 'reserveIn',
    type: 'uint256'
  }, {
    internalType: 'uint256',
    name: 'reserveOut',
    type: 'uint256'
  }],
  name: 'getAmountIn',
  outputs: [{
    internalType: 'uint256',
    name: 'amountIn',
    type: 'uint256'
  }],
  stateMutability: 'pure',
  type: 'function'
}, {
  inputs: [{
    internalType: 'uint256',
    name: 'amountIn',
    type: 'uint256'
  }, {
    internalType: 'uint256',
    name: 'reserveIn',
    type: 'uint256'
  }, {
    internalType: 'uint256',
    name: 'reserveOut',
    type: 'uint256'
  }],
  name: 'getAmountOut',
  outputs: [{
    internalType: 'uint256',
    name: 'amountOut',
    type: 'uint256'
  }],
  stateMutability: 'pure',
  type: 'function'
}, {
  inputs: [{
    internalType: 'uint256',
    name: 'amountOut',
    type: 'uint256'
  }, {
    internalType: 'address[]',
    name: 'path',
    type: 'address[]'
  }],
  name: 'getAmountsIn',
  outputs: [{
    internalType: 'uint256[]',
    name: 'amounts',
    type: 'uint256[]'
  }],
  stateMutability: 'view',
  type: 'function'
}, {
  inputs: [{
    internalType: 'uint256',
    name: 'amountIn',
    type: 'uint256'
  }, {
    internalType: 'address[]',
    name: 'path',
    type: 'address[]'
  }],
  name: 'getAmountsOut',
  outputs: [{
    internalType: 'uint256[]',
    name: 'amounts',
    type: 'uint256[]'
  }],
  stateMutability: 'view',
  type: 'function'
}, {
  inputs: [{
    internalType: 'uint256',
    name: 'amountA',
    type: 'uint256'
  }, {
    internalType: 'uint256',
    name: 'reserveA',
    type: 'uint256'
  }, {
    internalType: 'uint256',
    name: 'reserveB',
    type: 'uint256'
  }],
  name: 'quote',
  outputs: [{
    internalType: 'uint256',
    name: 'amountB',
    type: 'uint256'
  }],
  stateMutability: 'pure',
  type: 'function'
}, {
  inputs: [{
    internalType: 'address',
    name: 'tokenA',
    type: 'address'
  }, {
    internalType: 'address',
    name: 'tokenB',
    type: 'address'
  }, {
    internalType: 'uint256',
    name: 'liquidity',
    type: 'uint256'
  }, {
    internalType: 'uint256',
    name: 'amountAMin',
    type: 'uint256'
  }, {
    internalType: 'uint256',
    name: 'amountBMin',
    type: 'uint256'
  }, {
    internalType: 'address',
    name: 'to',
    type: 'address'
  }, {
    internalType: 'uint256',
    name: 'deadline',
    type: 'uint256'
  }],
  name: 'removeLiquidity',
  outputs: [{
    internalType: 'uint256',
    name: 'amountA',
    type: 'uint256'
  }, {
    internalType: 'uint256',
    name: 'amountB',
    type: 'uint256'
  }],
  stateMutability: 'nonpayable',
  type: 'function'
}, {
  inputs: [{
    internalType: 'address',
    name: 'token',
    type: 'address'
  }, {
    internalType: 'uint256',
    name: 'liquidity',
    type: 'uint256'
  }, {
    internalType: 'uint256',
    name: 'amountTokenMin',
    type: 'uint256'
  }, {
    internalType: 'uint256',
    name: 'amountAVAXMin',
    type: 'uint256'
  }, {
    internalType: 'address',
    name: 'to',
    type: 'address'
  }, {
    internalType: 'uint256',
    name: 'deadline',
    type: 'uint256'
  }],
  name: 'removeLiquidityAVAX',
  outputs: [{
    internalType: 'uint256',
    name: 'amountToken',
    type: 'uint256'
  }, {
    internalType: 'uint256',
    name: 'amountAVAX',
    type: 'uint256'
  }],
  stateMutability: 'nonpayable',
  type: 'function'
}, {
  inputs: [{
    internalType: 'address',
    name: 'token',
    type: 'address'
  }, {
    internalType: 'uint256',
    name: 'liquidity',
    type: 'uint256'
  }, {
    internalType: 'uint256',
    name: 'amountTokenMin',
    type: 'uint256'
  }, {
    internalType: 'uint256',
    name: 'amountAVAXMin',
    type: 'uint256'
  }, {
    internalType: 'address',
    name: 'to',
    type: 'address'
  }, {
    internalType: 'uint256',
    name: 'deadline',
    type: 'uint256'
  }],
  name: 'removeLiquidityAVAXSupportingFeeOnTransferTokens',
  outputs: [{
    internalType: 'uint256',
    name: 'amountAVAX',
    type: 'uint256'
  }],
  stateMutability: 'nonpayable',
  type: 'function'
}, {
  inputs: [{
    internalType: 'address',
    name: 'token',
    type: 'address'
  }, {
    internalType: 'uint256',
    name: 'liquidity',
    type: 'uint256'
  }, {
    internalType: 'uint256',
    name: 'amountTokenMin',
    type: 'uint256'
  }, {
    internalType: 'uint256',
    name: 'amountAVAXMin',
    type: 'uint256'
  }, {
    internalType: 'address',
    name: 'to',
    type: 'address'
  }, {
    internalType: 'uint256',
    name: 'deadline',
    type: 'uint256'
  }, {
    internalType: 'bool',
    name: 'approveMax',
    type: 'bool'
  }, {
    internalType: 'uint8',
    name: 'v',
    type: 'uint8'
  }, {
    internalType: 'bytes32',
    name: 'r',
    type: 'bytes32'
  }, {
    internalType: 'bytes32',
    name: 's',
    type: 'bytes32'
  }],
  name: 'removeLiquidityAVAXWithPermit',
  outputs: [{
    internalType: 'uint256',
    name: 'amountToken',
    type: 'uint256'
  }, {
    internalType: 'uint256',
    name: 'amountAVAX',
    type: 'uint256'
  }],
  stateMutability: 'nonpayable',
  type: 'function'
}, {
  inputs: [{
    internalType: 'address',
    name: 'token',
    type: 'address'
  }, {
    internalType: 'uint256',
    name: 'liquidity',
    type: 'uint256'
  }, {
    internalType: 'uint256',
    name: 'amountTokenMin',
    type: 'uint256'
  }, {
    internalType: 'uint256',
    name: 'amountAVAXMin',
    type: 'uint256'
  }, {
    internalType: 'address',
    name: 'to',
    type: 'address'
  }, {
    internalType: 'uint256',
    name: 'deadline',
    type: 'uint256'
  }, {
    internalType: 'bool',
    name: 'approveMax',
    type: 'bool'
  }, {
    internalType: 'uint8',
    name: 'v',
    type: 'uint8'
  }, {
    internalType: 'bytes32',
    name: 'r',
    type: 'bytes32'
  }, {
    internalType: 'bytes32',
    name: 's',
    type: 'bytes32'
  }],
  name: 'removeLiquidityAVAXWithPermitSupportingFeeOnTransferTokens',
  outputs: [{
    internalType: 'uint256',
    name: 'amountAVAX',
    type: 'uint256'
  }],
  stateMutability: 'nonpayable',
  type: 'function'
}, {
  inputs: [{
    internalType: 'address',
    name: 'tokenA',
    type: 'address'
  }, {
    internalType: 'address',
    name: 'tokenB',
    type: 'address'
  }, {
    internalType: 'uint256',
    name: 'liquidity',
    type: 'uint256'
  }, {
    internalType: 'uint256',
    name: 'amountAMin',
    type: 'uint256'
  }, {
    internalType: 'uint256',
    name: 'amountBMin',
    type: 'uint256'
  }, {
    internalType: 'address',
    name: 'to',
    type: 'address'
  }, {
    internalType: 'uint256',
    name: 'deadline',
    type: 'uint256'
  }, {
    internalType: 'bool',
    name: 'approveMax',
    type: 'bool'
  }, {
    internalType: 'uint8',
    name: 'v',
    type: 'uint8'
  }, {
    internalType: 'bytes32',
    name: 'r',
    type: 'bytes32'
  }, {
    internalType: 'bytes32',
    name: 's',
    type: 'bytes32'
  }],
  name: 'removeLiquidityWithPermit',
  outputs: [{
    internalType: 'uint256',
    name: 'amountA',
    type: 'uint256'
  }, {
    internalType: 'uint256',
    name: 'amountB',
    type: 'uint256'
  }],
  stateMutability: 'nonpayable',
  type: 'function'
}, {
  inputs: [{
    internalType: 'uint256',
    name: 'amountOut',
    type: 'uint256'
  }, {
    internalType: 'address[]',
    name: 'path',
    type: 'address[]'
  }, {
    internalType: 'address',
    name: 'to',
    type: 'address'
  }, {
    internalType: 'uint256',
    name: 'deadline',
    type: 'uint256'
  }],
  name: 'swapAVAXForExactTokens',
  outputs: [{
    internalType: 'uint256[]',
    name: 'amounts',
    type: 'uint256[]'
  }],
  stateMutability: 'payable',
  type: 'function'
}, {
  inputs: [{
    internalType: 'uint256',
    name: 'amountOutMin',
    type: 'uint256'
  }, {
    internalType: 'address[]',
    name: 'path',
    type: 'address[]'
  }, {
    internalType: 'address',
    name: 'to',
    type: 'address'
  }, {
    internalType: 'uint256',
    name: 'deadline',
    type: 'uint256'
  }],
  name: 'swapExactAVAXForTokens',
  outputs: [{
    internalType: 'uint256[]',
    name: 'amounts',
    type: 'uint256[]'
  }],
  stateMutability: 'payable',
  type: 'function'
}, {
  inputs: [{
    internalType: 'uint256',
    name: 'amountOutMin',
    type: 'uint256'
  }, {
    internalType: 'address[]',
    name: 'path',
    type: 'address[]'
  }, {
    internalType: 'address',
    name: 'to',
    type: 'address'
  }, {
    internalType: 'uint256',
    name: 'deadline',
    type: 'uint256'
  }],
  name: 'swapExactAVAXForTokensSupportingFeeOnTransferTokens',
  outputs: [],
  stateMutability: 'payable',
  type: 'function'
}, {
  inputs: [{
    internalType: 'uint256',
    name: 'amountIn',
    type: 'uint256'
  }, {
    internalType: 'uint256',
    name: 'amountOutMin',
    type: 'uint256'
  }, {
    internalType: 'address[]',
    name: 'path',
    type: 'address[]'
  }, {
    internalType: 'address',
    name: 'to',
    type: 'address'
  }, {
    internalType: 'uint256',
    name: 'deadline',
    type: 'uint256'
  }],
  name: 'swapExactTokensForAVAX',
  outputs: [{
    internalType: 'uint256[]',
    name: 'amounts',
    type: 'uint256[]'
  }],
  stateMutability: 'nonpayable',
  type: 'function'
}, {
  inputs: [{
    internalType: 'uint256',
    name: 'amountIn',
    type: 'uint256'
  }, {
    internalType: 'uint256',
    name: 'amountOutMin',
    type: 'uint256'
  }, {
    internalType: 'address[]',
    name: 'path',
    type: 'address[]'
  }, {
    internalType: 'address',
    name: 'to',
    type: 'address'
  }, {
    internalType: 'uint256',
    name: 'deadline',
    type: 'uint256'
  }],
  name: 'swapExactTokensForAVAXSupportingFeeOnTransferTokens',
  outputs: [],
  stateMutability: 'nonpayable',
  type: 'function'
}, {
  inputs: [{
    internalType: 'uint256',
    name: 'amountIn',
    type: 'uint256'
  }, {
    internalType: 'uint256',
    name: 'amountOutMin',
    type: 'uint256'
  }, {
    internalType: 'address[]',
    name: 'path',
    type: 'address[]'
  }, {
    internalType: 'address',
    name: 'to',
    type: 'address'
  }, {
    internalType: 'uint256',
    name: 'deadline',
    type: 'uint256'
  }],
  name: 'swapExactTokensForTokens',
  outputs: [{
    internalType: 'uint256[]',
    name: 'amounts',
    type: 'uint256[]'
  }],
  stateMutability: 'nonpayable',
  type: 'function'
}, {
  inputs: [{
    internalType: 'uint256',
    name: 'amountIn',
    type: 'uint256'
  }, {
    internalType: 'uint256',
    name: 'amountOutMin',
    type: 'uint256'
  }, {
    internalType: 'address[]',
    name: 'path',
    type: 'address[]'
  }, {
    internalType: 'address',
    name: 'to',
    type: 'address'
  }, {
    internalType: 'uint256',
    name: 'deadline',
    type: 'uint256'
  }],
  name: 'swapExactTokensForTokensSupportingFeeOnTransferTokens',
  outputs: [],
  stateMutability: 'nonpayable',
  type: 'function'
}, {
  inputs: [{
    internalType: 'uint256',
    name: 'amountOut',
    type: 'uint256'
  }, {
    internalType: 'uint256',
    name: 'amountInMax',
    type: 'uint256'
  }, {
    internalType: 'address[]',
    name: 'path',
    type: 'address[]'
  }, {
    internalType: 'address',
    name: 'to',
    type: 'address'
  }, {
    internalType: 'uint256',
    name: 'deadline',
    type: 'uint256'
  }],
  name: 'swapTokensForExactAVAX',
  outputs: [{
    internalType: 'uint256[]',
    name: 'amounts',
    type: 'uint256[]'
  }],
  stateMutability: 'nonpayable',
  type: 'function'
}, {
  inputs: [{
    internalType: 'uint256',
    name: 'amountOut',
    type: 'uint256'
  }, {
    internalType: 'uint256',
    name: 'amountInMax',
    type: 'uint256'
  }, {
    internalType: 'address[]',
    name: 'path',
    type: 'address[]'
  }, {
    internalType: 'address',
    name: 'to',
    type: 'address'
  }, {
    internalType: 'uint256',
    name: 'deadline',
    type: 'uint256'
  }],
  name: 'swapTokensForExactTokens',
  outputs: [{
    internalType: 'uint256[]',
    name: 'amounts',
    type: 'uint256[]'
  }],
  stateMutability: 'nonpayable',
  type: 'function'
}, {
  stateMutability: 'payable',
  type: 'receive'
}];

var StableJoeStakingABI = [{
  anonymous: false,
  inputs: [{
    indexed: true,
    internalType: 'address',
    name: 'user',
    type: 'address'
  }, {
    indexed: true,
    internalType: 'address',
    name: 'rewardToken',
    type: 'address'
  }, {
    indexed: false,
    internalType: 'uint256',
    name: 'amount',
    type: 'uint256'
  }],
  name: 'ClaimReward',
  type: 'event'
}, {
  anonymous: false,
  inputs: [{
    indexed: true,
    internalType: 'address',
    name: 'user',
    type: 'address'
  }, {
    indexed: false,
    internalType: 'uint256',
    name: 'amount',
    type: 'uint256'
  }, {
    indexed: false,
    internalType: 'uint256',
    name: 'fee',
    type: 'uint256'
  }],
  name: 'Deposit',
  type: 'event'
}, {
  anonymous: false,
  inputs: [{
    indexed: false,
    internalType: 'uint256',
    name: 'newFee',
    type: 'uint256'
  }, {
    indexed: false,
    internalType: 'uint256',
    name: 'oldFee',
    type: 'uint256'
  }],
  name: 'DepositFeeChanged',
  type: 'event'
}, {
  anonymous: false,
  inputs: [{
    indexed: true,
    internalType: 'address',
    name: 'user',
    type: 'address'
  }, {
    indexed: false,
    internalType: 'uint256',
    name: 'amount',
    type: 'uint256'
  }],
  name: 'EmergencyWithdraw',
  type: 'event'
}, {
  anonymous: false,
  inputs: [{
    indexed: true,
    internalType: 'address',
    name: 'previousOwner',
    type: 'address'
  }, {
    indexed: true,
    internalType: 'address',
    name: 'newOwner',
    type: 'address'
  }],
  name: 'OwnershipTransferred',
  type: 'event'
}, {
  anonymous: false,
  inputs: [{
    indexed: false,
    internalType: 'address',
    name: 'token',
    type: 'address'
  }],
  name: 'RewardTokenAdded',
  type: 'event'
}, {
  anonymous: false,
  inputs: [{
    indexed: false,
    internalType: 'address',
    name: 'token',
    type: 'address'
  }],
  name: 'RewardTokenRemoved',
  type: 'event'
}, {
  anonymous: false,
  inputs: [{
    indexed: true,
    internalType: 'address',
    name: 'user',
    type: 'address'
  }, {
    indexed: false,
    internalType: 'uint256',
    name: 'amount',
    type: 'uint256'
  }],
  name: 'Withdraw',
  type: 'event'
}, {
  inputs: [],
  name: 'ACC_REWARD_PER_SHARE_PRECISION',
  outputs: [{
    internalType: 'uint256',
    name: '',
    type: 'uint256'
  }],
  stateMutability: 'view',
  type: 'function'
}, {
  inputs: [],
  name: 'DEPOSIT_FEE_PERCENT_PRECISION',
  outputs: [{
    internalType: 'uint256',
    name: '',
    type: 'uint256'
  }],
  stateMutability: 'view',
  type: 'function'
}, {
  inputs: [{
    internalType: 'contract IERC20Upgradeable',
    name: '',
    type: 'address'
  }],
  name: 'accRewardPerShare',
  outputs: [{
    internalType: 'uint256',
    name: '',
    type: 'uint256'
  }],
  stateMutability: 'view',
  type: 'function'
}, {
  inputs: [{
    internalType: 'contract IERC20Upgradeable',
    name: '_rewardToken',
    type: 'address'
  }],
  name: 'addRewardToken',
  outputs: [],
  stateMutability: 'nonpayable',
  type: 'function'
}, {
  inputs: [{
    internalType: 'uint256',
    name: '_amount',
    type: 'uint256'
  }],
  name: 'deposit',
  outputs: [],
  stateMutability: 'nonpayable',
  type: 'function'
}, {
  inputs: [],
  name: 'depositFeePercent',
  outputs: [{
    internalType: 'uint256',
    name: '',
    type: 'uint256'
  }],
  stateMutability: 'view',
  type: 'function'
}, {
  inputs: [],
  name: 'emergencyWithdraw',
  outputs: [],
  stateMutability: 'nonpayable',
  type: 'function'
}, {
  inputs: [],
  name: 'feeCollector',
  outputs: [{
    internalType: 'address',
    name: '',
    type: 'address'
  }],
  stateMutability: 'view',
  type: 'function'
}, {
  inputs: [{
    internalType: 'address',
    name: '_user',
    type: 'address'
  }, {
    internalType: 'contract IERC20Upgradeable',
    name: '_rewardToken',
    type: 'address'
  }],
  name: 'getUserInfo',
  outputs: [{
    internalType: 'uint256',
    name: '',
    type: 'uint256'
  }, {
    internalType: 'uint256',
    name: '',
    type: 'uint256'
  }],
  stateMutability: 'view',
  type: 'function'
}, {
  inputs: [{
    internalType: 'contract IERC20Upgradeable',
    name: '_rewardToken',
    type: 'address'
  }, {
    internalType: 'contract IERC20Upgradeable',
    name: '_joe',
    type: 'address'
  }, {
    internalType: 'address',
    name: '_feeCollector',
    type: 'address'
  }, {
    internalType: 'uint256',
    name: '_depositFeePercent',
    type: 'uint256'
  }],
  name: 'initialize',
  outputs: [],
  stateMutability: 'nonpayable',
  type: 'function'
}, {
  inputs: [],
  name: 'internalJoeBalance',
  outputs: [{
    internalType: 'uint256',
    name: '',
    type: 'uint256'
  }],
  stateMutability: 'view',
  type: 'function'
}, {
  inputs: [{
    internalType: 'contract IERC20Upgradeable',
    name: '',
    type: 'address'
  }],
  name: 'isRewardToken',
  outputs: [{
    internalType: 'bool',
    name: '',
    type: 'bool'
  }],
  stateMutability: 'view',
  type: 'function'
}, {
  inputs: [],
  name: 'joe',
  outputs: [{
    internalType: 'contract IERC20Upgradeable',
    name: '',
    type: 'address'
  }],
  stateMutability: 'view',
  type: 'function'
}, {
  inputs: [{
    internalType: 'contract IERC20Upgradeable',
    name: '',
    type: 'address'
  }],
  name: 'lastRewardBalance',
  outputs: [{
    internalType: 'uint256',
    name: '',
    type: 'uint256'
  }],
  stateMutability: 'view',
  type: 'function'
}, {
  inputs: [],
  name: 'owner',
  outputs: [{
    internalType: 'address',
    name: '',
    type: 'address'
  }],
  stateMutability: 'view',
  type: 'function'
}, {
  inputs: [{
    internalType: 'address',
    name: '_user',
    type: 'address'
  }, {
    internalType: 'contract IERC20Upgradeable',
    name: '_token',
    type: 'address'
  }],
  name: 'pendingReward',
  outputs: [{
    internalType: 'uint256',
    name: '',
    type: 'uint256'
  }],
  stateMutability: 'view',
  type: 'function'
}, {
  inputs: [{
    internalType: 'contract IERC20Upgradeable',
    name: '_rewardToken',
    type: 'address'
  }],
  name: 'removeRewardToken',
  outputs: [],
  stateMutability: 'nonpayable',
  type: 'function'
}, {
  inputs: [],
  name: 'renounceOwnership',
  outputs: [],
  stateMutability: 'nonpayable',
  type: 'function'
}, {
  inputs: [{
    internalType: 'uint256',
    name: '',
    type: 'uint256'
  }],
  name: 'rewardTokens',
  outputs: [{
    internalType: 'contract IERC20Upgradeable',
    name: '',
    type: 'address'
  }],
  stateMutability: 'view',
  type: 'function'
}, {
  inputs: [],
  name: 'rewardTokensLength',
  outputs: [{
    internalType: 'uint256',
    name: '',
    type: 'uint256'
  }],
  stateMutability: 'view',
  type: 'function'
}, {
  inputs: [{
    internalType: 'uint256',
    name: '_depositFeePercent',
    type: 'uint256'
  }],
  name: 'setDepositFeePercent',
  outputs: [],
  stateMutability: 'nonpayable',
  type: 'function'
}, {
  inputs: [{
    internalType: 'address',
    name: 'newOwner',
    type: 'address'
  }],
  name: 'transferOwnership',
  outputs: [],
  stateMutability: 'nonpayable',
  type: 'function'
}, {
  inputs: [{
    internalType: 'contract IERC20Upgradeable',
    name: '_token',
    type: 'address'
  }],
  name: 'updateReward',
  outputs: [],
  stateMutability: 'nonpayable',
  type: 'function'
}, {
  inputs: [{
    internalType: 'uint256',
    name: '_amount',
    type: 'uint256'
  }],
  name: 'withdraw',
  outputs: [],
  stateMutability: 'nonpayable',
  type: 'function'
}];

var VeJoeABI = [{
  anonymous: false,
  inputs: [{
    indexed: true,
    internalType: 'address',
    name: 'account',
    type: 'address'
  }, {
    indexed: false,
    internalType: 'uint256',
    name: 'value',
    type: 'uint256'
  }],
  name: 'Burn',
  type: 'event'
}, {
  anonymous: false,
  inputs: [{
    indexed: true,
    internalType: 'address',
    name: 'beneficiary',
    type: 'address'
  }, {
    indexed: false,
    internalType: 'uint256',
    name: 'value',
    type: 'uint256'
  }],
  name: 'Mint',
  type: 'event'
}, {
  anonymous: false,
  inputs: [{
    indexed: true,
    internalType: 'address',
    name: 'previousOwner',
    type: 'address'
  }, {
    indexed: true,
    internalType: 'address',
    name: 'newOwner',
    type: 'address'
  }],
  name: 'OwnershipTransferred',
  type: 'event'
}, {
  anonymous: false,
  inputs: [{
    indexed: true,
    internalType: 'address',
    name: 'user',
    type: 'address'
  }, {
    indexed: false,
    internalType: 'address',
    name: 'boostedMasterChef',
    type: 'address'
  }],
  name: 'UpdateBoostedMasterChefJoe',
  type: 'event'
}, {
  inputs: [{
    internalType: 'address',
    name: 'account',
    type: 'address'
  }],
  name: 'balanceOf',
  outputs: [{
    internalType: 'uint256',
    name: '',
    type: 'uint256'
  }],
  stateMutability: 'view',
  type: 'function'
}, {
  inputs: [],
  name: 'boostedMasterChef',
  outputs: [{
    internalType: 'contract IBoostedMasterChefJoe',
    name: '',
    type: 'address'
  }],
  stateMutability: 'view',
  type: 'function'
}, {
  inputs: [{
    internalType: 'address',
    name: '_from',
    type: 'address'
  }, {
    internalType: 'uint256',
    name: '_amount',
    type: 'uint256'
  }],
  name: 'burnFrom',
  outputs: [],
  stateMutability: 'nonpayable',
  type: 'function'
}, {
  inputs: [],
  name: 'decimals',
  outputs: [{
    internalType: 'uint8',
    name: '',
    type: 'uint8'
  }],
  stateMutability: 'view',
  type: 'function'
}, {
  inputs: [{
    internalType: 'address',
    name: '_to',
    type: 'address'
  }, {
    internalType: 'uint256',
    name: '_amount',
    type: 'uint256'
  }],
  name: 'mint',
  outputs: [],
  stateMutability: 'nonpayable',
  type: 'function'
}, {
  inputs: [],
  name: 'name',
  outputs: [{
    internalType: 'string',
    name: '',
    type: 'string'
  }],
  stateMutability: 'view',
  type: 'function'
}, {
  inputs: [],
  name: 'owner',
  outputs: [{
    internalType: 'address',
    name: '',
    type: 'address'
  }],
  stateMutability: 'view',
  type: 'function'
}, {
  inputs: [],
  name: 'renounceOwnership',
  outputs: [],
  stateMutability: 'nonpayable',
  type: 'function'
}, {
  inputs: [{
    internalType: 'address',
    name: '_boostedMasterChef',
    type: 'address'
  }],
  name: 'setBoostedMasterChefJoe',
  outputs: [],
  stateMutability: 'nonpayable',
  type: 'function'
}, {
  inputs: [],
  name: 'symbol',
  outputs: [{
    internalType: 'string',
    name: '',
    type: 'string'
  }],
  stateMutability: 'view',
  type: 'function'
}, {
  inputs: [],
  name: 'totalSupply',
  outputs: [{
    internalType: 'uint256',
    name: '',
    type: 'uint256'
  }],
  stateMutability: 'view',
  type: 'function'
}, {
  inputs: [{
    internalType: 'address',
    name: 'newOwner',
    type: 'address'
  }],
  name: 'transferOwnership',
  outputs: [],
  stateMutability: 'nonpayable',
  type: 'function'
}];

var VeJoeStakingABI = [{
  anonymous: false,
  inputs: [{
    indexed: true,
    internalType: 'address',
    name: 'user',
    type: 'address'
  }, {
    indexed: false,
    internalType: 'uint256',
    name: 'amount',
    type: 'uint256'
  }],
  name: 'Claim',
  type: 'event'
}, {
  anonymous: false,
  inputs: [{
    indexed: true,
    internalType: 'address',
    name: 'user',
    type: 'address'
  }, {
    indexed: false,
    internalType: 'uint256',
    name: 'amount',
    type: 'uint256'
  }],
  name: 'Deposit',
  type: 'event'
}, {
  anonymous: false,
  inputs: [{
    indexed: true,
    internalType: 'address',
    name: 'previousOwner',
    type: 'address'
  }, {
    indexed: true,
    internalType: 'address',
    name: 'newOwner',
    type: 'address'
  }],
  name: 'OwnershipTransferred',
  type: 'event'
}, {
  anonymous: false,
  inputs: [{
    indexed: true,
    internalType: 'address',
    name: 'user',
    type: 'address'
  }, {
    indexed: false,
    internalType: 'uint256',
    name: 'maxCapPct',
    type: 'uint256'
  }],
  name: 'UpdateMaxCapPct',
  type: 'event'
}, {
  anonymous: false,
  inputs: [{
    indexed: false,
    internalType: 'uint256',
    name: 'lastRewardTimestamp',
    type: 'uint256'
  }, {
    indexed: false,
    internalType: 'uint256',
    name: 'accVeJoePerShare',
    type: 'uint256'
  }],
  name: 'UpdateRewardVars',
  type: 'event'
}, {
  anonymous: false,
  inputs: [{
    indexed: true,
    internalType: 'address',
    name: 'user',
    type: 'address'
  }, {
    indexed: false,
    internalType: 'uint256',
    name: 'speedUpThreshold',
    type: 'uint256'
  }],
  name: 'UpdateSpeedUpThreshold',
  type: 'event'
}, {
  anonymous: false,
  inputs: [{
    indexed: true,
    internalType: 'address',
    name: 'user',
    type: 'address'
  }, {
    indexed: false,
    internalType: 'uint256',
    name: 'veJoePerSharePerSec',
    type: 'uint256'
  }],
  name: 'UpdateVeJoePerSharePerSec',
  type: 'event'
}, {
  anonymous: false,
  inputs: [{
    indexed: true,
    internalType: 'address',
    name: 'user',
    type: 'address'
  }, {
    indexed: false,
    internalType: 'uint256',
    name: 'withdrawAmount',
    type: 'uint256'
  }, {
    indexed: false,
    internalType: 'uint256',
    name: 'burnAmount',
    type: 'uint256'
  }],
  name: 'Withdraw',
  type: 'event'
}, {
  inputs: [],
  name: 'ACC_VEJOE_PER_SHARE_PRECISION',
  outputs: [{
    internalType: 'uint256',
    name: '',
    type: 'uint256'
  }],
  stateMutability: 'view',
  type: 'function'
}, {
  inputs: [],
  name: 'VEJOE_PER_SHARE_PER_SEC_PRECISION',
  outputs: [{
    internalType: 'uint256',
    name: '',
    type: 'uint256'
  }],
  stateMutability: 'view',
  type: 'function'
}, {
  inputs: [],
  name: 'accVeJoePerShare',
  outputs: [{
    internalType: 'uint256',
    name: '',
    type: 'uint256'
  }],
  stateMutability: 'view',
  type: 'function'
}, {
  inputs: [],
  name: 'claim',
  outputs: [],
  stateMutability: 'nonpayable',
  type: 'function'
}, {
  inputs: [{
    internalType: 'uint256',
    name: '_amount',
    type: 'uint256'
  }],
  name: 'deposit',
  outputs: [],
  stateMutability: 'nonpayable',
  type: 'function'
}, {
  inputs: [{
    internalType: 'address',
    name: '_user',
    type: 'address'
  }],
  name: 'getPendingVeJoe',
  outputs: [{
    internalType: 'uint256',
    name: '',
    type: 'uint256'
  }],
  stateMutability: 'view',
  type: 'function'
}, {
  inputs: [{
    internalType: 'contract IERC20Upgradeable',
    name: '_joe',
    type: 'address'
  }, {
    internalType: 'contract VeJoeToken',
    name: '_veJoe',
    type: 'address'
  }, {
    internalType: 'uint256',
    name: '_veJoePerSharePerSec',
    type: 'uint256'
  }, {
    internalType: 'uint256',
    name: '_speedUpVeJoePerSharePerSec',
    type: 'uint256'
  }, {
    internalType: 'uint256',
    name: '_speedUpThreshold',
    type: 'uint256'
  }, {
    internalType: 'uint256',
    name: '_speedUpDuration',
    type: 'uint256'
  }, {
    internalType: 'uint256',
    name: '_maxCapPct',
    type: 'uint256'
  }],
  name: 'initialize',
  outputs: [],
  stateMutability: 'nonpayable',
  type: 'function'
}, {
  inputs: [],
  name: 'joe',
  outputs: [{
    internalType: 'contract IERC20Upgradeable',
    name: '',
    type: 'address'
  }],
  stateMutability: 'view',
  type: 'function'
}, {
  inputs: [],
  name: 'lastRewardTimestamp',
  outputs: [{
    internalType: 'uint256',
    name: '',
    type: 'uint256'
  }],
  stateMutability: 'view',
  type: 'function'
}, {
  inputs: [],
  name: 'maxCapPct',
  outputs: [{
    internalType: 'uint256',
    name: '',
    type: 'uint256'
  }],
  stateMutability: 'view',
  type: 'function'
}, {
  inputs: [],
  name: 'owner',
  outputs: [{
    internalType: 'address',
    name: '',
    type: 'address'
  }],
  stateMutability: 'view',
  type: 'function'
}, {
  inputs: [],
  name: 'renounceOwnership',
  outputs: [],
  stateMutability: 'nonpayable',
  type: 'function'
}, {
  inputs: [{
    internalType: 'uint256',
    name: '_maxCapPct',
    type: 'uint256'
  }],
  name: 'setMaxCapPct',
  outputs: [],
  stateMutability: 'nonpayable',
  type: 'function'
}, {
  inputs: [{
    internalType: 'uint256',
    name: '_speedUpThreshold',
    type: 'uint256'
  }],
  name: 'setSpeedUpThreshold',
  outputs: [],
  stateMutability: 'nonpayable',
  type: 'function'
}, {
  inputs: [{
    internalType: 'uint256',
    name: '_veJoePerSharePerSec',
    type: 'uint256'
  }],
  name: 'setVeJoePerSharePerSec',
  outputs: [],
  stateMutability: 'nonpayable',
  type: 'function'
}, {
  inputs: [],
  name: 'speedUpDuration',
  outputs: [{
    internalType: 'uint256',
    name: '',
    type: 'uint256'
  }],
  stateMutability: 'view',
  type: 'function'
}, {
  inputs: [],
  name: 'speedUpThreshold',
  outputs: [{
    internalType: 'uint256',
    name: '',
    type: 'uint256'
  }],
  stateMutability: 'view',
  type: 'function'
}, {
  inputs: [],
  name: 'speedUpVeJoePerSharePerSec',
  outputs: [{
    internalType: 'uint256',
    name: '',
    type: 'uint256'
  }],
  stateMutability: 'view',
  type: 'function'
}, {
  inputs: [{
    internalType: 'address',
    name: 'newOwner',
    type: 'address'
  }],
  name: 'transferOwnership',
  outputs: [],
  stateMutability: 'nonpayable',
  type: 'function'
}, {
  inputs: [],
  name: 'updateRewardVars',
  outputs: [],
  stateMutability: 'nonpayable',
  type: 'function'
}, {
  inputs: [],
  name: 'upperLimitMaxCapPct',
  outputs: [{
    internalType: 'uint256',
    name: '',
    type: 'uint256'
  }],
  stateMutability: 'view',
  type: 'function'
}, {
  inputs: [],
  name: 'upperLimitVeJoePerSharePerSec',
  outputs: [{
    internalType: 'uint256',
    name: '',
    type: 'uint256'
  }],
  stateMutability: 'view',
  type: 'function'
}, {
  inputs: [{
    internalType: 'address',
    name: '',
    type: 'address'
  }],
  name: 'userInfos',
  outputs: [{
    internalType: 'uint256',
    name: 'balance',
    type: 'uint256'
  }, {
    internalType: 'uint256',
    name: 'rewardDebt',
    type: 'uint256'
  }, {
    internalType: 'uint256',
    name: 'lastClaimTimestamp',
    type: 'uint256'
  }, {
    internalType: 'uint256',
    name: 'speedUpEndTimestamp',
    type: 'uint256'
  }],
  stateMutability: 'view',
  type: 'function'
}, {
  inputs: [],
  name: 'veJoe',
  outputs: [{
    internalType: 'contract VeJoeToken',
    name: '',
    type: 'address'
  }],
  stateMutability: 'view',
  type: 'function'
}, {
  inputs: [],
  name: 'veJoePerSharePerSec',
  outputs: [{
    internalType: 'uint256',
    name: '',
    type: 'uint256'
  }],
  stateMutability: 'view',
  type: 'function'
}, {
  inputs: [{
    internalType: 'uint256',
    name: '_amount',
    type: 'uint256'
  }],
  name: 'withdraw',
  outputs: [],
  stateMutability: 'nonpayable',
  type: 'function'
}];

var WNativeABI = [{
  anonymous: false,
  inputs: [{
    indexed: true,
    internalType: 'address',
    name: 'src',
    type: 'address'
  }, {
    indexed: true,
    internalType: 'address',
    name: 'guy',
    type: 'address'
  }, {
    indexed: false,
    internalType: 'uint256',
    name: 'wad',
    type: 'uint256'
  }],
  name: 'Approval',
  type: 'event'
}, {
  anonymous: false,
  inputs: [{
    indexed: true,
    internalType: 'address',
    name: 'dst',
    type: 'address'
  }, {
    indexed: false,
    internalType: 'uint256',
    name: 'wad',
    type: 'uint256'
  }],
  name: 'Deposit',
  type: 'event'
}, {
  anonymous: false,
  inputs: [{
    indexed: true,
    internalType: 'address',
    name: 'src',
    type: 'address'
  }, {
    indexed: true,
    internalType: 'address',
    name: 'dst',
    type: 'address'
  }, {
    indexed: false,
    internalType: 'uint256',
    name: 'wad',
    type: 'uint256'
  }],
  name: 'Transfer',
  type: 'event'
}, {
  anonymous: false,
  inputs: [{
    indexed: true,
    internalType: 'address',
    name: 'src',
    type: 'address'
  }, {
    indexed: false,
    internalType: 'uint256',
    name: 'wad',
    type: 'uint256'
  }],
  name: 'Withdrawal',
  type: 'event'
}, {
  payable: true,
  stateMutability: 'payable',
  type: 'fallback'
}, {
  constant: true,
  inputs: [{
    internalType: 'address',
    name: '',
    type: 'address'
  }, {
    internalType: 'address',
    name: '',
    type: 'address'
  }],
  name: 'allowance',
  outputs: [{
    internalType: 'uint256',
    name: '',
    type: 'uint256'
  }],
  payable: false,
  stateMutability: 'view',
  type: 'function'
}, {
  constant: false,
  inputs: [{
    internalType: 'address',
    name: 'guy',
    type: 'address'
  }, {
    internalType: 'uint256',
    name: 'wad',
    type: 'uint256'
  }],
  name: 'approve',
  outputs: [{
    internalType: 'bool',
    name: '',
    type: 'bool'
  }],
  payable: false,
  stateMutability: 'nonpayable',
  type: 'function'
}, {
  constant: true,
  inputs: [{
    internalType: 'address',
    name: '',
    type: 'address'
  }],
  name: 'balanceOf',
  outputs: [{
    internalType: 'uint256',
    name: '',
    type: 'uint256'
  }],
  payable: false,
  stateMutability: 'view',
  type: 'function'
}, {
  constant: true,
  inputs: [],
  name: 'decimals',
  outputs: [{
    internalType: 'uint8',
    name: '',
    type: 'uint8'
  }],
  payable: false,
  stateMutability: 'view',
  type: 'function'
}, {
  constant: false,
  inputs: [],
  name: 'deposit',
  outputs: [],
  payable: true,
  stateMutability: 'payable',
  type: 'function'
}, {
  constant: true,
  inputs: [],
  name: 'name',
  outputs: [{
    internalType: 'string',
    name: '',
    type: 'string'
  }],
  payable: false,
  stateMutability: 'view',
  type: 'function'
}, {
  constant: true,
  inputs: [],
  name: 'symbol',
  outputs: [{
    internalType: 'string',
    name: '',
    type: 'string'
  }],
  payable: false,
  stateMutability: 'view',
  type: 'function'
}, {
  constant: true,
  inputs: [],
  name: 'totalSupply',
  outputs: [{
    internalType: 'uint256',
    name: '',
    type: 'uint256'
  }],
  payable: false,
  stateMutability: 'view',
  type: 'function'
}, {
  constant: false,
  inputs: [{
    internalType: 'address',
    name: 'dst',
    type: 'address'
  }, {
    internalType: 'uint256',
    name: 'wad',
    type: 'uint256'
  }],
  name: 'transfer',
  outputs: [{
    internalType: 'bool',
    name: '',
    type: 'bool'
  }],
  payable: false,
  stateMutability: 'nonpayable',
  type: 'function'
}, {
  constant: false,
  inputs: [{
    internalType: 'address',
    name: 'src',
    type: 'address'
  }, {
    internalType: 'address',
    name: 'dst',
    type: 'address'
  }, {
    internalType: 'uint256',
    name: 'wad',
    type: 'uint256'
  }],
  name: 'transferFrom',
  outputs: [{
    internalType: 'bool',
    name: '',
    type: 'bool'
  }],
  payable: false,
  stateMutability: 'nonpayable',
  type: 'function'
}, {
  constant: false,
  inputs: [{
    internalType: 'uint256',
    name: 'wad',
    type: 'uint256'
  }],
  name: 'withdraw',
  outputs: [],
  payable: false,
  stateMutability: 'nonpayable',
  type: 'function'
}];

var XJoeStakingABI = [{
  inputs: [{
    internalType: 'contract IERC20',
    name: '_joe',
    type: 'address'
  }],
  stateMutability: 'nonpayable',
  type: 'constructor'
}, {
  anonymous: false,
  inputs: [{
    indexed: true,
    internalType: 'address',
    name: 'owner',
    type: 'address'
  }, {
    indexed: true,
    internalType: 'address',
    name: 'spender',
    type: 'address'
  }, {
    indexed: false,
    internalType: 'uint256',
    name: 'value',
    type: 'uint256'
  }],
  name: 'Approval',
  type: 'event'
}, {
  anonymous: false,
  inputs: [{
    indexed: true,
    internalType: 'address',
    name: 'from',
    type: 'address'
  }, {
    indexed: true,
    internalType: 'address',
    name: 'to',
    type: 'address'
  }, {
    indexed: false,
    internalType: 'uint256',
    name: 'value',
    type: 'uint256'
  }],
  name: 'Transfer',
  type: 'event'
}, {
  inputs: [{
    internalType: 'address',
    name: 'owner',
    type: 'address'
  }, {
    internalType: 'address',
    name: 'spender',
    type: 'address'
  }],
  name: 'allowance',
  outputs: [{
    internalType: 'uint256',
    name: '',
    type: 'uint256'
  }],
  stateMutability: 'view',
  type: 'function'
}, {
  inputs: [{
    internalType: 'address',
    name: 'spender',
    type: 'address'
  }, {
    internalType: 'uint256',
    name: 'amount',
    type: 'uint256'
  }],
  name: 'approve',
  outputs: [{
    internalType: 'bool',
    name: '',
    type: 'bool'
  }],
  stateMutability: 'nonpayable',
  type: 'function'
}, {
  inputs: [{
    internalType: 'address',
    name: 'account',
    type: 'address'
  }],
  name: 'balanceOf',
  outputs: [{
    internalType: 'uint256',
    name: '',
    type: 'uint256'
  }],
  stateMutability: 'view',
  type: 'function'
}, {
  inputs: [],
  name: 'decimals',
  outputs: [{
    internalType: 'uint8',
    name: '',
    type: 'uint8'
  }],
  stateMutability: 'view',
  type: 'function'
}, {
  inputs: [{
    internalType: 'address',
    name: 'spender',
    type: 'address'
  }, {
    internalType: 'uint256',
    name: 'subtractedValue',
    type: 'uint256'
  }],
  name: 'decreaseAllowance',
  outputs: [{
    internalType: 'bool',
    name: '',
    type: 'bool'
  }],
  stateMutability: 'nonpayable',
  type: 'function'
}, {
  inputs: [{
    internalType: 'uint256',
    name: '_amount',
    type: 'uint256'
  }],
  name: 'enter',
  outputs: [],
  stateMutability: 'nonpayable',
  type: 'function'
}, {
  inputs: [{
    internalType: 'address',
    name: 'spender',
    type: 'address'
  }, {
    internalType: 'uint256',
    name: 'addedValue',
    type: 'uint256'
  }],
  name: 'increaseAllowance',
  outputs: [{
    internalType: 'bool',
    name: '',
    type: 'bool'
  }],
  stateMutability: 'nonpayable',
  type: 'function'
}, {
  inputs: [],
  name: 'joe',
  outputs: [{
    internalType: 'contract IERC20',
    name: '',
    type: 'address'
  }],
  stateMutability: 'view',
  type: 'function'
}, {
  inputs: [{
    internalType: 'uint256',
    name: '_share',
    type: 'uint256'
  }],
  name: 'leave',
  outputs: [],
  stateMutability: 'nonpayable',
  type: 'function'
}, {
  inputs: [],
  name: 'name',
  outputs: [{
    internalType: 'string',
    name: '',
    type: 'string'
  }],
  stateMutability: 'view',
  type: 'function'
}, {
  inputs: [],
  name: 'symbol',
  outputs: [{
    internalType: 'string',
    name: '',
    type: 'string'
  }],
  stateMutability: 'view',
  type: 'function'
}, {
  inputs: [],
  name: 'totalSupply',
  outputs: [{
    internalType: 'uint256',
    name: '',
    type: 'uint256'
  }],
  stateMutability: 'view',
  type: 'function'
}, {
  inputs: [{
    internalType: 'address',
    name: 'recipient',
    type: 'address'
  }, {
    internalType: 'uint256',
    name: 'amount',
    type: 'uint256'
  }],
  name: 'transfer',
  outputs: [{
    internalType: 'bool',
    name: '',
    type: 'bool'
  }],
  stateMutability: 'nonpayable',
  type: 'function'
}, {
  inputs: [{
    internalType: 'address',
    name: 'sender',
    type: 'address'
  }, {
    internalType: 'address',
    name: 'recipient',
    type: 'address'
  }, {
    internalType: 'uint256',
    name: 'amount',
    type: 'uint256'
  }],
  name: 'transferFrom',
  outputs: [{
    internalType: 'bool',
    name: '',
    type: 'bool'
  }],
  stateMutability: 'nonpayable',
  type: 'function'
}];

var _EXCHANGE_SUBGRAPH, _MASTERCHEF_SUBGRAPH, _DEXCANDLES_SUBGRAPH, _BAR_SUBGRAPH, _LENDING_SUBGRAPH, _ROCKET_SUBGRAPH, _SJOE_SUBGRAPH, _MONEY_MAKER_SUBGRAPH, _VEJOE_SUBGRAPH, _BOOSTED_MASTERCHEF_S, _NFT_CONTRACTS_SUBGRA, _JOEPEG_MARKETPLACE_S;
var EXCHANGE_SUBGRAPH = (_EXCHANGE_SUBGRAPH = {}, _EXCHANGE_SUBGRAPH[exports.ChainId.FUJI] = 'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/exchange-fuji', _EXCHANGE_SUBGRAPH[exports.ChainId.AVALANCHE] = 'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/exchange', _EXCHANGE_SUBGRAPH[exports.ChainId.ARBITRUM_ONE] = 'https://thegraph.com/hosted-service/subgraph/camelotlabs/camelot-amm', _EXCHANGE_SUBGRAPH[exports.ChainId.ARB_GOERLI] = 'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/joe-v1-arb-goerli', _EXCHANGE_SUBGRAPH[exports.ChainId.BNB_CHAIN] = 'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/joe-v1-bnb', _EXCHANGE_SUBGRAPH[exports.ChainId.BNB_TESTNET] = 'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/joe-v1-bnbtest', _EXCHANGE_SUBGRAPH);
var MASTERCHEF_SUBGRAPH = (_MASTERCHEF_SUBGRAPH = {}, _MASTERCHEF_SUBGRAPH[exports.ChainId.FUJI] = 'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/masterchefv2-fuji', _MASTERCHEF_SUBGRAPH[exports.ChainId.AVALANCHE] = 'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/masterchefv2', _MASTERCHEF_SUBGRAPH[exports.ChainId.ARBITRUM_ONE] = '', _MASTERCHEF_SUBGRAPH[exports.ChainId.ARB_GOERLI] = '', _MASTERCHEF_SUBGRAPH[exports.ChainId.BNB_CHAIN] = '', _MASTERCHEF_SUBGRAPH[exports.ChainId.BNB_TESTNET] = '', _MASTERCHEF_SUBGRAPH);
var DEXCANDLES_SUBGRAPH = (_DEXCANDLES_SUBGRAPH = {}, _DEXCANDLES_SUBGRAPH[exports.ChainId.FUJI] = 'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/dexcandles-fuji', _DEXCANDLES_SUBGRAPH[exports.ChainId.AVALANCHE] = 'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/dexcandles', _DEXCANDLES_SUBGRAPH[exports.ChainId.ARBITRUM_ONE] = '', _DEXCANDLES_SUBGRAPH[exports.ChainId.ARB_GOERLI] = '', _DEXCANDLES_SUBGRAPH[exports.ChainId.BNB_CHAIN] = '', _DEXCANDLES_SUBGRAPH[exports.ChainId.BNB_TESTNET] = '', _DEXCANDLES_SUBGRAPH);
var BAR_SUBGRAPH = (_BAR_SUBGRAPH = {}, _BAR_SUBGRAPH[exports.ChainId.FUJI] = '', _BAR_SUBGRAPH[exports.ChainId.AVALANCHE] = 'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/bar', _BAR_SUBGRAPH[exports.ChainId.ARBITRUM_ONE] = '', _BAR_SUBGRAPH[exports.ChainId.ARB_GOERLI] = '', _BAR_SUBGRAPH[exports.ChainId.BNB_CHAIN] = '', _BAR_SUBGRAPH[exports.ChainId.BNB_TESTNET] = '', _BAR_SUBGRAPH);
var LENDING_SUBGRAPH = (_LENDING_SUBGRAPH = {}, _LENDING_SUBGRAPH[exports.ChainId.FUJI] = 'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/lending-fuji', _LENDING_SUBGRAPH[exports.ChainId.AVALANCHE] = 'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/lending', _LENDING_SUBGRAPH[exports.ChainId.ARBITRUM_ONE] = '', _LENDING_SUBGRAPH[exports.ChainId.ARB_GOERLI] = '', _LENDING_SUBGRAPH[exports.ChainId.BNB_CHAIN] = '', _LENDING_SUBGRAPH[exports.ChainId.BNB_TESTNET] = '', _LENDING_SUBGRAPH);
var ROCKET_SUBGRAPH = (_ROCKET_SUBGRAPH = {}, _ROCKET_SUBGRAPH[exports.ChainId.FUJI] = 'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/rocket-fuji', _ROCKET_SUBGRAPH[exports.ChainId.AVALANCHE] = 'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/rocket', _ROCKET_SUBGRAPH[exports.ChainId.ARBITRUM_ONE] = '', _ROCKET_SUBGRAPH[exports.ChainId.ARB_GOERLI] = '', _ROCKET_SUBGRAPH[exports.ChainId.BNB_CHAIN] = '', _ROCKET_SUBGRAPH[exports.ChainId.BNB_TESTNET] = '', _ROCKET_SUBGRAPH);
var SJOE_SUBGRAPH = (_SJOE_SUBGRAPH = {}, _SJOE_SUBGRAPH[exports.ChainId.FUJI] = 'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/sjoe-fuji', _SJOE_SUBGRAPH[exports.ChainId.AVALANCHE] = 'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/sjoe', _SJOE_SUBGRAPH[exports.ChainId.ARBITRUM_ONE] = '', _SJOE_SUBGRAPH[exports.ChainId.ARB_GOERLI] = '', _SJOE_SUBGRAPH[exports.ChainId.BNB_CHAIN] = '', _SJOE_SUBGRAPH[exports.ChainId.BNB_TESTNET] = '', _SJOE_SUBGRAPH);
var MONEY_MAKER_SUBGRAPH = (_MONEY_MAKER_SUBGRAPH = {}, _MONEY_MAKER_SUBGRAPH[exports.ChainId.FUJI] = 'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/moneymaker-fuji', _MONEY_MAKER_SUBGRAPH[exports.ChainId.AVALANCHE] = 'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/money-maker', _MONEY_MAKER_SUBGRAPH[exports.ChainId.ARBITRUM_ONE] = '', _MONEY_MAKER_SUBGRAPH[exports.ChainId.ARB_GOERLI] = '', _MONEY_MAKER_SUBGRAPH[exports.ChainId.BNB_CHAIN] = '', _MONEY_MAKER_SUBGRAPH[exports.ChainId.BNB_TESTNET] = '', _MONEY_MAKER_SUBGRAPH);
var VEJOE_SUBGRAPH = (_VEJOE_SUBGRAPH = {}, _VEJOE_SUBGRAPH[exports.ChainId.FUJI] = 'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/vejoe-fuji', _VEJOE_SUBGRAPH[exports.ChainId.AVALANCHE] = 'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/vejoe', _VEJOE_SUBGRAPH[exports.ChainId.ARBITRUM_ONE] = '', _VEJOE_SUBGRAPH[exports.ChainId.ARB_GOERLI] = '', _VEJOE_SUBGRAPH[exports.ChainId.BNB_CHAIN] = '', _VEJOE_SUBGRAPH[exports.ChainId.BNB_TESTNET] = '', _VEJOE_SUBGRAPH);
var BOOSTED_MASTERCHEF_SUBGRAPH = (_BOOSTED_MASTERCHEF_S = {}, _BOOSTED_MASTERCHEF_S[exports.ChainId.FUJI] = 'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/boostedmasterchef-fuji', _BOOSTED_MASTERCHEF_S[exports.ChainId.AVALANCHE] = 'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/boosted-master-chef', _BOOSTED_MASTERCHEF_S[exports.ChainId.ARBITRUM_ONE] = '', _BOOSTED_MASTERCHEF_S[exports.ChainId.ARB_GOERLI] = '', _BOOSTED_MASTERCHEF_S[exports.ChainId.BNB_CHAIN] = '', _BOOSTED_MASTERCHEF_S[exports.ChainId.BNB_TESTNET] = '', _BOOSTED_MASTERCHEF_S);
var NFT_CONTRACTS_SUBGRAPH = (_NFT_CONTRACTS_SUBGRA = {}, _NFT_CONTRACTS_SUBGRA[exports.ChainId.FUJI] = 'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/nft-contract-fuji', _NFT_CONTRACTS_SUBGRA[exports.ChainId.AVALANCHE] = 'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/nft-contracts', _NFT_CONTRACTS_SUBGRA[exports.ChainId.ARBITRUM_ONE] = '', _NFT_CONTRACTS_SUBGRA[exports.ChainId.ARB_GOERLI] = '', _NFT_CONTRACTS_SUBGRA[exports.ChainId.BNB_CHAIN] = '', _NFT_CONTRACTS_SUBGRA[exports.ChainId.BNB_TESTNET] = '', _NFT_CONTRACTS_SUBGRA);
var JOEPEG_MARKETPLACE_SUBGRAPH = (_JOEPEG_MARKETPLACE_S = {}, _JOEPEG_MARKETPLACE_S[exports.ChainId.FUJI] = 'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/marketplace-fuji', _JOEPEG_MARKETPLACE_S[exports.ChainId.AVALANCHE] = 'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/marketplace', _JOEPEG_MARKETPLACE_S[exports.ChainId.ARBITRUM_ONE] = '', _JOEPEG_MARKETPLACE_S[exports.ChainId.ARB_GOERLI] = '', _JOEPEG_MARKETPLACE_S[exports.ChainId.BNB_CHAIN] = '', _JOEPEG_MARKETPLACE_S[exports.ChainId.BNB_TESTNET] = '', _JOEPEG_MARKETPLACE_S);

exports.JSBI = JSBI;
exports.BAR_ADDRESS = BAR_ADDRESS;
exports.BAR_SUBGRAPH = BAR_SUBGRAPH;
exports.BOOSTED_MASTERCHEF_ADDRESS = BOOSTED_MASTERCHEF_ADDRESS;
exports.BOOSTED_MASTERCHEF_SUBGRAPH = BOOSTED_MASTERCHEF_SUBGRAPH;
exports.BORINGDASHBOARD_ADDRESS = BORINGDASHBOARD_ADDRESS;
exports.BORINGHELPER_ADDRESS = BORINGHELPER_ADDRESS;
exports.BORINGHELPER_BMCJ_ADDRESS = BORINGHELPER_BMCJ_ADDRESS;
exports.BORINGHELPER_MCV3_ADDRESS = BORINGHELPER_MCV3_ADDRESS;
exports.BORINGTOKENSCANNER_ADDRESS = BORINGTOKENSCANNER_ADDRESS;
exports.CAVAX = CAVAX;
exports.CNATIVE = CNATIVE;
exports.CurrencyAmount = CurrencyAmount;
exports.DEXCANDLES_SUBGRAPH = DEXCANDLES_SUBGRAPH;
exports.ERC20ABI = ERC20ABI$1;
exports.EXCHANGE_SUBGRAPH = EXCHANGE_SUBGRAPH;
exports.FACTORY_ADDRESS = FACTORY_ADDRESS;
exports.FARMLENSV2_ADDRESS = FARMLENSV2_ADDRESS;
exports.FARMLENS_ADDRESS = FARMLENS_ADDRESS;
exports.Fetcher = Fetcher;
exports.Fraction = Fraction;
exports.INIT_CODE_HASH = INIT_CODE_HASH;
exports.InsufficientInputAmountError = InsufficientInputAmountError;
exports.InsufficientReservesError = InsufficientReservesError;
exports.JAVAX_ADDRESS = JAVAX_ADDRESS;
exports.JOELENS_ADDRESS = JOELENS_ADDRESS;
exports.JOEPEG_MARKETPLACE_SUBGRAPH = JOEPEG_MARKETPLACE_SUBGRAPH;
exports.JOE_ADDRESS = JOE_ADDRESS;
exports.JoePairABI = JoePairABI$1;
exports.LAUNCH_EVENT_LENS_ADDRESS = LAUNCH_EVENT_LENS_ADDRESS;
exports.LENDING_SUBGRAPH = LENDING_SUBGRAPH;
exports.LOCKING_WRAPPER_ADDRESS = LOCKING_WRAPPER_ADDRESS;
exports.MAKER_ADDRESS = MAKER_ADDRESS;
exports.MASTERCHEF_ADDRESS = MASTERCHEF_ADDRESS;
exports.MASTERCHEF_SUBGRAPH = MASTERCHEF_SUBGRAPH;
exports.MASTERCHEF_V3_ADDRESS = MASTERCHEF_V3_ADDRESS;
exports.MAXIMILLION_ADDRESS = MAXIMILLION_ADDRESS;
exports.MINIMUM_LIQUIDITY = MINIMUM_LIQUIDITY;
exports.MONEY_MAKER_ADDRESS = MONEY_MAKER_ADDRESS;
exports.MONEY_MAKER_SUBGRAPH = MONEY_MAKER_SUBGRAPH;
exports.NFT_CONTRACTS_SUBGRAPH = NFT_CONTRACTS_SUBGRAPH;
exports.NativeCurrency = NativeCurrency;
exports.Pair = Pair;
exports.Percent = Percent;
exports.Price = Price;
exports.ROCKET_JOE_STAKING_ADDRESS = ROCKET_JOE_STAKING_ADDRESS;
exports.ROCKET_JOE_TOKEN_ADDRESS = ROCKET_JOE_TOKEN_ADDRESS;
exports.ROCKET_SUBGRAPH = ROCKET_SUBGRAPH;
exports.ROLL_ADDRESS = ROLL_ADDRESS;
exports.ROUTER_ADDRESS = ROUTER_ADDRESS;
exports.RocketJoeStakingABI = RocketJoeStakingABI;
exports.Route = Route;
exports.Router = Router;
exports.RouterABI = RouterABI;
exports.SJOE_REWARD_TOKEN = SJOE_REWARD_TOKEN;
exports.SJOE_SUBGRAPH = SJOE_SUBGRAPH;
exports.STABLE_JOE_STAKING_ADDRESS = STABLE_JOE_STAKING_ADDRESS;
exports.StableJoeStakingABI = StableJoeStakingABI;
exports.Token = Token;
exports.TokenAmount = TokenAmount;
exports.Trade = Trade;
exports.UNITROLLER_ADDRESS = UNITROLLER_ADDRESS;
exports.VEJOE_STAKING_ADDRESS = VEJOE_STAKING_ADDRESS;
exports.VEJOE_SUBGRAPH = VEJOE_SUBGRAPH;
exports.VEJOE_TOKEN_ADDRESS = VEJOE_TOKEN_ADDRESS;
exports.VeJoeABI = VeJoeABI;
exports.VeJoeStakingABI = VeJoeStakingABI;
exports.WAVAX = WAVAX;
exports.WNATIVE = WNATIVE;
exports.WNativeABI = WNativeABI;
exports.XJoeStakingABI = XJoeStakingABI;
exports.ZAP_ADDRESS = ZAP_ADDRESS;
exports.currencyEquals = currencyEquals;
exports.inputOutputComparator = inputOutputComparator;
exports.tradeComparator = tradeComparator;
//# sourceMappingURL=sdk.cjs.development.js.map
