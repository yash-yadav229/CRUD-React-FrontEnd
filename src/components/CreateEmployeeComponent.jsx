import React, { Component } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

class CreateEmployeeComponent extends Component {

    constructor(props){
        super(props)

        this.state={
            firstName : '',
            lastName : '',
            emailId: '',
        }

        this.ChangeFirstNameHandler=this.ChangeFirstNameHandler.bind(this);
        this.ChangeLastNameHandler=this.ChangeLastNameHandler.bind(this);
        this.ChangeEmailHandler=this.ChangeEmailHandler.bind(this);
        this.saveEmployee = this.saveEmployee.bind(this);
    }

    saveEmployee = (e) => {
        e.preventDefault();

        let employee = {firstName : this.state.firstName,lastName : this.state.lastName,emailId : this.state.emailId};
        console.log('employee =>'+ JSON.stringify(employee));


        EmployeeService.createEmployee(employee).then(res =>{
            //this.props.history.push('/employee');
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
                            <h3 className='text-center'>Add Employee</h3>
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

                                    <button className='btn btn-success' onClick={this.saveEmployee}>Save</button>
                                    <Link to='/employee'>
                                    <button className='btn btn-danger'  style={{marginLeft : "10px"}}>Cancel</button>
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

export default CreateEmployeeComponent;