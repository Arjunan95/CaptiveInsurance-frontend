import React from "react";

import RX, { Popup } from "reactxp";
import styling from "./AppStyles";
import {
  Nav,
  NavItem,
  DatePicker,
  NavDropdown,
  MenuItem,
  FilteringState,
  IntegratedFiltering,
  Table,
  TableHeaderRow,
  TableFilterRow,
  Grid,
  Row,
  Col,
  Form,
  FormGroup,
  ControlLabel,
  FormControl,
  label,
  Visible,
  Checkbox,
  lg,
  xs
} from "react-bootstrap";
/*const {
Welcome
} = TodoStyles;*/

const styles = {
  scroll: RX.Styles.createScrollViewStyle({
    alignSelf: "stretch",
    backgroundColor: "#2a647d0a"
  }),
  navcontainer: RX.Styles.createViewStyle({
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgb(32, 122, 142)",
    height: 50,
    padding: 5
  }),
  navwelcome: RX.Styles.createTextStyle({
    fontSize: 15,
    marginRight: 1010,
    color: "white",
    marginTop: "5"
  }),
  navwelcome1: RX.Styles.createTextStyle({
    fontSize: 15,
    marginLeft: 984,
    marginTop: -26,
    color: "white"
  }),
  navwelcome2: RX.Styles.createTextStyle({
    fontSize: 15,
    marginLeft: 1182,
    marginTop: -21,
    color: "white"
  }),
  // button1: RX.Styles.createButtonStyle({
  //     backgroundColor: 'rgb(8, 37, 103)',
  //     borderWidth:1,
  //     width:110,
  //    height:5,
  //     marginLeft:220,
  //     marginBottom:-23,
  //     padding: 12,
  //     borderRadius: 8,
  //     borderColor: 'rgb(8, 37, 103)',
  // }),
  button1: RX.Styles.createButtonStyle({
    backgroundColor: "rgb(8, 37, 103)",
    borderWidth: 1,
    width: 72,
    height: 5,
    marginLeft: 430,
    marginBottom: -23,
    padding: 12,
    borderRadius: 8,
    borderColor: "rgb(8, 37, 103)",
    color: "white"
  }),

  subbutton: RX.Styles.createButtonStyle({
    backgroundColor: "rgb(8, 37, 103)",
    borderWidth: 1,
    width: 72,
    height: 5,
    marginLeft: 255,
    marginBottom: -23,
    padding: 12,
    borderRadius: 8,
    borderColor: "rgb(8, 37, 103)",
    color: "white",
    marginTop: 14,
    textAlign: "center"
  }),

  button1Text: RX.Styles.createTextStyle({
    fontSize: 14,
    color: "white",
    justifyContent: "center",
    textAlign: "CENTER",
    alignSelf: "center",
    borderRadius: 8,
    font: "rgb(8, 37, 103)"
  }),

  navrqlogo: RX.Styles.createViewStyle({
    height: 20,
    width: "30%",
    marginTop: "5",
    marginBottom: -20,
    marginRight: 1200
  }),

  sidenavbar: RX.Styles.createTextStyle({
    fontSize: 15,
    marginLeft: -70,
    // color: 'white',
    // marginTop:-56,
    width: 200,
    height: 740,
    backgroundColor: "rgb(72, 138, 135)"
  }),
  buttonhover: RX.Styles.createTextStyle({
    backgroundColor: "red"
  }),
  button1Hover: RX.Styles.createTextStyle({
    backgroundColor: "blue"
  }),
  dashboard: RX.Styles.createTextStyle({
    fontSize: 15,
    marginRight: 1150,
    color: "black",
    marginTop: -620
  }),
  policyidTextBox: RX.Styles.createTextStyle({
    borderWidth: 1,
    borderColor: "rgb(8, 37, 103)"
  }),
  pickercatagory: RX.Styles.createTextStyle({
    width: 175,
    height: 27
  }),
  rulesIdTextBox: RX.Styles.createTextStyle({
    borderWidth: 1,
    borderColor: "rgb(8, 37, 103)",
    width: 400
  }),
  rulesTextBox: RX.Styles.createTextStyle({
    height: 140,
    width: 650,
    borderWidth: 1
  }),
  InputSelectorCopy: RX.Styles.createTextStyle({
    borderWidth: 1
  }),
  info: RX.Styles.createTextStyle({
    // .form-inline .form-group { margin-right:10px; }
    // .well-primary {
    color: "rgb(255, 255, 255)",
    backgroundColor: "rgb(12, 39, 93)",
    borderColor: "rgb(8, 37, 103)",
    // }
    glyphicon: { marginRight: 5 },
    width: 929
    // marginLeft:100
  }),
  infodiv: RX.Styles.createTextStyle({
    width: 550
  }),
  imagebanner: RX.Styles.createTextStyle({
    color: "black",
    marginTop: -120,
    paddingTop: 90,
    marginRight: -100
    // paddingBottom:110
  }),
  rapidsettle: RX.Styles.createTextStyle({
    width: 1191,
    height: 160,
    marginLeft: -147
  }),
  aboutuscontainer: RX.Styles.createTextStyle({
    marginLeft: -27
    // width:500
  }),
  rulestextbox: RX.Styles.createTextStyle({
    width: 403,
    height: 28,
    borderWidth: 1,
    borderColor: "rgb(8, 37, 103)",
    marginLeft: 165
  }),

  validatebutton: RX.Styles.createButtonStyle({
    backgroundColor: "rgb(8, 37, 103)",
    borderWidth: 1,
    width: 110,
    height: 5,
    marginLeft: 305,
    marginBottom: -23,
    padding: 12,
    borderRadius: 8,
    borderColor: "rgb(8, 37, 103)"
  }),

  submitbutton: RX.Styles.createButtonStyle({
    backgroundColor: "rgb(8, 37, 103)",
    borderWidth: 1,
    width: 137,
    height: 5,
    marginLeft: 300,
    marginBottom: -23,
    marginTop: 334,
    padding: 12,
    borderRadius: 8,
    borderColor: "rgb(8, 37, 103)"
  }),

  rulesdiv: RX.Styles.createButtonStyle({
    // backgroundColor: 'rgb(8, 37, 103)',
    borderWidth: 1,
    marginLeft: 16,
    borderRadius: 8,
    borderColor: "rgb(8, 37, 103)",
    marginTop: -303
  }),

  useit: RX.Styles.createButtonStyle({
    backgroundColor: "white",
    borderWidth: 1,
    marginLeft: 605,
    width: 218,
    height: 240,
    borderRadius: 8,
    borderStyle: "black",
    marginTop: -272
  }),

  opeartorspanel: RX.Styles.createTextStyle({
    marginLeft: -10,
    width: 350,
    marginTop: 31,
    backgroundColor: "white"
  }),
  nxtbut: RX.Styles.createButtonStyle({
    backgroundColor: "rgb(8, 37, 103)",
    borderWidth: 1,
    width: 180,
    height: 30,
    justifyContent: "center",
    textAlign: "CENTER",
    alignSelf: "center",
    // margin: 200,
    marginLeft: 251,
    marginTop: 391,
    padding: 12,
    borderRadius: 8,
    borderColor: "rgb(8, 37, 103)",
    color: "white"
  }),

  Buttonnxt: RX.Styles.createButtonStyle({
    marginLeft: 251,
    marginTop: -25
  }),

  treatmentnxtbut: RX.Styles.createButtonStyle({
    marginLeft: 387,
    marginTop: 420,
    backgroundColor: "#1f305d",
    borderWidth: 1,
    width: 132,
    height: 30,
    justifyContent: "center",
    textAlign: "CENTER",
    alignSelf: "center",
    padding: 12,
    borderRadius: 8,
    borderColor: "rgb(8, 37, 103)",
    color: "white"
  }),

  patientDetails: RX.Styles.createViewStyle({
    width: 664,
    height: 630,
    marginTop: 267,
    marginLeft: 192,
    color: "#1f305d",
    borderRadius: 4
  }),

  claimfields: RX.Styles.createViewStyle({
    width: 131,
    height: 35,
    // marginTop: -8,
    marginLeft: 247,
    borderRadius: 4
    // background:"#5558589e"
  }),
  claimsubmit: RX.Styles.createViewStyle({
    // width: 131,
    // height: 35,
    marginTop: -13,
    marginLeft: 533,

    backgroundColor: "rgb(8, 37, 103)",
    borderWidth: 1,
    width: 132,
    height: 30,
    justifyContent: "center",
    textAlign: "CENTER",
    alignSelf: "center",
    padding: 12,
    borderRadius: 8,
    borderColor: "rgb(8, 37, 103)",
    color: "white"
  }),

  claimnext: RX.Styles.createViewStyle({
    // width: 131,
    // height: 35,
    marginTop: -31,
    marginLeft: 649,

    backgroundColor: "rgb(8, 37, 103)",
    borderWidth: 1,
    width: 132,
    height: 30,
    justifyContent: "center",
    textAlign: "CENTER",
    alignSelf: "center",
    padding: 12,
    borderRadius: 8,
    borderColor: "rgb(8, 37, 103)",
    color: "white"
  }),
  previouspageCD: RX.Styles.createViewStyle({
    // width: 131,
    // height: 35,
    marginTop: -28,
    marginLeft: 331,

    backgroundColor: "rgb(8, 37, 103)",
    borderWidth: 1,
    width: 132,
    height: 30,
    justifyContent: "center",
    textAlign: "CENTER",
    alignSelf: "center",
    padding: 12,
    borderRadius: 8,
    borderColor: "rgb(8, 37, 103)",
    color: "white"
  }),
  previouspage: RX.Styles.createViewStyle({
    // width: 131,
    // height: 35,
    marginTop: -31,
    marginLeft: 118,

    backgroundColor: "rgb(8, 37, 103)",
    borderWidth: 1,
    width: 132,
    height: 30,
    justifyContent: "center",
    textAlign: "CENTER",
    alignSelf: "center",
    padding: 12,
    borderRadius: 8,
    borderColor: "rgb(8, 37, 103)",
    color: "white"
  }),
  divpolicyrules: RX.Styles.createTextStyle({
    backgroundColor: "rgba(8, 8, 8, 0.05)",
    width: 948,
    height: 300,
    marginRight: 328,
    marginTop: 123
  }),
  policyrules: RX.Styles.createTextStyle({
    marginLeft: 50,
    width: 829,
    height: 900,
    font: 400,
    marginTop: 22
  }),
  details: RX.Styles.createTextStyle({
    backgroundColor: "rgba(8, 8, 8, 0.05)",
    width: 997,
    height: 455,
    marginLeft: 34,
    marginTop: 97
  }),
  heading: RX.Styles.createTextStyle({
    marginLeft: 427,
    marginTop: -19
  }),
  pack: RX.Styles.createButtonStyle({
    marginLeft: 654,
    marginTop: -295
  }),
  treat: RX.Styles.createButtonStyle({
    marginLeft: 335,
    marginTop: -276
  }),
  divContainer: RX.Styles.createButtonStyle({
    marginLeft: -77,
    background: "white",
    height: 727,
    width: 1131,
    marginTop: -124,
    fontSize: 14,
    font: "ProximaNova-Regular"
  }),
  siDeText: RX.Styles.createTextStyle({
    fontSize: 14,
    color: "#494949",
    // fontWeight: 'bold',
    textAlign: "center",
    justifyContent: "center",
    marginLeft: 54,
    marginTop: 11
  }),
  siDeTextT: RX.Styles.createTextStyle({
    fontSize: 14,
    marginLeft: 47,
    color: "#494949",
    // fontWeight: 'bold',
    textAlign: "center",
    justifyContent: "center"
    // marginLeft: 31
  }),
  siDeText1: RX.Styles.createTextStyle({
    fontSize: 14,
    color: "#494949",
    // fontWeight: 'bold',
    textAlign: "center",
    justifyContent: "center",
    marginLeft: 87
  }),
  // button2Hover: RX.Styles.createButtonStyle({
  //     borderRadius: '500%',
  //     backgroundColor:'#de6d75',
  //     color:"black",
  //     sceneConfigType: "Fade"

  // }),

  button2: RX.Styles.createButtonStyle({
    color: "red",
    borderWidth: 1,
    margin: 20,
    padding: 12,
    borderRadius: 50,
    borderColor: "red",
    borderRadius: 0,
    height: 100,
    width: 100,
    marginTop: -160,
    marginLeft: 200
  }),
  Form1: RX.Styles.createViewStyle({
    display: "block",
    width: "39%",
    height: 34,
    // padding: 6px 12px;
    fontSize: 14,
    // line: 1.42857143;
    color: "#555",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    marginLeft: 213
  }),
  Form: RX.Styles.createViewStyle({
    display: "block",
    width: 434,
    height: 32,
    // padding: 6px 12px;
    fontSize: 14,
    // line: 1.42857143;
    // color: "white",
    // backgroundColor: "#fff",
    // borderWidth: 1,
    // borderColor: "#ccc",
    // borderRadius: 4,
    marginLeft: 55
  }),
  FormCD: RX.Styles.createViewStyle({
    display: "block",
    width: 434,
    height: 32,
    // padding: 6px 12px;
    fontSize: 14,
    // line: 1.42857143;
    color: "#555",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    marginLeft: 32
  }),
  FormPD: RX.Styles.createViewStyle({
    display: "block",
    width: "91%",
    height: 34,
    // padding: 6px 12px;
    fontSize: 14,
    // line: 1.42857143;
    color: "#555",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    marginLeft: 32
  }),
  patientDetails1: RX.Styles.createViewStyle({
    width: 809,
    height: 497,
    marginTop: 30,
    marginLeft: 107,
    background: "rgba(8, 8, 8, 0.05)"
  }),
  submitid: RX.Styles.createTextStyle({
    marginLeft: 83,
    marginTop: -33
  }),
  nxtbut1: RX.Styles.createButtonStyle({
    backgroundColor: "rgb(8, 37, 103)",
    borderWidth: 1,
    width: 132,
    height: 30,
    justifyContent: "center",
    textAlign: "CENTER",
    alignSelf: "center",
    // margin: 200,
    marginLeft: 347,
    marginTop: 39,
    padding: 12,
    borderRadius: 8,
    borderColor: "rgb(8, 37, 103)",
    color: "white"
  }),
  but: RX.Styles.createButtonStyle({
    backgroundColor: "rgb(8, 37, 103)",
    borderWidth: 1,
    width: 492,
    height: 30,
    // margin: 200,
    marginLeft: 251,
    marginTop: 39,
    padding: 12,
    borderRadius: 8,
    borderColor: "rgb(8, 37, 103)",
    color: "white",
    justifyContent: "center",
    textAlign: "CENTER",
    alignSelf: "center"
  }),
  Form2: RX.Styles.createViewStyle({
    display: "block",
    width: 434,
    height: 32,
    // padding: 6px 12px;
    fontSize: 14,
    // line: 1.42857143;
    color: "#555",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    marginLeft: 47
  }),
  userlabel: RX.Styles.createTextStyle({
    fontSize: 16,
    color: "black",
    fontWeight: "bold",
    marginTop: 0
  }),

  bulkbutton: RX.Styles.createTextStyle({
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
    backgroundColor: "#7460ee",
    borderWidth: 12,
    marginLeft: 343,
    width: 340
  }),

  bulkbutton2: RX.Styles.createTextStyle({
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
    backgroundColor: "#fc4b6c",
    borderWidth: 12,
    marginLeft: 343,
    width: 342
  }),

  bulkbutton3: RX.Styles.createTextStyle({
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
    backgroundColor: "#1e87e5",
    borderWidth: 12,
    marginLeft: 343,
    width: 343
  }),

  treatmentnxtbut: RX.Styles.createButtonStyle({
    marginLeft: 304,
    marginTop: 60,
    backgroundColor: "rgb(8, 37, 103)",
    borderWidth: 1,
    width: 132,
    height: 30,
    justifyContent: "center",
    textAlign: "CENTER",
    alignSelf: "center",
    padding: 12,
    borderRadius: 8,
    borderColor: "rgb(8, 37, 103)",
    color: "white"
  }),

  patientDetailsPD: RX.Styles.createViewStyle({
    width: 664,
    height: 450,
    marginTop: 307,
    marginLeft: 192,
    background: "rgba(8, 8, 8, 0.05)"
  }),
  patientDetailsT: RX.Styles.createViewStyle({
    // width: 680,
    // height: 657,
    // marginTop: 267,
    // marginLeft: 192,
    // background: "rgba(8, 8, 8, 0.05)"
    width: 664,
    height: 611,
    marginTop: 267,
    marginLeft: 192,
    color: "#1f305d",
    borderRadius: 4
  }),
  patientDetailsCD: RX.Styles.createViewStyle({
    width: 617,
    height: 334,
    marginTop: 307,
    marginLeft: 192,
    background: "rgba(8, 8, 8, 0.05)"
  }),
  siDeTextCD: RX.Styles.createTextStyle({
    fontSize: 14,
    color: "#494949",
    // fontWeight: 'bold',
    textAlign: "center",
    justifyContent: "center",
    marginLeft: 31,
    marginTop: 11
  }),
  siDeTextPD: RX.Styles.createTextStyle({
    fontSize: 14,
    marginLeft: 34,
    color: "#494949",
    // fontWeight: 'bold',
    textAlign: "center",
    justifyContent: "center"
    // marginLeft: 31
  }),
  nxtbut: RX.Styles.createButtonStyle({
    backgroundColor: "rgb(8, 37, 103)",
    borderWidth: 1,
    width: 132,
    height: 30,
    justifyContent: "center",
    textAlign: "CENTER",
    alignSelf: "center",
    // margin: 200,
    marginLeft: 216,
    marginTop: 20,
    padding: 12,
    borderRadius: 8,
    borderColor: "rgb(8, 37, 103)",
    color: "white"
  }),
  picker: RX.Styles.createButtonStyle({
    width: 120,
    marginLeft: 23,
    marginTop: 11,
    color: "black",
    height: 29
  })
};
const _styles = {
  scroll: RX.Styles.createScrollViewStyle({
    alignSelf: "stretch",
    backgroundColor: "#ffffff"
  }),
  roundButton: RX.Styles.createViewStyle({
    margin: 16,
    borderRadius: 16,
    backgroundColor: "#ff0000ab",
    justifyContent: "CENTER"
  }),
  read: RX.Styles.createScrollViewStyle({
    borderRadius: 15,
    width: "100%",
    marginLeft: 20,
    align: "center"
  }),
  HomeScrollImageLogo: RX.Styles.createImageStyle({
    width: 5000,
    height: 72,
    paddingVertical: 20,
    marginLeft: -1200,
    marginTop: 12
  }),
  client: RX.Styles.createViewStyle({
    justifyContent: "center",
    alignItems: "left",
    backgroundColor: "#ffffff",
    padding: 5,
    flex: 1,
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "#cccccc"
  }),

  manualapprove: RX.Styles.createTextStyle({
    label: { margin: 20 },
    textarea: { margin: 20 }
  }),
  nxtbut1: RX.Styles.createButtonStyle({
    backgroundColor: "rgb(8, 37, 103)",
    borderWidth: 1,
    width: 132,
    height: 30,
    justifyContent: "center",
    textAlign: "CENTER",
    alignSelf: "center",
    // margin: 200,
    marginLeft: 347,
    marginTop: 39,
    padding: 12,
    borderRadius: 8,
    borderColor: "rgb(8, 37, 103)",
    color: "white"
  })
};

const pickerItems = [
  {
    label: "Select"
    // value: 'Male'
  },

  {
    label: "Fire",
    value: "Fire"
  },
  {
    label: "Flood",
    value: "Flood"
  }
];

const pickerItems1 = [
  {
    label: "Select Status"
    // value: ''
  },
  {
    label: "Initiated",
    value: "Initiated"
  },
  {
    label: "Not Initiated",
    value: "Not Initiated"
  }
];

const pickerItems2 = [
  {
    label: "Select Claim Status",
    value: ""
  },
  {
    label: "Approved",
    value: "Approved"
  },
  {
    label: "Rejected",
    value: "Rejected"
  }
];
export default class CreatePolicy extends RX.Component {
  constructor(props) {
    super(props);
    res = this.props.navigatorRoute.res;
    console.log("enter into underwriter", res);
    res1 = this.props.navigatorRoute.res1;
    console.log("enter into underwriter", res1);
    Count = this.props.navigatorRoute.rescountvalue;

    this.state = {
      name: "",
      shareholders: [{ name: "" }],
      selectedValue: "",
      // registeredname: registeredname,
      Count: Count
    };
    this._translationValue = RX.Animated.createValue(-100);
    this._animatedStyle = RX.Styles.createAnimatedTextStyle({
      transform: [
        {
          translateY: this._translationValue
        }
      ]
    });
  }

  onChangeUnderwriterNotify = () => {
    console.log("Underwriter notification frontend");

    return fetch("http://localhost:8082/UnderwriterNotification", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(result => result.json())
      .then(result => {
        console.log("Underwriter notify data =======>", result);
        var sendnotify = result.message;
        console.log("send notify", sendnotify);
        // var res = result.message[0]
        // var array = []
        // var array1 = []
        // // var res1 = result.message.length
        // console.log("res1 length", result.message.length)
        // console.log(result.message[0].Record.patientData)
        // console.log(result.message[0].Key)
        // // function search(statusKey, result) {
        // for (var i = 0; i < result.message.length; i++) {

        //         console.log("welcome")
        //         array.push(result.message[i].Record.patientData)
        //         console.log("key===>")
        //         array1.push(result.message[i].Key)
        //         array.push(array1[i])
        // }
        //     for (var i = 0; i < result.message.length; i++) {

        //         console.log("key===>")

        // }

        this.props.onNavigateNotifyUnderwriter(sendnotify);
      });
  };

  onChangePost3 = () => {
    console.log("welcome");

    return fetch("http://localhost:8082/retrieveClaim", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },

      body: JSON.stringify({
        userId: this.state.userHistoryDetails
      })
    })
      .then(result => result.json())
      .then(responseJson => {
        var res = responseJson.result.docs[0].Records.patientData;
        var res1 = responseJson.result.docs[0].Records.patientData.companyName;
        console.log("testing", res);
        var resJson1 = JSON.stringify(res);
        console.log(resJson1);

        var i = responseJson.result.docs.length;
        console.log("no.of blocks:", i);

        var name = res1;
        this.setState({ name: name });

        var registerId =
          responseJson.result.docs[0].Records.patientData.registerId;
        var registerId = registerId;
        this.setState({ registerId: registerId });

        var notifiedDate =
          responseJson.result.docs[0].Records.patientData.notifiedDate;
        var notifiedDate = notifiedDate;
        this.setState({ notifiedDate: notifiedDate });

        var DOL = responseJson.result.docs[0].Records.patientData.DOL;
        var DOL = DOL;
        this.setState({ DOL: DOL });

        var Category = responseJson.result.docs[0].Records.patientData.Category;
        var Category = Category;
        this.setState({ Category: Category });

        var DOD = responseJson.result.docs[0].Records.patientData.DOD;
        var DOD = DOD;
        this.setState({ DOD: DOD });

        var claimAmount =
          responseJson.result.docs[0].Records.patientData.claimAmount;
        var claimAmount = claimAmount;
        this.setState({ claimAmount: claimAmount });

        var policyid = responseJson.result.docs[0].Records.patientData.policyid;
        var policyid = policyid;
        this.setState({ policyid: policyid });

        var tpastatus = responseJson.result.docs[i - 1].Records.status;
        var tpastatus = tpastatus;
        this.setState({ tpastatus: tpastatus });
        console.log("tpa status----------->", tpastatus);

        var submitID = responseJson.result.docs[0].Records.submitID;
        var submitID = submitID;
        this.setState({ submitID: submitID });

        var AmountuserHavetopay =
          responseJson.result.docs[i - 1].Records.AmountuserHavetopay;
        var AmountuserHavetopay = AmountuserHavetopay;
        this.setState({ AmountuserHavetopay: AmountuserHavetopay });

        var AmountPayerWouldPay =
          responseJson.result.docs[i - 1].Records.AmountPayerWouldPay;
        var AmountPayerWouldPay = AmountPayerWouldPay;
        this.setState({ AmountPayerWouldPay: AmountPayerWouldPay });

        var message = responseJson.result.docs[i - 1].Records.message;
        var message = message;
        this.setState({ message: message });

        var statusTPA = responseJson.result.docs[i - 1].Records.status;
        var statusTPA = statusTPA;
        this.setState({ statusTPA: statusTPA });
        console.log("update status", statusTPA);

        var singledata = resJson1 + "\n";
        this.setState({ singledata: singledata });
      });
  };

  onChangeuserId = value => {
    this.setState({ userHistoryDetails: value });
    console.log(this.state.userHistoryDetails, "policyid");

    console.log("userId");
    console.log(this.state.userHistoryDetails, "userId");
  };

  onChangecompanyName = value => {
    console.log(value);
    this.setState({ companyName: value });
    console.log(this.state.companyName, "companyName");
  };

  onChangeregisterId = value => {
    this.setState({ registerId: value });
    console.log(this.state.registerId, "registerId");
  };
  onChangenotifiedDate = value => {
    this.setState({ notifiedDate: value });
    console.log(this.state.notifiedDate, "notifiedDate");
  };
  onChangeDOL = value => {
    this.setState({ DOL: value });
    console.log(this.state.DOL, "DOL");
  };
  onChangeCategory = value => {
    this.setState({ Category: value });
    console.log(this.state.Category, "Category");
  };
  onChangeDOD = value => {
    this.setState({ DOD: value });
    console.log(this.state.DOD, "DOD");
  };
  onChangeclaimAmount = value => {
    this.setState({ claimAmount: value });
    console.log(this.state.claimAmount, "claimAmount");
  };
  // onChangedoj = (value) => {
  //     this.setState({ doj: value });
  //     console.log(this.state.doj, "doj");
  // }
  onChangepolicyid = value => {
    this.setState({ policyid: value });
    console.log(this.state.policyid, "policyid");
  };

  userdetails = () => {
    this.setState({ userdetails: true });
    // this.setState({ patientDetails: false })
    // this.setState({ treatment: false })
    // this.setState({ packageDetails: false })
    // this.setState({ claimDetails: false })
    this.setState({ tpaApprove: false });
    // this.setState({ userId: false })
    // this.setState({ userId1: false })
    // this.setState({ bulkdata: false })
    // this.setState({ policyandrules: false })
    this.setState({ policyandrules1: false });
    // this.setState({ aboutus: false })
  };
  tpaApprove = () => {
    this.setState({ userdetails: false });
    // this.setState({ patientDetails: false })
    // this.setState({ treatment: false })
    // this.setState({ packageDetails: false })
    // this.setState({ claimDetails: false })
    this.setState({ tpaApprove: true });
    // this.setState({ userId: false })
    // this.setState({ userId1: false })
    // this.setState({ bulkdata: false })
    // this.setState({ policyandrules: false })
    this.setState({ policyandrules1: false });
    // this.setState({ aboutus: false })
  };

  policyandrules1 = () => {
    this.setState({ userdetails: true });
    // this.setState({ patientDetails: false })
    // this.setState({ treatment: false })
    // this.setState({ packageDetails: false })
    // this.setState({ claimDetails: false })
    this.setState({ tpaApprove: false });
    // this.setState({ userId: false })
    // this.setState({ userId1: false })
    // this.setState({ bulkdata: false })
    // this.setState({ policyandrules: false })
    this.setState({ policyandrules1: true });
    // this.setState({ aboutus: false })
  };

  //==================================Radio Button function start================================
  setvalue(event) {
    this.setState({
      inputradio: event.target.value
    });
    console.log(event.target.value);
  }
  //===================================Radio Button function END=================================
  //==============================================Rules creation start========================
  onChangepolicyName = value => {
    this.setState({ policyName: value });
    console.log(this.state.policyName, "policyName");
  };

  onChangepolicycatagory = value => {
    this.setState({ policycatagory: value });
    console.log(this.state.policycatagory, "policycatagory");
  };
  onChangepolicypercentage = value => {
    this.setState({ policypercentage: value });
    console.log(this.state.policypercentage, "policypercentage");
  };
  onChangerules = value => {
    this.setState({ rules: value });
    console.log(this.state.rules, "rules");
  };
  onChangePost = () => {
    console.log("hiiiiii");
    return fetch("http://localhost:8082/createpolicycaptive", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },

      body: JSON.stringify({
        //"policyid": this.state.policyidvalue,
        policyName: this.state.policyName,
        policycatagory: this.state.policycatagory,
        rules: [this.state.rules],
        policypercentage: this.state.policypercentage,
        inputradio: this.state.inputradio
      })
    })
      .then(response => response.json())
      .then(responseJson => {
        console.log("testing", responseJson);
        var res = responseJson.policyid;
        // var responseJson = JSON.stringify(res)
        console.log("policy test", res);
        swal("Policy created succesfully" + "\n", "Policy Number:" + "" + res);
        //console.log("response", responseJson)
      })
      .catch(function() {
        console.log("error");
      });
  };

  onChangePost6 = () => {
    console.log("hiiiiii");
    return fetch("http://localhost:8082/autoapproveclaim", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },

      body: JSON.stringify({
        submitID: this.state.submitID,
        status: this.state.status,
        message: this.state.message,
        AmountuserHavetopay: this.state.AmountuserHavetopay,
        AmountPayerWouldPay: this.state.AmountPayerWouldPay
      })
    })
      .then(res => res.json())
      .then(responseJson => {
        var res = responseJson;
        var responseJson = JSON.stringify(res);

        swal("Details updated", responseJson);
        console.log("response", responseJson);
      })
      .catch(function() {
        console.log("error");
      });
  };
  onChangeuserId2 = value => {
    this.setState({ submitID: value });
    console.log(this.state.submitID, "submitID");
  };
  onChangeAmountuserHavetopay = value => {
    this.setState({ AmountuserHavetopay: value });
    console.log(this.state.AmountuserHavetopay, "AmountuserHavetopay");
  };
  onChangeAmountPayerWouldPay = value => {
    this.setState({ AmountPayerWouldPay: value });
    console.log(this.state.AmountPayerWouldPay, "AmountPayerWouldPay");
  };
  onChangestatus1 = value => {
    this.setState({ status: value });
    console.log(this.state.status, "status");
  };
  onChangemessage = value => {
    this.setState({ message: value });
    console.log(this.state.message, "message");
  };

  //==============================================Rules creation END========================
  render() {
    return (
      <RX.ScrollView style={styles.scroll}>
        <RX.View style={styles.navcontainer}>
          <RX.Image
            source={"./src/img/RapidQube logo-01.png"}
            style={[styles.navrqlogo]}
          />
          <RX.Text style={styles.navwelcome}>
            <b>CAPTIVE INSURANCE</b>
          </RX.Text>
          <button
            type="button"
            style={{
              marginTop: -27,
              marginLeft: 759,
              background: "rgb(32, 122, 142)"
            }}
            class="btn btn-primary"
            onClick={() => this.onChangeUnderwriterNotify()}
          >
            <b>Notification</b> <span class="badge badge-light">{Count} </span>
            <span class="sr-only">unread messages </span>
          </button>
          {/* <button type="button" style={{marginTop:-25,marginLeft:759,background:"rgb(32, 122, 142)"}} class="btn btn-primary" onClick={() => this.onChangeNotify()}>
                                       Notification <span class="badge badge-light">{rescountvalue1}</span>
                                       <span class="sr-only">unread messages</span>
                                   </button> */}
          <RX.Text style={styles.navwelcome1}>
            <b> {res}</b>
          </RX.Text>
          <RX.Button
            style={styles.navwelcome2}
            onPress={this.props.onNavigateUnderwriterpagelogout}
          >
            <b>Logout</b>
          </RX.Button>
        </RX.View>

        <RX.View>
          <div class="container">
            <div class="row">
              <div class="container" style={styles.sidenavbar}>
                <ul class="nav nav-list accordion">
                  {/* <li onClick={() => this.onChangeNotify()} ><a style={{ color: "white", font: 'ProximaNova-Regular', fontSize: 14 }}><b>Notifications</b><span class="sr-only">(current)</span></a></li> */}

                  <li onClick={() => this.tpaApprove()}>
                    <a
                      style={{
                        color: "white",
                        font: "ProximaNova-Regular",
                        fontSize: 14
                      }}
                    >
                      <b>TPA Approval</b>
                      <span class="sr-only">(current)</span>
                    </a>
                  </li>
                  <li
                    class="fa fa-lg fa-globe"
                    onClick={() => this.userdetails()}
                  >
                    <a
                      style={{
                        color: "white",
                        font: "ProximaNova-Regular",
                        fontSize: 14
                      }}
                    >
                      <b>User Details</b>
                      <span class="sr-only">(current)</span>
                    </a>
                  </li>
                  {/* <button type="button" class="btn btn-primary" onClick={() => this.onChangeNotify()}>
                                        Notification <span class="badge badge-light">{this.state.Count}</span>
                                        <span class="sr-only">unread messages</span>
                                    </button> */}

                  {/* <ul style={{ color: "white" }} class="second-level-menu">
                                        <li onClick={() => (this.onChangeGetRBPR())}><a style={{ color: "white", font: 'ProximaNova-Regular' }} href="#"><b>All</b></a></li>
                                        <li onClick={() => (this.onChangeAutoapproval())}><a style={{ color: "white", font: 'ProximaNova-Regular' }} href="#"><b>Approved History</b></a></li>
                                        <li onClick={() => (this.onChangeGetWFA())}><a style={{ color: "white", font: 'ProximaNova-Regular' }} href="#"><b>TPA History</b></a></li>

                                    </ul> */}
                </ul>
              </div>
              <div
                class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main"
                style={styles.dashboard}
              >
                <br />
                <div class="container" style={styles.divContainer}>
                  {this.state.tpaApprove ? (
                    <div class="jumbotron" style={styles.patientDetails1}>
                      <form>
                        <h3
                          className="text-center font-weight-bold pt-4 pb-5"
                          style={{
                            marginTop: -11,
                            marginLeft: -369,
                            fontSize: 18,
                            color: "#1f305d"
                          }}
                        >
                          <strong>Manual Approval</strong>
                        </h3>
                      </form>
                      <br />
                      <form>
                        <div style={{ marginTop: 39 }}>
                          <div>
                            <label
                              for="inputPassword4"
                              style={styles.siDeText1}
                            >
                              Submit ID :
                            </label>
                          </div>
                          <div style={styles.submitid}>
                            <RX.TextInput
                              style={styles.Form1}
                              placeholder=""
                              value={this.state.submitID}
                              onChangeText={this.onChangeuserId2}
                            />
                          </div>

                          <br />

                          <div>
                            <label for="inputEmail4" style={styles.siDeText1}>
                              Amount User have to pay :
                            </label>
                          </div>
                          <div style={styles.submitid}>
                            <RX.TextInput
                              style={styles.Form1}
                              placeholder=""
                              value={this.state.AmountuserHavetopay}
                              onChangeText={this.onChangeAmountuserHavetopay}
                            />
                          </div>
                          <br />
                          <div>
                            <label
                              for="inputPassword4"
                              style={styles.siDeText1}
                            >
                              Amount Payer would pay :
                            </label>
                          </div>
                          <div style={styles.submitid}>
                            <RX.TextInput
                              style={styles.Form1}
                              placeholder=""
                              value={this.state.AmountPayerWouldPay}
                              onChangeText={this.onChangeAmountPayerWouldPay}
                            />
                          </div>
                          <br />
                          <div>
                            <label for="inputEmail4" style={styles.siDeText1}>
                              Message :
                            </label>
                          </div>
                          <div style={styles.submitid}>
                            <RX.TextInput
                              style={styles.Form1}
                              placeholder=""
                              value={this.state.message}
                              onChangeText={this.onChangemessage}
                            />
                          </div>
                          <br />
                          <div>
                            <label
                              for="inputPassword4"
                              style={styles.siDeText1}
                            >
                              Status :
                            </label>
                          </div>
                          <div style={styles.submitid}>
                            {/* <RX.TextInput
                    style={styles.Form1}
                    placeholder=""
                    value={this.state.status1}
                    onChangeText={this.onChangestatus}

                /> */}
                            <RX.Picker
                              style={{
                                width: 235,
                                marginLeft: 215,
                                height: 31
                              }}
                              items={pickerItems2}
                              selectedValue={this.state.status1}
                              onValueChange={this.onChangestatus1}
                            />
                          </div>
                        </div>
                      </form>
                      <div>
                        <RX.Button
                          style={styles.nxtbut1}
                          onPress={() => this.onChangePost6()}
                        >
                          {"Submit"}
                        </RX.Button>
                      </div>{" "}
                    </div>
                  ) : null}

                  {this.state.userdetails ? (
                    <div class="col-xs-6 col-sm-3 placeholder">
                      <div
                        class="container"
                        style={{ marginTop: 20, marginLeft: 198 }}
                      >
                        <label
                          for="lgFormGroupInput"
                          style={styles.sideText}
                          style={{ fontSize: 14, color: "#494949" }}
                          class="col-sm-2 col-form-label col-form-label-lg"
                        >
                          Enter your Submit ID:
                        </label>
                        <div class="col-sm-10">
                          <RX.TextInput
                            style={styles.InputSelectorCopy}
                            placeholder=""
                            value={this.state.userHistoryDetails}
                            onChangeText={this.onChangeuserId}
                          />
                        </div>
                        <br />
                        <RX.Button
                          style={styles.subbutton}
                          onPress={() => (
                            this.onChangePost3(), this.policyandrules1()
                          )}
                          refs="id"
                        >
                          {"Submit"}
                        </RX.Button>
                      </div>
                      <div />
                    </div>
                  ) : null}

                  {this.state.policyandrules1 ? (
                    <div style={styles.details}>
                      <br />
                      <div style={styles.heading}>
                        <h2 style={{ color: "#1f305d", fontSize: 20 }}>
                          <b>Claim Report</b>
                        </h2>
                      </div>
                      <br />
                      <form>
                        <div class="container" style={{ marginLeft: 330 }}>
                          <label style={{ color: "#494949" }}>
                            Company Name :{" "}
                          </label>{" "}
                          <b> {this.state.name} </b>
                          <br />
                          <label style={{ color: "#494949" }}>
                            {" "}
                            Registered ID :{" "}
                          </label>{" "}
                          <b> {this.state.registerId} </b>
                          <br />
                          <label style={{ color: "#494949" }}>
                            {" "}
                            Notified Date :{" "}
                          </label>{" "}
                          <b> {this.state.notifiedDate} </b>
                          <br />
                          <label style={{ color: "#494949" }}>
                            {" "}
                            Date of Loss :
                          </label>{" "}
                          <b> {this.state.DOL} </b>
                          <br />
                          <label style={{ color: "#494949" }}>
                            {" "}
                            Category :{" "}
                          </label>{" "}
                          <b> {this.state.Category} </b>
                          <br />
                          <label style={{ color: "#494949" }}>
                            {" "}
                            Description of Damage :
                          </label>{" "}
                          <b> {this.state.DOD} </b>
                          <br />
                          <label style={{ color: "#494949" }}>
                            {" "}
                            Claim Amount :
                          </label>{" "}
                          <b> {this.state.claimAmount} </b>
                          <br />
                          <label style={{ color: "#494949" }}>
                            {" "}
                            Policy ID :{" "}
                          </label>{" "}
                          <b> {this.state.policyid} </b> <br />
                          <label style={{ color: "#494949" }}>
                            {" "}
                            Claim Status :{" "}
                          </label>{" "}
                          <b> {this.state.tpastatus} </b> <br />
                          <label style={{ color: "#494949" }}>
                            {" "}
                            Submit ID :
                          </label>{" "}
                          <b> {this.state.submitID} </b> <br />
                          <label style={{ color: "#494949" }}>
                            {" "}
                            Amount User have to pay :{" "}
                          </label>{" "}
                          <b> {this.state.AmountuserHavetopay} </b> <br />
                          <label style={{ color: "#494949" }}>
                            {" "}
                            Amount Payer would pay :{" "}
                          </label>{" "}
                          <b> {this.state.AmountPayerWouldPay} </b> <br />
                          <label style={{ color: "#494949" }}>
                            {" "}
                            Message :
                          </label>{" "}
                          <b> {this.state.message} </b> <br />
                        </div>{" "}
                      </form>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </RX.View>
      </RX.ScrollView>
    );
  }
}
