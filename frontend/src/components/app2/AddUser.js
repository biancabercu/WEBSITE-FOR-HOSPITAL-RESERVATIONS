import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
//import {Bootstrap, Grid, Row, Col} from 'react-bootstrap';
//import { Nav} from "react-bootstrap";
//import 'bootstrap/dist/css/bootstrap-theme.css';
import '../css/style.css';
import axios from 'axios';
const POST_URL = "http://18.219.43.178/create_patient";

class AddUser extends Component{
    constructor(props){
        super(props);

        this.onSubmit= this.onSubmit.bind(this);

        this.onChangesecond_name= this.onChangesecond_name.bind(this);
        this.onChangefirst_name= this.onChangefirst_name.bind(this);
        this.onChangediagnostic= this.onChangediagnostic.bind(this);
        this.onChangeid_doctor= this.onChangeid_doctor.bind(this);
        this.onChangeid_room= this.onChangeid_room.bind(this);

        this.state = {
            second_name: "",
            first_name: "",
            diagnostic: "",
            id_doctor: null,
            id_room: ""
        }

    }

    onChangesecond_name(e){
        this.setState({
            second_name: e.target.value
        })
    }

    onChangefirst_name(e){
        this.setState({
            first_name: e.target.value
        })
    }

    onChangediagnostic(e){
        this.setState({
            diagnostic: e.target.value
        })
    }

    onChangeid_doctor(e){
        this.setState({
            id_doctor: e.target.value
        })
    }

    onChangeid_room(e){
        this.setState({
            id_room: e.target.value
        })
    }


    //When the user clicks on submit button
    async onSubmit(e) {
        e.preventDefault();

        const user={
            second_name: this.state.second_name,
            first_name: this.state.first_name,
            diagnostic: this.state.diagnostic,
            id_doctor: this.state.id_doctor,
            id_room: this.state.id_room
        }

        console.log(user);

        let formBodyArray = [];
        formBodyArray.push(`second_name=${user.second_name}`);
        formBodyArray.push(`first_name=${user.first_name}`);
        formBodyArray.push(`diagnostic=${user.diagnostic}`);
        formBodyArray.push(`id_doctor=${user.id_doctor}`);
        formBodyArray.push(`id_room=${user.id_room}`);
        let formBody = formBodyArray.join("&");
        
        let data = await fetch(POST_URL, {
            method: "POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
            mode: "no-cors",
            body: formBody,
          })
            .then((response) => response.json())
            .catch((error) => console.log(error));

        // axios.post('http://18.219.43.178/create_patient', user)
        //     .then(res => console.log(res.data));

        
        this.setState({
            // second_name: data.body.second_name,
            // first_name: data.body.first_name,
            // diagnostic: data.body.diagnostic,
            // id_doctor: data.body.id_doctor,
            // id_room: data.body.id_room,
            message: "User Successfully Added!"
        })

        //window.location= '/allUsers';
    }

    render(){
        return(
            
            <div id="wrap" className="">
                <br/>
                <br/>
                <div className="container align-items-center">
                
                    <h1>Provide Details to Add Patient</h1><br/>

                    <form onSubmit={this.onSubmit}>

                        <div>Second Name: <input className="form-control mr-sm-2" required value={this.state.second_name} onChange={this.onChangesecond_name} type="text" placeholder="Second name" /></div><br/>
                        <div>First Name: <input className="form-control mr-sm-2" required value={this.state.first_name} onChange={this.onChangefirst_name} type="text" placeholder="First name" /></div><br/>
                        <div>Diagnostic <input className="form-control mr-sm-2" required value={this.state.diagnostic} onChange={this.onChangediagnostic} type="text" placeholder="Diagnostic" /></div><br/>
                        <div>id_doctor <input className="form-control mr-sm-2" required value={this.state.id_doctor} onChange={this.onChangeid_doctor} type="text" placeholder="id_doctor" /></div><br/>
                        <div>id_room <input className="form-control mr-sm-2" required value={this.state.id_room} onChange={this.onChangeid_room} type="text" placeholder="id_room" /></div><br/>
                        
                    <div><button className="btn btn-success" type="submit">Add Patient</button></div>
                    
                    </form>

                    <h3 style={{color: "green"}} className="label label-success">{this.state.message}</h3>
                    
                </div> 
            </div>
        )
    }
}

export default AddUser;
