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
//import { getMaxListeners } from 'cluster';
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
  logincontainer: RX.Styles.createViewStyle({
    width: 417,
    height: 378,
    // marginTop: 37,
    marginLeft: 789,
    // color: "#5f7884ab",
    borderRadius: 7,
    backgroundColor: "#5f7884ab"
  }),
  basicDetails: RX.Styles.createViewStyle({
    width: 682,
    height: 623,
    marginTop: 159,
    marginLeft: 385,
    color: "#1f305d",
    borderRadius: 4,
    backgroundColor: "rgba(129, 187, 53, 0.49)"
  }),
  logForm: RX.Styles.createViewStyle({
    display: "block",
    width: 342,
    height: 39,
    // padding: 6px 12px;
    fontSize: 14,
    // line: 1.42857143;
    // color: "white",
    // backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#08080896",
    borderRadius: 4,
    marginLeft: -3
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
  loginsubmitbtn: RX.Styles.createButtonStyle({
    backgroundColor: "rgb(8, 37, 103)",
    borderWidth: 1,
    width: 132,
    height: 30,
    justifyContent: "center",
    textAlign: "CENTER",
    alignSelf: "center",
    // margin: 200,
    marginLeft: 101,
    marginTop: -17,
    padding: 12,
    borderRadius: 8,
    borderColor: "rgb(8, 37, 103)",
    color: "white"
  })
};
var res2;
var groupname;
var groupname1;
export default class Login extends RX.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoText: "",
      todofield: "",
      secureTextEntry: true,
      email: "",
      password: ""
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

  componentDidMount() {}

  onChangeloginUser = () => {
    console.log("Enter in to the loginUser Function");
    return fetch("http://localhost:8082/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },

      body: JSON.stringify({
        email: this.state.email,
        pass: this.state.password
      })
    })
      .then(res => res.json())
      .then(responseJson => {
        var res1 = responseJson;
        console.log("Entire login console", res1);

        var res = responseJson.result.users.name;
        console.log("Login console", res);

        groupname = responseJson.result.users.groupname;
        this.setState({ groupname: groupname });
        console.log("groupname console", groupname);

        var res2 = responseJson.result.users.email;
        console.log("Login console", res2);

        var login = responseJson.message;

        var responseJson = JSON.stringify(res2);
        console.log("login console");
        // submit();
        if (res2 == "admin@gmail.com") {
          console.log("hitting");
          fetch("http://localhost:8082/getCount", {
            method: "GET"
          })
            .then(response => response.json())
            .then(responseJson => {
              var rescountvalue = responseJson.count;
              // var responseJson = JSON.stringify(res)
              console.log("policy test", rescountvalue);
              // swal("Policy created succesfully" + "\n", "Policy Number:" + "" + res1)
              //console.log("response", responseJson)
              return fetch("http://localhost:8082/Notification", {
                method: "GET",
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json"
                }
              })
                .then(result => result.json())
                .then(result => {
                  console.log("notify data =======>", result);
                  // var rs1 = result.length
                  // console.log("rs1 length", rs1)
                  var array = [];
                  if (result.message == null) {
                    console.log("login sucess");
                  } else {
                    // var res1 = result.message.length
                    //  console.log("res1 length", result.message.length)
                    //console.log(result.message[0].Record.status)
                    // function search(statusKey, result) {

                    for (var i = 0; i < result.message.length; i++) {
                      //var valuemessage = result.message[i]

                      // if (console.log("login sucessfully")) {

                      // } else (result.message[i].Record.status == "Initiated")
                      // {
                      console.log("welcome");
                      array.push(result.message[i].Record);
                      console.log("login sucessfully");

                      // }
                    }
                  }

                  console.log("===>", array);
                  //let obj = result.find(o => o.status === 'intiated');
                  // console.log()
                  // var search
                  // var resultObject = search("PCI283", res1);
                  // console.log("enter in to the login page:resultObject", resultObject)

                  var resval = res1.Record;
                  console.log("login page:res", res);
                  this.props.onNavigateLogin(res, resval, rescountvalue, array);
                  alert(login);
                });
            });
        } else if (res2 == "underwriter@gmail.com") {
          console.log("Underwriter console");
          fetch("http://localhost:8082/getCount3", {
            method: "GET"
          })
            .then(response => response.json())
            .then(responseJson => {
              var rescountvalue = responseJson.count3;
              // var responseJson = JSON.stringify(res)
              console.log("policy test", rescountvalue);
              // swal("Policy created succesfully" + "\n", "Policy Number:" + "" + res1)
              //console.log("response", responseJson)

              //window.location = "AdminPage.js";
              this.props.onNavigateUnderwriterpagelogin(rescountvalue, res);
              alert(login);
            });
          // this.transitionToRoute('underwriter');
        } else {
          console.log("hitting");
          fetch("http://localhost:8082/getCount1", {
            method: "GET"
          })
            .then(response => response.json())
            .then(responseJson => {
              var rescountvalue1 = responseJson.count1;
              // var responseJson = JSON.stringify(res)
              console.log("policy test", rescountvalue1);
              // swal("Policy created succesfully" + "\n", "Policy Number:" + "" + res1)
              //console.log("response", responseJson)

              //window.location = "AdminPage.js";
              // this.props.onNavigateLoginUser(res, rescountvalue1)
              // alert(login)

              fetch("http://localhost:8082/getRating", {
                method: "GET"
              })
                .then(response => response.json())
                .then(responseJson => {
                  var grouprating = responseJson.rating;
                  // var responseJson = JSON.stringify(res)
                  console.log("Group rating", grouprating);
                  // swal("Policy created succesfully" + "\n", "Policy Number:" + "" + res1)
                  //console.log("response", responseJson)

                  //window.location = "AdminPage.js";
                  // this.props.onNavigateLoginUser(res,rescountvalue1,grouprating)
                  // alert(login)

                  fetch("http://localhost:8082/getGroupName", {
                    method: "POST",
                    headers: {
                      Accept: "application/json",
                      "Content-Type": "application/json"
                    },

                    body: JSON.stringify({
                      groupname: this.state.groupname
                    })
                  })
                    .then(response => response.json())
                    .then(responseJson => {
                      groupname1 = responseJson;
                      console.log("group name console", groupname1);

                      this.props.onNavigateLoginUser(
                        res,
                        rescountvalue1,
                        grouprating,
                        groupname1
                      );

                      alert("Login Succesfully");
                    });
                });
            });

          //this.props.onNavigateLogingroupname(groupname)
          //alert(login)
          // console.log("response", responseJson)
          // this.props.onNavigateLogin(res)
        }
      });
    // .catch(function () {
    //     console.log("error");
    // });
  };
  // submit() {
  //     console.log("submit console", res2)
  //     if (responseJson == "admin@gmail.com") {
  //         //window.location = "AdminPage.js";
  //         this.props.onNavigateLogin(res)
  //     } else {
  //         //window.location = "Userpage.js";
  //         // window.location = "Userpage.js";
  //         this.props.onNavigateLoginUser(res)

  //     }
  // }
  handleChange = event => {
    this.setState({
      email: event.target.value
    });
  };
  handleChange1 = event => {
    this.setState({
      password: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
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
            style={{ color: "white", marginTop: -15, marginLeft: 1110 }}
            onPress={this.props.onNavigateLoginHome}
          >
            <b>Registration</b>
          </RX.Button>
          {/* <RX.Button  style={ styles.loginbtn }><b>Login</b></RX.Button> */}
        </RX.View>

        <RX.View>
          <h3 style={{ marginLeft: 948, marginTop: 53 }}>
            <b>LOGIN</b>
          </h3>
          <div class="container" style={styles.logincontainer}>
            <div class="row main">
              {/* <br/> <br/> */}

              <div class="main-login main-center" style={{ marginLeft: 41 }}>
                <br />
                <br />
                <form
                  class=""
                  method="post"
                  action="#"
                  onSubmit={this.handleSubmit}
                >
                  <div class="form-group">
                    <label for="email" class="cols-sm-2 control-label">
                      {" "}
                      Email
                    </label>
                    <FormControl
                      autoFocus
                      type="email"
                      style={{ width: 333 }}
                      value={this.state.email}
                      onChange={this.handleChange}
                      placeholder="Enter Email Id"
                    />
                    {/* <RX.TextInput type="email" style={styles.logForm} value={this.state.email}
                                    onChange={this.handleChange} /> */}
                  </div>{" "}
                  <br />
                  <div>
                    <label for="password" class="cols-sm-2 control-label">
                      Password
                    </label>
                    <FormControl
                      value={this.state.password}
                      onChange={this.handleChange1}
                      type="password"
                      style={{ width: 333 }}
                      placeholder="Enter password"
                    />

                    {/* <RX.TextInput type="email" style={styles.logForm}  value={this.state.password}
                                    onChange={this.handleChange1} /> */}
                  </div>
                  <br />
                  <br />
                  <RX.Button
                    style={styles.loginsubmitbtn}
                    onPress={() => {
                      this.onChangeloginUser();
                    }}
                  >
                    Login{" "}
                  </RX.Button>{" "}
                  <br /> <br />
                  <div class="form-group ">
                    <label>
                      <input
                        type="checkbox"
                        checked="checked"
                        name="remember"
                      />{" "}
                      Remember me
                    </label>
                    <span class="psw" style={{ marginLeft: 107 }}>
                      <a href="#">
                        <b>Forgot password?</b>
                      </a>
                    </span>
                  </div>
                </form>{" "}
              </div>
            </div>
          </div>
        </RX.View>
      </RX.ScrollView>
    );
  }
}
