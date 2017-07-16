import React, { Component } from 'react';
import './App.css';
import jsonSample from './samples/data.json'
import SmartTable from "./components/smartTable";

class App extends Component {
    constructor() {
        super();
        this.state = {
            displayHeaders: [
                {
                    fieldName : 'userGrp',
                    displayName : 'User Group'
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
