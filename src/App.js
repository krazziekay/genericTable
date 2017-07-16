import React, { Component } from 'react';
import './App.css';
import jsonSample from './samples/data.json'
import SmartTable from "./components/smartTable";

class App extends Component {
    constructor() {
        super();
        this.state = {
            displayHeaders: [//This array holds those keys whose data is to be viewed in the table
                {
                    fieldName : 'userGrp',//this is used to map and get the actual data
                    displayName : 'User Group'//this gets displayed in the table header
                },
                {
                    fieldName : 'title',
                    displayName : 'User Name'
                },
                {
                    fieldName : 'email',
                    displayName : 'Email Address'
                },
                {
                    fieldName : 'mobile_number',
                    displayName : 'Mobile'
                },
                {
                    fieldName : 'user_group_label',
                    displayName : 'User Group Label'
                }],
            tableData: jsonSample.data
        }
    }

    render() {
        return (
          <div>
            <SmartTable data={this.state.tableData} displayHeaders={this.state.displayHeaders} />
          </div>
        );
    }
}

export default App;
