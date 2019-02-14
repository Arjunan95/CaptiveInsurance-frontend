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
    marginTop: -34,
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
var Policyid;
var responseJson;
var result;
var products;
var filterdata;
export default class CreatePolicy extends RX.Component {
  constructor(props) {
    super(props);
    propsresult = this.props.navigatorRoute.bulkdata;
    console.log("Props console:", propsresult);
    // var allressult = propsresult.Record
    // console.log("sample", allressult)
    //this.setstate({ products: propsresult })
    this.state = {
      search: "",
      initialItems: propsresult,
      items: [],
      // products: [{ id: 1, title: 'Etherum', body: '123' }, { id: 2, title: 'Hyperledger', body: '123' },
      // { id: 3, title: 'Blockchain', body: '123' }, { id: 4, title: 'composer', body: '123' }]
      propsresult: propsresult
    };

    console.log("state console:", propsresult);
  }

  //============================SubmitID Filter Start================================
  filterListSubId = event => {
    var updatedList = this.state.initialItems;
    console.log("Filter subid console", updatedList);
    updatedList1 = updatedList.filter(function(item) {
      return (
        item.Record.submitID
          .toLowerCase()
          .search(event.target.value.toLowerCase()) !== -1
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
        item.Record.patientData.NAME.toLowerCase().search(
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
        item.Record.patientData.AGE.toLowerCase().search(
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
        item.Record.patientData.SEX.toLowerCase().search(
          event.target.value.toLowerCase()
        ) !== -1
      );
    });
    this.setState({ items: updatedList1 });

    console.log("updated list", updatedList1);
  };
  //=============================SEX Filter End==============================

  //=========================Reference Doctor Filter Start===========================
  filterListRefDoc = event => {
    var updatedList = this.state.initialItems;
    console.log("filterconsole", updatedList);
    updatedList1 = updatedList.filter(function(item) {
      return (
        item.Record.patientData.REF_DOC.toLowerCase().search(
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
        item.Record.patientData.claimAmount
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
        item.Record.status
          .toLowerCase()
          .search(event.target.value.toLowerCase()) !== -1
      );
    });
    this.setState({ items: updatedList1 });

    console.log("updated list", updatedList1);
  };
  //=============================status Filter End==============================

  //=========================ApprovedOrReject Filter Start===========================
  filterListApprovedOrReject = event => {
    var updatedList = this.state.initialItems;
    console.log("filterconsole", updatedList);
    updatedList1 = updatedList.filter(function(item) {
      return (
        item.Record.message
          .toLowerCase()
          .search(event.target.value.toLowerCase()) !== -1
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

  renderProducts() {
    console.log("hello");
    // var ldata = this.state.items
    //   console.log("renderproducts console", ldata)
    return this.state.items.map(items => {
      //console.log("Map console", items)
      return (
        <tr key={items.submitID}>
          <td>{items.Record.submitID}</td>
          <td>{items.Record.patientData.NAME}</td>
          {/* <td>{items.Record.patientData.AGE}</td> */}
          <td>{items.Record.patientData.SEX}</td>
          <td>{items.Record.patientData.REF_DOC}</td>
          <td>{items.Record.patientData.claimAmount}</td>
          <td>{items.Record.status}</td>
        </tr>
      );
    });
  }
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
            source={"./src/img//RapidQube logo-01.png"}
            style={[styles.navrqlogo]}
          />
          <RX.Text style={styles.navwelcome}>
            <b>CAPTIVE INSURANCE</b>
          </RX.Text>
        </RX.View>
        <div class="container">
          <h1>All Reports</h1>
          <RX.Button
            style={[styles.button1]}
            onPress={this.props.onNavigateStatusSettlement}
          >
            Home
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
                    ID
                    <tbody>
                      <input
                        type="text"
                        style={styles.inputtable}
                        placeholder="Search"
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
                        placeholder="Search"
                        onChange={this.filterList}
                      />
                    </tbody>
                  </th>
                  {/* <th>Age
                                        <tbody>
                                            <input type="text" style={styles.inputtable} placeholder="Search" onChange={this.filterListAge} />
                                        </tbody>
                                    </th> */}
                  <th>
                    Category
                    <tbody>
                      <input
                        type="text"
                        style={styles.inputtable}
                        placeholder="Search"
                        onChange={this.filterListGender}
                      />
                    </tbody>
                  </th>
                  <th>
                    Description of Damage
                    <tbody>
                      <input
                        type="text"
                        style={styles.inputtable}
                        placeholder="Search"
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
                        placeholder="Search"
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
                        placeholder="Search"
                        onChange={this.filterListStatus}
                      />
                    </tbody>
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
}
