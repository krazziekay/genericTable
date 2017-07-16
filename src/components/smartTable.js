/**
 * Created by rosia on 7/16/17.
 */
import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

class SmartTable extends Component {
    constructor() {
        super();
        this.state = {
        }
    }

    componentDidMount() {
        this.setState({
            tableDisplayHeaders: this.props.displayHeaders,
            tableData: this.props.data
        });
    }

    displayChildren = (data, index) => {
        console.log("Display the data for index: ", index, " with the data as : ", data);
        this.setState({
            [`child_${index}_display`]: !this.state[`child_${index}_display`],
            [`child_${index}`]: data
        });
    }

    interchangeColumns =(source, destination) => {
        let changedHeaders = [].concat(this.state.tableDisplayHeaders);
        let temp = changedHeaders[source];
        changedHeaders[source] = changedHeaders[destination];
        changedHeaders[destination] = temp;
        this.setState({
            tableDisplayHeaders: changedHeaders
        })
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 /*
 Drag Events
  */
    drag = (event) => {
        event.dataTransfer.setData('source', event.target.id);
    }

    drop = (event) => {
        let source = event.dataTransfer.getData('source');
        let target = event.target.id;
        this.interchangeColumns(source, target);
    }

    allowDrop = (event) => {
        event.preventDefault();
    }
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    render() {
        return (
            <div>
                <Table responsive>
                    <thead>
                        <tr>
                            {
                                this.state.tableDisplayHeaders ?
                                    this.state.tableDisplayHeaders.map( (column, index) =>
                                        <th id={index} draggable="true"
                                            onDragStart={this.drag}
                                            onDrop={this.drop}
                                            onDragOver={this.allowDrop}>{column.displayName}</th>
                                    ) : null
                            }
                        </tr>
                    </thead>

                    {
                        this.state.tableData ?
                            this.state.tableData.map( (row, rowIndex) =>
                                    <tbody>
                                        <tr onClick={() => this.displayChildren(row, rowIndex)}>
                                            {
                                                this.state.tableDisplayHeaders.map( (record) =>
                                                    <td>{row[record.fieldName]}</td>
                                                )
                                            }
                                        </tr>
                                        <tr>
                                            {
                                                this.state[`child_${rowIndex}_display`] ?
                                                    <td colSpan={this.state.tableDisplayHeaders.length}>
                                                        {
                                                            this.state[`child_${rowIndex}`].children ?
                                                                <div>
                                                                    <SmartTable data={this.state[`child_${rowIndex}`].children} displayHeaders={this.state.tableDisplayHeaders} />
                                                                </div> : null
                                                        }
                                                    </td> : null
                                            }
                                        </tr>
                                    </tbody>
                            ) : null
                    }
                </Table>
            </div>
        );
    }
}

export default SmartTable;