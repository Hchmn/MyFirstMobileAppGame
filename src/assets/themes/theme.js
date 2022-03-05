import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const COLORS = {
  // base colors
  default_primary: "#33d39d",
  default_secondary: "#1a86d3",
  default_tertiary: "#cfd6cb",
  default_error: "#dd4b39",
  primary: "#7bc63a",
  secondary: "#67a02e",
  // colors
  black: "#2e2e2e",
  white: "#FFFFFF",
  lightGray: "#F5F5F6",
  lightGray2: "#F6F6F7",
  lightGray3: "#EFEFF1",
  lightGray4: "#F8F8F9",
  transparent: "transparent",
  darkgray: '#898C95',
  darkgray2: '#abafba',
  modalBackground: '#f6f6f6',
  panelColor: "#ececec",
  inboxNotif:'#ee4d2d',
  icons:{
    color1:"#a6daff",
    color2:"#ffa6af",
    color3:"#d9d0a5",
    color4:"#a5d6d0",
    color5:"#ffcaa1",
    color6:"#aebf95",
    color7:"#aebf95",
  }
}


export const SIZES = {
  // app dimensions
  width,
  height,
  // global sizes
  hundredPercent:"100%",
  base: 8,
  padding: 10,
  padding2: 13,
  font: 14,
  font_weight: "800",
  radius: 8,
  logo_title: width * 0.14,
  flex_row: "row",
  flex_column: "column",
  flex_start: "flex-start",
  flex_end: "flex-end",
  marginTop: 10,
  marginBottom: 10,
  absolute:"absolute",
  h1: 30,
  h2: 22,
  h3: 20,
  h4: 18,
  h5: 15,
  h6: 12,
  h7: 12,
  body1: 30,
  body2: 20,
  body3: 16,
  body4: 14,
  body5: 12,
  iconList: 28,
  iconMenu: 22,
  iconInbox: 20
}

export const FONTS = {
  bold: 'bolder',
  center: "center",
  largeTitle: { fontFamily: "Roboto-Regular", fontSize: SIZES.largeTitle, lineHeight: 55, color: COLORS.black  },
  h1: { fontFamily: "Roboto-Black", fontSize: SIZES.h1, lineHeight: 34, color: COLORS.black },
  h2: { fontFamily: "Roboto-Bold", fontSize: SIZES.h2, lineHeight: 30, color: COLORS.black  },
  h3: { fontFamily: "Roboto-Bold", fontSize: SIZES.h3, lineHeight: 22, color: COLORS.black  },
  h4: { fontFamily: "Roboto-Bold", fontSize: SIZES.h4, lineHeight: 22, color: COLORS.black  },
  h5: { fontFamily: "Roboto-Bold", fontSize: SIZES.h5, lineHeight: 22, color: COLORS.black  },
  h6: { fontFamily: "Roboto-Bold", fontSize: SIZES.h6, lineHeight: 22, color: COLORS.black  },
  h7: { fontFamily: "Roboto-Bold", fontSize: SIZES.h7, lineHeight: 22, color: COLORS.black  },
  h5p: { fontFamily: "Roboto-Bold", fontSize: SIZES.width * 0.030, lineHeight: 15, color: COLORS.black  },
  body1: { fontFamily: "Roboto-Regular", fontSize: SIZES.body1, lineHeight: 34, color: COLORS.black  },
  body2: { fontFamily: "Roboto-Regular", fontSize: SIZES.body2, lineHeight: 30, color: COLORS.black  },
  body3: { fontFamily: "Roboto-Regular", fontSize: SIZES.body3, lineHeight: 22, color: COLORS.black  },
  body4: { fontFamily: "Roboto-Regular", fontSize: SIZES.body4, lineHeight: 22, color: COLORS.black  },
  body5: { fontFamily: "Roboto-Regular", fontSize: SIZES.body5, lineHeight: 22, color: COLORS.black  },
}

export default {
  COLORS,
  SIZES,
  FONTS,
};