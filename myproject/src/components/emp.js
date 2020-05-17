import EMPDATA from './employlist.js';
import React from 'react';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
} from "react-router-dom";





class EmpDasbboard extends React.Component {


  constructor(props) {
    super(props);

    this.state = {

      emps: EMPDATA.emps ,

      errors : {}


    };
    console.log(this.state.emps,"vijay")

  }



  render() {
    console.log(this.state.emps,"vijay")

    const errors = this.state.errors;

    return (

      <div>

        <Switch>


          <Route path="/">
            <div>
                <h3> Employee Dashboard</h3>
            <table className="table table-border">
                <thead>
            <tr>
            <th> Id </th>
            <th> Name </th>
            <th> Age </th>
            <th> Gender </th>
            <th> Email </th>
            <th> Phone Number </th>
            </tr>
            </thead>
            <tbody>

              {this.state.emps.map(ls =>
            <tr key={ls.id}>
            <td> {ls.id} </td>
            <td> {ls.name} </td>
            <td> {ls.age} </td>
            <td> {ls.gender} </td>
            <td> {ls.email} </td>
            <td> {ls.phoneNo} </td>
            
            </tr>
              )}


            </tbody>

            </table>




            </div>
          </Route>

        </Switch>
      </div>

    );
  }
}
export default  EmpDasbboard ;

