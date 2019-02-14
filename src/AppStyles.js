/**
 * TodoStyles.js
 ****/
// import StyleSheet from 'react-native-extensible-stylesheet';
// import { StyleSheet } from 'react-native';
import RX from "reactxp";
import React from "react";
module.exports = {
  container: RX.Styles.createViewStyle({
    padding: 16,
    justifyContent: "center",
    alignItems: "center"
  }),
  navcontainer: RX.Styles.createViewStyle({
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#082567",
    height: 50,
    padding: 5
  }),
  navrqlogo: RX.Styles.createViewStyle({
    height: 20,
    width: "30%",
    marginTop: "5",
    marginBottom: -20,
    marginRight: 1200
  }),
  navwelcome: RX.Styles.createTextStyle({
    fontSize: 15,
    marginRight: 1050,
    color: "white",
    marginTop: "5"
  }),
  pageAlign: RX.Styles.createScrollViewStyle({
    backgroundColor: "#ffffff",
    justifyContent: "center"
  }),
  BUTTON41: RX.Styles.createViewStyle({
    display: "block",
    width: "10%",
    height: 41,
    justifyContent: "center",
    alignItems: "center",
    // padding: 6px 12px;
    fontSize: 20,
    // line: 1.42857143;
    color: "White",
    backgroundColor: "#2ecc71",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    marginLeft: 750,
    marginTop: 83,
    padding: 5
  }),
  sideText1: RX.Styles.createTextStyle({
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    marginBottom: -120,
    backgroundColor: "#1a153b",
    width: "14%",
    height: 41,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: -750,
    marginTop: -42,
    padding: 5
  }),
  welcome: RX.Styles.createScrollViewStyle({
    top: -50,
    fontSize: 25,
    color: "white",
    textAlign: "center",
    margintop: 95
  }),
  container: RX.Styles.createViewStyle({
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1a153b",
    height: 80,
    padding: -10
  }),
  jumbotron: RX.Styles.createViewStyle({
    boxshadow: "pink",
    margintop: 20,
    paddingleft: -20
  }),
  flute: RX.Styles.createViewStyle({
    justifyContent: "center",
    alignItems: "left",
    backgroundColor: "#f5f5f3",
    padding: 5
  }),
  head: RX.Styles.createScrollViewStyle({
    fontSize: 20,
    color: "#3b3751",
    textAlign: "center",
    alignSelf: "center",
    justifyContent: "center",
    textTransform: "capitalize"
  }),
  sideHead: RX.Styles.createScrollViewStyle({
    fontSize: 18,
    color: "#232229",
    textTransform: "capitalize",
    marginTop: 19
  }),
  sideHeadxs: RX.Styles.createScrollViewStyle({
    fontSize: 10,
    color: "#232229",
    textTransform: "capitalize",
    marginTop: 19
  }),
  quotes: RX.Styles.createScrollViewStyle({
    fontSize: 15,
    color: "#ff0000",
    textTransform: "capitalize",
    marginTop: 32,
    height: 41,
    width: 169,
    padding: 4
  }),
  quotesxs: RX.Styles.createScrollViewStyle({
    fontSize: 10,
    color: "#ff0000",
    textTransform: "capitalize",
    marginTop: 32,
    height: 41,
    width: 169,
    padding: 4
  }),
  valid: RX.Styles.createScrollViewStyle({
    fontSize: 15,
    color: "#f8ba01",
    textTransform: "capitalize",
    marginTop: 32,
    height: 41,
    width: 169,
    padding: 4,
    marginLeft: 71
  }),
  quoted: RX.Styles.createScrollViewStyle({
    fontSize: 15,
    color: "#101010",
    textTransform: "capitalize",
    backgroundColor: "#c7c7c7",
    marginTop: 41,
    height: 41,
    width: 169,
    padding: 4,
    marginLeft: 92
  }),
  subQuotes: RX.Styles.createScrollViewStyle({
    fontSize: 15,
    color: "#101010",
    textTransform: "capitalize",
    backgroundColor: "#c7c7c7",
    marginTop: 41,
    height: 41,
    width: 169
  }),
  ncb: RX.Styles.createScrollViewStyle({
    fontSize: 15,
    color: "#101010",
    textTransform: "capitalize",
    backgroundColor: "#c7c7c7",
    marginTop: 41,
    alignItems: "left",
    height: 41,
    padding: 4
  }),
  subNcb: RX.Styles.createScrollViewStyle({
    fontSize: 15,
    color: "#101010",
    textTransform: "capitalize",
    backgroundColor: "#c7c7c7",
    marginTop: 41,
    alignItems: "left",
    height: 41
  }),
  tryHead: RX.Styles.createScrollViewStyle({
    fontSize: 15,
    color: "#3b3a47",
    textTransform: "capitalize"
  }),
  tryHeadxs: RX.Styles.createScrollViewStyle({
    fontSize: 15,
    color: "#3b3a47",
    textTransform: "capitalize"
  }),
  clientHead: RX.Styles.createScrollViewStyle({
    fontSize: 20,
    color: "#413a6f",
    textTransform: "capitalize"
  }),
  CliEntHead: RX.Styles.createScrollViewStyle({
    fontSize: 16,
    color: "Black",
    textTransform: "capitalize",
    marginLeft: 36,
    marginTop: -19
  }),
  clientHeadts: RX.Styles.createScrollViewStyle({
    fontSize: 15,
    color: "#000000",
    textTransform: "capitalize"
  }),
  clientHeadQuotes: RX.Styles.createScrollViewStyle({
    fontSize: 20,
    color: "#000000",
    textTransform: "capitalize"
  }),
  clientHeadxs: RX.Styles.createScrollViewStyle({
    fontSize: 15,
    color: "#413a6f",
    textTransform: "capitalize"
  }),
  clientDate: RX.Styles.createScrollViewStyle({
    fontSize: 10,
    color: "#85848c",
    textTransform: "capitalize"
  }),
  client: RX.Styles.createViewStyle({
    justifyContent: "center",
    alignItems: "left",
    backgroundColor: "#ffffff",
    padding: 5,
    flex: 1,
    flexDirection: "row",
    borderBottomWidth: 2,
    borderColor: "#ff0000"
  }),
  clientLeft: RX.Styles.createViewStyle({
    justifyContent: "center",
    alignItems: "left",
    backgroundColor: "#ffffff",
    padding: 5,
    flex: 1,
    flexDirection: "row",
    borderLeftWidth: 2,
    borderColor: "#ff0000"
  }),
  expired: RX.Styles.createViewStyle({
    justifyContent: "center",
    alignItems: "left",
    backgroundColor: "#ffffff",
    padding: 5,
    flex: 1,
    flexDirection: "row",
    borderBottomWidth: 2,
    borderColor: "#f8ba01"
  }),
  btn: RX.Styles.createViewStyle({
    justifyContent: "left",
    alignItems: "left",
    backgroundColor: "#ffffff",
    padding: 5,
    flex: 1,
    flexDirection: "row"
  }),
  nextBtn: RX.Styles.createViewStyle({
    marginTop: 15,
    marginLeft: 62
  }),
  titleText: RX.Styles.createTextStyle({
    fontSize: 16,
    textAlign: "center",
    marginTop: 12,
    color: "black"
  }),
  txtCenter: RX.Styles.createTextStyle({
    textAlign: "center"
  }),
  videoTitleText: RX.Styles.createTextStyle({
    marginBottom: 8
  }),
  progressMargin: RX.Styles.createViewStyle({
    margin: 8
  }),
  video: RX.Styles.createViewStyle({
    height: 176,
    width: 320
  }),
  roundButton: RX.Styles.createViewStyle({
    marginTop: 16,
    borderRadius: 5,
    backgroundColor: "#2ecc71"
  }),
  roundButtonQuote: RX.Styles.createViewStyle({
    marginTop: 23,
    borderRadius: 5,
    backgroundColor: "#2ecc71"
  }),
  buyButton: RX.Styles.createViewStyle({
    margin: 16,
    borderRadius: 16,
    backgroundColor: "#7d88a9"
  }),
  buttonText: RX.Styles.createTextStyle({
    fontSize: 16,
    marginVertical: 6,
    marginHorizontal: 12,
    color: "white"
  }),
  sideText: RX.Styles.createTextStyle({
    fontSize: 16,
    color: "black",
    fontWeight: "bold"
  }),
  siDeText: RX.Styles.createTextStyle({
    fontSize: 16,
    color: "Black",
    fontWeight: "bold",
    textAlign: "center",
    justifyContent: "center"
  }),
  SIDETEXT: RX.Styles.createTextStyle({
    fontSize: 16,
    color: "BLUE",
    fontWeight: "bold",
    marginLeft: 18
  }),
  SIdeText: RX.Styles.createTextStyle({
    fontSize: 16,
    color: "black",
    fontWeight: "bold",
    marginLeft: -50
  }),
  sideMar: RX.Styles.createTextStyle({
    marginTop: 10
  }),
  buybuttonText: RX.Styles.createTextStyle({
    fontSize: 16,
    marginVertical: 6,
    marginHorizontal: 12,
    color: "white"
  }),
  editTodoItem: RX.Styles.createTextStyle({
    margin: 8,
    height: 18,
    fontSize: 14,
    alignSelf: "stretch",
    backgroundColor: "transparent",
    borderWidth: 1,
    borderRightWidth: 0,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderStyle: "solid",
    borderColor: "#ccc"
  }),
  image: RX.Styles.createViewStyle({
    height: 45,
    width: 100,
    backgroundColor: "#FFFFFF",
    marginTop: 10
  }),
  JUKE: RX.Styles.createViewStyle({
    height: 63,
    width: 99,
    backgroundColor: "#FFFFFF",
    marginTop: -1
  }),
  quoteImage: RX.Styles.createViewStyle({
    height: 45,
    width: 100,
    backgroundColor: "#FFFFFF",
    marginTop: 19
  }),
  flute: RX.Styles.createViewStyle({
    justifyContent: "center",
    alignItems: "left",
    backgroundColor: "#f5f5f3",
    padding: 5
  }),
  head: RX.Styles.createScrollViewStyle({
    fontSize: 30,
    color: "#3b3751",
    textTransform: "capitalize"
  }),
  assitance: RX.Styles.createTextStyle({
    fontSize: 20,
    color: "#1a1828",
    textTransform: "capitalize"
  }),
  assitanceMob: RX.Styles.createTextStyle({
    fontSize: 15,
    color: "#1a1828",
    textTransform: "capitalize"
  }),
  assitanceBor: RX.Styles.createTextStyle({
    borderBottomWidth: "1",
    borderColor: "#cccccc"
  }),
  check: RX.Styles.createViewStyle({
    marginTop: 5
  }),
  contain: RX.Styles.createViewStyle({
    backgroundColor: "#white"
  }),
  Text: RX.Styles.createTextStyle({
    fontSize: 15,
    color: "#000000"
  }),
  TExt: RX.Styles.createTextStyle({
    fontSize: 15,
    color: "#000000",
    marginTop: 10
  }),
  Self: RX.Styles.createViewStyle({
    backgroundColor: "#FF6347"
  }),
  // button1Hover: RX.Styles.createButtonStyle({
  //     backgroundColor: '#EF5350'
  // }),
  // button1Text: RX.Styles.createTextStyle({
  //     fobutton1HoverntSize: 14,
  //     color: '#EF5350',
  //     justifyContent: 'center'
  // }),
  // button1TextHover: RX.Styles.createTextStyle({
  //     fontSize: 14,
  //     color: 'White',
  //     justifyContent: 'center',
  //     margingright:50
  // }),
  Form: RX.Styles.createViewStyle({
    display: "block",
    width: "80%",
    height: 34,
    // padding: 6px 12px;
    fontSize: 14,
    // line: 1.42857143;
    color: "#555",
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4
  }),
  Form10: RX.Styles.createViewStyle({
    display: "block",
    width: "54%",
    height: 34,
    textAlign: "justify",
    // padding: 6px 12px;
    fontSize: 18,
    //   color:'#060505',
    fontColor: "white",
    marginLeft: 72,
    backgroundColor: "#9d9d9d",

    // line: 1.42857143;
    marginBottom: 138,

    borderWidth: 1,
    borderColor: "#9d9d9d",
    borderRadius: 4
  }),
  FOrm: RX.Styles.createViewStyle({
    display: "block",
    width: "80%",
    height: 34,
    // padding: 6px 12px;
    fontSize: 14,
    // line: 1.42857143;
    color: "#555",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    marginLeft: -53
  }),
  button: RX.Styles.createViewStyle({
    display: "block",
    width: "14%",
    height: 41,
    justifyContent: "center",
    alignItems: "center",
    // padding: 6px 12px;
    fontSize: 20,
    // line: 1.42857143;
    color: "White",
    backgroundColor: "blue",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    marginLeft: 392,
    marginTop: 30,
    padding: 5
  }),
  BUTTON4: RX.Styles.createViewStyle({
    display: "block",
    width: "14%",
    height: 41,
    justifyContent: "center",
    alignItems: "center",
    // padding: 6px 12px;
    fontSize: 20,
    // line: 1.42857143;
    color: "White",
    backgroundColor: "blue",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    marginLeft: 589,
    marginTop: 30,
    padding: 5
  }),
  BUTTON5: RX.Styles.createViewStyle({
    display: "block",
    width: "14%",
    height: 41,
    justifyContent: "center",
    alignItems: "center",
    // padding: 6px 12px;
    fontSize: 20,
    // line: 1.42857143;
    color: "White",
    backgroundColor: "blue",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    marginLeft: 450,
    marginTop: 30,
    padding: 5
  }),
  BUTTON6: RX.Styles.createViewStyle({
    display: "block",
    width: "14%",
    height: 41,
    justifyContent: "center",
    alignItems: "center",
    // padding: 6px 12px;
    fontSize: 20,
    // line: 1.42857143;
    color: "White",
    backgroundColor: "blue",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    marginLeft: 455,
    marginTop: -133,
    padding: 5
  }),
  BUTTON7: RX.Styles.createViewStyle({
    display: "block",
    width: "14%",
    height: 41,
    justifyContent: "center",
    alignItems: "center",
    // padding: 6px 12px;
    fontSize: 20,
    // line: 1.42857143;
    color: "White",
    backgroundColor: "blue",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    marginLeft: 444,
    marginTop: -8,
    padding: 5
  }),
  BUTTON13: RX.Styles.createViewStyle({
    display: "block",
    width: "14%",
    height: 41,
    justifyContent: "center",
    alignItems: "center",
    // padding: 6px 12px;
    fontSize: 20,
    // line: 1.42857143;
    color: "White",
    backgroundColor: "blue",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    marginLeft: 593,
    marginTop: 14,
    padding: 5
  }),
  nextbutton: RX.Styles.createViewStyle({
    display: "block",
    width: "50%",
    height: 34,
    justifyContent: "center",
    alignItems: "center",
    // padding: 6px 12px;
    fontSize: 20,
    // line: 1.42857143;
    color: "White",
    backgroundColor: "blue",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    marginLeft: 221,
    marginTop: 20
  }),
  Tab: RX.Styles.createViewStyle({
    backgroundColor: "#f8ad46",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    color: "#FFF"
  }),
  customBtn: RX.Styles.createViewStyle({
    color: "#fff",
    backgroundColor: "#ff606b",
    borderColor: "#ff606b",
    borderWidth: 1,
    padding: 10,
    borderRadius: 4
  }),
  marTop: RX.Styles.createViewStyle({
    marginTop: 20
  }),
  marTOP: RX.Styles.createViewStyle({
    marginTop: 20,
    marginLeft: 250
  }),
  marTop40: RX.Styles.createViewStyle({
    marginTop: 40
  }),
  marTopxs: RX.Styles.createViewStyle({
    marginTop: 58,
    color: "#fa774d"
  }),
  marTopcs: RX.Styles.createViewStyle({
    marginTop: 20,
    textAlign: "right"
  }),
  btnMaxWidth: RX.Styles.createViewStyle({
    width: "100%"
  }),
  marTop10: RX.Styles.createViewStyle({
    marginTop: 10
  }),
  mobFont: RX.Styles.createViewStyle({
    color: "#000000",
    padding: "5"
  }),
  marTop17: RX.Styles.createViewStyle({
    marginTop: 17
  }),
  cmpBack: RX.Styles.createViewStyle({
    backgroundColor: "#ffffff"
  }),
  clientBor: RX.Styles.createViewStyle({
    borderBottomWidth: 1,
    borderColor: "#cccccc"
  })
};
