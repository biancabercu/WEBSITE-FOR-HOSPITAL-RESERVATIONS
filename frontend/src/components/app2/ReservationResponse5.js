import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
//import {Bootstrap, Grid, Row, Col} from 'react-bootstrap';
//import { Nav} from "react-bootstrap";
//import 'bootstrap/dist/css/bootstrap-theme.css';
import '../css/style.css'
import axios from 'axios';
import { getReservation } from './GetReservation';
import Header1 from './Header1';
import Footer from './Footer';


export const USER_FOUND = 0;
export const USER_NOT_FOUND = 1;
export const DEFAULT_STATUS = -1;
var n=1;
var totalResults= 0;
var stare = '';
class ReservationResponse5 extends Component{

    constructor(props){
        super(props);

        this.checkData= this.checkData.bind(this);
        //this.nextPage= this.nextPage.bind(this);
        //this.previousPage= this.previousPage.bind(this);

        this.state = {
            reservations: "",
            totalResult: 0,
            message: ""
        }
    }


    async componentDidMount() {

        let response = await getReservation("id_0005");
        this.state.reservations = response;
       
        console.log(this.state.rooms)
      }


      checkData(){
            if(this.state.reservations){
                return(
                <table className="table">
                <thead>
                <tr>
                    <th>Id Room</th>
                    <th>Id Doctor</th>
                    <th>Time Estimation</th>  
                    <th>Start Time</th> 
                    <th>Reason Reservation</th> 

                </tr>
                </thead>
                <tbody>
                    {/* { this.state.rooms.map(room => */}
                    <tr>
                        <td>{this.state.reservations.id_room}</td>
                        <td>{this.state.reservations.id_doctor}</td>
                        <td>{this.state.reservations.time_estimation}</td>
                        <td>{this.state.reservations.start_time}</td>
                        <td>{this.state.reservations.reason_reservation}</td>
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
            
            <h1>All Reservations Record</h1><br/>
            <h3>Total Reservations: {this.state.totalResult}</h3>

            <div className="table-responsive">

                {this.checkData()}

            </div>

            <h3 style={{color: "red"}}>{this.state.message}</h3>
        </div> 
    </div>
)
            // var free = "free";
            // console.log("------------------------")
            // console.log( stare);
            // var n = free.localeCompare(this.state.rooms.status)
            //     if (n == 0)
            //         return( <div>
            //                 <p>ocupat</p>
            //             </div>
                        
            //         )
            //     else return (
            //         <div>    
            //             <Header1 />
            //             <br/><br/><br/>
            //             <Footer />
                        
            //             </div>
            //     )  
           
    }
}

export default ReservationResponse5;
