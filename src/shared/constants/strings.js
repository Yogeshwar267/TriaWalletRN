export const STRINGS = {
  TRIA: 'tria',
  GET_STARTED: 'Get started',
  TAGLINE: `One name,\nall things Web3`,
  EXPERIENCE_OMNI: 'Experience omni-presence',
  CONTINUE_AS_GUEST: 'Continue as Guest',
  EXPERIENCE_SPEED: 'Experience the speed with',
  QUICK_EASY: 'Quick and Easy Setup',
  LOGIN: 'Log in',
  SIGNUP: 'Sign up with Tria',
  CONTINUE_WITH: 'Continue with',
  GOOGLE: 'Google',
  APPLE: 'Apple',
  EMAIL_PHONE: 'Email/ Phone',
  OTHERS: 'Others',
  CREATE_TRIA_NAME: 'Create Tria name',
  CREATE_TRIA_SUBTITLE: 'your username to web3',
  USERNAME_AVAILIABLE: 'username available',
  USERNAME_UNAVAILIABLE: 'username unavailable',
  FREE: 'Free',
  TAPPING_ON_NEXT: 'Tapping on next, you agree to our ',
  T_C: 'T&C.',
  NEXT: 'Next',
  ENTER_USERNAME: 'Enter username',
  CREATE_PASSWORD: 'Create Password',
  PASSWORD_SUBHEADING: 'protect your account',
  SECURE_YOUR_WALLET: 'Secure your Wallet',
  PASSWORD_VALIDATION:
    'We recommend using alphanumeric text and special characters for stronger passwords.',
  PASSWORD_CONFIRMATION: 'Please confirm your password...',
  PASSWORD_ERROR: "Um.. This won't work!",
  PERFECTLY_MATCHED: 'Perfectly matched!',
  PASSWORD_UNMATCH: 'Password does not match!',
  PASSWORD_BETTER: 'Better, but we want the best!',
  PASSWORD_STRONG: 'Super strong password!',
  PASSWORD_PLACEHOLDER: 'Enter Password...',
  CREATE_AVATAR: 'Change Profile Image',
  AVATAR_CHANGE:
    'Regenerate avatar, click or upload your picture for the display picture!',
  REGENERATE_AVATAR: 'Regenerate Avatar',
  SKIP: 'Skip for now',
  WALLET_COLOR: 'Choose wallet colour',
  WALLET_COLOR_SUBHEADING:
    'Choose the color that suits your persona. This color will be used in your card as well as throughout the wallet.',
  THEME_SELECT: 'Choose app theme',
  THEME_SELECT_SUBHEADING:
    'Choose the color that you prefer using on your mobile device.',
  INTERESTS_SELECT: 'Choose interests',
  INTERESTS_SELECT_SUBHEADING:
    'Choose what you would like to explore inside the app.',
  NO_XP_NEEDED: 'I don’t want XP',
  BALANCE: 'Balance',
  TODAY: 'Today',
  BUY: 'Buy',
  SEND: 'Send',
  CONVERT: 'Convert',
  DARK_MODE:"Dark mode",
  LIGHT_MODE:"Light mode",
};

export const REGEX = {
  uppercaseRegex: /[A-Z]/,
  lowercaseRegex: /[a-z]/,
  digitRegex: /\d/,
  specialCharRegex: /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/,
  EMAIL_REGEX:
    /^(([^<>()\\.,;:\s@"]+(\.[^<>()\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  PASSWORD_REGEX:
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[ !"#$%&'()*+,/:;<=>?@[\]^_`{|}~÷°¬±µ‰¤ƒ¥€£¢ß¿¡©®™§†‡—¶])(?=.{8,})/,
  NUMBER_REGEX: /^[0-9]+$/,
  NAME_REGEX: /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/,
  LAST_NAME_REGEX: /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]$/,
};

export const COLORS = {
  error: '#F55C5C',
  yellow: '#FFCA42',
  success: '#14AE5C',
  WHITE: '#FAFAFA',
  WHITE_40: '#FAFAFA1A',
};

export const CREATE_PROFILE = [
  {AVATAR_CREATION: 0},
  {IDENTITY_CARD: 1},
  {THEME: 2},
  {CHOOSE_INTERESTS: 3},
];
