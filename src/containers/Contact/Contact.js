import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
//import video from '../../video/171003A_012_2K.mp4';
import video from '../../video/171003A_003_2K.mp4';
import ScheduleButton from '../../components/ScheduleButton/ScheduleButton';

class Contact extends Component {
    render() {
        return (
            <div className="contact-section" id="contact">
                <div className="bg-video">
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
                <div>
                    <p className="contact-section__title">Get in Touch</p>
                    <div className="contact-section__options">
                        <ul>
                            <li><p><ScheduleButton /> with us (totally free, no hidden costs)</p></li>
                            <li><p>Write an email: <a href="mailto:molnarzseee@gmail.com">consulting@afrope.org</a></p></li>
                            <li><p>Or send a message - Our consultants will get in touch with you in 24 hours.</p></li>
                        </ul>
                    </div>
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
                            <Button>Submit</Button>
                            
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;