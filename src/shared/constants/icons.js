import TRIALOGO from '../../assets/icons/triaLogo.svg';
import APTOS from '../../assets/icons/Aptos.svg';
import ARBITRUM from '../../assets/icons/Arbitrum.svg';
import AVALANCHE from '../../assets/icons/Avalanche.svg';
import BINANCE from '../../assets/icons/Binance.svg';
import BTC_STACKS from '../../assets/icons/BTCStacks.svg';
import CELO from '../../assets/icons/Celo.svg';
import COSMOS from '../../assets/icons/Cosmos.svg';
import ETHEREUM from '../../assets/icons/Ethereum.svg';
import FANTOM from '../../assets/icons/Fantom.svg';
import FUSE from '../../assets/icons/Fuse.svg';
import LINEA from '../../assets/icons/Linea.svg';
import OPTIMISM from '../../assets/icons/Optimism.svg';
import POLYGON from '../../assets/icons/Polygon.svg';
import SOLANA from '../../assets/icons/Solana.svg';

import BLUR_BINANCE from '../../assets/icons/blurIcons/Binance.svg';
import BLUR_BTC_STACKS from '../../assets/icons/blurIcons/BTCStacks.svg';
import BLUR_CELO from '../../assets/icons/blurIcons/Celo.svg';
import BLUR_ETHEREUM from '../../assets/icons/blurIcons/Ethereum.svg';
import BLUR_FANTOM from '../../assets/icons/blurIcons/Fantom.svg';
import BLUR_OPTIMISM from '../../assets/icons/blurIcons/Optimism.svg';
import BLUR_POLYGON from '../../assets/icons/blurIcons/Polygon.svg';

import ARROW_LEFT from '../../assets/icons/arrow-left.svg';

import APPLE from '../../assets/icons/Apple.svg';
import EMAIL from '../../assets/icons/email.svg';
import GMAIL from '../../assets/icons/gmail.svg';
import GOOGLE from '../../assets/icons/Google.svg';
import INSTAGRAM from '../../assets/icons/instagram.svg';
import LINKEDIN from '../../assets/icons/linkedIn.svg';
import OTHER_LOGIN from '../../assets/icons/otherLogin.svg';
import REDDIT from '../../assets/icons/reddit.svg';
import TWITTER from '../../assets/icons/twitter.svg';

import CHARACTER_1 from '../../assets/icons/memojis/char1.svg';
import CHARACTER_2 from '../../assets/icons/memojis/char2.svg';
import CHARACTER_3 from '../../assets/icons/memojis/char3.svg';
import CHARACTER_4 from '../../assets/icons/memojis/char4.svg';
import CHARACTER_5 from '../../assets/icons/memojis/char5.svg';
import CHARACTER_6 from '../../assets/icons/memojis/char6.svg';
import CHARACTER_7 from '../../assets/icons/memojis/char7.svg';
import TICK_GREEN from '../../assets/icons/tick-circle.svg';

import EYE from '../../assets/icons/eye.svg';
import EYE_SLASH from '../../assets/icons/eye-slash.svg';


import {_scaleText} from '../services/utility';

const iconStyle = (width = 0, height = 0) => ({
  width: _scaleText(width).fontSize,
  height: _scaleText(height ? height : width).fontSize,
});

export const ICONS = {
  TRIA_LOGO: (...params) => <TRIALOGO {...iconStyle(...params)} />,
  APTOS: (...params) => <APTOS {...iconStyle(...params)} />,
  ARBITRUM: (...params) => <ARBITRUM {...iconStyle(...params)} />,
  AVALANCHE: (...params) => <AVALANCHE {...iconStyle(...params)} />,
  BINANCE: (...params) => <BINANCE {...iconStyle(...params)} />,
  BTC_STACKS: (...params) => <BTC_STACKS {...iconStyle(...params)} />,
  CELO: (...params) => <CELO {...iconStyle(...params)} />,
  COSMOS: (...params) => <COSMOS {...iconStyle(...params)} />,
  ETHEREUM: (...params) => <ETHEREUM {...iconStyle(...params)} />,
  FANTOM: (...params) => <FANTOM {...iconStyle(...params)} />,
  FUSE: (...params) => <FUSE {...iconStyle(...params)} />,
  LINEA: (...params) => <LINEA {...iconStyle(...params)} />,
  OPTIMISM: (...params) => <OPTIMISM {...iconStyle(...params)} />,
  POLYGON: (...params) => <POLYGON {...iconStyle(...params)} />,
  SOLANA: (...params) => <SOLANA {...iconStyle(...params)} />,

  BLUR_BINANCE: (...params) => <BLUR_BINANCE {...iconStyle(...params)} />,
  BLUR_BTC_STACKS: (...params) => <BLUR_BTC_STACKS {...iconStyle(...params)} />,
  BLUR_CELO: (...params) => <BLUR_CELO {...iconStyle(...params)} />,
  BLUR_ETHEREUM: (...params) => <BLUR_ETHEREUM {...iconStyle(...params)} />,
  BLUR_FANTOM: (...params) => <BLUR_FANTOM {...iconStyle(...params)} />,
  BLUR_OPTIMISM: (...params) => <BLUR_OPTIMISM {...iconStyle(...params)} />,
  BLUR_POLYGON: (...params) => <BLUR_POLYGON {...iconStyle(...params)} />,

  ARROW_LEFT: (...params) => <ARROW_LEFT {...iconStyle(...params)} />,

  APPLE: (...params) => <APPLE {...iconStyle(...params)} />,
  EMAIL: (...params) => <EMAIL {...iconStyle(...params)} />,
  GMAIL: (...params) => <GMAIL {...iconStyle(...params)} />,
  GOOGLE: (...params) => <GOOGLE {...iconStyle(...params)} />,
  INSTAGRAM: (...params) => <INSTAGRAM {...iconStyle(...params)} />,
  LINKEDIN: (...params) => <LINKEDIN {...iconStyle(...params)} />,
  OTHER_LOGIN: (...params) => <OTHER_LOGIN {...iconStyle(...params)} />,
  REDDIT: (...params) => <REDDIT {...iconStyle(...params)} />,
  TWITTER: (...params) => <TWITTER {...iconStyle(...params)} />,

  CHARACTER_1: (...params) => <CHARACTER_1 {...iconStyle(...params)} />,
  CHARACTER_2: (...params) => <CHARACTER_2 {...iconStyle(...params)} />,
  CHARACTER_3: (...params) => <CHARACTER_3 {...iconStyle(...params)} />,
  CHARACTER_4: (...params) => <CHARACTER_4 {...iconStyle(...params)} />,
  CHARACTER_5: (...params) => <CHARACTER_5 {...iconStyle(...params)} />,
  CHARACTER_6: (...params) => <CHARACTER_6 {...iconStyle(...params)} />,
  CHARACTER_7: (...params) => <CHARACTER_7 {...iconStyle(...params)} />,

  TICK_GREEN: (...params) => <TICK_GREEN {...iconStyle(...params)} />,
  EYE: (...params) => <EYE {...iconStyle(...params)} />,
  EYE_SLASH: (...params) => <EYE_SLASH {...iconStyle(...params)} />,

};
