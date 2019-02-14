import React from "react";
import RX from "reactxp";
import {
  Nav,
  View,
  NavItem,
  NavDropdown,
  MenuItem,
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
    backgroundColor: "#082567",
    height: 50,
    padding: 5
  }),
  navwelcome: RX.Styles.createTextStyle({
    fontSize: 15,
    marginRight: 1050,
    color: "white",
    marginTop: "5"
  }),
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
  pack: RX.Styles.createButtonStyle({
    marginLeft: 654,
    marginTop: -295
  }),
  treat: RX.Styles.createButtonStyle({
    marginLeft: 335,
    marginTop: -276
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
    color: "white",
    // marginTop:-56,
    width: 200,
    height: 620,
    backgroundColor: "#242536"
  }),

  dashboard: RX.Styles.createTextStyle({
    fontSize: 15,
    marginRight: 1150,
    color: "black",
    marginTop: -620
  }),
  InputSelectorCopy: RX.Styles.createTextStyle({
    borderWidth: 1
  }),
  sideText: RX.Styles.createTextStyle({}),
  allHistorybtn: RX.Styles.createTextStyle({
    marginLeft: 16
  }),
  policyrules: RX.Styles.createTextStyle({
    marginLeft: 50,
    width: 829,
    height: 900,
    font: 400,
    marginTop: 22
  }),
  divpolicyrules: RX.Styles.createTextStyle({
    backgroundColor: "#80808080",
    width: 948,
    height: 300,
    marginRight: 328,
    marginTop: 123
  }),

  details: RX.Styles.createTextStyle({
    backgroundColor: "#80808080",
    width: 997,
    height: 437,
    marginLeft: -34,
    marginTop: 88
  }),

  heading: RX.Styles.createTextStyle({
    marginLeft: 276
  }),
  policyheading: RX.Styles.createTextStyle({
    marginLeft: 335
  })
};

var resJson1;
var res;
var Policyid;
var responseJson;
export default class Userdetails extends RX.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this._translationValue = RX.Animated.createValue(-100);
    this._animatedStyle = RX.Styles.createAnimatedTextStyle({
      transform: [
        {
          translateY: this._translationValue
        }
      ]
    });
  }

  onChangePost1 = () => {
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
        var res = responseJson.result[0].Records.HospitalName;
        var res1 = responseJson.result[0].Records.keys.NAME;
        console.log(res1);
        var resJson1 = JSON.stringify(res);
        console.log(resJson1);
        var name = res1;
        this.setState({ name: name });

        var AGE = responseJson.result[0].Records.keys.AGE;
        var AGE = AGE;
        this.setState({ AGE: AGE });

        var DOA = responseJson.result[0].Records.keys.DOA;
        var DOA = DOA;
        this.setState({ DOA: DOA });

        var REF_DOC = responseJson.result[0].Records.keys.REF_DOC;
        var REF_DOC = REF_DOC;
        this.setState({ REF_DOC: REF_DOC });

        var IPD_No = responseJson.result[0].Records.keys.IPD_No;
        var IPD_No = IPD_No;
        this.setState({ IPD_No: IPD_No });

        var MLC = responseJson.result[0].Records.keys.MLC;
        var MLC = MLC;
        this.setState({ MLC: MLC });

        var SEX = responseJson.result[0].Records.keys.SEX;
        var SEX = SEX;
        this.setState({ SEX: SEX });

        var DOD = responseJson.result[0].Records.keys.DOD;
        var DOD = DOD;
        this.setState({ DOD: DOD });

        var DAIGONSIS = responseJson.result[0].Records.keys.DAIGONIS;
        var DAIGONSIS = DAIGONSIS;
        this.setState({ DAIGONSIS: DAIGONSIS });

        var Cheif_Complaints_On_Admission =
          responseJson.result[0].Records.keys.Cheif_Complaints_On_Admission;
        var Cheif_Complaints_On_Admission = Cheif_Complaints_On_Admission;
        this.setState({
          Cheif_Complaints_On_Admission: Cheif_Complaints_On_Admission
        });

        var Past_History_with_Allergy =
          responseJson.result[0].Records.keys.Past_History_with_Allergy;
        var Past_History_with_Allergy = Past_History_with_Allergy;
        this.setState({ Past_History_with_Allergy: Past_History_with_Allergy });

        var Personal_History =
          responseJson.result[0].Records.keys.Personal_History;
        var Personal_History = Personal_History;
        this.setState({ Personal_History: Personal_History });

        var Family_History = responseJson.result[0].Records.keys.Family_History;
        var Family_History = Family_History;
        this.setState({ Family_History: Family_History });

        var Menstrual_History =
          responseJson.result[0].Records.keys.Menstrual_History;
        var Menstrual_History = Menstrual_History;
        this.setState({ Menstrual_History: Menstrual_History });

        var Obstretric_History =
          responseJson.result[0].Records.keys.Obstretric_History;
        var Obstretric_History = Obstretric_History;
        this.setState({ Obstretric_History: Obstretric_History });

        var Genral_Examination =
          responseJson.result[0].Records.keys.Genral_Examination;
        var Genral_Examination = Genral_Examination;
        this.setState({ Genral_Examination: Genral_Examination });

        var Systematic_Examination =
          responseJson.result[0].Records.keys.Systematic_Examination;
        var Systematic_Examination = Systematic_Examination;
        this.setState({ Systematic_Examination: Systematic_Examination });

        var Investigations = responseJson.result[0].Records.keys.Investigations;
        var Investigations = Investigations;
        this.setState({ Investigations: Investigations });

        var BaBys_Details = responseJson.result[0].Records.keys.BaBys_Details;
        var BaBys_Details = BaBys_Details;
        this.setState({ BaBys_Details: BaBys_Details });

        var Course_in_Hospital_And_condition =
          responseJson.result[0].Records.keys.Course_in_Hospital_And_condition;
        var Course_in_Hospital_And_condition = Course_in_Hospital_And_condition;
        this.setState({
          Course_in_Hospital_And_condition: Course_in_Hospital_And_condition
        });

        var Treatment_Given =
          responseJson.result[0].Records.keys.Treatment_Given;
        var Treatment_Given = Treatment_Given;
        this.setState({ Treatment_Given: Treatment_Given });

        var Treatment_Adviced =
          responseJson.result[0].Records.keys.Treatment_Adviced;
        var Treatment_Adviced = Treatment_Adviced;
        this.setState({ Treatment_Adviced: Treatment_Adviced });

        var Follow_Up_Visit =
          responseJson.result[0].Records.keys.Follow_Up_Visit;
        var Follow_Up_Visit = Follow_Up_Visit;
        this.setState({ Follow_Up_Visit: Follow_Up_Visit });

        var Procedure_done = responseJson.result[0].Records.keys.Procedure_done;
        var Procedure_done = Procedure_done;
        this.setState({ Procedure_done: Procedure_done });

        var policyId = responseJson.result[0].Records.keys.policyId;
        var policyId = policyId;
        this.setState({ policyId: policyId });

        var HospitalName = responseJson.result[0].Records.keys.HospitalName;
        var HospitalName = HospitalName;
        this.setState({ HospitalName: HospitalName });

        var status = responseJson.result[0].Records.keys.status;
        var status = status;
        this.setState({ status: status });

        var claimAmount = responseJson.result[0].Records.keys.claimAmount;
        var claimAmount = claimAmount;
        this.setState({ claimAmount: claimAmount });

        var tpastatus = responseJson.result[1].Records.status;
        var tpastatus = tpastatus;
        this.setState({ tpastatus: tpastatus });

        var singledata = resJson1 + "\n";
        this.setState({ singledata: singledata });

        var singledata = resJson1 + "\n";
        this.setState({ singledata: singledata });
        // swal("User Details:", resJson1);
      });
  };

  onChangePost = () => {
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
        var res = responseJson.result[0].Records.policyID;
        var rules = responseJson.result[0].Records.policys.rules;
        var rules = rules;
        this.setState({ rules: rules });

        var resJson1 = JSON.stringify(res);
        console.log(resJson1);
        var data = resJson1;
        var userdata = data;
        this.setState({ userdata: userdata });

        var tpastatus = responseJson.result[1].Records.status;
        var tpastatus = tpastatus;
        this.setState({ tpastatus: tpastatus });
      });
  };

  onChangeGet = () => {
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

  componentDidMount() {
    result => {
      this.setState({
        responseJson
      });
      console.log(result);
    };
  }

  onChangeuserId = value => {
    this.setState({ userHistoryDetails: value });

    console.log("userId");
    console.log(this.state.userHistoryDetails, "userId");
  };
  onChangeuserId1 = value => {
    this.setState({ userHistoryDetails1: value });

    console.log("userId");
    console.log(this.state.userHistoryDetails1, "userId");
  };

  userId = () => {
    this.setState({ userId: true });
    this.setState({ userId1: false });
    this.setState({ bulkdata: false });
    this.setState({ policyandrules: false });
    this.setState({ policyandrules1: false });
  };
  userId1 = () => {
    this.setState({ userId: false });
    this.setState({ userId1: true });
    this.setState({ bulkdata: false });
    this.setState({ policyandrules: false });
    this.setState({ policyandrules1: false });
  };

  bulkdata = () => {
    this.setState({ userId: false });
    this.setState({ userId1: false });
    this.setState({ bulkdata: true });
    this.setState({ policyandrules: false });
    this.setState({ policyandrules1: false });
  };
  policyandrules = () => {
    this.setState({ userId: false });
    this.setState({ userId1: true });
    this.setState({ bulkdata: false });
    this.setState({ policyandrules: true });
    this.setState({ policyandrules1: false });
  };
  policyandrules1 = () => {
    this.setState({ userId: true });
    this.setState({ userId1: false });
    this.setState({ bulkdata: false });
    this.setState({ policyandrules: false });
    this.setState({ policyandrules1: true });
  };

  render() {
    // resJson1 = this.props.navigatorRoute.resJson1
    return (
      <RX.ScrollView style={styles.scroll}>
        <RX.View style={styles.navcontainer}>
          <RX.Image
            source={"./src/img//RapidQube logo-01.png"}
            style={[styles.navrqlogo]}
          />
          <RX.Text style={styles.navwelcome}>RAPID SETTLE</RX.Text>
        </RX.View>
        <RX.View>{res}</RX.View>
        <RX.View>
          <div class="container">
            <div class="row">
              <div class="col-sm-3 col-md-2 sidebar" style={styles.sidenavbar}>
                <ul class="nav nav-sidebar">
                  <li onClick={() => this.userId()}>
                    <a href="#" style={{ color: "orange" }}>
                      User History <span class="sr-only">(current)</span>
                    </a>
                  </li>
                  <li onClick={() => this.userId1()}>
                    <a href="#" style={{ color: "orange" }}>
                      Policy Details<span class="sr-only">(current)</span>
                    </a>
                  </li>
                  <li onClick={() => this.bulkdata()}>
                    <a href="#" style={{ color: "orange" }}>
                      All History <span class="sr-only">(current)</span>
                    </a>
                  </li>
                </ul>
              </div>

              <div
                class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main"
                style={styles.dashboard}
              >
                <br />
                <div class="container">
                  {this.state.userId ? (
                    <div class="col-xs-6 col-sm-3 placeholder">
                      <div class="container" style={styles.userIddiv}>
                        <RX.Button
                          style={styles.button1}
                          onPress={() => (
                            this.onChangePost1(), this.policyandrules1()
                          )}
                          refs="id"
                        >
                          {"Submit"}
                        </RX.Button>

                        <label
                          for="lgFormGroupInput"
                          style={styles.sideText}
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
                      <div class="container" style={styles.userIddiv}>
                        <RX.Button
                          style={styles.button1}
                          onPress={() => (
                            this.onChangePost(), this.policyandrules()
                          )}
                          refs="id"
                        >
                          {"Submit"}
                        </RX.Button>

                        <label
                          for="lgFormGroupInput"
                          style={styles.sideText}
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
                      <div class="container">
                        <div>
                          <RX.Button onPress={() => this.onChangeGet()}>
                            <a style={{ color: "blue" }}>
                              <b>Click here view Entire User Details :</b>
                              <br />
                              <br />
                              {this.state.bulkdata}{" "}
                              <span class="sr-only">(current)</span>
                            </a>
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
                        <h2>
                          <u>Discharge Summary Report:</u>
                        </h2>
                      </div>
                      <br />
                      <form>
                        <div class="container">
                          <h3 style={{ marginTop: 23 }}>PATIENT DETAILS</h3>
                          <label>Name : {this.state.name} </label>
                          <br />
                          <label> AGE : {this.state.AGE} </label>
                          <br />
                          <label> DOA : {this.state.DOA} </label>
                          <br />
                          <label> REF_DOC: {this.state.REF_DOC} </label>
                          <br />
                          <label>IPD_No : {this.state.IPD_No} </label>
                          <br />
                          <label> MLC : {this.state.MLC} </label>
                          <br />
                          <label> SEX : {this.state.SEX} </label>
                          <br />
                          {/* <label> NomineName    :  {this.state.NomineName}  </label><br></br> */}
                        </div>
                        <div class="container" style={styles.treat}>
                          <h3 style={{ marginTop: 56 }}>TREATMENT</h3>
                          <label>DAIGONSIS : {this.state.DAIGONSIS}</label>{" "}
                          <br />
                          <label>
                            {" "}
                            Cheif_Complaints_On_Admission:{" "}
                            {this.state.Cheif_Complaints_On_Admission}{" "}
                          </label>{" "}
                          <br />
                          <label>
                            {" "}
                            Past_History_with_Allergy :{" "}
                            {this.state.Past_History_with_Allergy}{" "}
                          </label>{" "}
                          <br />
                          <label>
                            {" "}
                            Personal_History: {this.state.Personal_History}{" "}
                          </label>{" "}
                          <br />
                          <label>
                            Family_History : {this.state.Family_History}{" "}
                          </label>{" "}
                          <br />
                          <label>
                            {" "}
                            Menstrual_History : {
                              this.state.Menstrual_History
                            }{" "}
                          </label>{" "}
                          <br />
                          <label>
                            {" "}
                            Obstretric_History : {
                              this.state.Obstretric_History
                            }{" "}
                          </label>{" "}
                          <br />
                          <label>
                            {" "}
                            Genral_Examination : {
                              this.state.Genral_Examination
                            }{" "}
                          </label>{" "}
                          <br />
                          <label>
                            {" "}
                            Systematic_Examination :{" "}
                            {this.state.Systematic_Examination}{" "}
                          </label>{" "}
                          <br />
                        </div>
                        <div class="container" style={styles.pack}>
                          <h3 style={{ marginTop: 23 }}>PACKAGE DETAILS</h3>
                          <label>
                            {" "}
                            Investigations : {this.state.Investigations}{" "}
                          </label>{" "}
                          <br />
                          <label>
                            {" "}
                            BaBys_Details : {this.state.BaBys_Details}{" "}
                          </label>{" "}
                          <br />
                          <label>
                            {" "}
                            Course_in_Hospital_And_condition :{" "}
                            {this.state.Course_in_Hospital_And_condition}{" "}
                          </label>{" "}
                          <br />
                          <label>
                            {" "}
                            Treatment_Given : {this.state.Treatment_Given}{" "}
                          </label>{" "}
                          <br />
                          <label>
                            {" "}
                            Follow_Up_Visit : {this.state.Follow_Up_Visit}{" "}
                          </label>{" "}
                          <br />
                          <label> policyId : {this.state.policyId} </label>{" "}
                          <br />
                          <label>
                            {" "}
                            HospitalName : {this.state.HospitalName}{" "}
                          </label>{" "}
                          <br />
                          <label> status : {this.state.status} </label> <br />
                          <label>
                            {" "}
                            claimAmount : {this.state.claimAmount}{" "}
                          </label>{" "}
                          <br />
                        </div>
                        <div>
                          <b>Claim Status:</b>
                          {this.state.tpastatus}
                        </div>
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
