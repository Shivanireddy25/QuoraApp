import React, { Component } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import {rooturl} from '../../config/settings';
import SideQuoraPic from '../../images/SideQuoraPic.png';
import RightQuoraPic from '../../images/RightQuoraPic.png'
import { Redirect } from 'react-router';
import '../SignUp/SignUp.css'
class SignUp extends Component{
  state={
    Name:"",
    Email:"",
   // Password:"",
    emptyValues : false,
    Password:"",
    login:false
  }
  handleFirstName=(e)=>{
    this.setState({Name:e.target.value})
         console.log(this.state)
  }
  handleEmail=(e)=>{
    this.setState({Email:e.target.value})
         console.log(this.state)
  }
  handleLastName=(e)=>{
    this.setState({Password:e.target.value})
         console.log(this.state)
  }
  
  register=(e)=>{
    if(this.state.Name===""||this.state.Email===""||this.state.Password==="")
    {
        e.preventDefault()
        console.log("Cannot be left empty")
        this.setState({emptyValues :true})
    }
    else{
      this.setState({emptyValues :false})
      
      var url='http://'+rooturl+':4000/signUp'
      console.log("here");
      axios.post(url,{
        
        Email : this.state.Email,
        Name : this.state.Name,
        Password : this.state.Password


      }).then(response=>{
        console.log(response.data)
        if(response.status===200 || response.status===210){
          this.setState({login:true})
          this.props.history.push('/');
        }
        
      })

    }
  }
  render(){
    let redirectvar = null;
    if(this.state.login === true){
      redirectvar = <Redirect to='/' />
    }
    return(
      
      <div  id = "signUp">
        <body>
        {redirectvar}
        {/* <div class="row">  
       <div class="col-md-4">
        <img className = "SideQuoraPic" style={{ "width" : "413px", "height":"100%"  }} src = {SideQuoraPic}/> 
       </div>    */}
            
      <div className="mt-5 col-md-15"  id = "signUp" style = {{height : 1000}}>
          <form>
         
          <div className="form-group">
              <div class="row">
                      <div class="col-4"></div>
                      <input type="text" class="form-control col-4" id="Name" onChange={this.handleFirstName}  placeholder="Enter FirstName" />
                      <div class="col-4"></div>
              </div>
          </div>
          
          <div className="form-group">
              <div class="row">
                  <div class="col-4"></div>
                  <input type="email" className="form-control col-4" id="Email" onChange={this.handleEmail} placeholder="Enter your email"/>
                  <div class="col-4"></div>
              </div>
              
          </div>
          <div class="form-group">
              <div class="row">
                  <div class="col-4"></div>
                  <input type="password" className="form-control col-4" id="Password" onChange={this.handleLastName} placeholder="Enter your password"/>
                  <div class="col-4"></div>
              </div>
          </div>
          
          <div class="row" >
              
                  <div class="col-4"></div>
                  <button type="submit" class="btn btn-outline-info btn-rounded btn-block my-4 waves-effect z-depth-0 col-4" onClick={this.register}>Sign Up</button>
                  <div class="col-4"></div>
              
          </div>
          

          </form>

        {/* </div>
        <div class="col-md-4"> 
          <img className = "RightQuoraPic" style={{ "width" : "351px" ,"height":"100%"}} align="right" src = {RightQuoraPic}/> 
       </div>  */}
       
       
       
       
  </div>  
  </body>
      </div>
      
  


  );
  }
  


}
export default SignUp;