import React, { Component } from 'react';
import Header from '../Header/Header'
import News from '../news/News'
import {rooturl, UIurl} from '../../config/settings';
import axios from 'axios';
import {Link} from 'react-router-dom';
import './topics.css'
import topic1 from '../../images/topic.png'



class Topics extends Component {
    
  constructor(props){
     
    super(props);

    this.state = {
      topics : []

  }
}


componentDidMount() {

    axios.get('http://'+rooturl+':4000/getAllTopics')
    .then(response => {
      console.log("inside response")
        this.setState({
          topics : this.state.topics.concat(response.data)
        
           });

           console.log(response)
        
    })
    .catch(err => {
      console.log(err)
    })
}

topic = (e) => {
  this.props.history.push('/newsfeed/topic/'+ e.target.id )
}

    render() { 
      let URL = "http://"+ UIurl +":3000/newsfeed/topic/MachineLearning"
      let bookmarkURL = "http://"+ UIurl + ":3000/bookmarks"

        let topics = this.state.topics.map((topic) => {
            return(
                <div style = {{width : "200px"}}>  <img  class="icons" src={topic1} value="topic"/>
                &nbsp; <Link to={`/newsfeed/topic/${topic.topicName.split(' ').join('')}`} id= {topic.topicName} > {topic.topicName}</Link>
                <br/>
                <br/>
               </div>
            );
            this.state.topics.concat(<a href="/newsfeed/topic/MachineLearning">Bookmarked Answers</a>)
        })

        return (
            <div class ="topics">
            
            <p> Feed </p>  
                       
                      

                        {topics}
                        <button><a href="/bookmarks">Bookmarked Answers</a></button>
 
  
                       
                          
                        </div>
                        
          );
    }
}
 
export default Topics;