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
  grouprating: RX.Styles.createViewStyle({
    marginLeft: 778,
    marginTop: -26,
    color: "white"
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
    marginLeft: 997,
    marginTop: -21,
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
    height: 460,
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
    registeredname = this.props.navigatorRoute.res;
    console.log("enter into createpolicy", registeredname);
    rescountvalue1 = this.props.navigatorRoute.rescountvalue1;
    console.log("enter into conut1", rescountvalue1);
    grouprating = this.props.navigatorRoute.grouprating;
    console.log("enter into grouprating", grouprating);
    groupname = this.props.navigatorRoute.groupname1;
    console.log("enter into userpage groupname", groupname);
    this.state = {
      name: "",
      shareholders: [{ name: "" }],
      selectedValue: "",
      registeredname: registeredname,
      grouprating: grouprating,
      groupname: groupname
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

  patientDetails = () => {
    //this.setState({ policyids:false})
    this.setState({ patientDetails: true });
    // this.setState({ treatment:false})
    // this.setState({ packageDetails:false})
    // this.setState({ claimDetails:false})
    // this.setState({ tpaApprove:false})
    this.setState({ userId: false });
    // this.setState({ userId1:false})
    // this.setState({ bulkdata:false})
    // this.setState({ policyandrules:false})
    this.setState({ policyandrules1: false });
    // this.setState({ aboutus:false})
  };

  userId = () => {
    //this.setState({ policyids:false})
    this.setState({ patientDetails: false });
    // this.setState({ treatment:false})
    // this.setState({ packageDetails:false})
    // this.setState({ claimDetails:false})
    // this.setState({ tpaApprove:false})
    this.setState({ userId: true });
    // this.setState({ userId1:false})
    // this.setState({ bulkdata:false})
    // this.setState({ policyandrules:false})
    this.setState({ policyandrules1: false });
    // this.setState({ aboutus:false})
  };

  policyandrules1 = () => {
    //this.setState({ policyids:false})
    this.setState({ patientDetails: false });
    // this.setState({ treatment:false})
    // this.setState({ packageDetails:false})
    // this.setState({ claimDetails:false})
    // this.setState({ tpaApprove:false})
    this.setState({ userId: true });
    // this.setState({ userId1:false})
    // this.setState({ bulkdata:false})
    // this.setState({ policyandrules:false})
    this.setState({ policyandrules1: true });
    // this.setState({ aboutus:false})
  };
  updatedReport = () => {
    this.setState({ updatedReport: true });
  };
  onChangePost1 = () => {
    console.log("Submit claim");
    return fetch("http://localhost:8082/submitClaim", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },

      body: JSON.stringify({
        companyName: this.state.companyName,
        registerId: this.state.registerId,
        notifiedDate: this.state.notifiedDate,
        DOL: this.state.DOL,
        Category: this.state.Category,
        DOD: this.state.DOD,
        claimAmount: this.state.claimAmount,
        policyid: this.state.policyid
      })
    })
      .then(result => result.json())
      .then(result => {
        var res = result.submitID;
        var res1 = result;
        // var data = responseJson.result.docs[0].Records.submitID
        console.log("Submit claim------------>", res);
        // console.log("logesh------------>", data);
        var val = "SubmitId: " + res;

        swal("Your Submit ID:", val);
        this.props.onNavigateNotifyUserpageval(res, res1);
        // var resJson1 = JSON.stringify(res)
        // console.log(resJson1)
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
        console.log("status----------->", tpastatus);

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

  //=======================================Policy select Get Method Start===========================
  onChangeGetCaptivePolicy = () => {
    console.log("Going to Captive policy records");

    fetch("http://localhost:8082/getcaptivepolicy", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(responseJson => {
        var res = responseJson;
        console.log("Captive Result policy ", res);
        //var res1 = res.result.message
        //console.log("get captive console")
        //swal(res1)
        var bulkdata = res;
        console.log("Create  Captive policy ", bulkdata);
        // this.props.onNavigateUserpage(bulkdata)
        var regname = registeredname;
        this.props.onNavigateUserpage(bulkdata, regname);
      });
  };

  onChangeNotify = () => {
    console.log("notification");

    fetch("http://localhost:8082/getusernotification", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(result => result.json())
      .then(result => {
        console.log("notify data =======>", result);
        var res = result.message;
        this.props.onNavigateUsernotify(res, rescountvalue1);
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
  //----------------------------------------------------
  //Treatment-------------------------------------------

  ///=========================policy select get method END=================================
  renderProducts() {
    console.log("enter in to the map");
    return this.state.groupname.map(items => {
      return (
        <tr>
          <td>{items.name}</td>
        </tr>
      );
    });
  }
  render() {
    return (
      <RX.ScrollView style={styles.scroll}>
        <RX.View style={styles.navcontainer}>
          <RX.Image
            source={"./src/img//RapidQube logo-01.png"}
            style={[styles.navrqlogo]}
          />
          <RX.Text style={styles.navwelcome}>
            <b>CAPTIVE INSURANCE</b>
          </RX.Text>
          {/* <RX.Text >
                       
                    </RX.Text> */}
          <button
            type="button"
            style={{
              marginTop: -25,
              marginLeft: 491,
              background: "rgb(32, 122, 142)"
            }}
            class="btn btn-primary"
            onClick={() => this.onChangeNotify()}
          >
            <b>Notification</b>{" "}
            <span class="badge badge-light">{rescountvalue1}</span>
            <span class="sr-only">unread messages</span>
          </button>
          <RX.Text style={styles.grouprating}>
            <b>Group rating: {this.state.grouprating}</b>
          </RX.Text>
          <RX.Text style={styles.navwelcome1}>
            <b> {this.state.registeredname}</b>
          </RX.Text>
          <RX.Button
            style={styles.navwelcome2}
            onPress={this.props.onNavigateUserpagelogout}
          >
            <b>Logout</b>
          </RX.Button>
        </RX.View>

        <RX.View>
          <div class="container">
            <div class="row">
              <div class="container" style={styles.sidenavbar}>
                <ul class="nav nav-list accordion">
                  <li onClick={() => this.onChangeGetCaptivePolicy()}>
                    <a
                      style={{
                        color: "white",
                        font: "ProximaNova-Regular",
                        fontSize: 14
                      }}
                    >
                      <b>Policy Details</b>
                      <span class="sr-only">(current)</span>
                    </a>
                  </li>
                  {/* <button type="button" class="btn btn-primary" onClick={() => this.onChangeNotify()}>
                                       Notification <span class="badge badge-light">{rescountvalue1}</span>
                                       <span class="sr-only">unread messages</span>
                                   </button> */}
                  <li onClick={() => this.patientDetails()}>
                    <a
                      style={{
                        color: "white",
                        font: "ProximaNova-Regular",
                        fontSize: 14
                      }}
                    >
                      <b>Submit Claim</b>
                    </a>
                  </li>
                  <li onClick={() => this.userId()}>
                    <a
                      style={{
                        color: "white",
                        font: "ProximaNova-Regular",
                        fontSize: 14
                      }}
                    >
                      <b>Claim Details </b>
                      <span class="sr-only">(current)</span>
                    </a>
                  </li>
                  <li>
                    <a
                      style={{
                        color: "white",
                        font: "ProximaNova-Regular",
                        fontSize: 14
                      }}
                    >
                      <b>Group Members</b>
                    </a>
                    <ul>
                      <a style={{ color: "white" }}>{this.renderProducts()}</a>
                    </ul>
                  </li>
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
                  {this.state.patientDetails ? (
                    <div>
                      <h2 style={{ marginLeft: 300, marginTop: -291 }}>
                        <strong>Discharge Summary</strong>
                      </h2>
                      <div class="jumbotron" style={styles.patientDetails}>
                        {/* <form>
                                                    <h3 className="text-center font-weight-bold pt-4 pb-5" style={{ marginTop: -11,fontSize:18, marginLeft:-285 }}><strong>PATIENT DETAILS</strong></h3>
                                                </form> */}
                        {/* <br>
                                                </br> */}
                        <form>
                          <div style={{ marginTop: -25 }}>
                            <div>
                              <label
                                for="inputPassword4"
                                style={{
                                  color: "#494949",
                                  fontFamily: "ProximaNova-Regular",
                                  fontSize: "14"
                                }}
                                style={styles.siDeText}
                              >
                                Company Name
                              </label>
                              <RX.TextInput
                                style={styles.Form}
                                placeholder=""
                                value={this.state.companyName}
                                onChangeText={this.onChangecompanyName}
                              />
                            </div>
                            <div>
                              <label
                                for="inputPassword4"
                                style={{
                                  color: "#494949",
                                  fontFamily: "ProximaNova-Regular",
                                  fontSize: "14"
                                }}
                                style={styles.siDeText}
                              >
                                Registered ID
                              </label>

                              <RX.TextInput
                                style={styles.Form}
                                placeholder=""
                                value={this.state.registerId}
                                onChangeText={this.onChangeregisterId}
                              />
                            </div>

                            <div>
                              <label
                                for="inputPassword4"
                                style={{
                                  color: "#494949",
                                  fontFamily: "ProximaNova-Regular",
                                  fontSize: "14"
                                }}
                                style={styles.siDeText}
                              >
                                Notified Date
                              </label>
                              {/* <label for="inputPassword4" style={{color:"#494949",fontFamily:"ProximaNova-Regular",fontSize:"14"}} style={styles.siDeText}>Date of Admission</label>
                                                           
                                                            <input type="date"  placeholder="" style={{marginLeft:20,width:133}}  value={this.state.DOA} onChangeText={this.onChangeDOA} ></input> */}

                              <RX.TextInput
                                type="date"
                                style={styles.Form}
                                placeholder="DD/MM/YYYY"
                                value={this.state.notifiedDate}
                                onChangeText={this.onChangenotifiedDate}
                              />
                            </div>
                            <div>
                              {/* <label for="inputPassword4" style={{color:"#494949",fontFamily:"ProximaNova-Regular",fontSize:"14"}} style={styles.siDeText}>Date of Discharge</label>
                                                           
                                                           <input type="date" style={{marginLeft:20,width:133}}  value={this.state.DOD} onChangeText={this.onChangeDOD} id="lgFormGroupInput" ></input> */}

                              <label
                                for=""
                                style={{
                                  color: "#494949",
                                  fontFamily: "ProximaNova-Regular",
                                  fontSize: "14"
                                }}
                                style={styles.siDeText}
                              >
                                Date of Loss
                              </label>
                              <RX.TextInput
                                style={styles.Form}
                                placeholder="DD/MM/YYYY"
                                value={this.state.DOL}
                                onChangeText={this.onChangeDOL}
                              />
                            </div>

                            {/* <div >
                                                            <label for="inputEmail4" style={{color:"#494949",fontFamily:"ProximaNova-Regular",fontSize:"14"}} style={styles.siDeText}>Age</label>


                                                            <RX.TextInput
                                                                style={styles.Form}
                                                                placeholder=""
                                                                value={this.state.AGE}
                                                                onChangeText={this.onChangeage}

                                                            />
                                                        </div> */}
                            <div>
                              <label
                                for=""
                                style={{
                                  color: "#494949",
                                  fontFamily: "ProximaNova-Regular",
                                  fontSize: "14"
                                }}
                                style={styles.siDeText}
                              >
                                Category
                              </label>

                              <RX.Picker
                                style={styles.picker}
                                items={pickerItems}
                                selectedValue={this.state.Category}
                                onValueChange={this.onChangeCategory}
                              />
                              {/* <RX.TextInput
                                                                style={styles.Form}
                                                                placeholder=""
                                                                value={this.state.SEX}
                                                                onChangeText={this.onChangeSEX}

                                                            /> */}
                            </div>

                            {/* </div>
                                                </form> */}

                            {/* <form>
                                                    <div> */}
                            <br />
                            <div>
                              <label
                                for="inputEmail4"
                                style={{
                                  color: "#494949",
                                  fontFamily: "ProximaNova-Regular",
                                  fontSize: "14"
                                }}
                                style={styles.siDeText}
                              >
                                Description Of Damage
                              </label>

                              <RX.TextInput
                                style={styles.Form}
                                placeholder=""
                                value={this.state.DOD}
                                onChangeText={this.onChangeDOD}
                              />
                            </div>

                            <div>
                              <label
                                for="inputEmail4"
                                style={{
                                  color: "#494949",
                                  fontFamily: "ProximaNova-Regular",
                                  fontSize: "14"
                                }}
                                style={styles.siDeText}
                              >
                                Claim Amount
                              </label>

                              <RX.TextInput
                                style={styles.Form}
                                placeholder=""
                                value={this.state.claimAmount}
                                onChangeText={this.onChangeclaimAmount}
                              />
                            </div>
                            <div>
                              <label
                                for="inputEmail4"
                                style={{
                                  color: "#494949",
                                  fontFamily: "ProximaNova-Regular",
                                  fontSize: "14"
                                }}
                                style={styles.siDeText}
                              >
                                Policy ID
                              </label>

                              <RX.TextInput
                                style={styles.Form}
                                placeholder=""
                                value={this.state.policyid}
                                onChangeText={this.onChangepolicyid}
                              />
                            </div>
                            {/* <div>
                                                            <label for="inputEmail4" style={{color:"#494949",fontFamily:"ProximaNova-Regular",fontSize:"14"}} style={styles.siDeText}>Medico Legal Certificate</label>


                                                            <RX.TextInput
                                                                style={styles.Form}
                                                                placeholder=""
                                                                value={this.state.MLC}
                                                                onChangeText={this.onChangeMLC}

                                                            />

                                                        </div> */}
                            {/* </div>
                                                </form> */}
                            {/* <form>
                                                    <div> */}
                          </div>
                        </form>

                        <RX.Button
                          style={styles.nxtbut}
                          onPress={() => this.onChangePost1()}
                        >
                          {"Submit"}
                        </RX.Button>
                      </div>{" "}
                    </div>
                  ) : null}

                  {this.state.userId ? (
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
                            {" "}
                            Company Name :
                          </label>{" "}
                          <b> {this.state.name}</b> <br />
                          <label style={{ color: "#494949" }}>
                            {" "}
                            Registered ID :{" "}
                          </label>
                          <b>{this.state.registerId}</b>
                          <br />
                          <label style={{ color: "#494949" }}>
                            {" "}
                            Notified Date :{" "}
                          </label>{" "}
                          <b> {this.state.notifiedDate}</b> <br />
                          <label style={{ color: "#494949" }}>
                            {" "}
                            Date of Loss :{" "}
                          </label>
                          <b>{this.state.DOL}</b>
                          <br />
                          <label style={{ color: "#494949" }}>
                            {" "}
                            Category :{" "}
                          </label>{" "}
                          <b>{this.state.Category}</b>
                          <br />
                          <label style={{ color: "#494949" }}>
                            {" "}
                            Description of Damage :{" "}
                          </label>
                          <b>{this.state.DOD}</b>
                          <br />
                          <label style={{ color: "#494949" }}>
                            {" "}
                            Claim Amount :{" "}
                          </label>
                          <b>{this.state.claimAmount}</b>
                          <br />
                          <label style={{ color: "#494949" }}>
                            {" "}
                            Policy ID :{" "}
                          </label>
                          <b> {this.state.policyid}</b> <br />
                          <label style={{ color: "#494949" }}>
                            {" "}
                            Claim Status :{" "}
                          </label>
                          <b> {this.state.tpastatus} </b>
                          <br />
                          <label style={{ color: "#494949" }}>
                            {" "}
                            Submit ID :{" "}
                          </label>{" "}
                          <b>{this.state.submitID}</b> <br />
                          <label style={{ color: "#494949" }}>
                            {" "}
                            Amount User have to pay :{" "}
                          </label>{" "}
                          <b> {this.state.AmountuserHavetopay}</b> <br />
                          <label style={{ color: "#494949" }}>
                            {" "}
                            Amount Payer would pay :{" "}
                          </label>{" "}
                          <b>{this.state.AmountPayerWouldPay}</b> <br />
                          <label style={{ color: "#494949" }}>
                            {" "}
                            Message :{" "}
                          </label>
                          <b> {this.state.message}</b> <br />
                        </div>{" "}
                      </form>
                    </div>
                  ) : null}
                  {/* {this.state.userId ?

    <div class="col-xs-6 col-sm-3 placeholder">
    
        <div class="container" style={{marginTop:20,marginLeft:198}}>
            <RX.Button style={styles.button1} onPress={() => (this.onChangePost3(), this.policyandrules1())} refs="id" >
                {'Submit'}
            </RX.Button>
    
            <label for="lgFormGroupInput" style={styles.sideText} style={{fontSize:14,color:"#494949"}} class="col-sm-2 col-form-label col-form-label-lg">Enter User Identification Number:</label>
            <div class="col-sm-10">
                <RX.TextInput style={styles.InputSelectorCopy} placeholder="" value={this.state.userHistoryDetails} onChangeText={this.onChangeuserId} />
    
    
            </div>
        </div>
        <div>
    
        </div>
    
    </div> : null} */}
                </div>
              </div>
            </div>
          </div>
        </RX.View>
      </RX.ScrollView>
    );
  }
}
