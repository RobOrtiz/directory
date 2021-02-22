import React, { Component } from 'react'  
import EmployeeChart from 'react-bootstrap-table-next';  
import axios from 'axios';  

export class EmployeeChart extends Component {  
    state = {  
            employee: [],  
            columns: [{  
            dataField: 'Id',  
            text: 'Id'  
            },  
            {  
                dataField: 'Name',  
                text: 'Name',  
                sort:true  
            }, {  
                dataField: 'Phone',  
                text: 'Phone',  
                sort: true  
            },  
            {  
            dataField: 'EmailAddress',  
            text: 'EmailAddress',  
            sort: true  
            },  
            {  
            dataField: 'BirthDate',  
            text: 'BirthDate',  
            sort: true  
            }]  
            }  
            componentDidMount() {    
            axios.get('https://randomuser.me/api/?results=200&nat=us').then(response => {    
                console.log(response.data);    
                this.setState({    
                    employee: response.data    
                });    
            });    
            }   
    render() {  
            return (  
                    <div className="container">  
                    <div class="row" className="hdr">    
                    <div class="col-sm-12 btn btn-info">    
                    <h2>Employee Directory</h2>
                        </div>    
                        </div>    
                    <div  style={{ marginTop: 20 }}>  
                    <EmployeeChart   
                    striped  
                    hover  
                    keyField='id'   
                    data={ this.state.employee }   
                    columns={ this.state.columns } ></EmployeeChart>  
                    </div>  
                    </div>  
            )  
    }  
}  
  
export default EmployeeChart