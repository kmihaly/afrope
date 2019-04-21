import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import video from '../../images/video/1008365473-preview.mp4';

class Contact extends Component {
    render() {
        return (
            <div className="section-contact">
                <div className="bg-video">
                    <video className="bg-video__content" autoPlay muted loop>
                        <source src={video} type="video/mp4" />
                        <source src={video} type="video/ogg" />
                        <source src={video} type="video/webm" />
                        Your browser is not supported!
                    </video>
                </div>
                <div>
                    <p className="section-contact__title">Get in Touch</p>
                    <ul>
                    <li><p>Schedule a call with us (totally free, no hidden costs)</p></li>
                    <li><p>Write an email: consulting@afrope.org</p></li>
                    <li><p>Skype: afropeconsulting</p></li>
                    <li><p>Or send a message:</p></li>
                    </ul>
                    <div className="section-contact__form">
                        <Form>
                            <FormGroup>
                                <Label for="exampleName">Name</Label>
                                <Input type="name" placeholder="Your name..." id="exampleName"/>
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