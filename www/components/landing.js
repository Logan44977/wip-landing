import React, { Component } from 'react'
import fetch from 'isomorphic-unfetch';

import { Tweet, Follow } from 'react-twitter-widgets';


export class Landing extends Component {

 state = {
     activeIndex: 0,
     error: false,
     email: "",
     message: "000"
 }

 tick(){
     let counter = this.state.activeIndex;
     counter++;

     if(counter > 2)
        counter = 0;
    
    this.setState({activeIndex: counter});
 }

 componentDidMount(){
     this.interval = setInterval(() => this.tick(), 10000);
 }
  
 componentWillUnmount(){
     clearInterval(this.interval);
 }

 change = e => {
    this.setState({[e.target.name] : [e.target.value]});

    this.setState({error: '', message: ''});
 }

 sendData(){
    const { email } = this.state;

    let isValidEmail = this.validateEmail(email)

    if(!isValidEmail)
        this.setState({error: "Please enter a valid email address"})
    else{
        this.setState({error: ''});
        // fetch
        fetch('https://api.workinpuckgress.com/emails', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify({email: email})
        })
        .then(
            response => response.json(),
            error => console.log(error)
        )
        .then(
            response => this.setState({message: response.message})
        )
    }

    // 200 = success
    // 401 = dup email
    // 406 = invalid email
 }

 validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
 }
 
 renderMessage(){
     if(this.state.message === "200"){
        return(
            <div className="home-success">
                <img alt="" className="home-img-success" src={"/static/success.svg"}/>
                <h2 className="home-text-success">Thank You! We Will Notify You When We Go Live.</h2>
            </div>
        )
     }
     else if(this.state.message === '401'){
        return(
            <div>
                <p className="home-text-error-mobile">That email has already been used!</p>
                <input className="home-input" value={this.state.email} name={'email'} onChange={(e) => this.change(e)} placeholder="Enter an email address"/>
               <button className="home-button" type="submit" onClick={() => this.sendData()}>Notify Me</button> 
               <p className="home-text-error">That email has already been used!</p>
            </div>
        )
     }

     else{
        return(
            <div>
                <p className="home-text-error-mobile">{this.state.error}</p>
                <input className="home-input" value={this.state.email} name={'email'} onChange={(e) => this.change(e)} placeholder="Enter an email address"/>
                <button className="home-button" type="submit" onClick={() => this.sendData()}>Notify Me</button> 
                <p className="home-text-error">{this.state.error}</p>
            </div>
        )
     }
 }

  render() {
    return (
      <div className="home">
        <div className={"home-content background" + this.state.activeIndex}>
            <div className="home-content-holder">
                <div className="home-content-left">
                    <div style={{background: '#ed5757'}} className={this.state.activeIndex === 0 ? "home-content-left-div show" : "home-content-left-div hide"}>
                        <img alt="" className="home-content-left-img1" src={"/static/hockey1.png"}/>
                    </div>

                    <div style={{background: '#8da5fc'}} className={this.state.activeIndex === 1 ? "home-content-left-div show" : "home-content-left-div hide"}>
                        <img alt="" className="home-content-left-img2" src={"/static/hockey3.png"}/>
                    </div>

                    <div style={{background: '#f9cf4f'}} className={this.state.activeIndex === 2 ? "home-content-left-div show" : "home-content-left-div hide"}>
                         <img alt="" className="home-content-left-img3" src={"/static/hockey4.png"}/>
                    </div>

                </div>
                <div className="home-content-right">
                    <div className="home-holder-text">
                        <h1 className="home-text-h1">Work In Puckgress</h1>
                        <p className="home-text-p">The future home of an easy to use and understand NHL stats website. To be alerted when the site goes live, please enter your email address below.</p>
                    </div>

                    <div className="home-holder-input">
                        {this.renderMessage()}
                    </div>
                </div>
            </div>
        </div>
        
        <div className="home-updates">
            <div className="home-updates-holder">
                <h2 className="home-text-h2">Project Updates</h2>

                <div className="home-holder-links">
                    <div className="home-link">
                        <Tweet
                         tweetId="1085290880284745729"
                         />
                    </div>

                    <div className="home-link">
                        <Tweet
                         tweetId="1084641044090761216"
                         />
                    </div>

                    <div className="home-link third">
                        <Tweet
                         tweetId="1066918074392166400"
                         />
                    </div>
                </div>
            </div>
        </div>
        <div className="home-footer">
            <div className="home-footer-left">
                <p className="home-footer-left-name">Work In Puckgress</p>
                <img alt="logo" className="home-footer-left-img" src={"/static/logo.png"}/>
            </div>
            <div className="home-footer-right">
                <Follow username="logan44977"/>
            </div>
        </div>
      </div>
    )
  }
}

export default Landing
