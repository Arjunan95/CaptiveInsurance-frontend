import React from "react";
import RX from "reactxp";
import styling from "./AppStyles";
import {
  Nav,
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
  pd: RX.Styles.createViewStyle({
    fontSize: 16,
    color: "BLACK",
    fontWeight: "bold",
    marginLeft: 436
  }),
  pacdet: RX.Styles.createViewStyle({
    fontSize: 16,
    color: "BLACK",
    fontWeight: "bold",
    marginLeft: 429
  }),
  treatment: RX.Styles.createViewStyle({
    fontSize: 16,
    color: "BLACK",
    fontWeight: "bold",
    marginLeft: 456
  }),
  but: RX.Styles.createButtonStyle({
    backgroundColor: "rgb(8, 37, 103)",
    borderWidth: 1,
    width: 92,
    height: 30,
    // margin: 200,
    marginLeft: 383,
    marginTop: 39,
    padding: 12,
    borderRadius: 8,
    borderColor: "rgb(8, 37, 103)",
    color: "white",
    justifyContent: "center",
    textAlign: "CENTER",
    alignSelf: "center"
  }),

  nxtbut: RX.Styles.createButtonStyle({
    backgroundColor: "rgb(8, 37, 103)",
    borderWidth: 1,
    width: 92,
    height: 30,
    justifyContent: "center",
    textAlign: "CENTER",
    alignSelf: "center",
    // margin: 200,
    marginLeft: 524,
    marginTop: -31,
    padding: 12,
    borderRadius: 8,
    borderColor: "rgb(8, 37, 103)",
    color: "white"
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

  sidenavbar: RX.Styles.createTextStyle({
    fontSize: 15,
    marginRight: 1150,
    color: "white",
    marginTop: -56,
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
  search: RX.Styles.createTextStyle({
    width: 500,
    height: 40,

    backgroundColor: "#ffffff",
    borderSolid: "#dbdbdb"
  }),

  pageAlign: RX.Styles.createScrollViewStyle({
    backgroundColor: "#ffffff",
    justifyContent: "center"
  }),
  flute: RX.Styles.createViewStyle({
    justifyContent: "center",
    alignItems: "center",
    padding: 11,
    alignSelf: "center"
  }),
  head: RX.Styles.createScrollViewStyle({
    fontSize: 25,
    color: "red",
    alignSelf: "center",
    textalign: "center",
    justifyContent: "center"
  }),
  //
  dropdown: RX.Styles.createTextStyle({
    width: 117,
    marginTop: 23,
    marginLeft: 150,
    height: 40,
    borderRadius: 4,
    backgroundColor: "#ffffff",
    borderSolid: "#dbdbdb"
  }),
  searchdetails: RX.Styles.createViewStyle({
    width: 164,
    marginLeft: 368,
    marginTop: -38
  }),
  providerlogo: RX.Styles.createTextStyle({
    width: 49,
    // height: 49,
    marginLeft: 1400
  }),
  record: RX.Styles.createTextStyle({
    width: 860,
    backgroundColor: "#ffffff",
    marginLeft: 89
  }),
  grid1: RX.Styles.createTextStyle({
    height: 249,
    width: 198,
    marginTop: 73,
    marginLeft: 13
  }),
  topClaims: RX.Styles.createTextStyle({
    width: 860,
    backgroundColor: "#ffffff",
    height: 283,
    marginTop: 40
  }),
  providerdiv: RX.Styles.createTextStyle({
    backgroundColor: "#ffffff",
    width: 250,

    marginTop: 70
    // marginBottom:-50
  }),
  // searchdetails: RX.Styles.createViewStyle({
  //   width: 164,
  //   marginLeft: 368,
  //   marginTop: -38
  // }),
  image: RX.Styles.createViewStyle({
    height: 50,
    width: 150,
    backgroundColor: "#FFFFFF",
    marginTop: 10,
    marginLeft: -56
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
  })
};

export default class Patientdetails extends RX.Component {
  constructor(props) {
    super(props);
    (this.state = {}), (this._translationValue = RX.Animated.createValue(-100));
    this._animatedStyle = RX.Styles.createAnimatedTextStyle({
      transform: [
        {
          translateY: this._translationValue
        }
      ]
    });
  }

  onChangePost = () => {
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
        DOA: this.state.DOA,
        REF_DOC: this.state.REF_DOC,
        IPD_No: this.state.IPD_No,
        MLC: this.state.MLC,
        SEX: this.state.SEX,
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
        submitID: "",
        status: this.state.status,
        claimAmount: this.state.claimAmount,
        policyId: this.state.policyId
      })
    })
      .then(result => result.json())
      .then(responseJson => {
        var res = responseJson.submitID;
        var data = responseJson.rs[0].message;
        console.log("arjun------------>", res);
        console.log("logesh------------>", data);
        var val = "SubmitId: " + res + "\n" + "Message: " + data;

        swal("Your Submit ID:", val);

        // var resJson1 = JSON.stringify(res)
        // console.log(resJson1)
      });
  };
  onChangePost() {
    this.props.onNavigatePush(PatientDetail);
  }

  // onChangeNAME = (value) => {
  //     console.log(value)
  //     this.setState({NAME: value});
  //     console.log(this.state.NAME,"NAME");
  // }

  componentDidMount() {}

  //patient details---------------

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
    this.setState({ status: value });
    console.log(this.state.status, "status");
  };
  onChangeHospitalName = value => {
    this.setState({ HospitalName: value });
    console.log(this.state.HospitalName, "HospitalName");
  };
  onChangepolicyId = value => {
    this.setState({ policyId: value });
    console.log(this.state.policyId, "policyId");
  };
  //-------------------------------------------------------------------------------------------

  render() {
    return (
      <RX.ScrollView style={styles.scroll}>
        <RX.View style={styles.navcontainer}>
          <RX.Image
            source={"./src/img//RapidQube logo-01.png"}
            style={[styles.navrqlogo]}
          />
          <RX.Text style={styles.navwelcome}>RAPID SETTLE</RX.Text>
        </RX.View>
        <RX.View>
          <RX.View style={_styles.client}>
            <h2>PATIENT DATA</h2>
          </RX.View>
          <RX.View style={_styles.client}>
            <div class="jumbotron" style={_styles.SCROLL}>
              <form>
                <div class="form-row">
                  <label for="inputEmail4" style={styles.pd}>
                    PATIENT DETAILS
                  </label>
                </div>
              </form>
              <br />
              <form>
                <div class="form-row">
                  <div class="form-group col-md-4">
                    <label for="inputPassword4" style={styling.siDeText}>
                      NAME :{this.state.suggestion}
                    </label>

                    <RX.TextInput
                      style={styling.Form}
                      placeholder=""
                      value={this.state.NAME}
                      onChangeText={this.onChangeNAME}
                      // defaultValue={ this.state.inputValue }
                    />
                  </div>

                  <div class="form-group col-md-4">
                    <label for="inputEmail4" style={styling.siDeText}>
                      AGE
                    </label>

                    <RX.TextInput
                      style={styling.Form}
                      placeholder=""
                      value={this.state.AGE}
                      onChangeText={this.onChangeage}
                      // defaultValue={ this.state.inputValue }
                    />
                  </div>
                  <div class="form-group col-md-4">
                    <label for="inputPassword4" style={styling.siDeText}>
                      DOA
                    </label>

                    <RX.TextInput
                      style={styling.Form}
                      placeholder=""
                      value={this.state.DOA}
                      onChangeText={this.onChangeDOA}
                      // defaultValue={ this.state.inputValue }
                    />
                  </div>
                </div>
              </form>

              <form>
                <div class="form-row">
                  <div class="form-group col-md-4">
                    <label for="inputEmail4" style={styling.siDeText}>
                      REF_DOC
                    </label>

                    <RX.TextInput
                      style={styling.Form}
                      placeholder=""
                      value={this.state.REF_DOC}
                      onChangeText={this.onChangeREF_DOC}
                      // defaultValue={ this.state.inputValue }
                    />
                  </div>
                  <div class="form-group col-md-4">
                    <label for="inputPassword4" style={styling.siDeText}>
                      IPD_NO
                    </label>

                    <RX.TextInput
                      style={styling.Form}
                      placeholder=""
                      value={this.state.IPD_No}
                      onChangeText={this.onChangeIPD_No}
                      // defaultValue={ this.state.inputValue }
                    />
                  </div>

                  <div class="form-group col-md-4">
                    <label for="inputEmail4" style={styling.siDeText}>
                      MLC
                    </label>

                    <RX.TextInput
                      style={styling.Form}
                      placeholder=""
                      value={this.state.MLC}
                      onChangeText={this.onChangeMLC}
                      // defaultValue={ this.state.inputValue }
                    />
                  </div>
                </div>
              </form>
              <form>
                <div class="form-row">
                  <div class="form-group col-md-4">
                    <label for="inputPassword4" style={styling.siDeText}>
                      SEX
                    </label>

                    <RX.TextInput
                      style={styling.Form}
                      placeholder=""
                      value={this.state.SEX}
                      onChangeText={this.onChangeSEX}
                      // defaultValue={ this.state.inputValue }
                    />
                  </div>

                  <div class="form-group col-md-4" />
                  <div class="form-group col-md-4">
                    <label for="inputPassword4" style={styling.siDeText}>
                      DOD
                    </label>

                    <RX.TextInput
                      style={styling.Form}
                      placeholder=""
                      value={this.state.DOD}
                      onChangeText={this.onChangeDOD}
                      // defaultValue={ this.state.inputValue }
                    />
                  </div>
                </div>
              </form>

              <RX.View style={_styles.client}>
                <div class="jumbotron" style={_styles.SCROLL}>
                  <form>
                    <div class="form-row">
                      <label for="inputEmail4" style={styles.treatment}>
                        TREATMENT
                      </label>
                    </div>
                  </form>
                  <form>
                    <div class="form-row">
                      <div class="form-group col-md-6">
                        <label for="inputPassword4" style={styling.siDeText}>
                          DAIGONSIS
                        </label>

                        <RX.TextInput
                          style={styling.Form}
                          placeholder=" "
                          value={this.state.DAIGONIS}
                          onChangeText={this.onChangeDAIGONIS}
                          // defaultValue={ this.state.inputValue }
                        />
                      </div>
                      <div class="form-group col-md-6">
                        <label for="inputPassword4" style={styling.siDeText}>
                          Cheif Complaints On Admission :
                        </label>
                        <RX.TextInput
                          style={styling.Form}
                          placeholder=""
                          value={this.state.Cheif_Complaints_On_Admission}
                          onChangeText={
                            this.onChangeCheif_Complaints_On_Admission
                          }
                          // defaultValue={ this.state.inputValue }
                        />
                      </div>
                      <div class="form-group col-md-6">
                        <label for="inputPassword4" style={styling.siDeText}>
                          Past History with Allergy:
                        </label>

                        <RX.TextInput
                          style={styling.Form}
                          placeholder=" "
                          value={this.state.Past_History_with_Allergy}
                          onChangeText={this.onChangePast_History_with_Allergy}
                          // defaultValue={ this.state.inputValue }
                        />
                      </div>

                      <div class="form-group col-md-6">
                        <label for="inputPassword4" style={styling.siDeText}>
                          Personal History
                        </label>

                        <RX.TextInput
                          style={styling.Form}
                          placeholder=""
                          value={this.state.Personal_History}
                          onChangeText={this.onChangedPersonal_History}
                          // defaultValue={ this.state.inputValue }
                        />
                      </div>

                      <div class="form-group col-md-6">
                        <label for="inputPassword4" style={styling.siDeText}>
                          Family History
                        </label>

                        <RX.TextInput
                          style={styling.Form}
                          placeholder=""
                          value={this.state.Family_History}
                          onChangeText={this.onChangeFamily_History}
                          // defaultValue={ this.state.inputValue }
                        />
                      </div>
                    </div>

                    <div class="form-group col-md-6">
                      <label for="inputPassword4" style={styling.siDeText}>
                        Menstrual History
                      </label>

                      <RX.TextInput
                        style={styling.Form}
                        placeholder=""
                        value={this.state.Menstrual_History}
                        onChangeText={this.onChangeMenstrual_History}
                        // defaultValue={ this.state.inputValue }
                      />
                    </div>
                    <div class="form-group col-md-6">
                      <label for="inputPassword4" style={styling.siDeText}>
                        Obstretric History
                      </label>

                      <RX.TextInput
                        style={styling.Form}
                        placeholder=""
                        value={this.state.Obstretric_History}
                        onChangeText={this.onChangeObstretric_History}
                        // defaultValue={ this.state.inputValue }
                      />
                    </div>
                    <div class="form-group col-md-6">
                      <label for="inputPassword4" style={styling.siDeText}>
                        Genral Examination
                      </label>

                      <RX.TextInput
                        style={styling.Form}
                        placeholder=""
                        value={this.state.Genral_Examination}
                        onChangeText={this.onChangeGenral_Examination}
                        // defaultValue={ this.state.inputValue }
                      />
                    </div>
                    <div class="form-group col-md-6">
                      <label for="inputPassword4" style={styling.siDeText}>
                        Systematic Examination
                      </label>

                      <RX.TextInput
                        style={styling.Form}
                        placeholder=""
                        value={this.state.Systematic_Examination}
                        onChangeText={this.onChangeSystematic_Examination}
                        // defaultValue={ this.state.inputValue }
                      />
                    </div>
                  </form>
                </div>
              </RX.View>
              <RX.View style={_styles.client}>
                <div class="jumbotron" style={{ width: 1129 }}>
                  <form>
                    <div class="form-row">
                      <label for="inputEmail4" style={styles.pacdet}>
                        PACKAGE DETAILS
                      </label>
                    </div>
                    <div class="form-row">
                      <div class="form-group col-md-6">
                        <label for="inputPassword4" style={styling.siDeText}>
                          Investigations
                        </label>

                        <RX.TextInput
                          style={styling.Form}
                          placeholder=""
                          value={this.state.Investigations}
                          onChangeText={this.onChangeInvestigations}
                          // defaultValue={ this.state.inputValue }
                        />
                      </div>

                      <div class="form-group col-md-6">
                        <label for="inputPassword4" style={styling.siDeText}>
                          BaBys Details
                        </label>
                        <RX.TextInput
                          style={styling.Form}
                          placeholder=" "
                          value={this.state.BaBys_Details}
                          onChangeText={this.onChangeBaBys_Details}
                          // defaultValue={ this.state.inputValue }
                        />
                      </div>
                      <div class="form-group col-md-6">
                        <label for="inputPassword4" style={styling.siDeText}>
                          Course in Hospital And condition{" "}
                        </label>

                        <RX.TextInput
                          style={styling.Form}
                          placeholder=""
                          value={this.state.Course_in_Hospital_And_condition}
                          onChangeText={
                            this.onChangeCourse_in_Hospital_And_condition
                          }
                          // defaultValue={ this.state.inputValue }
                        />
                      </div>
                    </div>

                    <form>
                      <div class="form-row">
                        <div class="form-group col-md-6">
                          <label for="inputPassword4" style={styling.siDeText}>
                            Treatment Given
                          </label>

                          <RX.TextInput
                            style={styling.Form}
                            placeholder=""
                            value={this.state.Treatment_Given}
                            onChangeText={this.onChangeTreatment_Given}
                            // defaultValue={ this.state.inputValue }
                          />
                        </div>

                        <div class="form-group col-md-6">
                          <label for="inputPassword4" style={styling.siDeText}>
                            Treatment Adviced
                          </label>

                          <RX.TextInput
                            style={styling.Form}
                            placeholder=""
                            value={this.state.Treatment_Adviced}
                            onChangeText={this.onChangeTreatment_Adviced}
                            // defaultValue={ this.state.inputValue }
                          />
                        </div>
                      </div>
                    </form>

                    <div class="form-group col-md-6">
                      <label for="inputPassword4" style={styling.siDeText}>
                        Follow Up Visit
                      </label>

                      <RX.TextInput
                        style={styling.Form}
                        placeholder=""
                        value={this.state.Follow_Up_Visit}
                        onChangeText={this.onChangeFollow_Up_Visit}
                        // defaultValue={ this.state.inputValue }
                      />
                    </div>
                    <div class="form-group col-md-6">
                      <label for="inputPassword4" style={styling.siDeText}>
                        Procedure done
                      </label>

                      <RX.TextInput
                        style={styling.Form}
                        placeholder=""
                        value={this.state.Procedure_done}
                        onChangeText={this.onChangeProcedure_done}
                        // defaultValue={ this.state.inputValue }
                      />
                    </div>
                  </form>
                </div>
              </RX.View>

              <div class="jumbotron" style={_styles.SCROLL}>
                <label for="inputPassword4" style={styling.siDeText}>
                  TotalClaimedAmount
                </label>

                <RX.TextInput
                  style={styling.Form}
                  placeholder="Enter your Claim amount"
                  value={this.state.claimAmount}
                  onChangeText={this.onChangeclaimAmount}
                  // defaultValue={ this.state.inputValue }
                />
                <label for="inputPassword4" style={styling.siDeText}>
                  status
                </label>

                <RX.TextInput
                  style={styling.Form}
                  placeholder=""
                  value={this.state.status}
                  onChangeText={this.onChangestatus}
                  // defaultValue={ this.state.inputValue }
                />
                <label for="inputPassword4" style={styling.siDeText}>
                  HospitalName
                </label>

                <RX.TextInput
                  style={styling.Form}
                  placeholder=""
                  value={this.state.HospitalName}
                  onChangeText={this.onChangeHospitalName}
                  // defaultValue={ this.state.inputValue }
                />
                <label for="inputPassword4" style={styling.siDeText}>
                  PolicyId
                </label>

                <RX.TextInput
                  style={styling.Form}
                  placeholder=""
                  value={this.state.policyId}
                  onChangeText={this.onChangepolicyId}
                  // defaultValue={ this.state.inputValue }
                />
                <RX.Button
                  style={styles.but}
                  onPress={() => this.onChangePost()}
                >
                  {"Submit"}
                </RX.Button>

                <RX.Button
                  style={styles.nxtbut}
                  onPress={this.props.onNavigatePatientdetails}
                >
                  {"Next"}
                </RX.Button>
                {/* <RX.Button
                    style={ [styles.button1] }
                   
                    onPress={this.props.onNavigatePatientdetails }
                >

                
                    <RX.Text style={ [styles.button1Text] }>
                        { 'Next' }
                    </RX.Text>
                </RX.Button> */}
              </div>
            </div>
          </RX.View>
        </RX.View>
      </RX.ScrollView>
    );
  }
}
