import React, {  useState, useEffect, Component } from 'react'
import { Button } from './Button';

// const [click, setClick] = useState(false);
// const [button, setButton] = useState(true);

    
//   const showButton = () => {
//     if (window.innerWidth <= 960) {
//       setButton(false);
//     } else {
//       setButton(true);
//     }
//   };

//   useEffect(() => {
//     showButton();
//   }, []);

//   window.addEventListener('resize', showButton);

export class Form extends Component {  
    

    constructor(props) {
        super(props)
    
        this.state = {
             username: '',
             password: '',
             comments: '',
             topic: 'option1'
             
        }
    }
  
    handlerUsernameChange = event => {
        this.setState({
            username: event.target.value
        })
    }

    handlerCommentsChange = event => {
        this.setState({
            comments: event.target.value
        })
    }   

    handlerTopicChange = event => {
        this.setState({
            topic: event.target.value
        })
    }   
    handleSubmit = event => {
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
        event.preventDefault();
    }
    handlePassword = event => {
        this.setState({
            password: event.target.value
        })
    }
    render() {
        return (
            <div className='form'>
            <form onSubmit= {this.handleSubmit}>
                <div>
                    <label>Username</label>
                    <input type='text'
                    value={this.state.username}
                    onChange={this.handlerUsernameChange} />
                </div>

                <div>
                    <label>Password</label>
                    <input type='password'
                    value={this.state.password}
                    onChange={this.handlePassword} />
                </div>

                {/* <div>
                    <label> Comments</label>
                    <textarea
                        value={this.state.comments}
                        onChange={this.handlerCommentsChange}>

                    </textarea>
                </div>

                <div>
                    <label>
                        Topic
                    </label>
                    <select
                    value={this.state.topic}
                    onChange={this.handlerTopicChange}>
                        <option value="option1"> option1</option>
                        <option value="option2"> option2</option>
                        <option value="option3"> option3</option>
                    </select> 

                </div> */}
                 <Button type="submit">Submit</Button> 
                {/* {button && <Button buttonStyle='btn--outline'>SUBMIT</Button>} */}
            </form>
            </div>
        )
    }
}

export default Form
