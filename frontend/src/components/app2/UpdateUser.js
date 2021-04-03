import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
//import {Bootstrap, Grid, Row, Col} from 'react-bootstrap';
//import { Nav} from "react-bootstrap";
//import 'bootstrap/dist/css/bootstrap-theme.css';
import '../css/style.css';
import axios from 'axios';

var n=1;
var totalResults= 0;

class UpdateUser extends Component{
    constructor(props){
        super(props);

        this.updateRow= this.updateRow.bind(this);
        this.submitUpdate= this.submitUpdate.bind(this);
        this.nextPage= this.nextPage.bind(this);
        this.previousPage= this.previousPage.bind(this);

        this.onChangesecond_name= this.onChangesecond_name.bind(this);
        this.onChangefirst_name= this.onChangefirst_name.bind(this);
        this.onChangediagnostic= this.onChangediagnostic.bind(this);
        this.onChangeid_doctor= this.onChangeid_doctor.bind(this);
        this.onChangeid_room= this.onChangeid_room.bind(this);

        this.state = {
            persons: [],
            second_name: "",
            first_name: "",
            diagnostic: "",
            id_doctor: 0,
            id_room: "",
            messageUpdate: "",
            totalResult: 0,
            message: ""
        }

    }

    componentDidMount() {
        axios.get(`http://hospital-record-backend.herokuapp.com/person/pages`)
        .then(response => {
            totalResults= response.data.totalResult;
            this.setState({
                totalResult: response.data.totalResult
            })
        }).catch((error) => {
            console.log(error);
        });



        axios.get(`http://hospital-record-backend.herokuapp.com/person/pages?page=1`)
        .then(response => {
            this.setState({
                "persons": response.data.data,

            })
        }).catch((error) => {
            console.log(error);
        });
    }

    submitUpdate(e){

    }

    updateRow(e){
        if(e.target.innerHTML=== "Edit"){

                // Get a NodeList of all .demo elements
                var x= "." +e.target.id;
                const demoClasses = document.querySelectorAll(x);

                // Change the text of multiple elements with a loop
                demoClasses.forEach(element => {
                element.contentEditable = "true";
                }); 
                e.target.innerHTML= "Update";

                var id1= "id1" +e.target.id.substring(3);
                var id2= "id2" +e.target.id.substring(3);
                var id3= "id3" +e.target.id.substring(3);
                var id4= "id4" +e.target.id.substring(3);
                var id5= "id5" +e.target.id.substring(3);
                var id6= "id6" +e.target.id.substring(3);
                var id7= "id7" +e.target.id.substring(3);
                var id8= "id8" +e.target.id.substring(3);
                
                this.setState({
                    second_name: document.getElementById(id1).innerHTML,
                    first_name: document.getElementById(id2).innerHTML,
                    diagnostic: document.getElementById(id3).innerHTML,
                    id_doctor: document.getElementById(id4).innerHTML,
                    id_room: document.getElementById(id5).innerHTML
                })
                
            }
                
        else{

            //e.preventDefault();

            const user={

                second_name: this.state.second_name,
                first_name: this.state.first_name,
                diagnostic: this.state.diagnostic,
                id_doctor: this.state.id_doctor,
                id_room: this.state.id_room
            }
    
            console.log(user);

            //e.target.id.substring(3);
    
            axios.put(`http://hospital-record-backend.herokuapp.com/person/${e.target.id.substring(3)}`, user)
                .then(res => console.log(res.data));
    
            
            this.setState({
                username: '',
                messageUpdate: "Patient details Successfully Updated!",
                message: ""
            })

            var y= "." +e.target.id;
                const demoClasses = document.querySelectorAll(y);

                // Change the text of multiple elements with a loop
                demoClasses.forEach(element => {
                    element.contentEditable = "false";
                }); 

            e.target.innerHTML= "Edit";
        }
    }

    onChangesecond_name(e){

        console.log("ONCHANGE First NAME CALLED");
        
            /*e.addEventListener('input', function() {
            this.setState({
                fname: e.target.innerHTML
            },
            ()=>{
                console.log("value updated")
            })
        });
        */

        this.setState({
            second_name: e.target.innerHTML
            },
            ()=>{
                console.log("value updated")
            })
                
    }
    onChangefirst_name(e){
        console.log("ONCHANGE LAST NAME CALLED");
        this.setState({
            first_name: e.target.innerHTML
        },()=>{ console.log('hello')})
        /**/
    }
    onChangediagnostic(e){
        this.setState({
            diagnostic: e.target.innerHTML
        })
    }
    onChangeid_doctor(e){
        console.log("ONCHANGE AGE CALLED");
        this.setState({
            id_doctor: e.target.innerHTML
        })
    }
    onChangeid_room(e){
        this.setState({
            id_room: e.target.innerHTML
        })
    }

    nextPage() {

        if(n < Math.ceil(totalResults/10)){
        n++;
        
        this.setState({
            message: ""
        })
            }
        else{
            this.setState({
                message: "Last Page Reached!"
            })
        }
        //db.comments.find().skip(pagesize * (n-1)).limit(pagesize);
        axios.get(`http://hospital-record-backend.herokuapp.com/person/pages?page=${n}`)
          .then(response => {
              this.setState({
                  "persons": response.data.data,


              })
          }).catch((error) => {
              console.log(error);
          });
    }

    previousPage() {
        if(n>=2){
            n--;
            this.setState({
                message: ""
            })
        }
        else{
            this.setState({
                message: "Already at first Page!"
            })
        }
        //db.comments.find().skip(pagesize * (n-1)).limit(pagesize);
        axios.get(`http://hospital-record-backend.herokuapp.com/person/pages?page=${n}`)
        .then(response => {
            this.setState({
                "persons": response.data.data,


            })
        }).catch((error) => {
            console.log(error);
        });
    }


    render(){
        return(
            
            <div id="wrap" className="">
                <br/>
                <br/>
                <div className="container align-items-center">

                    <h3 style={{color: "green"}} className="label label-success">{this.state.messageUpdate}</h3>
                    
                    <h1>Select a Patient to Update details</h1>
                    <br/>

                    <div className="table-responsive">

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

                                    <td className={"doc" +person._id} id={"id1" +person._id} onBlur={this.onChangesecond_name} value={this.state.second_name} contentEditable="false">{person.second_name}</td>
                                    <td className={"doc" +person._id} id={"id2" +person._id} onBlur={this.onChangefirst_name} value={this.state.first_name} contentEditable="false">{person.first_name}</td>
                                    <td className={"doc" +person._id} id={"id3" +person._id} onBlur={this.onChangediagnostic}value={this.state.diagnostic}  contentEditable="false">{person.diagnostic}</td>
                                    <td className={"doc" +person._id} id={"id4" +person._id} onBlur={this.onChangeid_doctor} value={this.state.id_doctor} contentEditable="false">{person.id_doctor}</td>
                                    <td className={"doc" +person._id} id={"id5" +person._id} onBlur={this.onChangeid_room} value={this.state.id_room}  contentEditable="false">{person.id_room}</td>

                                    <td><button id={"doc" +person._id} type="button" onClick={this.updateRow} className="btn btn-warning btn-sm">Edit</button></td>
                               
                                
                        </tr>)}
                        </tbody>
                    </table></div>

                    <div><button onClick={this.previousPage}>Previous</button> <button onClick={this.nextPage}>Next</button></div>
                    <h3 style={{color: "red"}}>{this.state.message}</h3>
                   
                    
                </div> 
            </div>
        )
    }
}

export default UpdateUser;
