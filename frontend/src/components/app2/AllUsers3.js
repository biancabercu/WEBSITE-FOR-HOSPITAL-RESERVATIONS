import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
//import {Bootstrap, Grid, Row, Col} from 'react-bootstrap';
//import { Nav} from "react-bootstrap";
//import 'bootstrap/dist/css/bootstrap-theme.css';
import '../css/style.css'
import axios from 'axios';
import {
    getALL,
    USER_BIO,
    USER_CONVERSATIONS,
    USER_FRIENDS,
    USER_ID,
    USER_NAME,
  } from "./AllPatients3";
import { getAllPatients3 } from './AllPatients3';
  export const USER_FOUND = 0;
  export const USER_NOT_FOUND = 1;
  export const DEFAULT_STATUS = -1;
var n=1;
var totalResults= 0;

class AllUsers3 extends Component{

    constructor(props){
        super(props);

        this.checkData= this.checkData.bind(this);
        //this.nextPage= this.nextPage.bind(this);
        //this.previousPage= this.previousPage.bind(this);

        this.state = {
            persons: [],
            totalResult: 0,
            message: ""
        }
    }


    async componentDidMount() {

        let response = await getAllPatients3();
        this.state.persons = response;
      }


      checkData(){
            if(this.state.persons){
                return(
                <table className="table">
                <thead>
                <tr>
                    <th>Second Name</th>
                    <th>First Name</th>
                    <th>Diagnostic</th>
                    <th>id_doctor</th>
                    <th>id_room</th>
                  
                </tr>
                </thead>
                <tbody>
                    { this.state.persons.map(person =>
                    <tr>
                        <td>{person.second_name}</td>
                        <td>{person.first_name}</td>
                        <td>{person.diagnostic}</td>
                        <td>{person.id_doctor}</td>
                        <td>{person.id_room}</td>
                    </tr>)}
                </tbody>
            </table>
                )}
            else{
                return(
                    
                    <h3>No Records Found</h3>
                )
            }
      }

    render(){
        return(
            
            <div id="wrap" className="container">
                <br/>
                <div className="align-items-center">
                    
                    <h1>All Patients Record</h1><br/>
                    <h3>Total Patients: {this.state.totalResult}</h3>

                    <div className="table-responsive">

                        {this.checkData()}

                    </div>

                    <h3 style={{color: "red"}}>{this.state.message}</h3>
                </div> 
            </div>
        )
    }
}

export default AllUsers3;
