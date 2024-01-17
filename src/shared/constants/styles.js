import { _scaleText } from "../services/utility";


export const TEXT_STYLES = {
  H1: {
    ..._scaleText(24),
    lineHeight: _scaleText(36).fontSize,
    fontFamily: "Mukta-SemiBold",
  },
  H2: {
    ..._scaleText(20),
    lineHeight: _scaleText(30).fontSize,
    fontFamily: "Mukta-SemiBold",
  },
  H3: {
    ..._scaleText(18),
    lineHeight: _scaleText(27).fontSize,
    fontFamily: "Mukta-SemiBold",
  },
  H4: {
    ..._scaleText(16),
    lineHeight: _scaleText(24).fontSize,
    fontFamily: "Mukta-SemiBold",
  },
  H5: {
    ..._scaleText(14),
    lineHeight: _scaleText(21).fontSize,
    fontFamily: "Mukta-SemiBold",
  },
  SB1: {
    ..._scaleText(16),
    lineHeight: _scaleText(24).fontSize,
    fontFamily: "Mukta-Medium",
  },
  SB2: {
    ..._scaleText(14),
    lineHeight: _scaleText(21).fontSize,
    fontFamily: "Mukta-Medium",
  },
  BODY1: {
    ..._scaleText(18),
    lineHeight: _scaleText(27).fontSize,
    fontFamily: "Mukta-Regular",
  },
  BODY2: {
    ..._scaleText(16),
    lineHeight: _scaleText(24).fontSize,
    fontFamily: "Mukta-Regular",
  },
  BODY3: {
    ..._scaleText(14),
    lineHeight: _scaleText(21).fontSize,
    fontFamily: "Mukta-Regular",
  },
  BODY4: {
    ..._scaleText(12),
    lineHeight: _scaleText(18).fontSize,
    fontFamily: "Mukta-Regular",
  },
  BODY5: {
    ..._scaleText(9),
    lineHeight: _scaleText(15).fontSize,
    fontFamily: "Mukta-Regular",
  },

  BOLD11: {
    ..._scaleText(12),
    lineHeight: _scaleText(16).fontSize,
    fontFamily: "Mukta-Bold",
  },
  MEDIUM10: {
    ..._scaleText(10),
    lineHeight: _scaleText(14).fontSize,
    fontFamily: "Mukta-Medium",
  },
  SEMIBOLD28: {
    ..._scaleText(28),
    lineHeight: _scaleText(35).fontSize,
    fontFamily: "Mukta-SemiBold",
  },
  REGULAR38: {
    ..._scaleText(38),
    lineHeight: _scaleText(46).fontSize,
    // fontFamily: "Mukta-Regular",
  },
  FI1: {
    fontFamily: "Inter-Regular",
    fontSize: _scaleText(12).fontSize,
    // fontWeight: '500',
  },
  FI2: {
    fontFamily: "Inter-Medium",
    // fontWeight: "500",
    fontSize: _scaleText(15).fontSize,
  },
  FI3: {
    fontFamily: "Inter-SemiBold",
    fontSize: _scaleText(18).fontSize,
  },
  FI4: {
    fontFamily: "Inter-Bold",
  },
  FM1: {
    fontFamily: "Mukta-Regular",
    fontSize: _scaleText(12).fontSize,
    // fontWeight: "400",
  },
  FM1_11:{
    fontFamily: "Mukta-Regular",
    fontSize: _scaleText(13).fontSize,
  },
  FM1_1: {
    fontFamily: "Mukta-Regular",
    fontSize: _scaleText(14).fontSize,
    // fontWeight: "400",
  },
  FM1_2: {
    fontFamily: "Mukta-Regular",
    fontSize: _scaleText(16).fontSize,
    // fontWeight: "400",
  }, 
  FM1_3: {
    fontFamily: "Mukta-Regular",
    fontSize: _scaleText(18).fontSize,
    // fontWeight: "400",
  },
  FM1_4: {
    fontFamily: "Mukta-Regular",
    fontSize: _scaleText(20).fontSize,
    // fontWeight: "400",
  },
  FM1_5: {
    fontFamily: "Mukta-Regular",
    fontSize: _scaleText(22).fontSize,
    // fontWeight: "400",
  },
  FM1_6: {
    fontFamily: "Mukta-Regular",
    fontSize: _scaleText(24).fontSize,
    // fontWeight: "400",
  },
  FM2: {
    fontFamily: "Mukta-Medium",
    fontSize: _scaleText(14).fontSize,
    //fontWeight: "500",
  },
  FM2_2: {
    fontFamily: "Mukta-Medium",
    fontSize: _scaleText(12).fontSize,
    //fontWeight: "500",
  },
  FM2_1: {
    fontFamily: "Mukta-Medium",
    fontSize: _scaleText(16).fontSize,
    //fontWeight: "500",
  }, 
  FM2_3: {
    fontFamily: "Mukta-Medium",
    fontSize: _scaleText(18).fontSize,
    //fontWeight: "500",
  },
  FM2_4: {
    fontFamily: "Mukta-Medium",
    fontSize: _scaleText(16).fontSize,
    //fontWeight: "500",
  },
  FM2_5: {
    fontFamily: "Mukta-Medium",
    fontSize: _scaleText(22).fontSize,
    //fontWeight: "500",
  },
  FM3: {
    fontSize: _scaleText(16).fontSize,
    fontFamily: "Mukta-SemiBold",
    //fontWeight: '600',
  },
  FM3_1: {
    fontSize: _scaleText(12).fontSize,
    fontFamily: "Mukta-SemiBold",
    //fontWeight: '600',
  },
  FM3_2: {
    fontSize: _scaleText(14).fontSize,
    fontFamily: "Mukta-SemiBold",
    //fontWeight: '600',
  },
  FM3_3: {
    fontSize: _scaleText(18).fontSize,
    fontFamily: "Mukta-SemiBold",
    //fontWeight: '600',
  },
  
  FM4: {
    fontSize: _scaleText(18).fontSize,
    fontFamily: "Mukta-Bold",
    //fontWeight: "700",
  }, 
  FM4_1: {
    fontSize: _scaleText(12).fontSize,
    fontFamily: "Mukta-Bold",
    //fontWeight: "700",
  },
  FM4_2: {
    fontSize: _scaleText(14).fontSize,
    fontFamily: "Mukta-Bold",
    //fontWeight: "700",
  }, 
  FM4_3: {
    fontSize: _scaleText(16).fontSize,
    fontFamily: "Mukta-Bold",
    //fontWeight: "700",
  },
  FM5: {
    fontFamily: "Mukta-Light",
    fontSize: _scaleText(18).fontSize
    //fontWeight: "300",
  },
  PopUpTitle:{
    fontFamily: "Mukta",
    fontWeight: "400",
    fontSize: _scaleText(14).fontSize,
  },
  ScreenTitle:{
    fontFamily: "Mukta-Medium",
    fontSize: _scaleText(24).fontSize,
  }
};