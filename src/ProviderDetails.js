import React from "react";
import RX from "reactxp";

//import SideNav, { Nav , NavIcon, NavText } from 'react-sidenav';
// import SvgIcon from 'react-icons-kit';

// import { ic_aspect_ratio } from 'react-icons-kit/md/ic_aspect_ratio';
// import { ic_business } from 'react-icons-kit/md/ic_business';
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
  navcontainer: RX.Styles.createViewStyle({
    width: 1440,
    height: 60,
    backgroundColor: "#002d62"
  }),

  navrqlogo: RX.Styles.createViewStyle({
    width: 36,
    height: 32,
    marginBottom: "-5"
  }),

  navwelcome: RX.Styles.createTextStyle({
    fontSize: 15,
    marginLeft: 50,
    color: "white",
    marginTop: -55
  }),
  navsearchcontrach: RX.Styles.createTextStyle({
    fontSize: 15,
    marginLeft: 250,
    color: "white"
  }),
  pastehere: RX.Styles.createTextStyle({
    width: 550,
    height: 90,
    borderRadius: 9,
    marginTop: 20,
    marginLeft: 480
    //   borderColor:'black'
  }),
  calc: RX.Styles.createTextStyle({
    width: 653,
    height: 158,
    borderRadius: 9,
    marginTop: 20,
    marginLeft: 357
    //   borderColor:'black'
  }),
  button1: RX.Styles.createButtonStyle({
    backgroundColor: "rgb(8, 37, 103)",
    borderWidth: 1,
    width: 67,
    height: 30,
    // margin: 200,
    marginLeft: 1050,
    padding: 12,
    borderRadius: 8,
    borderColor: "rgb(8, 37, 103)",
    color: "white"
  }),

  fieldbutton: RX.Styles.createButtonStyle({
    backgroundColor: "rgb(8, 37, 103)",
    borderWidth: 1,
    width: 147,
    height: 30,
    // margin: 200,
    marginLeft: 50,
    padding: 12,

    borderColor: "rgb(8, 37, 103)",
    color: "white"
  }),

  dropdown: RX.Styles.createTextStyle({
    width: 220,
    height: 32,
    borderRadius: 4,
    backgroundColor: "#ffffff",
    marginLeft: 486,
    marginTop: -55
  }),
  dropdowndetail: RX.Styles.createTextStyle({
    width: 220,
    height: 32,
    borderRadius: 4,
    backgroundColor: "#ffffff",
    marginLeft: 730,
    marginTop: -33
  }),

  H4: RX.Styles.createTextStyle({
    marginLeft: 350,
    marginTop: -25,
    marginBottom: 25
  }),

  insidegrid: RX.Styles.createTextStyle({
    height: 230,
    marginTop: 14,
    backgroundColor: "white",
    width: 198,
    color: "white",
    borderColor: "black"
  }),
  grid1: RX.Styles.createTextStyle({
    height: 230,
    marginTop: -442,
    marginLeft: 352,
    backgroundColor: "white",
    width: 198,
    color: "white",
    borderColor: "black"
  }),
  grid2: RX.Styles.createTextStyle({
    height: 230,
    marginTop: -232,
    marginLeft: 579,
    backgroundColor: "white",
    width: 198,
    color: "white",
    borderColor: "black"
  }),
  grid3: RX.Styles.createTextStyle({
    height: 230,
    marginTop: -232,
    marginLeft: 804,
    backgroundColor: "white",
    width: 198,
    color: "white",
    borderColor: "black"
  }),

  gridview: RX.Styles.createTextStyle({
    height: 350,
    marginTop: -17,
    backgroundColor: "white",
    width: 238,
    color: "white"
  })
};

export default class ProviderDetails extends RX.Component {
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

  componentDidMount() {
    let animation = RX.Animated.timing(this._translationValue, {
      toValue: 0,
      easing: RX.Animated.Easing.OutBack(),
      duration: 500
    });

    animation.start();
  }

  render() {
    return (
      <RX.ScrollView style={styles.scroll}>
        <RX.View style={styles.navcontainer}>
          <div>
            <RX.Image
              source={"./src/img//RapidQube logo-01.png"}
              style={[styles.navrqlogo]}
            />
            <RX.Text style={styles.navwelcome}>RAPID SETTLE</RX.Text>

            <h4 style={styles.H4}>
              <font Color="white">Search Contract</font>
            </h4>
            <select
              class="form-control form-control-lg"
              id="lgFormGroupInput"
              style={styles.dropdown}
            >
              <option value="volvo">Provider Name</option>
              <option value="saab">Apollo</option>
              <option value="saab">Kauvery</option>
            </select>
            <select
              class="form-control form-control-lg"
              id="lgFormGroupInput"
              style={styles.dropdowndetail}
            >
              <option value="volvo">Contract ID</option>
              <option value="saab">A#22214</option>
              <option value="saab">K#20113</option>
            </select>
          </div>
        </RX.View>

        <div class="container">
          <div class="col-sm-10">
            <input
              type="email"
              style={styles.pastehere}
              class="form-control form-control-lg"
              id="lgFormGroupInput"
              placeholder="Paste Here"
            />
          </div>
        </div>
        <RX.Button
          style={[styles.button1]}
          onPress={this.props.onNavigateProviderDetails}
        >
          <RX.Text
            style={[
              styles.buttonText,
              this.state.button1Hover && styles.button1TextHover
            ]}
          >
            {"Send"}
          </RX.Text>
        </RX.Button>

        <Grid>
          <div class="jumbotron">
            <div>
              <nav class="navigation">
                <div class="grid-container" style={styles.gridview}>
                  <Grid>
                    <div class="grid-container" style={styles.grid}>
                      <Grid>
                        <div
                          class="form-control form-control-lg"
                          id="lgFormGroupInput"
                          style={styles.insidegrid}
                        >
                          {" "}
                          <br />
                          <li>
                            <a href="">Provider Name</a>
                          </li>
                          <br />
                          <li>
                            <a href="">Patient-Id</a>
                          </li>
                          <br />
                          <li>
                            <a href="">Policy Start Date</a>
                          </li>
                          <br />
                          <li>
                            <a href="">Policy End Date</a>
                          </li>
                          <br />
                          <li>
                            <a href="">Claim Amount</a>
                          </li>
                        </div>
                        <br />
                      </Grid>
                    </div>
                    <RX.Button style={styles.fieldbutton}>
                      <RX.Text>
                        <span
                          class="glyphicon glyphicon-plus"
                          aria-hidden="true"
                        />{" "}
                        {"New field"}
                      </RX.Text>
                    </RX.Button>
                    <br />
                    <RX.Button style={styles.fieldbutton}>
                      <RX.Text>
                        <span
                          class="glyphicon glyphicon-remove"
                          aria-hidden="true"
                        />{" "}
                        {"Remove field"}
                      </RX.Text>
                    </RX.Button>
                  </Grid>
                </div>
              </nav>
            </div>
          </div>
          <div
            class="form-control form-control-lg"
            id="lgFormGroupInput"
            style={styles.grid1}
          >
            <li>
              <a href="">Apollo</a>
            </li>
            <br />

            <li>
              <a href="">Kauvery</a>
            </li>
            <br />
            <li>
              <a href="">sugam</a>
            </li>
            <br />

            <li>
              <a href="">National</a>
            </li>
            <br />
            <li>
              <a href="">MMM</a>
            </li>
          </div>
          <div
            class="form-control form-control-lg"
            id="lgFormGroupInput"
            style={styles.grid2}
          />
          <div
            class="form-control form-control-lg"
            id="lgFormGroupInput"
            style={styles.grid3}
          />

          <div>
            <input
              type="text"
              style={styles.calc}
              class="form-control form-control-lg"
              id="lgFormGroupInput"
              placeholder=""
            />
          </div>
        </Grid>
      </RX.ScrollView>
    );
  }
}
