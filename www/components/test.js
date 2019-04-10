import React, { Component } from 'react'
import 'isomorphic-unfetch'

export class Test extends Component {

    state = {
        location: ''
    }

    componentDidMount(){
        let location = window.location.href;

        if(this.state.location !== location){
            this.setState({location});
        }
    }

    clickEvent(){
        console.log('here');
        console.log(this.state.location);

        this.getData();
    }

    getData(){
        fetch(`https://workinpuckgressapi.now.sh/emails`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify({email: "logan44977"})
            })
            .then(
                response => response.json(),
                error => console.log(error)
            )
            .then(
                response => console.log(response),
            )  
    }

  render() {
    return (
      <div>
        <button onClick={() => this.clickEvent()}>Click On Me</button>
      </div>
    )
  }
}

export default Test
