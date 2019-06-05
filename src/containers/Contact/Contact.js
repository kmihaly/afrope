import React, { Component } from 'react';
//import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
//import { Toast, ToastHeader, ToastBody } from 'reactstrap';
//import video from '../../video/171003A_012_2K.mp4';
//import video from '../../video/171003A_003_2K_c500k.mp4';
import ScheduleButton from '../../components/ScheduleButton/ScheduleButton';

class Contact extends Component {
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
                        <ul>
                            <li><p><ScheduleButton /> with us (totally FREE)</p></li>
                            <li><p>Write an email: <a href="mailto:consulting@afrope.org">consulting@afrope.org</a></p></li>
                            {/* <li><p>Or send a message - Our consultants will get in touch with you within 24 hours.</p></li> */}
                            <li><p>In your mail, please provide with as much information as possible on your goals and vision - Our consultants will get in touch with you within 24 hours.</p></li>
                        </ul>
                    </div>
                    {/* <Toast>
                            <ToastHeader>
                                Mail content
                            </ToastHeader>
                            <ToastBody>
                                <ul>
                                    <li>What is your current situation?</li>
                                    <li>In which University do you study and what?</li>
                                    <li>Briefly describe your studies. How is your performance?</li>
                                    <li>Why do you want to continue your studies overseas?</li>
                                    <li>How much money you want to spend abroad?</li>
                                    <ul>
                                        <li>As little as I can</li>
                                        <li>I am not tight on money but I spend consciously</li>
                                        <li>Money is not an issue in this decision</li>
                                    </ul>
                                    <li>Do you have a country in mind? (If yes, which one?)</li>
                                    <li>Do you have a University or master’s degree in mind? (If yes, what?)</li>
                                    <li>Do you know how much research it takes to make the best decision? (How many hours?)</li>
                                    <li>Do you know anyone who have left Africa and went to Europe for his/her studies?</li>
                                    <li>Do you know how to differentiate the reliable information from the fake one?</li>
                                    <li>How do you feel about investing in yourself in order to provide yourself a highly profitable future?</li>
                                    <li>Your full name</li>                                                        
                                    <li>Your email</li>
                                    <li>Facebook/Linkedin/Instagram/Twitter link</li>
                                </ul>
                            </ToastBody>
                        </Toast> */}
                        {/*
                    <div className="contact-section__form">
                         <Form>
                            <FormGroup>
                                <Label for="exampleName">Name</Label>
                                <Input type="name" placeholder="Your name..." id="exampleName" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleEmail">Email</Label>
                                <Input type="email" name="email" id="exampleEmail" placeholder="Your email address..." />
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleText">Message</Label>
                                <Input type="textarea" name="text" id="exampleText" placeholder="Type your message here" />
                            </FormGroup>
                            <Button method="POST" action="">Submit</Button>
                        </Form> 
                        
                    </div>
                    */}
                </div>
            </div>
        );
    }
}

export default Contact;