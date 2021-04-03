import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
//import {Bootstrap, Grid, Row, Col} from 'react-bootstrap';
//import { Nav} from "react-bootstrap";
//import 'bootstrap/dist/css/bootstrap-theme.css';
import '../css/style.css';
import axios from 'axios';

class SearchUser extends Component{

    constructor(props){
        super(props);

        this.checkData= this.checkData.bind(this);
        //this.checkBMI= this.checkBMI.bind(this);

        this.state = {
            persons: []
        }

    }

    // checkBMI(person){
    //     if( ((person.weight)/(person.height * person.height)) <18.5){
    //       return(
    //           <span style={{color: "red"}}>Under Weight</span>
    //       )
    //     }
    //     else if( ((person.weight)/(person.height * person.height)) >24.9){
    //       return(
    //           <span style={{color: "red"}}>Over Weight</span>
    //       )
    //   }
    //   else{
    //       return(
    //           <span style={{color: "green"}}>Normal</span>
    //       )
    //   }
    // }

    componentDidMount() {


        axios.get(`http://hospital-record-backend.herokuapp.com/person/query?name=${this.props.search}`)
        .then(response => {
            this.setState({
                "persons": response.data.data
            })
        }).catch((error) => {
            console.log(error);
        });
    }

    checkData(){
        if((this.state.persons && this.state.persons.length === 0) || this.state.persons== null){
            //console.log(this.state.persons);
            return (
            <h1>No Patient Found</h1>)
            
        }else{
            //console.log(this.state.persons);
            return(
                <div>
            <h1>Search Details for '{this.props.search}'</h1><br/>

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
                                    <td>{person.second_name}</td>
                                    <td>{person.first_name}</td>
                                    <td>{person.diagnostic}</td>
                                    <td>{person.id_doctor}</td>
                                    <td>{person.id_room}</td>
                            </tr>)}

                        </tbody>
                    </table></div></div>)
        }
    }

    render(){
        return(
            
            <div id="wrap" className="">
                <br/>
                <br/>
                <div className="container align-items-center">
                    
                    {this.checkData()}
                   
                </div> 
            </div>
        )
    }
}

export default SearchUser;
