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
  button1: RX.Styles.createButtonStyle({
    backgroundColor: "rgb(8, 37, 103)",
    borderWidth: 1,
    width: 72,
    height: 5,
    marginLeft: 1035,
    marginBottom: -23,
    padding: 12,
    borderRadius: 8,
    borderColor: "rgb(8, 37, 103)",
    color: "white",
    marginTop: -40,
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
    width: 119,
    fontWeight: 100
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
  }),
  InputSelectorCopy: RX.Styles.createTextStyle({
    borderWidth: 1
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
  })
};

var resJson1;
var res;
var Policyid;
var responseJson;
var result;
var products;
var filterdata;
let re;
let FilteredList;
let List;
var filterdata;
var updatedList1;
var sortBy;
var desc;
export default class History extends RX.Component {
  constructor(props) {
    super(props);
    tparesult = this.props.navigatorRoute.res;
    console.log("Props console:", tparesult);
    //this.setstate({ products: tparesult })
    this.state = {
      search: "",
      initialItems: tparesult,
      items: [],
      // products: [{ id: 1, title: 'Etherum', body: '123' }, { id: 2, title: 'Hyperledger', body: '123' },
      // { id: 3, title: 'Blockchain', body: '123' }, { id: 4, title: 'composer', body: '123' }]
      tparesult: tparesult
    };
    this.sortBy = this.sortBy.bind(this);
    console.log("state console:", tparesult);
  }

  sortBy(key) {
    console.log("test key", key);
    this.setState({
      tparesult: tparesult.sort()
    });
    console.log("hiiiii", tparesult);
  }

  updateSearch(event) {
    this.setState({ search: event.target.value.substr(0, 20) });
  }

  // sortBy = (key) => {
  //     var updatedList = this.state.initialItems;
  //     console.log("Filter subid console", key)
  //     updatedList1 = updatedList.sort(function (item) {
  //          item.patientData.AGE.sort(
  //             key.sort()
  //         ) !== -1;
  //     });
  //     this.setState({ items: updatedList.sortBy(desc) });

  //     console.log("filter submit updated list", updatedList)

  // }
  // sortBy(key){
  //     console.log("key test",key)
  //     this.setState({
  //         tparesult:tparesult.sort((a,b)=>a<b)
  //     })
  // }

  // updatesearch(event) {
  //     // console.log(value)
  //     // var stable=this.state.search;
  //     // console.log("Update function console",stable)
  //     this.setState({ search: event.target.value });
  //     // console.log(this.state.search, "search")
  // }
  // function for filtering given input

  // filterSearch = (event) => {
  //     var updatedList = this.state.initialItems;
  //     console.log("Filter subid console", updatedList)
  //     updatedList1 = updatedList.filter(function (item) {
  //         return item.toLowerCase().search(
  //             event.target.value.toLowerCase()) !== -1;
  //     });
  //     this.setState({ items: updatedList1 });

  //     console.log("filter submit updated list", updatedList1)

  // }
  //============================SubmitID Filter Start================================
  filterListSubId = event => {
    var updatedList = this.state.initialItems;
    console.log("Filter subid console", updatedList);
    updatedList1 = updatedList.filter(function(item) {
      return (
        item.submitID.toLowerCase().search(event.target.value.toLowerCase()) !==
        -1
      );
    });
    this.setState({ items: updatedList1 });

    console.log("filter submit updated list", updatedList1);
  };

  //=============================SubmitID filter End========================================

  //=========================Name Filter Start===========================
  filterList = event => {
    var updatedList = this.state.initialItems;
    console.log("filterconsole", updatedList);
    updatedList1 = updatedList.filter(function(item) {
      return (
        item.patientData.NAME.toLowerCase().search(
          event.target.value.toLowerCase()
        ) !== -1
      );
    });
    this.setState({ items: updatedList1 });

    console.log("updated list", updatedList1);
  };
  //=============================Name Filter End==============================

  //=========================AGE Filter Start===========================
  filterListAge = event => {
    var updatedList = this.state.initialItems;
    console.log("filterconsole", updatedList);
    updatedList1 = updatedList.filter(function(item) {
      return (
        item.patientData.AGE.toLowerCase().search(
          event.target.value.toLowerCase()
        ) !== -1
      );
    });
    this.setState({ items: updatedList1 });

    console.log("updated list", updatedList1);
  };
  //=============================AGE Filter End==============================

  //=========================SEX Filter Start===========================
  filterListGender = event => {
    var updatedList = this.state.initialItems;
    console.log("filterconsole", updatedList);
    updatedList1 = updatedList.filter(function(item) {
      return (
        item.patientData.SEX.toLowerCase().search(
          event.target.value.toLowerCase()
        ) !== -1
      );
    });
    this.setState({ items: updatedList1 });

    console.log("updated list", updatedList1);
  };

  // filterListPolicyDate = (event) => {
  //     var updatedList = this.state.initialItems;
  //     console.log("filter policy date", updatedList)
  //     updatedList1 = updatedList.filter(function (item) {
  //         return item.created_at.toLowerCase().search(
  //             event.target.value.toLowerCase()) !== -1;
  //     });
  //     this.setState({ items: updatedList1 });

  //     console.log("updated list", updatedList1)

  // }
  //=============================SEX Filter End==============================

  //=========================Reference Doctor Filter Start===========================
  filterListRefDoc = event => {
    var updatedList = this.state.initialItems;
    console.log("filterconsole", updatedList);
    updatedList1 = updatedList.filter(function(item) {
      return (
        item.patientData.REF_DOC.toLowerCase().search(
          event.target.value.toLowerCase()
        ) !== -1
      );
    });
    this.setState({ items: updatedList1 });

    console.log("updated list", updatedList1);
  };
  //=============================Reference Doctor Filter End==============================

  //=========================claimAmount Filter Start===========================
  filterListClaimAmount = event => {
    var updatedList = this.state.initialItems;
    console.log("filterconsole", updatedList);
    updatedList1 = updatedList.filter(function(item) {
      return (
        item.patientData.claimAmount
          .toLowerCase()
          .search(event.target.value.toLowerCase()) !== -1
      );
    });
    this.setState({ items: updatedList1 });

    console.log("updated list", updatedList1);
  };
  //=============================claimAmount Filter End==============================

  //=========================status Filter Start===========================
  filterListStatus = event => {
    var updatedList = this.state.initialItems;
    console.log("filterconsole", updatedList);
    updatedList1 = updatedList.filter(function(item) {
      return (
        item.status.toLowerCase().search(event.target.value.toLowerCase()) !==
        -1
      );
    });
    this.setState({ items: updatedList1 });

    console.log("updated list", updatedList1);
  };
  //=============================status Filter End==============================

  // initial funtion for loading data
  componentWillMount() {
    this.setState({ items: this.state.initialItems });
  }

  //========================Mapping table Start============================
  renderProducts() {
    console.log("hello");
    // var ldata = this.state.items
    //   console.log("renderproducts console", ldata)
    return this.state.items.map(items => {
      //console.log("Map console", items)
      return (
        <tr key={items.submitID}>
          <td>{items.submitID}</td>
          <td>{items.patientData.NAME}</td>
          {/* <td>{items.patientData.AGE}</td> */}
          <td>{items.patientData.SEX}</td>
          <td>{items.patientData.REF_DOC}</td>
          <td>{items.claimAmount}</td>
          <td>{items.status}</td>
        </tr>
      );
      // this.filterList()
    });
  }
  //============================================Maping Table End================================

  componentDidMount() {}

  render() {
    filterdata = this.state.tparesult;
    //     .filter(
    //         (tpaApproval) => {
    //             // re = new RegExp(this.state.search, 'g');
    //             //  re=/^+re
    //             g = this.state.search
    //             console.log("searching", g)

    //             //re = ("^P")
    //             re = `^${g}`

    //             // re = "^" + g.toString
    //             //re=re.toString
    //             // re = new RegExp(g, 'g');
    //             console.log("Statedata", re)
    //             // // re = `/^${this.state.search}/`;
    //             // re = new RegExp(re, 'g');
    //             // console.log("Filtereddata", re)
    //             // match = Regex.Match(g, re);
    //             return tpaApproval.patientData.NAME.search(g);

    //         }
    //     )

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
        </RX.View>

        <div class="container">
          <h1>Auto Approved Reports</h1>
          <RX.Button
            style={[styles.button1]}
            onPress={this.props.onNavigateAutoApproval}
          >
            Home
          </RX.Button>
        </div>
        <RX.View>
          {/* <div>
                        <label for="inputPassword4" style={{ color: "#494949", fontFamily: "ProximaNova-Regular", fontSize: "14" }} style={styles.siDeText}>Name</label>
                        <RX.TextInput style={styles.InputSelectorCopy} placeholder="" value={this.state.search} onChangeText={this.updatesearch} />
                    </div> */}
          <Grid>
            <div className="container">
              <br />
              <br />
              {/* <input type="text" style={styles.inputtable} placeholder="Enter Age" onChange={this.filterSearch} /> */}

              {/* <RX.TextInput
                                style={styles.Form}
                                placeholder=""
                                value={this.state.search}
                                onChange={this.updatesearch.bind(this)}
                            /> */}

              <table className="table" id="myTable" style={styles.table}>
                <thead>
                  <tr class="header" id="row">
                    <th>
                      ID
                      <tbody>
                        <input
                          type="text"
                          style={styles.inputtable}
                          placeholder="Enter Id"
                          onChange={this.filterListSubId}
                        />
                      </tbody>
                    </th>
                    <th>
                      Name
                      <tbody>
                        <input
                          type="text"
                          style={styles.inputtable}
                          placeholder="Enter Name"
                          onChange={this.filterList}
                        />
                      </tbody>
                    </th>
                    {/* <th>
                                       
                                            <RX.Button onPress={()=> (this.sortBy())} onChange={this.state.tparesult} sortBy={this.sortBy.bind(this)}>Age</RX.Button>
                                        <tbody>
                                                <input type="text" style={styles.inputtable} placeholder="Enter Age" onChange={this.filterListAge} />
                                            </tbody>
                                        </th> */}
                    {/* <th>Gender
                                        <tbody>
                                                <input type="text" style={styles.inputtable} placeholder="Enter Gender" onChange={this.filterListGender} />
                                            </tbody>
                                        </th> */}
                    <th>
                      Category
                      <tbody>
                        <input
                          type="text"
                          style={styles.inputtable}
                          placeholder="Enter Gender"
                          onChange={this.filterListPolicyDate}
                        />
                      </tbody>
                    </th>
                    <th>
                      Description of Damage
                      <tbody>
                        <input
                          type="text"
                          style={styles.inputtable}
                          placeholder="Enter Name"
                          onChange={this.filterListRefDoc}
                        />
                      </tbody>
                    </th>
                    <th>
                      Claim Amount
                      <tbody>
                        <input
                          type="text"
                          style={styles.inputtable}
                          placeholder="Enter Amount"
                          onChange={this.filterListClaimAmount}
                        />
                      </tbody>
                    </th>
                    <th>
                      Status
                      <tbody>
                        <input
                          type="text"
                          style={styles.inputtable}
                          placeholder="Enter Status"
                          onChange={this.filterListStatus}
                        />
                      </tbody>
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {/* //onChange={this.updatesearch.bind(this)} --input field */}

                  {this.renderProducts()}
                </tbody>
              </table>
            </div>
          </Grid>
        </RX.View>
      </RX.ScrollView>
    );
  }
}
