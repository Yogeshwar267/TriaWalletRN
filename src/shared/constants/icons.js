import TRIALOGO from '../../assets/images/triaLogo.svg';
import APTOS from '../../assets/images/Aptos.svg';
import ARBITRUM from '../../assets/images/Arbitrum.svg';
import AVALANCHE from '../../assets/images/Avalanche.svg';
import BINANCE from '../../assets/images/Binance.svg';
import BTC_STACKS from '../../assets/images/BTCStacks.svg';
import CELO from '../../assets/images/Celo.svg';
import COSMOS from '../../assets/images/Cosmos.svg';
import ETHEREUM from '../../assets/images/Ethereum.svg';
import FANTOM from '../../assets/images/Fantom.svg';
import FUSE from '../../assets/images/Fuse.svg';
import LINEA from '../../assets/images/Linea.svg';
import OPTIMISM from '../../assets/images/Optimism.svg';
import POLYGON from '../../assets/images/Polygon.svg';
import SOLANA from '../../assets/images/Solana.svg';

import BLUR_BINANCE from '../../assets/icons/blurIcons/Binance.svg';
import BLUR_BTC_STACKS from '../../assets/icons/blurIcons/BTCStacks.svg';
import BLUR_CELO from '../../assets/icons/blurIcons/Celo.svg';
import BLUR_ETHEREUM from '../../assets/icons/blurIcons/Ethereum.svg';
import BLUR_FANTOM from '../../assets/icons/blurIcons/Fantom.svg';
import BLUR_OPTIMISM from '../../assets/icons/blurIcons/Optimism.svg';
import BLUR_POLYGON from '../../assets/icons/blurIcons/Polygon.svg';

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
};
