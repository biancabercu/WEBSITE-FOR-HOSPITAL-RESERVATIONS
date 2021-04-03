import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
//import {Bootstrap, Grid, Row, Col} from 'react-bootstrap';
//import { Nav} from "react-bootstrap";
//import 'bootstrap/dist/css/bootstrap-theme.css';
import '../css/style.css'
import axios from 'axios';
import { getRoom } from './GetRoom';
import Header3 from './Header3';
import Footer from './Footer';
import Header3ocupat from './Header3ocupat';


  export const USER_FOUND = 0;
  export const USER_NOT_FOUND = 1;
  export const DEFAULT_STATUS = -1;
var n=1;
var totalResults= 0;
var stare = 5;
class RoomResponse3 extends Component{

    constructor(props){
        super(props);

        this.checkData= this.checkData.bind(this);
        //this.nextPage= this.nextPage.bind(this);
        //this.previousPage= this.previousPage.bind(this);

        this.state = {
            rooms: "",
            totalResult: 0,
            message: ""
        }
    }


    async componentDidMount() {

        let response = await getRoom("id_0003");
        this.state.rooms = response;
       
        console.log(this.state.rooms)
      }


      checkData(){
            var free = "free";
            var n = free.localeCompare(this.state.rooms.status);
          if (n == 0) {
              console.log("---------------free");
              stare = 0;
          }
          else {
              console.log("+++++++++++++++busy");
              stare = 1;
          }
            if(this.state.rooms){
                return(
                <table className="table">
                <thead>
                <tr>
                    <th>Status</th>
                    <th>Description</th>
                    <th>History Reservations</th>  

                </tr>
                </thead>
                <tbody>
                    {/* { this.state.rooms.map(room => */}
                    <tr>
                        <td>{this.state.rooms.status}</td>
                        <td>{this.state.rooms.description}</td>
                        <td>{this.state.rooms.history_reservation}</td>
                    {/* </tr>)} */}
                    </tr>
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

export default RoomResponse3;
