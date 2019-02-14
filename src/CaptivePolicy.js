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
  navwelcome2: RX.Styles.createTextStyle({
    fontSize: 15,
    marginLeft: 1182,
    marginTop: -22,
    color: "white"
  }),
  navwelcomehome: RX.Styles.createTextStyle({
    fontSize: 15,
    marginLeft: 1000,
    marginTop: -22,
    color: "white"
  }),
  navwelcome3: RX.Styles.createTextStyle({
    fontSize: 15,
    marginLeft: 982,
    backgroundColor: "rgb(8, 37, 103)",
    // marginTop: -22,
    color: "white",
    borderWidth: 1,
    borderRadius: 8,
    width: 64,
    textAlign: "center"
  }),
  button1: RX.Styles.createButtonStyle({
    backgroundColor: "rgb(8, 37, 103)",
    borderWidth: 1,
    width: 72,
    height: 5,
    marginLeft: 1035,
    marginTop: -34,
    marginBottom: -23,
    padding: 12,
    borderRadius: 8,
    borderColor: "rgb(8, 37, 103)",
    color: "white",
    textAlign: "center"
  }),
  button2: RX.Styles.createButtonStyle({
    backgroundColor: "rgb(8, 37, 103)",
    borderWidth: 1,
    width: 72,
    height: 5,
    marginLeft: 921,
    marginTop: -25,
    marginBottom: -23,
    padding: 12,
    borderRadius: 8,
    borderColor: "rgb(8, 37, 103)",
    color: "white",
    textAlign: "center"
  }),
  pack: RX.Styles.createButtonStyle({
    marginLeft: 654,
    marginTop: -295
  }),
  treat: RX.Styles.createButtonStyle({
    marginLeft: 335,
    marginTop: -276
  }),
  inputtable: RX.Styles.createTextStyle({
    width: 119
  }),
  inputtablerule: RX.Styles.createTextStyle({
    width: 281
  }),
  table: RX.Styles.createTextStyle({
    marginLeft: -15
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
var policyid;
var responseJson;
var result;
var products;
var filterdata;
var registername;
export default class CreatePolicy extends RX.Component {
  constructor(props) {
    super(props);
    gettingresult = this.props.navigatorRoute.res;
    propsresult = gettingresult.message;
    console.log("Props console:", propsresult);

    registername = this.props.navigatorRoute.regname;
    console.log("Captive page console: reg name", registername);
    //propsresult = gettingresult.message

    // var allressult = propsresult.Record
    // console.log("sample", allressult)
    //this.setstate({ products: propsresult })
    this.state = {
      search: "",
      propsresult: propsresult,
      items: [],
      registername: registername
      // products: [{ id: 1, title: 'Etherum', body: '123' }, { id: 2, title: 'Hyperledger', body: '123' },
      // { id: 3, title: 'Blockchain', body: '123' }, { id: 4, title: 'composer', body: '123' }]
      //propsresult: propsresult
    };

    console.log("state console:", propsresult);
  }

  //============================policyid Filter Start================================
  filterListcappolicyid = event => {
    var updatedList = this.state.propsresult;

    console.log("Filter policyid console", updatedList);

    updatedList = updatedList.filter(function(item) {
      return (
        item.policyid.toLowerCase().search(event.target.value.toLowerCase()) !==
        -1
      );
    });
    this.setState({ items: updatedList });

    console.log("filter policyid updated list", updatedList);
  };

  //=============================policyid filter End========================================

  //=========================Policy Name Filter Start===========================
  filterListPolicyName = event => {
    var updatedList = this.state.propsresult;
    console.log("filterconsole", updatedList);
    updatedList1 = updatedList.filter(function(item) {
      return (
        item.policyName
          .toLowerCase()
          .search(event.target.value.toLowerCase()) !== -1
      );
    });
    this.setState({ items: updatedList1 });

    console.log("updated list", updatedList1);
  };
  //============================= Policy Name Filter End==============================

  //=========================policycatagory Filter Start===========================
  filterListpolicycatagory = event => {
    var updatedList = this.state.propsresult;
    console.log("filterconsole", updatedList);
    updatedList1 = updatedList.filter(function(item) {
      return (
        item.policycatagory
          .toLowerCase()
          .search(event.target.value.toLowerCase()) !== -1
      );
    });
    this.setState({ items: updatedList1 });

    console.log("updated list", updatedList1);
  };
  //=============================policycatagory Filter End==============================

  //=========================rules Filter Start===========================
  filterListrules = event => {
    var updatedList = this.state.propsresult;
    console.log("filterconsole", updatedList);
    updatedList1 = updatedList.filter(function(item) {
      return (
        item.rules.toLowerCase().search(event.target.value.toLowerCase()) !== -1
      );
    });
    this.setState({ items: updatedList1 });

    console.log("updated list", updatedList1);
  };
  //=============================rules Filter End==============================

  //=========================policypercentage Filter Start===========================
  filterListpolicypercentage = event => {
    var updatedList = this.state.propsresult;
    console.log("filterconsole", updatedList);
    updatedList1 = updatedList.filter(function(item) {
      return (
        item.policypercentage
          .toLowerCase()
          .search(event.target.value.toLowerCase()) !== -1
      );
    });
    this.setState({ items: updatedList1 });

    console.log("updated list", updatedList1);
  };
  //=============================policypercentage Filter End==============================

  //=========================inputradio Filter Start===========================
  filterListinputradio = event => {
    var updatedList = this.state.propsresult;
    console.log("filterconsole", updatedList);
    updatedList1 = updatedList.filter(function(item) {
      return (
        item.inputradio
          .toLowerCase()
          .search(event.target.value.toLowerCase()) !== -1
      );
    });
    this.setState({ items: updatedList1 });

    console.log("updated list", updatedList1);
  };
  //=============================inputradio Filter End==============================

  // initial funtion for loading data
  componentWillMount() {
    this.setState({ items: this.state.propsresult });
  }
  // save = () => {

  //     if (this.refs.check_me.checked == true) {
  //         return this.refs.check_me.value
  //     }

  // }
  handleChange = (data, event) => {
    if (event.target.checked == true) {
      var policyid = data.Key;
      this.setState({ policyid: policyid });
      console.log("policyid console", policyid);

      var policyName = data.Record.policyName;
      this.setState({ policyName: policyName });
      console.log("policyName console", policyName);

      var policycatagory = data.Record.policycatagory;
      this.setState({ policycatagory: policycatagory });
      console.log("policycatagory console", policycatagory);

      var rules = data.Record.rules;
      this.setState({ rules: rules });
      console.log("rules console", rules);

      var policypercentage = data.Record.policypercentage;
      this.setState({ policypercentage: policypercentage });
      console.log("policypercentage console", policypercentage);

      var inputradio = data.Record.inputradio;
      this.setState({ inputradio: inputradio });
      console.log("inputradio console", inputradio);
    } else {
      return alert("Please select atleast one Rule");
    }

    //console.log("i ambeing called" + data.policyid)+ event.target.checked)

    //  alert(items.policyid)
    // if (this.refs.check_me.checked == true) {
    //     this.setState({ value: event.target.value });
    //     console.log("condition console", this.refs.check_me.checked)
    // }
    // var ldata = event.target.value
    // //this.setState({ value: event.target.value });
    // var length = ldata
    // console.log("loop", length)
  };

  // MyForm = React.createClass({
  //     save: function () {
  //         console.log(this.refs.check_me.checked);
  //     },
  renderProducts() {
    console.log("hello");
    // var filtercaptive = this.state.propsresult
    //var capdata = items.captivepolicy
    //console.log("renderproducts console", capdata)
    return this.state.items.map(items => {
      //console.log("Map console", items)
      return (
        <tr key={items.policyid}>
          <td>
            <input
              type="Checkbox"
              ref="check_me"
              onChange={event => this.handleChange(items, event)}
            />
          </td>
          <td>{items.Key}</td>
          <td>{items.Record.policyName}</td>
          <td>{items.Record.policycatagory}</td>
          <td>{items.Record.rules}</td>
          <td>{items.Record.policypercentage}</td>
          <td>{items.Record.inputradio}</td>
        </tr>
      );
    });
  }

  // }
  // )

  // handleChange(e) {
  //     let isChecked = e.target.checked;
  //     // do whatever you want with isChecked value
  // }
  //===================================Maping of Table retrieve bulk records End===================

  // renderProducts() {
  //     console.log("hello")

  //     return filterdata.map(autoApproval => {
  //         return (
  //             <tr key={autoApproval.submitID}>
  //                 <td>{autoApproval.Record.submitID}</td>
  //                 <td>{autoApproval.Record.patientData.NAME}</td>
  //                 <td>{autoApproval.Record.patientData.AGE}</td>
  //                 <td>{autoApproval.Record.patientData.SEX}</td>
  //                 <td>{autoApproval.Record.patientData.REF_DOC}</td>
  //                 <td>{autoApproval.Record.patientData.claimAmount}</td>
  //                 <td>{autoApproval.Record.status}</td>
  //             </tr>
  //         );
  //     })
  // }
  //   renderProducts() {
  //     return this.state.products.map(product => {
  //       return (
  //         <tr key={product.id}>
  //           <td>{product.id}</td>
  //           <td>{product.title}</td>
  //           <td>{product.body}</td>
  //         </tr>
  //       );
  //     })
  //   }

  onChangePost6 = () => {
    console.log("Enter Into the notify create policy");
    return fetch("http://localhost:8082/selectPolicy", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },

      body: JSON.stringify({
        policyid: this.state.policyid,
        policyName: this.state.policyName,
        policycatagory: this.state.policycatagory,
        rules: this.state.rules,
        policypercentage: this.state.policypercentage,
        inputradio: this.state.inputradio,
        registername: this.state.registername
      })
    })
      .then(res => res.json())
      .then(responseJson => {
        var res = responseJson;
        console.log("response", res);
        var res1 = res.result.message;
        var resvar = responseJson.result.result.policyid;
        console.log("--------->", resvar);

        // var responseJson = JSON.stringify(res)
        console.log("Message console", res1);
        swal(res1);
        //this.props.navigation.navigate('Adminpage', { resvar })
        //this.props.onNavigateuserpolicyid(resvar)
        // var rescount = res.result.result.count
        // console.log("Count console notification", rescount)
        // this.props.onNavigateCaptivePolicy(rescount)
        // console.log("response", res)
        // this.props.onNavigateCaptivePolicy(res)
      })
      .catch(function() {
        console.log("error");
      });
  };

  componentDidMount() {}

  // console.log("resultrender", result)
  render() {
    // filterdata = this.state.propsresult.filter(
    //     (autoApproval) => {
    //         return autoApproval.submitID.indexOf(this.state.search) !== -1

    //     }
    // )

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
          <RX.Button
            style={styles.navwelcomehome}
            onPress={this.props.onNavigateusernotifyhome}
          >
            <b>Home</b>
          </RX.Button>
          <RX.Button
            style={styles.navwelcome2}
            onPress={this.props.onNavigateusernotifylogout}
          >
            <b>Logout</b>
          </RX.Button>
        </RX.View>
        <div class="container">
          <h1>Available Policies</h1>
          {/* <RX.Button
                        style={[styles.button1]}

                        onPress={this.props.onNavigateCaptivePolicy}
                    >Home</RX.Button> */}
          {/* <RX.Button style={styles.navwelcome2}  onPress={() => this.onChangePost6()}>
                        <b>Submit</b>
                    </RX.Button> */}
          <RX.Button
            style={styles.navwelcome3}
            onPress={() => this.onChangePost6()}
          >
            Submit
          </RX.Button>
        </div>

        <RX.View>
          <div className="container">
            <br />
            <br />

            <table className="table" style={styles.table}>
              <thead>
                <tr class="header" id="row">
                  <th>
                    Checkbox:
                    {/* <tbody>
                                            <input type="Checkbox" placeholder="Search" onChange={this.filterListcappolicyid} />
                                        </tbody> */}
                  </th>
                  <th>
                    Policy ID:
                    {/* <tbody>
                                            <input type="text" style={styles.inputtable} placeholder="Search" onChange={this.filterListcappolicyid} />
                                        </tbody> */}
                  </th>
                  <th>
                    Policy Name:
                    {/* <tbody>
                                            <input type="text" style={styles.inputtable} placeholder="Search" onChange={this.filterListPolicyName} />
                                        </tbody> */}
                  </th>
                  <th>
                    Policy Category:
                    {/* <tbody>
                                            <input type="text" style={styles.inputtable} placeholder="Search" onChange={this.filterListpolicycatagory} />
                                        </tbody> */}
                  </th>
                  <th>
                    Payment Rule:
                    {/* <tbody>
                                            <input type="text" style={styles.inputtablerule} placeholder="Search" onChange={this.filterListrules} />
                                        </tbody> */}
                  </th>
                  <th>
                    Premium Percentage:
                    {/* <tbody>
                                            <input type="text" style={styles.inputtable} placeholder="Search" onChange={this.filterListpolicypercentage} />
                                        </tbody> */}
                  </th>
                  <th>
                    Collateral:
                    {/* <tbody>
                                            <input type="text" style={styles.inputtable} placeholder="Search" onChange={this.filterListinputradio} />
                                        </tbody> */}
                  </th>
                </tr>
              </thead>

              <tbody>{this.renderProducts()}</tbody>
            </table>
          </div>
        </RX.View>
      </RX.ScrollView>
    );
  }
  // MyForm = React.createClass({
  //     save: function () {
  //         console.log(this.refs.check_me.checked);
  //     }
  // })
}
