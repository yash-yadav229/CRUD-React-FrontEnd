import React, { Component } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';
import { withParams } from './withParams';

class UpdateEmployeeComponent extends Component {
    constructor(props){
        super(props)

        let {id} = props.params;
        this.state={
            id : id,
            firstName : '',
            lastName : '',
            emailId: '',
        }

        this.ChangeFirstNameHandler=this.ChangeFirstNameHandler.bind(this);
        this.ChangeLastNameHandler=this.ChangeLastNameHandler.bind(this);
        this.ChangeEmailHandler=this.ChangeEmailHandler.bind(this);
        this.updateEmployee = this.updateEmployee.bind(this);
    }
    componentDidMount(){
        EmployeeService.getEmployeeById(this.state.id).then( (res) =>{
            let employee =res.data;
            this.setState({firstName: employee.firstName,
                lastName: employee.lastName,
                emailId: employee.emailId
            });
        });
    }
    updateEmployee = (e) => {
        e.preventDefault();

        let employee = {firstName : this.state.firstName,lastName : this.state.lastName,emailId : this.state.emailId};
        console.log('employee =>'+ JSON.stringify(employee));

        EmployeeService.updateEmployee(employee, this.state.id).then(res =>{
            
        });

    }

    ChangeFirstNameHandler =(event) =>{
        this.setState({firstName : event.target.value});
    }

    ChangeLastNameHandler =(event) =>{
        this.setState({lastName : event.target.value});
    }

    ChangeEmailHandler=(event) =>{
        this.setState({emailId : event.target.value});
    }

    render() {
        return (
            <div>
                <div className='container'>
                    <div className='row'>
                        <div className='card col-md-6 offset-md-3 offset-md-3'>
                            <h3 className='text-center'>Update Employee</h3>
                            <div className='card-body'>
                                <form>
                                    <div className='form-group'>
                                        <label>First Name:</label>
                                        <input placeholder='First Name' name='firstName'className='form-control'
                                            value={this.state.firstName} onChange={this.ChangeFirstNameHandler} />
                                    </div>
                                    <div className='form-group'>
                                        <label>Last Name:</label>
                                        <input placeholder='Last Name' name='lastName'className='form-control'
                                            value={this.state.lastName} onChange={this.ChangeLastNameHandler} />
                                    </div>
                                    <div className='form-group'>
                                        <label>Email Address:</label>
                                        <input placeholder='Email Address' name='emailId'className='form-control'
                                            value={this.state.emailId} onChange={this.ChangeEmailHandler} />
                                    </div>
                                    <Link to='/employee'>
                                    <button className='btn btn-success' onClick={this.updateEmployee}>Save</button>
                                    </Link>
                                    <Link to='/employee'>
                                    <button className='btn btn-danger' style={{marginLeft : "10px"}}>Cancel</button>
                                    </Link>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withParams(UpdateEmployeeComponent);