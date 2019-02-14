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
  }),

  image: RX.Styles.createViewStyle({
    height: 50,
    width: 150,
    backgroundColor: "#FFFFFF",
    marginTop: 10,
    marginLeft: -56
  })
};

export default class RegisterPage extends RX.Component {
  constructor(props) {
    super(props);
    (this.state = {
      // all:false,
      // provider:false,
      // payer:false,
      // contract:false
    }),
      (this._translationValue = RX.Animated.createValue(-100));
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
  all = () => {
    this.setState({ provider: true });
    this.setState({ payer: true });
    this.setState({ contract: true });
    this.setState({ record: true });
    this.setState({ topClaims: false });
    this.setState({ topSettlement: false });
  };
  provider = () => {
    this.setState({ provider: true });
    this.setState({ payer: false });
    this.setState({ contract: false });
    this.setState({ record: false });
    this.setState({ topClaims: false });
    this.setState({ topSettlement: false });
  };
  payer = () => {
    this.setState({ provider: false });
    this.setState({ payer: true });
    this.setState({ contract: false });
    this.setState({ record: false });
    this.setState({ topClaims: false });
    this.setState({ topSettlement: false });
  };
  contract = () => {
    this.setState({ provider: false });
    this.setState({ payer: false });
    this.setState({ contract: true });
    this.setState({ record: false });
    this.setState({ topClaims: false });
    this.setState({ topSettlement: false });
  };
  topClaims = () => {
    this.setState({ provider: false });
    this.setState({ payer: false });
    this.setState({ contract: false });
    this.setState({ record: false });
    this.setState({ topClaims: true });
    this.setState({ topSettlement: false });
  };
  topSettlement = () => {
    this.setState({ provider: false });
    this.setState({ payer: false });
    this.setState({ contract: false });
    this.setState({ record: false });
    this.setState({ topClaims: false });
    this.setState({ topSettlement: true });
  };
  contractreg = () => {
    this.setState({ provider: false });
    this.setState({ payer: false });
    this.setState({ contract: true });
  };
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
          <div class="container">
            <form>
              <select
                class="form-control form-control-lg"
                id="lgFormGroupInput"
                style={styles.dropdown}
              >
                <option value="">All</option>
                <option value="">Provider</option>
                <option value="">Payer</option>
                <option value="">Contract</option>
                <div class="form-group row">
                  <label
                    for="lgFormGroupInput"
                    style={styles.sideText}
                    class="col-sm-2 col-form-label col-form-label-lg"
                  />
                </div>
              </select>
            </form>

            <input
              type="text"
              style={styles.searchdetails}
              class="form-control form-control-lg"
              id="lgFormGroupInput"
              placeholder="Search"
            />
          </div>
          <div class="row">
            <div class="col-sm-3 col-md-2 sidebar" style={styles.sidenavbar}>
              <ul class="nav nav-sidebar">
                <li class="active" onClick={() => this.all()}>
                  <a href="#" style={{ color: "white" }}>
                    All <span class="sr-only">(current)</span>
                  </a>
                </li>

                <li onClick={() => this.provider()}>
                  <a href="#" style={{ color: "white" }}>
                    Provider
                  </a>
                </li>

                <li onClick={() => this.payer()}>
                  <a href="#" style={{ color: "white" }}>
                    Payer
                  </a>
                </li>
                <li onClick={() => this.contract()}>
                  <a href="#" style={{ color: "white" }}>
                    Contract
                  </a>
                </li>
              </ul>
              <ul class="nav nav-sidebar">
                <li onClick={() => this.topClaims()}>
                  <a href="#" style={{ color: "white" }}>
                    Top 5 Claims
                  </a>
                </li>
                <li onClick={() => this.topSettlement()}>
                  <a href="#" style={{ color: "white" }}>
                    Top 5 Settlement
                  </a>
                </li>
                <li onClick={() => this.contractreg()}>
                  <a href="#" style={{ color: "white" }}>
                    Contract Registration
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
                {this.state.provider ? (
                  <div class="col-xs-6 col-sm-3 placeholder">
                    <div class="container" style={styles.providerdiv}>
                      <RX.Image
                        source={"./src/img/provider.png"}
                        style={[styles.image]}
                      >
                        <h4 style={{ marginLeft: 113, marginTop: 15 }}>
                          Provider
                        </h4>
                      </RX.Image>

                      <table class="table">
                        <tbody>
                          <tr>
                            <td>Apollo</td>
                          </tr>
                          <tr>
                            <td>Kauvery</td>
                          </tr>
                          <tr>
                            <td>Malar</td>
                          </tr>
                          <tr>
                            <td>Sugam</td>
                          </tr>
                          <tr>
                            <td>Global</td>
                          </tr>
                        </tbody>
                      </table>
                      {/* </div> */}
                    </div>
                  </div>
                ) : null}

                {this.state.payer ? (
                  <div class="col-xs-6 col-sm-3 placeholder">
                    <div class="container" style={styles.providerdiv}>
                      <RX.Image
                        source={"./src/img/payer.png"}
                        style={[styles.image]}
                      >
                        <h4 style={{ marginLeft: 113, marginTop: 15 }}>
                          Payer
                        </h4>
                      </RX.Image>
                      <div class="container">
                        <table class="table">
                          <tbody>
                            <tr>
                              <td>ICICI</td>
                            </tr>
                            <tr>
                              <td>SBI</td>
                            </tr>
                            <tr>
                              <td>INDUSIND</td>
                            </tr>
                            <tr>
                              <td>AXIS</td>
                            </tr>
                            <tr>
                              <td>CANARA</td>
                            </tr>
                          </tbody>
                        </table>
                        {/* </div> */}
                      </div>
                    </div>
                  </div>
                ) : null}
                {this.state.contract ? (
                  <div class="col-xs-6 col-sm-3 placeholder">
                    <div class="container" style={styles.providerdiv}>
                      <RX.Image
                        source={"./src/img/contract.png"}
                        style={[styles.image]}
                      >
                        <h4 style={{ marginLeft: 113, marginTop: 15 }}>
                          Contract
                        </h4>
                      </RX.Image>
                      <div class="contract">
                        <table class="table">
                          <tbody>
                            <tr>
                              <td>Apollo</td>
                            </tr>
                            <tr>
                              <td>Kauvery</td>
                            </tr>
                            <tr>
                              <td>Malar</td>
                            </tr>
                            <tr>
                              <td>Sugam</td>
                            </tr>
                            <tr>
                              <td>Global</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>

              <br />
              {this.state.record ? (
                <div class="container" style={styles.record}>
                  <div class="col-xs-6 col-sm-3 placeholder">
                    <table class="table table-bordered" id="test">
                      <tbody>
                        <tr>
                          <td>Number of Claims</td>
                        </tr>
                        <tr>
                          <td>Claim settlement ratio</td>
                        </tr>
                        <tr>
                          <td>Loss Ratio</td>
                        </tr>
                        <tr>
                          <td>Avg no. of days for Settlement</td>
                        </tr>
                        <tr>
                          <td>Avg amount settled</td>
                        </tr>
                        <tr>
                          <td>Max amount settled</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>{" "}
                </div>
              ) : null}

              {this.state.topClaims ? (
                <div class="container" style={styles.topClaims}>
                  <div class="row">
                    <h4>Top 5 Claims</h4>
                    <table class="table table-bordered" id="test">
                      <thead>
                        <tr>
                          <th>Claim ID</th>
                          <th>Provider</th>
                          <th>Payer</th>
                          <th>Claim Amount</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>#ICI013</td>
                          <td>Kauvery</td>
                          <td>ICICI</td>
                          <td>Rs.244000</td>
                        </tr>
                        <tr>
                          <td>#SBI021</td>
                          <td>Apollo</td>
                          <td>SBI</td>
                          <td>Rs.200114</td>
                        </tr>
                        <tr>
                          <td>#IDU123</td>
                          <td>Sugam</td>
                          <td>INDUSIND</td>
                          <td>Rs.194204</td>
                        </tr>
                        <tr>
                          <td>#CNR012</td>
                          <td>Global</td>
                          <td>Canara</td>
                          <td>Rs.189017</td>
                        </tr>
                        <tr>
                          <td>#AXS031</td>
                          <td>Malar</td>
                          <td>Axis</td>
                          <td>Rs.187744</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              ) : null}
              {this.state.topSettlement ? (
                <div class="container" style={styles.topClaims}>
                  <div class="row">
                    <h4>Top 5 Settlements</h4>
                    <table class="table table-bordered" id="test">
                      <thead>
                        <tr>
                          <th>Claim ID</th>
                          <th>Provider</th>
                          <th>Payer</th>
                          <th>Claim Amount</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>#ICI013</td>
                          <td>Kauvery</td>
                          <td>ICICI</td>
                          <td>Rs.244000</td>
                        </tr>
                        <tr>
                          <td>#SBI021</td>
                          <td>Apollo</td>
                          <td>SBI</td>
                          <td>Rs.200114</td>
                        </tr>
                        <tr>
                          <td>#IDU123</td>
                          <td>Sugam</td>
                          <td>INDUSIND</td>
                          <td>Rs.194204</td>
                        </tr>
                        <tr>
                          <td>#CNR012</td>
                          <td>Global</td>
                          <td>Canara</td>
                          <td>Rs.189017</td>
                        </tr>
                        <tr>
                          <td>#AXS031</td>
                          <td>Malar</td>
                          <td>Axis</td>
                          <td>Rs.187744</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </RX.View>
      </RX.ScrollView>
    );
  }
}
