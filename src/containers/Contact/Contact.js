import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
//import video from '../../video/171003A_012_2K.mp4';
//import video from '../../video/171003A_003_2K_c500k.mp4';
import ScheduleButton from '../../components/ScheduleButton/ScheduleButton';
import axios from 'axios';

//const API_PATH = 'http://localhost:1992/react-contact-form/api/contact/index.php'
//const API_PATH = 'http://localhost:3000/php/mail.php'

class Contact extends Component {

    state = {
        name: "",
        email: "",
        clientsocialmedia: "",
        situation: "",
        university: "",
        performance: "",
        drive: "",
        money: "",
        country: "",
        degree: "",
        research: "",
        friend: "",
        fakeinfo: "",
        investing: "",
        mailSent: false,
        error: null
    }
    /*
    setOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleFormSubmit = e => {
        e.preventDefault();
        axios({
          method: 'post',
          url: `${API_PATH}`,
          headers: { 'content-type': 'application/json' },
          data: this.state
        })
          .then(result => {
            this.setState({
              mailSent: result.data.sent
            })
          })
          .catch(error => this.setState({ error: error.message }));
      };
*/
    render() {
        return (
            <div className="contact-section" id="contact">
                {/* <div className="bg-video">
                    <video className="bg-video__content" autoPlay muted loop>
                        <source src={video} type="video/mp4" />
                        <source src={video} type="video/ogg" />
                        <source src={video} type="video/webm" />
                        Your browser is not supported!
                    </video>
                </div> 
                <div className="bg-capture">
                  <span className="bg-capture__text">Stock footage provided by Videvo, downloaded from www.videvo.net</span>
                </div>
                */}
                <div className="bg-image"></div>
                <div className="contact-section__box">
                    <p className="contact-section__title">Get in Touch</p>
                    <div className="contact-section__options">
                        <div className="contact-section__options--left">
                            <p><ScheduleButton /> with us (totally FREE)</p>
                            <p>Write an email: <a href="mailto:consulting@afrope.org">consulting@afrope.org</a></p>
                            <p>Chat with a Consultant: <a href="http://m.me/zoeafrope">CLICK HERE</a></p>

                            {/* <p>Or send a message - Our consultants will get in touch with you within 24 hours.</p> */}
                            {/* <p>In your mail, please provide with as much information as possible on your goals and vision - Our consultants will get in touch with you within 24 hours.</p> */}
                        </div>
                    </div>
                    <div className="contact-section__options">
                        <div className="contact-section__options--left">
                            <p><br />Check us on Facebook:</p>
                            <div
                                className="fb-page"
                                data-href="https://www.facebook.com/zoeafrope/"
                                data-tabs="timeline"
                                data-width="300"
                                data-height="300"
                                data-small-header="false"
                                data-adapt-container-width="true"
                                data-hide-cover="false"
                                data-show-facepile="true"
                            >
                                <blockquote
                                    cite="https://www.facebook.com/zoeafrope/"
                                    className="fb-xfbml-parse-ignore"
                                >
                                    <a href="https://www.facebook.com/zoeafrope/">Zoe Molnar</a>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                    {/*<div className="contact-section__form">
                        <Form>
                            <FormGroup>
                                <Label for="fullName">Your full name</Label>
                                <Input type="name" name="name" placeholder="Your name..." id="name" value={this.state.name} onChange={this.setOnChange} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="email">Email</Label>
                                <Input type="email" name="email" id="email" value={this.state.email} placeholder="Your email address..." onChange={this.setOnChange} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="clientsocialmedia">Facebook /Linkedin /Instagram /Twitter link</Label>
                                <Input type="url" name="clientsocialmedia" id="clientsocialmedia" value={this.state.clientsocialmedia} placeholder="Type the url here..." onChange={this.setOnChange} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="situation">What is your current situation?</Label>
                                <Input type="textarea" name="situation" value={this.state.situation} placeholder="Your current situation..." id="situation" onChange={this.setOnChange} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="university">In which University do you study and what?</Label>
                                <Input type="textarea" name="university" value={this.state.university} placeholder="Your studies..." id="university" onChange={this.setOnChange} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="performance">Briefly describe your studies. How is your performance?</Label>
                                <Input type="textarea" name="performance" value={this.state.performance} placeholder="Your performance..." id="performance" onChange={this.setOnChange} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="drive">Why do you want to continue your studies overseas?</Label>
                                <Input type="textarea" name="drive" value={this.state.drive} placeholder="Your drive..." id="drive" onChange={this.setOnChange}/>
                            </FormGroup>
                            <FormGroup tag="fieldset">
                                <Label for="money">How much money you want to spend abroad?</Label>
                                <FormGroup check>
                                    <Label check>
                                        <Input type="radio" name="money" id="money" value="As little as I can" onChange={this.setOnChange} />{' '}
                                        As little as I can
                                    </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                        <Input type="radio" name="money" id="money" value="I am not tight on money but I spend consciously" onChange={this.setOnChange} />{' '}
                                        I am not tight on money but I spend consciously
                                    </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                        <Input type="radio" name="money" id="money" value="Money is not an issue in this decision" onChange={this.setOnChange} />{' '}
                                        Money is not an issue in this decision
                                    </Label>
                                </FormGroup>
                            </FormGroup>
                            <FormGroup>
                                <Label for="country">Do you have a country in mind? (If yes, which one?)</Label>
                                <Input type="text" name="country" value={this.state.country} placeholder="Your target country..." id="country" onChange={this.setOnChange} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="degree">Do you have a University or master’s degree in mind? (If yes, what?)</Label>
                                <Input type="textarea" name="degree" value={this.state.degree} placeholder="Your degree in mind..." id="degree" onChange={this.setOnChange} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="research">Do you know how much research it takes to make the best decision? (How many hours?)</Label>
                                <Input type="text" name="research" value={this.state.research} placeholder="Your effort in hours..." id="research" onChange={this.setOnChange} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="friend">Do you know anyone who have left Africa and went to Europe for his/her studies?</Label>
                                <Input type="textarea" name="friend" value={this.state.friend} placeholder="Your friends..." id="friend" onChange={this.setOnChange} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="fakeinfo">Do you know how to differentiate the reliable information from the fake one?</Label>
                                <Input type="textarea" name="fakeinfo" value={this.state.fakeinfo} placeholder="Your experience on fake info..." id="fakeinfo" onChange={this.setOnChange} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleName">How do you feel about investing in yourself in order to provide yourself a highly profitable future?</Label>
                                <Input type="textarea" name="investing" value={this.state.investing} placeholder="Your feelings..." id="investing" onChange={this.setOnChange} />
                            </FormGroup>
                            <Button method="POST" action="../../../php/mail.php" onClick={this.handleFormSubmit}>Submit</Button>
                            <Button onClick={this.handleFormSubmit}>Submit</Button>
                            <div>
                                {this.state.mailSent && <div>Thank you for contacting us.</div>}
                            </div>
                        </Form>
                    </div>*/}
                </div>
            </div>
        );
    }
}

export default Contact;