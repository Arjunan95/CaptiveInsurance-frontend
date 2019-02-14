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
    marginTop: -19,
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
  policyIdTextBox: RX.Styles.createTextStyle({
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
    height: 344,
    marginLeft: 34,
    marginTop: 75
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

var params = [];
var value = [];
var responseJson;
var policy;

export default class CreatePolicy extends RX.Component {
  constructor(props) {
    super(props);
    registeredname = this.props.navigatorRoute.res;
    console.log("enter into createpolicy", registeredname);
    this.state = {
      name: "",
      shareholders: [{ name: "" }],
      selectedValue: "",
      registeredname: registeredname
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

  onChangePost = () => {
    console.log("hiiiiii");
    return fetch("http://localhost:8082/createpolicy", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },

      body: JSON.stringify({
        policyID: this.state.policyId,
        policyID: this.state.policyId1,
        rules: [this.state.rules]
      })
    })
      .then(response => response.json())
      .then(responseJson => {
        var res = responseJson.policyID;
        var responseJson = JSON.stringify(res);

        swal("Policy created succesfully" + "\n", "Policy ID:" + responseJson);
        console.log("response", responseJson);
      })
      .catch(function() {
        console.log("error");
      });
  };

  //     onChangePost = () => {

  //         console.log("hiiiiii")
  //         return fetch('http://localhost:8082/createpolicycaptive', {
  //             method: 'POST',
  //             headers: {
  //                 'Accept': 'application/json',
  //                 'Content-Type': 'application/json'

  //             },

  //             body: JSON.stringify({

  //                 // "policyId": this.state.policyIdvalue,
  //                 "policyName": this.state.policyName,
  //                 "policycatagory": this.state.policycatagory,
  //                 "rules": [this.state.rules],
  //                 "policypercentage": this.state.policypercentage,
  //                 "inputradio": this.state.inputradio

  //             }),
  //         }).then((response) => response.json()).then((responseJson) => {

  //             var res = responseJson.policyID;
  //             // var responseJson = JSON.stringify(res)
  // console.log("policy test",res)
  //             swal("Policy created succesfully", responseJson)
  //             console.log("response", responseJson)

  //         }).catch(function () {
  //             console.log("error");
  //         });

  //     }

  onChangePost2 = () => {
    return fetch("http://localhost:8082/validateExpression", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },

      body: JSON.stringify({
        expression: this.state.expression
      })
    })
      .then(response => response.json())
      .then(responseJson => {
        var res = responseJson;
        var responseJson1 = JSON.stringify(res);

        swal("Validated succesfully", responseJson1);
        console.log("validate", responseJson1);
      })
      .catch(function() {
        console.log("error");
      });
  };

  onChangePost1 = () => {
    console.log("arjun");
    return fetch("http://localhost:8082/submitClaim", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },

      body: JSON.stringify({
        NAME: this.state.NAME,
        AGE: this.state.AGE,
        SEX: this.state.SEX,
        DOA: this.state.DOA,
        REF_DOC: this.state.REF_DOC,
        IPD_No: this.state.IPD_No,
        MLC: this.state.MLC,

        DOD: this.state.DOD,
        DAIGONIS: this.state.DAIGONIS,
        Cheif_Complaints_On_Admission: this.state.Cheif_Complaints_On_Admission,
        Past_History_with_Allergy: this.state.Past_History_with_Allergy,
        Personal_History: this.state.Personal_History,
        Family_History: this.state.Family_History,
        Menstrual_History: this.state.Menstrual_History,
        Obstretric_History: this.state.Obstretric_History,
        Genral_Examination: this.state.Genral_Examination,
        Systematic_Examination: this.state.Systematic_Examination,
        Investigations: this.state.Investigations,
        BaBys_Details: this.state.BaBys_Details,
        Course_in_Hospital_And_condition: this.state
          .Course_in_Hospital_And_condition,
        Treatment_Given: this.state.Treatment_Given,
        Treatment_Adviced: this.state.Treatment_Adviced,
        Follow_Up_Visit: this.state.Follow_Up_Visit,
        Procedure_done: this.state.Procedure_done,
        HospitalName: this.state.HospitalName,
        status: this.state.status,
        claimAmount: this.state.claimAmount,
        policyId: this.state.policyId
      })
    })
      .then(result => result.json())
      .then(result => {
        var res = result.submitID;
        // var data = responseJson.result.docs[0].Records.submitID
        console.log("arjun------------>", res);
        // console.log("logesh------------>", data);
        var val = "SubmitId: " + res;

        swal("Your Submit ID:", val);

        // var resJson1 = JSON.stringify(res)
        // console.log(resJson1)
      });
  };
  // onChangePost1() {

  //     this.props.onNavigatePush(PatientDetail);
  // }
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
        var res = responseJson.result.docs[0].Records.patientData.HospitalName;
        var res1 = responseJson.result.docs[0].Records.patientData.NAME;
        console.log(res1);
        var resJson1 = JSON.stringify(res);
        console.log(resJson1);
        var name = res1;
        this.setState({ name: name });

        var AGE = responseJson.result.docs[0].Records.patientData.AGE;
        var AGE = AGE;
        this.setState({ AGE: AGE });
        var SEX = responseJson.result.docs[0].Records.patientData.SEX;
        var SEX = SEX;
        this.setState({ SEX: SEX });

        var DOA = responseJson.result.docs[0].Records.patientData.DOA;
        var DOA = DOA;
        this.setState({ DOA: DOA });

        var REF_DOC = responseJson.result.docs[0].Records.patientData.REF_DOC;
        var REF_DOC = REF_DOC;
        this.setState({ REF_DOC: REF_DOC });

        var IPD_No = responseJson.result.docs[0].Records.patientData.IPD_No;
        var IPD_No = IPD_No;
        this.setState({ IPD_No: IPD_No });

        var MLC = responseJson.result.docs[0].Records.patientData.MLC;
        var MLC = MLC;
        this.setState({ MLC: MLC });

        var DOD = responseJson.result.docs[0].Records.patientData.DOD;
        var DOD = DOD;
        this.setState({ DOD: DOD });

        var DAIGONSIS =
          responseJson.result.docs[0].Records.patientData.DAIGONIS;
        var DAIGONSIS = DAIGONSIS;
        this.setState({ DAIGONSIS: DAIGONSIS });

        var Cheif_Complaints_On_Admission =
          responseJson.result.docs[0].Records.patientData
            .Cheif_Complaints_On_Admission;
        var Cheif_Complaints_On_Admission = Cheif_Complaints_On_Admission;
        this.setState({
          Cheif_Complaints_On_Admission: Cheif_Complaints_On_Admission
        });

        var Past_History_with_Allergy =
          responseJson.result.docs[0].Records.patientData
            .Past_History_with_Allergy;
        var Past_History_with_Allergy = Past_History_with_Allergy;
        this.setState({ Past_History_with_Allergy: Past_History_with_Allergy });

        var Personal_History =
          responseJson.result.docs[0].Records.patientData.Personal_History;
        var Personal_History = Personal_History;
        this.setState({ Personal_History: Personal_History });

        var Family_History =
          responseJson.result.docs[0].Records.patientData.Family_History;
        var Family_History = Family_History;
        this.setState({ Family_History: Family_History });

        var Menstrual_History =
          responseJson.result.docs[0].Records.patientData.Menstrual_History;
        var Menstrual_History = Menstrual_History;
        this.setState({ Menstrual_History: Menstrual_History });

        var Obstretric_History =
          responseJson.result.docs[0].Records.patientData.Obstretric_History;
        var Obstretric_History = Obstretric_History;
        this.setState({ Obstretric_History: Obstretric_History });

        var Genral_Examination =
          responseJson.result.docs[0].Records.patientData.Genral_Examination;
        var Genral_Examination = Genral_Examination;
        this.setState({ Genral_Examination: Genral_Examination });

        var Systematic_Examination =
          responseJson.result.docs[0].Records.patientData
            .Systematic_Examination;
        var Systematic_Examination = Systematic_Examination;
        this.setState({ Systematic_Examination: Systematic_Examination });

        var Investigations =
          responseJson.result.docs[0].Records.patientData.Investigations;
        var Investigations = Investigations;
        this.setState({ Investigations: Investigations });

        var BaBys_Details =
          responseJson.result.docs[0].Records.patientData.BaBys_Details;
        var BaBys_Details = BaBys_Details;
        this.setState({ BaBys_Details: BaBys_Details });

        var Course_in_Hospital_And_condition =
          responseJson.result.docs[0].Records.patientData
            .Course_in_Hospital_And_condition;
        var Course_in_Hospital_And_condition = Course_in_Hospital_And_condition;
        this.setState({
          Course_in_Hospital_And_condition: Course_in_Hospital_And_condition
        });

        var Treatment_Given =
          responseJson.result.docs[0].Records.patientData.Treatment_Given;
        var Treatment_Given = Treatment_Given;
        this.setState({ Treatment_Given: Treatment_Given });

        var Treatment_Adviced =
          responseJson.result.docs[0].Records.patientData.Treatment_Adviced;
        var Treatment_Adviced = Treatment_Adviced;
        this.setState({ Treatment_Adviced: Treatment_Adviced });

        var Follow_Up_Visit =
          responseJson.result.docs[0].Records.patientData.Follow_Up_Visit;
        var Follow_Up_Visit = Follow_Up_Visit;
        this.setState({ Follow_Up_Visit: Follow_Up_Visit });

        var Procedure_done =
          responseJson.result.docs[0].Records.patientData.Procedure_done;
        var Procedure_done = Procedure_done;
        this.setState({ Procedure_done: Procedure_done });

        var policyId = responseJson.result.docs[0].Records.patientData.policyId;
        var policyId = policyId;
        this.setState({ policyId: policyId });

        var HospitalName =
          responseJson.result.docs[0].Records.patientData.HospitalName;
        var HospitalName = HospitalName;
        this.setState({ HospitalName: HospitalName });

        var status = responseJson.result.docs[0].Records.patientData.status;
        var status = status;
        this.setState({ status: status });

        var claimAmount =
          responseJson.result.docs[0].Records.patientData.claimAmount;
        var claimAmount = claimAmount;
        this.setState({ claimAmount: claimAmount });

        var tpastatus = responseJson.result.docs[1].Records.status;
        var tpastatus = tpastatus;
        this.setState({ tpastatus: tpastatus });
        console.log("tpa status----------->", tpastatus);

        var submitID = responseJson.result.docs[2].Records.submitID;
        var submitID = submitID;
        this.setState({ submitID: submitID });

        var AmountuserHavetopay =
          responseJson.result.docs[2].Records.AmountuserHavetopay;
        var AmountuserHavetopay = AmountuserHavetopay;
        this.setState({ AmountuserHavetopay: AmountuserHavetopay });

        var AmountPayerWouldPay =
          responseJson.result.docs[2].Records.AmountPayerWouldPay;
        var AmountPayerWouldPay = AmountPayerWouldPay;
        this.setState({ AmountPayerWouldPay: AmountPayerWouldPay });

        var message = responseJson.result.docs[2].Records.message;
        var message = message;
        this.setState({ message: message });

        var statusTPA = responseJson.result.docs[2].Records.status;
        var statusTPA = statusTPA;
        this.setState({ statusTPA: statusTPA });

        var singledata = resJson1 + "\n";
        this.setState({ singledata: singledata });

        var singledata = resJson1 + "\n";
        this.setState({ singledata: singledata });
        // swal("User Details:", resJson1);
      });
  };

  //=======================================captive Insurance Get Method Start===========================
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
        var bulkdata = res.captivepolicydata;
        console.log("Create  Captive policy ", bulkdata);
        this.props.onNavigateCreatePolicyCaptivePolicy(bulkdata);
      });
  };

  onChangePost4 = () => {
    return fetch("http://localhost:8082/retrieveClaim", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },

      body: JSON.stringify({
        userId: this.state.userHistoryDetails1
      })
    })
      .then(result => result.json())
      .then(responseJson => {
        var res = responseJson.result.docs[0].Records.policyID;
        var rules = responseJson.result.docs[0].Records.policys.rules[0];

        this.setState({ rules: rules });

        var resJson1 = JSON.stringify(res);
        console.log(resJson1);
        var data = resJson1;
        var userdata = data;
        this.setState({ userdata: userdata });

        var tpastatus = responseJson.result[1].Records.status;
        var tpastatus = tpastatus;
        this.setState({ tpastatus: tpastatus });

        var submitID = responseJson.result[2].Records.submitID;
        var submitID = submitID;
        this.setState({ submitID: submitID });

        var AmountuserHavetopay =
          responseJson.result[2].Records.AmountuserHavetopay;
        var AmountuserHavetopay = AmountuserHavetopay;
        this.setState({ AmountuserHavetopay: AmountuserHavetopay });

        var AmountPayerWouldPay =
          responseJson.result[2].Records.AmountPayerWouldPay;
        var AmountPayerWouldPay = AmountPayerWouldPay;
        this.setState({ AmountPayerWouldPay: AmountPayerWouldPay });

        var message = responseJson.result[2].Records.message;
        var message = message;
        this.setState({ message: message });

        var status = responseJson.result[2].Records.status;
        var status = status;
        this.setState({ status: status });
      });
  };

  onChangeGetWFA = () => {
    console.log("akash");

    fetch("http://localhost:8082/waitingforapproval", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(result => result.json())
      .then(result => {
        var res = result.patients;
        // var result = JSON.stringify(res)
        console.log("hiiii", res);
        this.setState({ res: res });
        this.props.onNavigateCreatePolicy(res);
      });
  };

  onChangeGet5 = () => {
    fetch("http://localhost:8082/RetrieveBulkPatientRecords", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(responseJson => {
        var res = responseJson;
        var responseJson = JSON.stringify(res);
        console.log("logesh", responseJson);
        // swal("List of Records:", responseJson);

        var bulkdata = responseJson;
        this.setState({ bulkdata: bulkdata });
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
        status: this.state.status1,
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

  //ADD RULES--------------------------------------------------------->
  onChangepolicyId = value => {
    this.setState({ policyIdvalue: value });
    console.log(this.state.policyIdvalue, "policyIdvalue");
  };
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
  //==================================Radio Button function start================================
  setvalue(event) {
    this.setState({
      inputradio: event.target.value
    });
    console.log(event.target.value);
  }
  //===================================Radio Button function END=================================
  //================================== create  policy Ajax call END======================
  policyIds = () => {
    this.setState({ policyIds: true });
    // this.setState({ patientDetails: false })
    // this.setState({ treatment: false })
    // this.setState({ packageDetails: false })
    // this.setState({ claimDetails: false })
    // this.setState({ tpaApprove: false })
    // this.setState({ userId: false })
    // this.setState({ userId1: false })
    // this.setState({ bulkdata: false })
    // this.setState({ policyandrules: false })
    // this.setState({ policyandrules1: false })
    // this.setState({ aboutus: false })
  };

  handleNameChange = evt => {
    this.setState({ name: evt.target.value });
  };

  handleShareholderNameChange = idx => evt => {
    const newShareholders = this.state.shareholders.map((shareholder, sidx) => {
      if (idx !== sidx) return shareholder;
      return { ...shareholder, name: evt.target.value };
    });

    this.setState({ shareholders: newShareholders });
  };

  handleSubmit = evt => {
    const { name, shareholders } = this.state;
    alert(`Incorporated: ${name} with ${shareholders.length} shareholders`);
  };

  handleAddShareholder = () => {
    this.setState({
      shareholders: this.state.shareholders.concat([{ name: "" }])
    });
  };

  handleRemoveShareholder = idx => () => {
    this.setState({
      shareholders: this.state.shareholders.filter((s, sidx) => idx !== sidx)
    });
  };

  //----------------------------------------------

  onChangeGetWFA = () => {
    console.log("akash");

    fetch("http://localhost:8082/waitingforapproval", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(result => result.json())
      .then(result => {
        var res = result.patients;
        // var result = JSON.stringify(res)
        console.log("hiiii", res);
        this.props.onNavigateCreatePolicyWFTPA(res);
      });
  };
  onChangeAutoapproval = () => {
    console.log("akash");

    fetch("http://localhost:8082/StatusSettlement", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(result => result.json())
      .then(result => {
        console.log("Bulk Data =======>", result);
        var res = result.patients;
        this.props.onNavigateAutoApprovalstatus(res);
      });
  };

  onChangeNotify = () => {
    console.log("notification");

    fetch("http://localhost:8082/Notification", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(result => result.json())
      .then(result => {
        console.log("notify data =======>", result);
        var res = result.patients;
        this.props.onNavigateNotify(res);
      });
  };

  onChangeGetRBPR = () => {
    console.log("Going to Retrievebulk records");

    fetch("http://localhost:8082/RetrieveBulkPatientRecords", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(responseJson => {
        var res = responseJson;
        console.log("Result policy RBR", res);
        var bulkdata = res.message;
        console.log("Create policy RBR", bulkdata);
        this.props.onNavigateCreatePolicyRBD(bulkdata);
      });
  };

  componentDidMount() {}

  //------------------------Manual Approve------------------------------//

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

  //-------------------------------Policy creation------------------------------//
  onChangepolicyId = value => {
    this.setState({ policyId1: value });
    console.log(this.state.policyId1, "policyId1");
  };
  onChangerules = value => {
    this.setState({ rules: value });
    console.log(this.state.rules, "rules");
  };
  onChangevalidatepolicyid = value => {
    this.setState({ policyId: value });
    console.log(this.state.policyId, "policyId");
  };
  onChangeclaimamount = value => {
    this.setState({ claimamount: value });
    console.log(this.state.claimamount, "claimamount");
  };
  onChangemaxclaim = value => {
    this.setState({ maxclaim: value });
    console.log(this.state.maxclaim, "maxclaim");
  };

  ////SUBMIT CLAIM////

  onChangeNAME = value => {
    console.log(value);
    this.setState({ NAME: value });
    console.log(this.state.NAME, "NAME");
  };

  onChangeage = value => {
    this.setState({ AGE: value });
    console.log(this.state.AGE, "AGE");
  };
  onChangeDOA = value => {
    this.setState({ DOA: value });
    console.log(this.state.DOA, "DOA");
  };
  onChangeREF_DOC = value => {
    this.setState({ REF_DOC: value });
    console.log(this.state.REF_DOC, "REF DOC");
  };
  onChangeIPD_No = value => {
    this.setState({ IPD_No: value });
    console.log(this.state.IPD_No, "IPD_No");
  };
  onChangeMLC = value => {
    this.setState({ MLC: value });
    console.log(this.state.MLC, "MLC");
  };
  onChangeSEX = value => {
    this.setState({ SEX: value });
    console.log(this.state.SEX, "SEX");
  };
  // onChangedoj = (value) => {
  //     this.setState({ doj: value });
  //     console.log(this.state.doj, "doj");
  // }
  onChangeDOD = value => {
    this.setState({ DOD: value });
    console.log(this.state.DOD, "DOD");
  };
  //----------------------------------------------------
  //Treatment-------------------------------------------
  onChangeDAIGONIS = value => {
    this.setState({ DAIGONIS: value });
    console.log(this.state.DAIGONIS, "DAIGONIS");
  };

  onChangeCheif_Complaints_On_Admission = value => {
    this.setState({ Cheif_Complaints_On_Admission: value });
    console.log(
      this.state.Cheif_Complaints_On_Admission,
      "Cheif_Complaints_On_Admission"
    );
  };

  onChangePast_History_with_Allergy = value => {
    this.setState({ Past_History_with_Allergy: value });
    console.log(
      this.state.Past_History_with_Allergy,
      "Past_History_with_Allergy"
    );
  };
  onChangedPersonal_History = value => {
    this.setState({ Personal_History: value });
    console.log(this.state.Personal_History, "Personal_History");
  };

  onChangeFamily_History = value => {
    this.setState({ Family_History: value });
    console.log(this.state.Family_History, "Family_History");
  };

  onChangeMenstrual_History = value => {
    this.setState({ Menstrual_History: value });
    console.log(this.state.Menstrual_History, "Menstrual_History");
  };
  onChangeObstretric_History = value => {
    this.setState({ Obstretric_History: value });
    console.log(this.state.Obstretric_History, "Obstretric_History");
  };
  onChangeGenral_Examination = value => {
    this.setState({ Genral_Examination: value });
    console.log(this.state.Genral_Examination, "Genral_Examination");
  };
  onChangeSystematic_Examination = value => {
    this.setState({ Systematic_Examination: value });
    console.log(this.state.Systematic_Examination, "Systematic_Examination");
  };
  //----------------------------------------------------------------------------
  //package---------------------------------------------------------------------
  onChangeInvestigations = value => {
    this.setState({ Investigations: value });
    console.log(this.state.Investigations, "Investigations");
  };
  onChangeBaBys_Details = value => {
    this.setState({ BaBys_Details: value });
    console.log(this.state.BaBys_Details, "BaBys_Details");
  };
  onChangeCourse_in_Hospital_And_condition = value => {
    this.setState({ Course_in_Hospital_And_condition: value });
    console.log(
      this.state.Course_in_Hospital_And_condition,
      "Course_in_Hospital_And_condition"
    );
  };
  onChangeTreatment_Given = value => {
    this.setState({ Treatment_Given: value });
    console.log(this.state.Treatment_Given, "Treatment_Given");
  };
  onChangeTreatment_Adviced = value => {
    this.setState({ Treatment_Adviced: value });
    console.log(this.state.Treatment_Adviced, "Treatment_Adviced");
  };
  onChangeFollow_Up_Visit = value => {
    this.setState({ Follow_Up_Visit: value });
    console.log(this.state.Follow_Up_Visit, "Follow_Up_Visit");
  };
  onChangeProcedure_done = value => {
    this.setState({ Procedure_done: value });
    console.log(this.state.Procedure_done, "Procedure_done");
  };
  //-----------------------------------------------------------------------------------
  onChangeclaimAmount = value => {
    this.setState({ claimAmount: value });
    console.log(this.state.claimAmount, "claimAmount");
  };
  onChangestatus = value => {
    this.setState({ status1: value });
    console.log(this.state.status1, "status1");
  };
  onChangeHospitalName = value => {
    this.setState({ HospitalName: value });
    console.log(this.state.HospitalName, "HospitalName");
  };
  onChangepolicyId1 = value => {
    this.setState({ policyId: value });
    console.log(this.state.policyId, "policyId");
  };

  //USER HISTORY ------------------------------------------------------------------------------------>

  onChangeuserId = value => {
    this.setState({ userHistoryDetails: value });
    console.log(this.state.userHistoryDetails, "policyId");

    console.log("userId");
    console.log(this.state.userHistoryDetails, "userId");
  };
  onChangeuserId1 = value => {
    this.setState({ userHistoryDetails1: value });

    console.log("userId");
    console.log(this.state.userHistoryDetails1, "userId");
  };

  policyIds = () => {
    this.setState({ policyIds: true });
    this.setState({ patientDetails: false });
    this.setState({ treatment: false });
    this.setState({ packageDetails: false });
    this.setState({ claimDetails: false });
    this.setState({ tpaApprove: false });
    this.setState({ userId: false });
    this.setState({ userId1: false });
    this.setState({ bulkdata: false });
    this.setState({ policyandrules: false });
    this.setState({ policyandrules1: false });
    this.setState({ aboutus: false });
  };
  patientDetails = () => {
    this.setState({ policyIds: false });
    this.setState({ patientDetails: true });
    this.setState({ treatment: false });
    this.setState({ packageDetails: false });
    this.setState({ claimDetails: false });
    this.setState({ tpaApprove: false });
    this.setState({ userId: false });
    this.setState({ userId1: false });
    this.setState({ bulkdata: false });
    this.setState({ policyandrules: false });
    this.setState({ policyandrules1: false });
    this.setState({ aboutus: false });
  };
  treatment = () => {
    this.setState({ policyIds: false });
    this.setState({ patientDetails: false });
    this.setState({ treatment: true });
    this.setState({ packageDetails: false });
    this.setState({ claimDetails: false });
    this.setState({ tpaApprove: false });
    this.setState({ userId: false });
    this.setState({ userId1: false });
    this.setState({ bulkdata: false });
    this.setState({ policyandrules: false });
    this.setState({ policyandrules1: false });
    this.setState({ aboutus: false });
  };
  packageDetails = () => {
    this.setState({ policyIds: false });
    this.setState({ patientDetails: false });
    this.setState({ treatment: false });
    this.setState({ packageDetails: true });
    this.setState({ claimDetails: false });
    this.setState({ tpaApprove: false });
    this.setState({ userId: false });
    this.setState({ userId1: false });
    this.setState({ bulkdata: false });
    this.setState({ policyandrules: false });
    this.setState({ policyandrules1: false });
    this.setState({ aboutus: false });
  };
  claimDetails = () => {
    this.setState({ policyIds: false });
    this.setState({ patientDetails: false });
    this.setState({ treatment: false });
    this.setState({ packageDetails: false });
    this.setState({ claimDetails: true });
    this.setState({ tpaApprove: false });
    this.setState({ userId: false });
    this.setState({ userId1: false });
    this.setState({ bulkdata: false });
    this.setState({ policyandrules: false });
    this.setState({ policyandrules1: false });
    this.setState({ aboutus: false });
  };
  tpaApprove = () => {
    this.setState({ policyIds: false });
    this.setState({ patientDetails: false });
    this.setState({ treatment: false });
    this.setState({ packageDetails: false });
    this.setState({ claimDetails: false });
    this.setState({ tpaApprove: true });
    this.setState({ userId: false });
    this.setState({ userId1: false });
    this.setState({ bulkdata: false });
    this.setState({ policyandrules: false });
    this.setState({ policyandrules1: false });
    this.setState({ aboutus: false });
  };
  userId = () => {
    this.setState({ policyIds: false });
    this.setState({ patientDetails: false });
    this.setState({ treatment: false });
    this.setState({ packageDetails: false });
    this.setState({ claimDetails: false });
    this.setState({ tpaApprove: false });
    this.setState({ userId: true });
    this.setState({ userId1: false });
    this.setState({ bulkdata: false });
    this.setState({ policyandrules: false });
    this.setState({ policyandrules1: false });
    this.setState({ aboutus: false });
  };
  userId1 = () => {
    this.setState({ policyIds: false });
    this.setState({ patientDetails: false });
    this.setState({ treatment: false });
    this.setState({ packageDetails: false });
    this.setState({ claimDetails: false });
    this.setState({ tpaApprove: false });
    this.setState({ userId: false });
    this.setState({ userId1: true });
    this.setState({ bulkdata: false });
    this.setState({ policyandrules: false });
    this.setState({ policyandrules1: false });
    this.setState({ aboutus: false });
  };
  bulkdata = () => {
    this.setState({ policyIds: false });
    this.setState({ patientDetails: false });
    this.setState({ treatment: false });
    this.setState({ packageDetails: false });
    this.setState({ claimDetails: false });
    this.setState({ tpaApprove: false });
    this.setState({ userId: false });
    this.setState({ userId1: false });
    this.setState({ bulkdata: true });
    this.setState({ policyandrules: false });
    this.setState({ policyandrules1: false });
    this.setState({ aboutus: false });
  };
  policyandrules = () => {
    this.setState({ policyIds: false });
    this.setState({ patientDetails: false });
    this.setState({ treatment: false });
    this.setState({ packageDetails: false });
    this.setState({ claimDetails: false });
    this.setState({ tpaApprove: false });
    this.setState({ userId: false });
    this.setState({ userId1: true });
    this.setState({ bulkdata: false });
    this.setState({ policyandrules: true });
    this.setState({ policyandrules1: false });
    this.setState({ aboutus: false });
  };
  policyandrules1 = () => {
    this.setState({ policyIds: false });
    this.setState({ patientDetails: false });
    this.setState({ treatment: false });
    this.setState({ packageDetails: false });
    this.setState({ claimDetails: false });
    this.setState({ tpaApprove: false });
    this.setState({ userId: true });
    this.setState({ userId1: false });
    this.setState({ bulkdata: false });
    this.setState({ policyandrules: false });
    this.setState({ policyandrules1: true });
    this.setState({ aboutus: false });
  };
  updatedReport = () => {
    this.setState({ updatedReport: true });
  };
  aboutus = () => {
    this.setState({ policyIds: false });
    this.setState({ patientDetails: false });
    this.setState({ treatment: false });
    this.setState({ packageDetails: false });
    this.setState({ claimDetails: false });
    this.setState({ tpaApprove: false });
    this.setState({ userId: false });
    this.setState({ userId1: false });
    this.setState({ bulkdata: false });
    this.setState({ policyandrules: false });
    this.setState({ policyandrules1: false });
    this.setState({ aboutus: true });
  };

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
          <RX.Text style={styles.navwelcome1}>
            <b> {this.state.registeredname}</b>
          </RX.Text>
          <RX.Button
            style={styles.navwelcome2}
            onPress={this.props.onNavigateCreatePolicylogout}
          >
            <b>Logout</b>
          </RX.Button>
        </RX.View>

        <RX.View>
          <div class="container">
            <div class="row">
              {/* <div id="sidebar-wrapper" class="sidebar-toggle" >
			<ul class="sidebar-nav">
		    	<li>
		      		<a href="#item1">Item 1</a>
		    	</li>
		    	<li>
		      		<a href="#item2">Item 2</a>
		    	</li>
		    	<li>
		      		<a href="#item3">Item 3</a>
		    	</li>
		  	</ul>
		</div> */}
              <div class="container" style={styles.sidenavbar}>
                <ul class="nav nav-list accordion">
                  <li
                    class="fa fa-lg fa-globe"
                    onClick={() => this.policyIds()}
                  >
                    <a
                      style={{
                        color: "white",
                        font: "ProximaNova-Regular",
                        fontSize: 14
                      }}
                    >
                      <b>Create Policy</b>
                      <span class="sr-only">(current)</span>
                    </a>
                  </li>
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
                  <li onClick={() => this.onChangeNotify()}>
                    <a
                      style={{
                        color: "white",
                        font: "ProximaNova-Regular",
                        fontSize: 14
                      }}
                    >
                      <b>Notifications</b>
                      <span class="sr-only">(current)</span>
                    </a>
                  </li>
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
                  <li onClick={() => this.userId()}>
                    <a
                      style={{
                        color: "white",
                        font: "ProximaNova-Regular",
                        fontSize: 14
                      }}
                    >
                      <b>Claim History </b>
                      <span class="sr-only">(current)</span>
                    </a>
                  </li>
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
                  <li>
                    <a
                      style={{
                        color: "white",
                        font: "ProximaNova-Regular",
                        fontSize: 14
                      }}
                    >
                      <b>Dashboard </b>
                      <span class="sr-only">(current)</span>
                    </a>
                    <ul style={{ color: "white" }} class="second-level-menu">
                      <li onClick={() => this.onChangeGetRBPR()}>
                        <a
                          style={{
                            color: "white",
                            font: "ProximaNova-Regular"
                          }}
                          href="#"
                        >
                          <b>All</b>
                        </a>
                      </li>
                      <li onClick={() => this.onChangeAutoapproval()}>
                        <a
                          style={{
                            color: "white",
                            font: "ProximaNova-Regular"
                          }}
                          href="#"
                        >
                          <b>Approved History</b>
                        </a>
                      </li>
                      <li onClick={() => this.onChangeGetWFA()}>
                        <a
                          style={{
                            color: "white",
                            font: "ProximaNova-Regular"
                          }}
                          href="#"
                        >
                          <b>TPA History</b>
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li onClick={() => this.aboutus()}>
                    <a
                      style={{
                        color: "white",
                        font: "ProximaNova-Regular",
                        fontSize: 14
                      }}
                    >
                      <b>About Us</b>
                    </a>
                  </li>
                </ul>
              </div>

              <div
                class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main"
                style={styles.dashboard}
              >
                <br />
                <div class="container" style={styles.divContainer}>
                  {this.state.policyIds ? (
                    <div
                      class="col-xs-6 col-sm-3 placeholder"
                      style={styles.allStyle}
                    >
                      <div
                        class="container"
                        style={styles.divContainer}
                        style={styles.policyIddiv}
                      >
                        <div
                          style={{
                            backgroundColor: "rgba(236, 240, 241, 0)",
                            height: 345,
                            width: 987
                          }}
                        >
                          <div>
                            <div style={{ marginTop: 30 }}>
                              {/* <label for="lgFormGroupInput" style={styles.policyId} style={{ fontFamily: "ProximaNova-Regular", fontSize: 14, color: "#282828" }} styles={{ marginLeft: 115 }} class="col-sm-2 col-form-label col-form-label-lg">Policy ID:</label>

                    <RX.TextInput type="email" style={styles.policyIdTextBox} value={this.state.policyIdvalue} onChangeText={this.onChangepolicyId} id="lgFormGroupInput" placeholder="" /> */}
                            </div>
                            <br />
                            <div>
                              <label
                                for="lgFormGroupInput"
                                style={styles.policyId}
                                style={{
                                  fontFamily: "ProximaNova-Regular",
                                  fontSize: 14,
                                  color: "#282828"
                                }}
                                styles={{ marginLeft: 115 }}
                                class="col-sm-2 col-form-label col-form-label-lg"
                              >
                                Policy Name:
                              </label>
                              <RX.TextInput
                                type="email"
                                style={styles.policyIdTextBox}
                                value={this.state.policyName}
                                onChangeText={this.onChangepolicyName}
                                id="lgFormGroupInput"
                                placeholder=""
                              />
                            </div>
                            <br />

                            <div>
                              <label
                                for="lgFormGroupInput"
                                style={styles.policyId}
                                style={{
                                  fontFamily: "ProximaNova-Regular",
                                  fontSize: 14,
                                  color: "#282828",
                                  marginLeft: -1
                                }}
                                styles={{ marginLeft: -165 }}
                                class="col-sm-2 col-form-label col-form-label-lg"
                              >
                                Policy Category:
                              </label>
                              <RX.Picker
                                style={styles.pickercatagory}
                                items={pickerItems}
                                selectedValue={this.state.policycatagory}
                                onValueChange={this.onChangepolicycatagory}
                              />
                            </div>
                            <br />
                            <div>
                              <label
                                for="lgFormGroupInput"
                                style={styles.policyId}
                                style={{
                                  fontFamily: "ProximaNova-Regular",
                                  fontSize: 14,
                                  color: "#282828"
                                }}
                                class="col-sm-2 col-form-label col-form-label-lg"
                              >
                                Payment Rule:
                              </label>

                              <RX.TextInput
                                type="email"
                                value={this.state.rules}
                                value={this.state.expression}
                                style={styles.rulestextbox}
                                onChangeText={this.onChangerules}
                                id="lgFormGroupInput"
                                placeholder=""
                              />
                            </div>
                            <br />
                            <div>
                              <label
                                for="lgFormGroupInput"
                                style={styles.policyId}
                                style={{
                                  fontFamily: "ProximaNova-Regular",
                                  fontSize: 14,
                                  color: "#282828"
                                }}
                                styles={{ marginLeft: 115 }}
                                class="col-sm-2 col-form-label col-form-label-lg"
                              >
                                Premium Percentage:
                              </label>
                              <RX.TextInput
                                type="email"
                                style={styles.policyIdTextBox}
                                id="lgFormGroupInput"
                                value={this.state.policypercentage}
                                onChangeText={this.onChangepolicypercentage}
                                placeholder=""
                              />
                            </div>
                            <br />
                            <div>
                              <label
                                for="lgFormGroupInput"
                                style={styles.policyId}
                                style={{
                                  fontFamily: "ProximaNova-Regular",
                                  fontSize: 14,
                                  color: "#282828",
                                  marginLeft: -1
                                }}
                                styles={{ marginLeft: -165 }}
                                class="col-sm-2 col-form-label col-form-label-lg"
                              >
                                Collateral:
                              </label>
                              <form>
                                <div onChange={this.setvalue.bind(this)}>
                                  <input
                                    type="radio"
                                    value="Reinsured"
                                    name=""
                                  />{" "}
                                  Reinsured
                                  <br />
                                  <input type="radio" value="LOC" name="" /> LOC
                                  <br />
                                  <input
                                    type="radio"
                                    style={{ marginLeft: 165 }}
                                    value="Capital"
                                    name=""
                                  />{" "}
                                  Capital
                                </div>
                              </form>
                            </div>
                            {/* <form onSubmit={this.handleSubmit}>


<div> */}
                            {/* {this.state.shareholders.map((shareholder, idx) => ( */}
                            {/* <div className="shareholder">
                        <label for="lgFormGroupInput" style={{ fontFamily: "ProximaNova-Regular", fontSize: 18, color: "#282828" }} class="col-sm-2 col-form-label col-form-label-lg">Rules:</label>
                        <RX.TextInput type="email" value={this.state.rules} value={this.state.expression} style={styles.rulestextbox} onChangeText={this.onChangerules} id="lgFormGroupInput" placeholder="" />
                        

                    </div> */}

                            {/* ))} */}

                            {/* </div>
</form> */}
                            <br />

                            <div
                              class="well well-sm well-primary"
                              style={styles.useit}
                            >
                              <h4>
                                <b>Use these values only</b>
                              </h4>
                              <li>ClaimAmount</li>
                              <li>TotalClaim</li>
                              <li>AmountPaid</li>
                              <li>Suminsured</li>
                              <li>ValidateAmount</li>
                              <div
                                class="well well-sm well-primary"
                                style={styles.opeartorspanel}
                              >
                                <h4>
                                  <b>Use these Operators only</b>
                                </h4>
                                <div class="row">
                                  <div
                                    class="col-xs-1 bold"
                                    style={{ color: "black" }}
                                  >
                                    ?
                                  </div>
                                  <div
                                    class="col-xs-1"
                                    style={{ color: "black" }}
                                  >
                                    =
                                  </div>
                                  <div
                                    class="col-xs-1 bold"
                                    style={{ color: "black" }}
                                  >
                                    !
                                  </div>
                                  <div
                                    class="col-xs-1"
                                    style={{ color: "black" }}
                                  >
                                    {"<"}
                                  </div>
                                  <div
                                    class="col-xs-1"
                                    style={{ color: "black" }}
                                  >
                                    {">"}
                                  </div>
                                  <div
                                    class="col-xs-1"
                                    style={{ color: "black" }}
                                  >
                                    {"{"}
                                  </div>
                                  <div
                                    class="col-xs-1"
                                    style={{ color: "black" }}
                                  >
                                    {"}"}
                                  </div>
                                  <div
                                    class="col-xs-1"
                                    style={{ color: "black" }}
                                  >
                                    {"+"}
                                  </div>
                                  <div
                                    class="col-xs-1"
                                    style={{ color: "black" }}
                                  >
                                    {"-"}
                                  </div>
                                  <div
                                    class="col-xs-1"
                                    style={{ color: "black" }}
                                  >
                                    {"*"}
                                  </div>
                                  <div
                                    class="col-xs-1"
                                    style={{ color: "black" }}
                                  >
                                    {"/"}
                                  </div>
                                  <div
                                    class="col-xs-1"
                                    style={{ color: "black" }}
                                  >
                                    \
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div style={styles.rulesdiv}>
                              <br />

                              <br />
                              <RX.Button
                                style={[styles.submitbutton]}
                                onPress={() => this.onChangePost()}
                              >
                                <RX.Text
                                  style={[styles.button1Text]}
                                  style={{ color: "white" }}
                                >
                                  {"Validate & Submit"}
                                </RX.Text>
                              </RX.Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : null}

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
                                value={this.state.NAME}
                                onChangeText={this.onChangeNAME}
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
                                value={this.state.IPD_No}
                                onChangeText={this.onChangeIPD_No}
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
                                type="inputPassword4"
                                style={styles.Form}
                                placeholder=""
                                value={this.state.DOA}
                                onChangeText={this.onChangeDOA}
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
                                placeholder=""
                                value={this.state.DOD}
                                onChangeText={this.onChangeDOD}
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
                                selectedValue={this.state.SEX}
                                onValueChange={this.onChangeSEX}
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
                                value={this.state.REF_DOC}
                                onChangeText={this.onChangeREF_DOC}
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
                                Policy Id
                              </label>

                              <RX.TextInput
                                style={styles.Form}
                                placeholder=""
                                value={this.state.policyId}
                                onChangeText={this.onChangepolicyId1}
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

                  {this.state.treatment ? (
                    <div>
                      <h2
                        className="text-center font-weight-bold pt-4 pb-5"
                        style={{ marginLeft: -356, marginTop: -288 }}
                      >
                        <strong>Discharge Summary</strong>
                      </h2>

                      <div class="jumbotron" style={styles.patientDetailsT}>
                        <form>
                          <div>
                            <h3
                              className="text-center font-weight-bold pt-4 pb-5"
                              style={{
                                marginTop: -16,
                                marginLeft: -348,
                                fontSize: 18
                              }}
                            >
                              <strong>TREATMENT</strong>
                            </h3>
                          </div>
                        </form>
                        <form>
                          <div>
                            <div>
                              <label for="" style={styles.siDeTextT}>
                                Diagnosis
                              </label>

                              <RX.TextInput
                                style={styles.Form2}
                                placeholder=" "
                                value={this.state.DAIGONIS}
                                onChangeText={this.onChangeDAIGONIS}
                              />
                            </div>
                            <div>
                              <label for="" style={styles.siDeTextT}>
                                Cheif Complaints On Admission :
                              </label>
                              <RX.TextInput
                                style={styles.Form2}
                                placeholder=""
                                value={this.state.Cheif_Complaints_On_Admission}
                                onChangeText={
                                  this.onChangeCheif_Complaints_On_Admission
                                }
                              />
                            </div>
                            <div>
                              <label for="" style={styles.siDeTextT}>
                                Past History with Allergy:
                              </label>

                              <RX.TextInput
                                style={styles.Form2}
                                placeholder=" "
                                value={this.state.Past_History_with_Allergy}
                                onChangeText={
                                  this.onChangePast_History_with_Allergy
                                }
                              />
                            </div>

                            <div>
                              <label
                                for="inputPassword4"
                                style={styles.siDeTextT}
                              >
                                Personal History
                              </label>

                              <RX.TextInput
                                style={styles.Form2}
                                placeholder=""
                                value={this.state.Personal_History}
                                onChangeText={this.onChangedPersonal_History}
                              />
                            </div>

                            <div>
                              <label for="" style={styles.siDeTextT}>
                                Family History
                              </label>

                              <RX.TextInput
                                style={styles.Form2}
                                placeholder=""
                                value={this.state.Family_History}
                                onChangeText={this.onChangeFamily_History}
                              />
                            </div>
                          </div>

                          <div>
                            <label for="" style={styles.siDeTextT}>
                              Menstrual History
                            </label>

                            <RX.TextInput
                              style={styles.Form2}
                              placeholder=""
                              value={this.state.Menstrual_History}
                              onChangeText={this.onChangeMenstrual_History}
                            />
                          </div>
                          <div>
                            <label for="" style={styles.siDeTextT}>
                              Obstretric History
                            </label>

                            <RX.TextInput
                              style={styles.Form2}
                              placeholder=""
                              value={this.state.Obstretric_History}
                              onChangeText={this.onChangeObstretric_History}
                            />
                          </div>
                          <div>
                            <label for="" style={styles.siDeTextT}>
                              General Examination
                            </label>

                            <RX.TextInput
                              style={styles.Form2}
                              placeholder=""
                              value={this.state.Genral_Examination}
                              onChangeText={this.onChangeGenral_Examination}
                            />
                          </div>
                          <div>
                            <label for="" style={styles.siDeTextT}>
                              Systematic Examination
                            </label>

                            <RX.TextInput
                              style={styles.Form2}
                              placeholder=""
                              value={this.state.Systematic_Examination}
                              onChangeText={this.onChangeSystematic_Examination}
                            />
                          </div>
                        </form>

                        <RX.Button
                          style={styles.treatmentnxtbut}
                          onPress={() => this.packageDetails()}
                        >
                          {"Next"}
                        </RX.Button>
                        <RX.Button
                          style={styles.previouspage}
                          onPress={() => this.patientDetails()}
                        >
                          {"Previous"}
                        </RX.Button>
                      </div>
                    </div>
                  ) : null}

                  {this.state.packageDetails ? (
                    <div>
                      <h2
                        className="text-center font-weight-bold pt-4 pb-5"
                        style={{ marginLeft: -384, marginTop: -287 }}
                      >
                        <strong>Discharge Summary</strong>
                      </h2>
                      <div class="jumbotron" style={styles.patientDetailsPD}>
                        <form>
                          <div class="form-row">
                            <h3
                              className="text-center font-weight-bold pt-4 pb-5"
                              style={{
                                marginTop: -11,
                                marginLeft: -316,
                                fontSize: 18,
                                color: "#1f305d"
                              }}
                            >
                              <strong>PACKAGE DETAILS</strong>
                            </h3>
                          </div>
                          <div>
                            <div>
                              <label for="" style={styles.siDeTextPD}>
                                Investigations
                              </label>

                              <RX.TextInput
                                style={styles.FormPD}
                                placeholder=""
                                value={this.state.Investigations}
                                onChangeText={this.onChangeInvestigations}
                              />
                            </div>

                            {/* <div>
                                                            <label for="" style={styles.siDeTextPD}>Baby's Details</label>
                                                            <RX.TextInput
                                                                style={styles.FormPD}
                                                                placeholder=" "
                                                                value={this.state.BaBys_Details}
                                                                onChangeText={this.onChangeBaBys_Details}

                                                            />

                                                        </div> */}
                            <div>
                              <label
                                for="inputPassword4"
                                style={styles.siDeTextPD}
                              >
                                Course in Hospital And condition{" "}
                              </label>

                              <RX.TextInput
                                style={styles.FormPD}
                                placeholder=""
                                value={
                                  this.state.Course_in_Hospital_And_condition
                                }
                                onChangeText={
                                  this.onChangeCourse_in_Hospital_And_condition
                                }
                              />
                            </div>
                          </div>

                          <form>
                            <div>
                              <div>
                                <label
                                  for="inputPassword4"
                                  style={styles.siDeTextPD}
                                >
                                  Treatment Given
                                </label>

                                <RX.TextInput
                                  style={styles.FormPD}
                                  placeholder=""
                                  value={this.state.Treatment_Given}
                                  onChangeText={this.onChangeTreatment_Given}
                                />
                              </div>

                              <div>
                                <label
                                  for="inputPassword4"
                                  style={styles.siDeTextPD}
                                >
                                  Treatment Adviced
                                </label>

                                <RX.TextInput
                                  style={styles.FormPD}
                                  placeholder=""
                                  value={this.state.Treatment_Adviced}
                                  onChangeText={this.onChangeTreatment_Adviced}
                                />
                              </div>
                            </div>
                          </form>

                          <div>
                            <label
                              for="inputPassword4"
                              style={styles.siDeTextPD}
                            >
                              Follow Up Visit
                            </label>

                            <RX.TextInput
                              style={styles.FormPD}
                              placeholder=""
                              value={this.state.Follow_Up_Visit}
                              onChangeText={this.onChangeFollow_Up_Visit}
                            />
                          </div>
                          <div>
                            <label
                              for="inputPassword4"
                              style={styles.siDeTextPD}
                            >
                              Procedure done
                            </label>

                            <RX.TextInput
                              style={styles.FormPD}
                              placeholder=""
                              value={this.state.Procedure_done}
                              onChangeText={this.onChangeProcedure_done}
                            />
                          </div>
                        </form>

                        <RX.Button
                          style={styles.treatmentnxtbut}
                          onPress={() => this.claimDetails()}
                        >
                          {"Next"}
                        </RX.Button>
                        <RX.Button
                          style={styles.previouspage}
                          onPress={() => this.treatment()}
                        >
                          {"Previous"}
                        </RX.Button>
                      </div>
                    </div>
                  ) : null}

                  {this.state.claimDetails ? (
                    <div>
                      <h2
                        className="text-center font-weight-bold pt-4 pb-5"
                        style={{ marginLeft: -408, marginTop: -293 }}
                      >
                        <strong>Discharge Summary</strong>
                      </h2>
                      <div class="jumbotron" style={styles.patientDetailsCD}>
                        <div class="form-row">
                          <h3
                            className="text-center font-weight-bold pt-4 pb-5"
                            style={{
                              marginTop: -11,
                              marginLeft: -316,
                              fontSize: 18,
                              color: "#1f305d"
                            }}
                          >
                            <strong>CLAIM DETAILS</strong>
                          </h3>
                        </div>
                        <label for="inputPassword4" style={styles.siDeTextCD}>
                          Claim Amount
                        </label>

                        <RX.TextInput
                          style={styles.FormCD}
                          placeholder=""
                          value={this.state.claimAmount}
                          onChangeText={this.onChangeclaimAmount}
                        />

                        <label for="inputPassword4" style={styles.siDeTextCD}>
                          Status
                        </label>

                        {/* <RX.TextInput
                                                    style={styles.FormCD}
                                                    placeholder=""
                                                    value={this.state.status}
                                                    onChangeText={this.onChangestatus1}

                                                /> */}
                        <RX.Picker
                          style={{ marginLeft: 39, width: 157, height: 25 }}
                          items={pickerItems1}
                          selectedValue={this.state.status}
                          onValueChange={this.onChangestatus1}
                        />
                        <br />
                        <label for="inputPassword4" style={styles.siDeTextCD}>
                          Hospital Name
                        </label>

                        <RX.TextInput
                          style={styles.FormCD}
                          placeholder=""
                          value={this.state.HospitalName}
                          onChangeText={this.onChangeHospitalName}
                        />
                      </div>

                      {/* <RX.Button style={styles.nxtbut}   onPress={this.props.onNavigatePatientdetails }>
                           {'Next'}

                       </RX.Button> */}
                      {/* <RX.Button style={styles.claimnext} onPress={() => this.claimDetails()} >
                                                {'Home'}

                                            </RX.Button> */}
                      <RX.Button
                        style={styles.previouspageCD}
                        onPress={() => this.packageDetails()}
                      >
                        {"Previous"}
                      </RX.Button>
                    </div>
                  ) : null}

                  <RX.View>
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
                                onValueChange={this.onChangestatus}
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
                  </RX.View>

                  {this.state.userId ? (
                    <div class="col-xs-6 col-sm-3 placeholder">
                      <div
                        class="container"
                        style={{ marginTop: 20, marginLeft: 198 }}
                      >
                        <RX.Button
                          style={styles.button1}
                          onPress={() => (
                            this.onChangePost3(), this.policyandrules1()
                          )}
                          refs="id"
                        >
                          {"Submit"}
                        </RX.Button>

                        <label
                          for="lgFormGroupInput"
                          style={styles.sideText}
                          style={{ fontSize: 14, color: "#494949" }}
                          class="col-sm-2 col-form-label col-form-label-lg"
                        >
                          Enter User Identification Number:
                        </label>
                        <div class="col-sm-10">
                          <RX.TextInput
                            style={styles.InputSelectorCopy}
                            placeholder=""
                            value={this.state.userHistoryDetails}
                            onChangeText={this.onChangeuserId}
                          />
                        </div>
                      </div>
                      <div />
                    </div>
                  ) : null}

                  {this.state.userId1 ? (
                    <div class="col-xs-6 col-sm-3 placeholder">
                      <div
                        class="container"
                        style={{ marginTop: 20, marginLeft: 198 }}
                      >
                        <RX.Button
                          style={styles.button1}
                          onPress={() => (
                            this.onChangePost4(), this.policyandrules()
                          )}
                          refs="id"
                        >
                          {"Submit"}
                        </RX.Button>

                        <label
                          for="lgFormGroupInput"
                          style={styles.sideText}
                          style={{ fontSize: 14, color: "#494949" }}
                          class="col-sm-2 col-form-label col-form-label-lg"
                        >
                          Enter PolicyID Number:
                        </label>
                        <div class="col-sm-10">
                          <RX.TextInput
                            style={styles.InputSelectorCopy}
                            placeholder=""
                            value={this.state.userHistoryDetails1}
                            onChangeText={this.onChangeuserId1}
                          />
                          <div />
                        </div>
                      </div>
                      <br />
                      <br />
                    </div>
                  ) : null}

                  {this.state.bulkdata ? (
                    <div class="col-xs-6 col-sm-3 placeholder">
                      <div class="container" style={{ marginTop: 104 }}>
                        <h2
                          style={{
                            marginTop: -97,
                            marginLeft: 336,
                            color: "rgb(73, 73, 73)"
                          }}
                        >
                          {" "}
                          Claim reports of all Users
                        </h2>
                        <br /> <br />
                        <div>
                          <RX.Button
                            style={styles.bulkbutton}
                            onPress={() => this.onChangeGetRBPR()}
                          >
                            <b style={{ marginTop: 32, marginLeft: 113 }}>
                              <br />
                              APPROVED{" "}
                            </b>
                            <br />
                            <br /> <span class="sr-only">(current)</span>
                          </RX.Button>
                        </div>
                        <br />
                        <div>
                          <RX.Button
                            style={styles.bulkbutton2}
                            onPress={() => this.onChangeAutoapproval()}
                          >
                            <b style={{ marginTop: 32, marginLeft: 91 }}>
                              {" "}
                              AUTO APPROVED
                              <br />{" "}
                            </b>
                            <br />
                            <br /> <span class="sr-only">(current)</span>
                          </RX.Button>
                        </div>
                        <br />
                        <div>
                          <RX.Button
                            style={styles.bulkbutton3}
                            onPress={() => this.onChangeGetWFA()}
                          >
                            <b style={{ marginTop: 32, marginLeft: 101 }}>
                              {" "}
                              <br /> TPA APPROVED{" "}
                            </b>
                            <br />
                            <br /> <span class="sr-only">(current)</span>
                          </RX.Button>
                        </div>
                      </div>
                    </div>
                  ) : null}

                  {this.state.policyandrules ? (
                    <div class="container" style={styles.divpolicyrules}>
                      <div style={styles.policyheading}>
                        <h3>
                          <b>
                            <u>User Policy Details:</u>
                          </b>
                        </h3>
                      </div>
                      <div style={styles.policyrules}>
                        <ul class="list-group text-center">
                          <li class="list-group-item">
                            <h4>
                              <b>PolicyID:</b>
                            </h4>
                            {this.state.userdata}{" "}
                          </li>
                          <li class="list-group-item">
                            <h4>
                              <b>Rules:</b>
                            </h4>
                            {this.state.rules}{" "}
                          </li>
                        </ul>
                      </div>
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
                          {/* <h3 style={{ marginTop: -14,color:"#1f305d",fontSize:20 }} ><b>PATIENT DETAILS</b></h3> */}
                          <label style={{ color: "#494949" }}>
                            Company Name : {this.state.name}{" "}
                          </label>
                          <br />
                          <label style={{ color: "#494949" }}>
                            {" "}
                            Registered ID : {this.state.IPD_No}{" "}
                          </label>
                          <br />
                          <label style={{ color: "#494949" }}>
                            {" "}
                            Notified Date : {this.state.DOA}{" "}
                          </label>
                          <br />
                          <label style={{ color: "#494949" }}>
                            {" "}
                            Date of Loss : {this.state.DOD}{" "}
                          </label>
                          <br />
                          <label style={{ color: "#494949" }}>
                            {" "}
                            Category : {this.state.SEX}{" "}
                          </label>
                          <br />
                          <label style={{ color: "#494949" }}>
                            {" "}
                            Description of Damage: {this.state.REF_DOC}{" "}
                          </label>
                          <br />
                          {/* <label style={{color:"#494949"}}>  AGE : {this.state.AGE} </label><br></br> */}
                          {/* <label style={{color:"#494949"}}> Medico Legal Case    :  {this.state.MLC}  </label><br></br> */}
                          <label style={{ color: "#494949" }}>
                            {" "}
                            Claim Amount : {this.state.claimAmount}{" "}
                          </label>
                          <br />
                          <label style={{ color: "#494949" }}>
                            {" "}
                            Policy Id : {this.state.policyId}{" "}
                          </label>{" "}
                          <br />
                          <label style={{ color: "#494949" }}>
                            {" "}
                            Claim Status : {this.state.tpastatus}{" "}
                          </label>{" "}
                          <br />
                          {/* <label> NomineName    :  {this.state.NomineName}  </label><br></br> */}
                        </div>
                        {/* <div class="container" style={styles.treat}>
                <h3 style={{ marginTop: 40,color:"#1f305d",fontSize:20 }} ><b>TREATMENT</b></h3>
                <label style={{color:"#494949"}}>Diagnosis   :  {this.state.DAIGONSIS}</label> <br></br>
                <label style={{color:"#494949"}}> Chief Complaints on Admission:  {this.state.Cheif_Complaints_On_Admission}  </label> <br></br>
                <label style={{color:"#494949"}}> Past History with Allergy    : {this.state.Past_History_with_Allergy} </label> <br></br>
                <label style={{color:"#494949"}}> Personal History:  {this.state.Personal_History}  </label> <br></br>
                <label style={{color:"#494949"}}>Family History  :  {this.state.Family_History}  </label> <br></br>
                <label style={{color:"#494949"}}> Menstrual History    :  {this.state.Menstrual_History}  </label> <br></br>
                <label style={{color:"#494949"}}> Obstretric History    :  {this.state.Obstretric_History}  </label> <br></br>
                <label style={{color:"#494949"}}> General Examination    :  {this.state.Genral_Examination}  </label> <br></br>
                <label style={{color:"#494949"}}> Systematic Examination    :  {this.state.Systematic_Examination}  </label> <br></br>
            </div> */}
                        {/* <div class="container" style={styles.pack}>
                <h3 style={{ marginTop: 35,color:"#1f305d",fontSize:20 }} ><b>PACKAGE DETAILS</b></h3>
                <label style={{color:"#494949"}}> Investigations    :  {this.state.Investigations}  </label> <br></br>
            
                <label style={{color:"#494949"}}> Course in Hospital And condition    :  {this.state.Course_in_Hospital_And_condition}  </label> <br></br>
                <label style={{color:"#494949"}}> Treatment Given    :  {this.state.Treatment_Given}  </label> <br></br>
                <label style={{color:"#494949"}}> Follow Up Visit    :  {this.state.Follow_Up_Visit}  </label> <br></br>
                <label style={{color:"#494949"}}> Policy Id    :  {this.state.policyId}  </label> <br></br>
                <label style={{color:"#494949"}}> Hospital Name    :  {this.state.HospitalName}  </label> <br></br>
                <label style={{color:"#494949"}}> Status    :  {this.state.status}  </label> <br></br>
                <label style={{color:"#494949"}}> Claim Amount    :  {this.state.claimAmount}  </label> <br></br>
            </div> */}
                        {/* <br></br>
        <div style={{color:"#494949"}}>
           <b>Claim Status:</b>{this.state.tpastatus}
            </div> */}
                      </form>
                      <RX.Button
                        style={styles.but}
                        onPress={() => this.updatedReport()}
                      >
                        {"Click here for Updated claim status"}
                      </RX.Button>
                      <br />
                      {this.state.updatedReport ? (
                        <div class="content">
                          <label style={{ color: "#494949" }}>
                            {" "}
                            SubmitID : {this.state.submitID}{" "}
                          </label>{" "}
                          <br />
                          <label style={{ color: "#494949" }}>
                            {" "}
                            Amount User have to pay :{" "}
                            {this.state.AmountuserHavetopay}{" "}
                          </label>{" "}
                          <br />
                          <label style={{ color: "#494949" }}>
                            {" "}
                            Amount Payer would pay :{" "}
                            {this.state.AmountPayerWouldPay}{" "}
                          </label>{" "}
                          <br />
                          <label style={{ color: "#494949" }}>
                            {" "}
                            Message : {this.state.message}{" "}
                          </label>{" "}
                          <br />
                          <label style={{ color: "#494949" }}>
                            {" "}
                            Status : {this.state.statusTPA}{" "}
                          </label>{" "}
                          <br />
                        </div>
                      ) : null}
                    </div>
                  ) : null}

                  {this.state.aboutus ? (
                    <div class="container" style={styles.aboutuscontainer}>
                      <div
                        class="image-aboutus-banner"
                        style="margin-top:70px"
                        style={styles.imagebanner}
                      >
                        <div class="container">
                          <div class="row">
                            <div class="col-md-12">
                              <h1 class="lg-text">About Us</h1>
                              {/* <p class="image-aboutus-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                              <RX.Image
                                source={"./src/img/RapidQube logo-01.png"}
                                style={[styles.rapidsettle]}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="container paddingTB60">
                        <div class="row">
                          <div class="col-lg-8">
                            <hr />

                            <h2>We RapidSettle,</h2>

                            <p class="lead">
                              We are blockchain experts. We are digital natives.
                              We ensure that from your initial idea through to
                              final implementation, we deliver our solutions
                              leveraging “best in class” digital technology to
                              enhance your business.
                            </p>
                            {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, tenetur natus doloremque laborum quos iste ipsum rerum obcaecati impedit odit illo dolorum ab tempora nihil dicta earum fugiat. Temporibus, voluptatibus.</p>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, doloribus, dolorem iusto blanditiis unde eius illum consequuntur neque dicta incidunt ullam ea hic porro optio ratione repellat perspiciatis. Enim, iure!</p>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, nostrum, aliquid, animi, ut quas placeat totam sunt tempora commodi nihil ullam alias modi dicta saepe minima ab quo voluptatem obcaecati?</p>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, dolor quis. Sunt, ut, explicabo, aliquam tenetur ratione tempore quidem voluptates cupiditate voluptas illo saepe quaerat numquam recusandae? Qui, necessitatibus, est!</p> */}
                          </div>

                          <div class="cta-sektion cta-padding35">
                            <div class="container">
                              <div class="row">
                                <div class="col-md-9 col-sm-9 col-xs-12">
                                  <h3>
                                    <span class="glyphicon glyphicon-cog " />{" "}
                                    <b>What we have?</b>
                                  </h3>
                                </div>
                                {/* <div class="col-md-3 col-sm-3 col-xs-12 Tpadding10">
                      <button type="button" class="btn btn-primary site-btn">Start Right Now</button>
                  </div> */}
                              </div>
                            </div>
                          </div>
                          <div class="footer-section">
                            <div class="footer">
                              <div class="container">
                                <div class="col-md-4 footer-one">
                                  <h5>About Us </h5>
                                  <p>
                                    We are blockchain experts. We are digital
                                    natives. We ensure that from your initial
                                    idea through to final implementation, we
                                    deliver our solutions leveraging “best in
                                    class” digital technology to enhance your
                                    business.
                                  </p>
                                  <div class="social-icons">
                                    <a href="https://www.facebook.com/">
                                      <i
                                        id="social-fb"
                                        style={{ color: "black" }}
                                        class="fa fa-facebook-square fa-3x social"
                                      />
                                    </a>
                                    <a href="https://twitter.com/">
                                      <i
                                        id="social-tw"
                                        class="fa fa-twitter-square fa-3x social"
                                      />
                                    </a>
                                    <a href="https://plus.google.com/">
                                      <i
                                        id="social-gp"
                                        class="fa fa-google-plus-square fa-3x social"
                                      />
                                    </a>
                                    <a href="mailto:bootsnipp@gmail.com">
                                      <i
                                        id="social-em"
                                        class="fa fa-envelope-square fa-3x social"
                                      />
                                    </a>
                                  </div>
                                </div>
                                <div class="col-md-3 footer-two">
                                  <h5>Information </h5>
                                  <ul>
                                    <li>
                                      <a href="maintenance.html">
                                        Maintenance Tips
                                      </a>
                                    </li>
                                    <li>
                                      <a href="contact.html">Locations</a>
                                    </li>
                                    <li>
                                      <a href="about.html">Testimonials</a>
                                    </li>
                                    <li>
                                      <a href="about.html">Careers</a>
                                    </li>
                                    <li>
                                      <a href="about.html">Partners</a>
                                    </li>
                                  </ul>
                                </div>
                                <div class="col-md-3 footer-three">
                                  <h5>Helpful Links </h5>
                                  <ul>
                                    <li>
                                      <a href="maintenance.html">
                                        Maintenance Tips
                                      </a>
                                    </li>
                                    <li>
                                      <a href="contact.html">Locations</a>
                                    </li>
                                    <li>
                                      <a href="about.html">Testimonials</a>
                                    </li>
                                    <li>
                                      <a href="about.html">Careers</a>
                                    </li>
                                    <li>
                                      <a href="about.html">Partners</a>
                                    </li>
                                  </ul>
                                </div>
                                {/* <div class="col-md-2 footer-four">
                  <h5>Helpful Links </h5>
                  <ul>
                                          <li><a href="maintenance.html">Maintenance Tips</a></li>
                                          <li><a href="contact.html">Locations</a></li>
                                          <li><a href="about.html">Testimonials</a></li>
                                          <li><a href="about.html">Careers</a></li>
                                          <li><a href="about.html">Partners</a></li>
                                      </ul>
              </div> */}

                                <div class="clearfix" />
                              </div>
                            </div>
                            <div class="footer-bottom">
                              <div class="container">
                                <div class="row">
                                  <div class="col-sm-12 text-center ">
                                    <div class="copyright-text">
                                      <p>
                                        CopyRight © 2018 Digital All Rights
                                        Reserved
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
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
