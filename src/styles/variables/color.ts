export const colors = {
  red: {
    100: "#FFE2E5",
    200: "#FFBAC3",
    300: "#F96979",
    400: "#F34468",
    500: "#EB0A4E",
    600: "#CA0755",
    700: "#A90556",
    800: "#880352",
    900: "#70014E",
  },
  blue: {
    40: "#F4F8FA",
    50: "#F2F9FC",

    100: "#CDF0FE",
    200: "#9CDDFD",
    300: "#6AC3FB",
    400: "#46AAF8",
    500: "#0B82F4",
    600: "#0864D1",
    700: "#054BAF",
    800: "#03348D",
    900: "#022575",
  },
  yellow: {
    100: "#FEFACF",
    200: "#FFF081",
    300: "#FEED71",
    400: "#FDE54E",
    500: "#FCD914",
    600: "#D8B70E",
    700: "#B5960A",
    800: "#927606",
    900: "#785F03",
  },
  green: {
    100: "#ECFCD3",
    200: "#CBF497",
    300: "#B4ED7B",
    400: "#92DB57",
    500: "#63C427",
    600: "#49A81C",
    700: "#338D13",
    800: "#20710C",
    900: "#135E07",
  },
  basic: {
    50: "#FDFEFF",

    100: "#F5F7F8",
    200: "#EFF1F2",
    300: "#D1D5DA",
    400: "#B3BAC1",
    500: "#959FA9",
    600: "#778490",
    700: "#596978",
    800: "#1F3449",
    900: "#041C33",

    1000: "#001326",
  },
};

type Color = {
  deepDark: string;
  dark: string;
  main: string;
  light: string;
};

export const Color = {
  white: colors.basic[50],
  black: colors.basic[900],
  primary: {
    deepDark: colors.blue[700],
    dark: colors.blue[600],
    main: colors.blue[500],
    light: colors.blue[200],
    highlight: colors.blue[100],
  },
  success: {
    deepDark: colors.green[700],
    dark: colors.green[600],
    main: colors.green[500],
    light: colors.green[300],
    highlight: colors.green[100],
  },
  warning: {
    deepDark: colors.yellow[700],
    dark: colors.yellow[600],
    main: colors.yellow[500],
    light: colors.yellow[400],
    highlight: colors.yellow[100],
  },
  danger: {
    deepDark: colors.red[700],
    dark: colors.red[600],
    main: colors.red[500],
    light: colors.red[200],
    highlight: colors.red[100],
  },
  gray: {
    deepDark: colors.basic[700],
    dark: colors.basic[600],
    main: colors.basic[500],
    light: colors.basic[200],
  },
  text: {
    primary: colors.blue[500],
    secondary: colors.basic[600],
    disabled: colors.basic[300],
    hint: colors.basic[400],
    white: "#FFFFFF",
  },
  background: {
    default: "#FFFFFF",
    dark: colors.blue[40],
    active: colors.blue[100],
    hint: colors.blue[50],
  },
  icon: {
    active: colors.blue[500],
    fill: colors.basic[700],
    line: colors.basic[600],
  },
};
