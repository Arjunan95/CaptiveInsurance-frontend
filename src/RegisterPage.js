import React from "react";
import RX from "reactxp";
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
/*const {
Welcome
} = TodoStyles;*/
const styles = {
  scroll: RX.Styles.createScrollViewStyle({
    alignSelf: "stretch",
    backgroundColor: "#2a647d0a"
  }),
  policyIdTextBox: RX.Styles.createTextStyle({
    borderWidth: 1,
    borderColor: "rgb(8, 37, 103)"
  }),
  navcontainer: RX.Styles.createViewStyle({
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgb(32, 122, 142)",
    height: 50,
    padding: 5
  }),
  Container: RX.Styles.createViewStyle({
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(213,222,219,0)",
    padding: 5
  }),
  helloWorld: RX.Styles.createTextStyle({
    fontSize: 48,
    fontWeight: "bold",
    marginBottom: 28
  }),
  instructions: RX.Styles.createTextStyle({
    fontSize: 16,
    color: "#aaa",
    marginBottom: 16
  }),
  docLink: RX.Styles.createLinkStyle({
    fontSize: 16,
    color: "blue",
    marginBottom: 16
  }),
  roundButton: RX.Styles.createViewStyle({
    margin: 16,
    borderRadius: 16,
    backgroundColor: "#ff0000ab",
    justifyContent: "CENTER"
  }),
  buttonText: RX.Styles.createTextStyle({
    fontSize: 16,
    marginVertical: 6,
    marginHorizontal: 12,
    color: "white"
  }),
  editTodoItem: RX.Styles.createViewStyle({
    margin: 15,
    height: 47,
    fontSize: 20,
    justifyContent: "center",
    alignSelf: "center",
    marginLeft: 16,
    borderWidth: 2,
    bordercolor: "#cccccc"
  }),
  email: RX.Styles.createTextStyle({
    fontSize: 18,
    color: "Black",
    justifyContent: "center"
  }),
  password: RX.Styles.createTextStyle({
    fontSize: 18,
    color: "Black",
    justifyContent: "center"
  }),
  navrqlogo: RX.Styles.createViewStyle({
    height: 20,
    width: "30%",
    marginTop: "5",
    marginBottom: -20,
    marginRight: 1200
  }),

  dropdown: RX.Styles.createTextStyle({
    fontSize: 14,
    color: "#1a153b",
    // justifyContent: 'center',
    marginLeft: 400,
    width: 354,
    height: 35,
    borderRadius: 4,
    backgroundColor: "#ffffff"
  }),

  navwelcome: RX.Styles.createTextStyle({
    fontSize: 15,
    marginRight: 1010,
    color: "white",
    marginTop: "5"
  }),
  regbtn: RX.Styles.createTextStyle({
    color: "white",
    marginTop: -15,
    marginLeft: 934
  }),
  loginbtn: RX.Styles.createTextStyle({
    color: "white",
    marginTop: -21,
    marginLeft: 1113
  }),
  account: RX.Styles.createTextStyle({
    fontSize: 20,
    color: "red"
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

  button1Text: RX.Styles.createTextStyle({
    fontSize: 14,
    color: "white",
    justifyContent: "center",
    textAlign: "CENTER",
    alignSelf: "center"
  }),

  button1: RX.Styles.createButtonStyle({
    backgroundColor: "rgb(8, 37, 103)",
    borderWidth: 1,
    width: 130,
    height: 5,
    marginLeft: 580,
    padding: 12,
    borderRadius: 8,
    borderColor: "rgb(8, 37, 103)"
  }),
  logo: RX.Styles.createButtonStyle({
    width: 25,
    marginTop: -30,
    float: "right",
    alignItems: "right"
  }),
  register: RX.Styles.createImageStyle({
    height: 80,
    width: 110,
    justifyContent: "center"
  }),
  InputSelectorCopy: RX.Styles.createTextStyle({
    fontSize: 14,
    color: "#1a153b",
    // justifyContent: 'center',
    marginLeft: 400,
    width: 354,
    height: 35,
    // borderRadius: 4,
    backgroundColor: "#ffffff"
  }),

  AddressSelectorCopy: RX.Styles.createTextStyle({
    fontSize: 14,
    color: "#1a153b",
    // justifyContent: 'center',
    marginLeft: 400,
    width: 354,
    height: 85,
    // borderRadius: 4,
    backgroundColor: "#ffffff"
  }),
  DateSelectorCopy: RX.Styles.createTextStyle({
    fontSize: 14,
    color: "#1a153b",
    // justifyContent: 'center',
    marginLeft: 400,
    width: 134,
    height: 35,
    // borderRadius: 4,
    backgroundColor: "#ffffff"
  }),
  StartDate: RX.Styles.createTextStyle({
    fontSize: 14,
    // color: '#1a153b',
    // justifyContent: 'center',
    marginLeft: 400,
    width: 134,
    height: 35
    // borderRadius: 4,
    // backgroundColor: '#ffffff',
  }),

  Date1SelectorCopy: RX.Styles.createTextStyle({
    fontSize: 14,
    color: "#1a153b",
    // justifyContent: 'center',
    marginLeft: 80,
    width: 134,
    height: 35,
    // borderRadius: 4,
    backgroundColor: "#ffffff"
  }),
  EndDate: RX.Styles.createTextStyle({
    fontSize: 14,
    // color: '#1a153b',
    // justifyContent: 'center',
    marginLeft: 80,
    width: 134,
    height: 35
    // borderRadius: 4,
    // backgroundColor: '#ffffff',
  }),

  sideText: RX.Styles.createTextStyle({
    width: 434,
    height: 32,
    marginLeft: 400
  }),
  sideMar: RX.Styles.createTextStyle({
    marginTop: 10,
    marginLeft: 30,
    marginRight: 20
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
    marginTop: 38,
    padding: 12,
    borderRadius: 8,
    borderColor: "rgb(8, 37, 103)",
    color: "white"
  }),
  backbtn: RX.Styles.createButtonStyle({
    backgroundColor: "rgb(8, 37, 103)",
    borderWidth: 1,
    width: 132,
    height: 30,
    justifyContent: "center",
    textAlign: "CENTER",
    alignSelf: "center",
    // margin: 200,
    marginLeft: 120,
    marginTop: 25,
    padding: 12,
    borderRadius: 8,
    borderColor: "rgb(8, 37, 103)",
    color: "white"
  }),
  submitbtn: RX.Styles.createButtonStyle({
    backgroundColor: "rgb(8, 37, 103)",
    borderWidth: 1,
    width: 132,
    height: 30,
    justifyContent: "center",
    textAlign: "CENTER",
    alignSelf: "center",
    // margin: 200,
    marginLeft: 283,
    marginTop: -32,
    padding: 12,
    borderRadius: 8,
    borderColor: "rgb(8, 37, 103)",
    color: "white"
  }),
  picker1: RX.Styles.createButtonStyle({
    width: 212,
    marginLeft: 58,
    marginTop: 11,
    color: "black",
    height: 29,
    textAlign: "center"
  }),
  picker2: RX.Styles.createButtonStyle({
    width: 212,
    marginLeft: 23,
    marginTop: 11,
    color: "black",
    height: 29,
    textAlign: "center"
  }),
  picker3: RX.Styles.createButtonStyle({
    width: 212,
    marginLeft: 41,
    marginTop: 11,
    color: "black",
    height: 29,
    textAlign: "center"
  }),
  divContainer: RX.Styles.createButtonStyle({
    marginLeft: -77,
    // background: "white",
    height: 963,
    width: 1131,
    marginTop: -124,
    fontSize: 14,
    font: "ProximaNova-Regular"
  }),
  basicDetails: RX.Styles.createViewStyle({
    width: 682,
    height: 623,
    marginTop: 159,
    marginLeft: 385,
    color: "#1f305d",
    borderRadius: 4,
    backgroundColor: "rgba(95, 120, 132, 0.67)"
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
  siDeText: RX.Styles.createTextStyle({
    fontSize: 14,
    color: "#494949",
    // fontWeight: 'bold',
    textAlign: "center",
    justifyContent: "center",
    marginLeft: 54,
    marginTop: 11
  })
};
const pickerItems = [
  {
    label: "Select Captive"
    // value: 'Male'
  },

  {
    label: "Pure",
    value: "Pure"
  },
  {
    label: "Association",
    value: "Association"
  },
  {
    label: "Industrial Insured",
    value: "Industrial Insured"
  },
  {
    label: "Captive Risk Retention Group ",
    value: "Captive Risk Retention Group "
  },
  {
    label: "Protected Cell",
    value: "Protected Cell"
  },
  {
    label: "Captive Reinsurance Company ",
    value: "Captive Reinsurance Company "
  },
  {
    label: "Special Purpose Captive ",
    value: "Special Purpose Captive "
  }
];

const pickerItems1 = [
  {
    label: "Select Business entity"
    // value: ''
  },
  {
    label: "Corporation",
    value: "Corporation"
  },
  {
    label: "LLC",
    value: "LLC"
  },
  {
    label: "Partnership",
    value: "Partnership"
  },
  {
    label: "Limited Partnership",
    value: "Limited Partnership"
  },
  {
    label: "LLP",
    value: "LLP"
  }
];

const pickerItems2 = [
  {
    label: "Select Organization",
    value: ""
  },
  {
    label: "Stock",
    value: "Stock"
  },
  {
    label: "Mutual",
    value: "Mutual"
  },
  {
    label: "Reciprocal",
    value: "Reciprocal"
  }
];

//   alert("Verify otp");
//     window.location = "otp.html";

export default class RegisterPage extends RX.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoText: "",
      todofield: "",
      secureTextEntry: true
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
  onChangeregister = () => {
    console.log("arjun");
    return fetch("http://localhost:8082/registerUser", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },

      body: JSON.stringify({
        name: this.state.name,
        address: this.state.address,
        phoneNumber: this.state.phoneNumber,
        groupname: this.state.groupname,
        email: this.state.email,
        pass: this.state.pass,
        repass: this.state.repass,
        captiveName: this.state.captiveName,
        parent: this.state.parent,
        employeeID: this.state.employeeID,
        captiveType: this.state.captiveType,
        entity: this.state.entity,
        organization: this.state.organization,
        captiveAddress: this.state.captiveAddress
      })
    })
      .then(result => result.json())
      .then(result => {
        var res = result;
        // var data = responseJson.result.docs[0].Records.submitID
        console.log("registered------------>", res);
        // console.log("logesh------------>", data);
        // var val = "SubmitId: " + res

        swal("User Registered Successfully", res);

        // var resJson1 = JSON.stringify(res)
        // console.log(resJson1)
      });
  };

  onChangegroupname = value => {
    this.setState({ groupname: value });

    console.log(this.state.groupname, "groupname");
  };

  onChangename = value => {
    this.setState({ name: value });

    console.log(this.state.name, "name");
  };
  onChangeaddress = value => {
    this.setState({ address: value });

    console.log(this.state.address, "address");
  };
  onChangephoneNumber = value => {
    this.setState({ phoneNumber: value });

    console.log(this.state.phoneNumber, "phoneNumber");
  };
  onChangeemail = value => {
    this.setState({ email: value });

    console.log(this.state.email, "email");
  };
  onChangepass = value => {
    this.setState({ pass: value });

    console.log(this.state.pass, "pass");
  };
  onChangerepass = value => {
    this.setState({ repass: value });

    console.log(this.state.repass, "repass");
  };
  onChangecaptiveName = value => {
    this.setState({ captiveName: value });

    console.log(this.state.captiveName, "captiveName");
  };
  onChangeparent = value => {
    this.setState({ parent: value });

    console.log(this.state.parent, "parent");
  };

  onChangeemployeeID = value => {
    this.setState({ employeeID: value });

    console.log(this.state.employeeID, "employeeID");
  };
  onChangecaptiveType = value => {
    this.setState({ captiveType: value });

    console.log(this.state.captiveType, "captiveType");
  };
  onChangeentity = value => {
    this.setState({ entity: value });

    console.log(this.state.entity, "entity");
  };
  onChangeorganization = value => {
    this.setState({ organization: value });

    console.log(this.state.organization, "organization");
  };
  onChangecaptiveAddress = value => {
    this.setState({ captiveAddress: value });

    console.log(this.state.captiveAddress, "captiveAddress");
  };

  componentDidMount() {}
  basicDetails = () => {
    this.setState({ basicDetails: true });
    this.setState({ insureDetails: false });
  };
  insureDetails = () => {
    this.setState({ basicDetails: false });
    this.setState({ insureDetails: true });
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
          <RX.Button
            style={styles.regbtn}
            style={{ color: "white", marginTop: -15, marginLeft: 934 }}
            onPress={() => this.basicDetails()}
          >
            <b>Registration</b>
          </RX.Button>
          <RX.Button
            style={styles.loginbtn}
            onPress={this.props.onNavigateRegisterPage}
          >
            <b>Login</b>
          </RX.Button>
        </RX.View>

        <RX.View>
          {this.state.basicDetails ? (
            <div>
              <div class="container" style={styles.divContainer}>
                <div class="jumbotron" style={styles.basicDetails}>
                  <h2
                    className="text-center font-weight-bold pt-4 pb-5"
                    style={{ marginTop: -19, fontSize: 18 }}
                  >
                    <strong>INSURER REGISTRATION FORM</strong>
                  </h2>
                  <br />
                  <form>
                    <h3
                      className="text-center font-weight-bold pt-4 pb-5"
                      style={{ marginTop: -11, fontSize: 18 }}
                    >
                      <strong>Basic Details</strong>
                    </h3>
                  </form>
                  <form>
                    <div style={{ marginTop: 23 }}>
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
                          Name
                        </label>
                        <RX.TextInput
                          style={styles.Form}
                          placeholder=""
                          value={this.state.name}
                          onChangeText={this.onChangename}
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
                          Address
                        </label>
                        {/* <label for="inputPassword4" style={{color:"#494949",fontFamily:"ProximaNova-Regular",fontSize:"14"}} style={styles.siDeText}>Date of Admission</label>
                                                           
                                                            <input type="date"  placeholder="" style={{marginLeft:20,width:133}}  value={this.state.DOA} onChangeText={this.onChangeDOA} ></input> */}

                        <RX.TextInput
                          type="inputPassword4"
                          style={styles.Form}
                          placeholder=""
                          value={this.state.address}
                          onChangeText={this.onChangeaddress}
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
                          Phone number of contact person
                        </label>

                        <RX.TextInput
                          style={styles.Form}
                          placeholder=""
                          value={this.state.phoneNumber}
                          onChangeText={this.onChangephoneNumber}
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
                          Group Name
                        </label>

                        <RX.TextInput
                          type="password"
                          style={styles.Form}
                          value={this.state.groupname}
                          onChangeText={this.onChangegroupname}
                          placeholder=""
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
                          Email Id
                        </label>

                        <RX.TextInput
                          type="email"
                          style={styles.Form}
                          value={this.state.email}
                          onChangeText={this.onChangeemail}
                          placeholder=""
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
                          Password
                        </label>

                        <RX.TextInput
                          type="password"
                          style={styles.Form}
                          value={this.state.pass}
                          onChangeText={this.onChangepass}
                          placeholder=""
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
                          Confirm password
                        </label>

                        <RX.TextInput
                          type="password"
                          style={styles.Form}
                          value={this.state.repass}
                          onChangeText={this.onChangerepass}
                          placeholder=""
                        />
                      </div>
                    </div>
                  </form>

                  <RX.Button
                    style={styles.nxtbut}
                    onPress={() => this.insureDetails()}
                  >
                    {"Next"}
                  </RX.Button>
                </div>
              </div>
            </div>
          ) : null}

          {this.state.insureDetails ? (
            <div>
              <div class="container" style={styles.divContainer}>
                <div class="jumbotron" style={styles.basicDetails}>
                  <form>
                    <h4
                      className="text-center font-weight-bold pt-4 pb-5"
                      style={{ marginTop: -19, fontSize: 18 }}
                    >
                      <strong>INSURER REGISTRATION FORM</strong>
                    </h4>
                  </form>
                  <br />
                  <form>
                    <h3
                      className="text-center font-weight-bold pt-4 pb-5"
                      style={{ marginTop: -11, fontSize: 18 }}
                    >
                      <strong>Insure Details</strong>
                    </h3>
                  </form>
                  <form>
                    <div style={{ marginTop: 8 }}>
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
                          Name of proposed Captive
                        </label>
                        <RX.TextInput
                          style={styles.Form}
                          placeholder=""
                          value={this.state.captiveName}
                          onChangeText={this.onChangecaptiveName}
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
                          Parent or Sponsor
                        </label>

                        <RX.TextInput
                          style={styles.Form}
                          placeholder=""
                          value={this.state.parent}
                          onChangeText={this.onChangeparent}
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
                          Federal employee ID number
                        </label>

                        <RX.TextInput
                          style={styles.Form}
                          placeholder=""
                          value={this.state.employeeID}
                          onChangeText={this.onChangeemployeeID}
                        />
                      </div>
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
                          Type of Captive
                        </label>

                        <RX.Picker
                          style={styles.picker1}
                          items={pickerItems}
                          selectedValue={this.state.captiveType}
                          onValueChange={this.onChangecaptiveType}
                        />
                      </div>

                      <div style={{ marginTop: 6 }}>
                        <label
                          for="inputEmail4"
                          style={{
                            color: "#494949",
                            fontFamily: "ProximaNova-Regular",
                            fontSize: "14"
                          }}
                          style={styles.siDeText}
                        >
                          Business entity form
                        </label>

                        <RX.Picker
                          style={styles.picker2}
                          items={pickerItems1}
                          selectedValue={this.state.entity}
                          onValueChange={this.onChangeentity}
                        />
                      </div>
                      <div style={{ marginTop: 6 }}>
                        <label
                          for="inputEmail4"
                          style={{
                            color: "#494949",
                            fontFamily: "ProximaNova-Regular",
                            fontSize: "14"
                          }}
                          style={styles.siDeText}
                        >
                          Organization form
                        </label>

                        <RX.Picker
                          style={styles.picker3}
                          items={pickerItems2}
                          selectedValue={this.state.organization}
                          onValueChange={this.onChangeorganization}
                        />
                      </div>
                    </div>
                    <div style={{ marginTop: 6 }}>
                      <label
                        for="inputPassword4"
                        style={{
                          color: "#494949",
                          fontFamily: "ProximaNova-Regular",
                          fontSize: "14"
                        }}
                        style={styles.siDeText}
                      >
                        Address of captive's principal place of business
                      </label>

                      <RX.TextInput
                        type="inputPassword4"
                        style={styles.Form}
                        placeholder=""
                        value={this.state.captiveAddress}
                        onChangeText={this.onChangecaptiveAddress}
                      />
                    </div>
                  </form>
                  <RX.Button
                    style={styles.backbtn}
                    onPress={() => this.basicDetails()}
                  >
                    {"Back"}
                  </RX.Button>

                  <RX.Button
                    style={styles.submitbtn}
                    onPress={() => {
                      this.onChangeregister();
                    }}
                  >
                    {"Submit"}
                  </RX.Button>
                </div>
              </div>
            </div>
          ) : null}
        </RX.View>
      </RX.ScrollView>
    );
  }
}
