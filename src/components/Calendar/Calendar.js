import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class Calendar extends React.Component {

    state = {
        modal: false
    };
/*
    toggle = () => {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }
*/
    render() {
        const closeBtn = <button className="close" onClick={this.props.toggleForm}>&times;</button>;

        return (
            <>
                <Modal isOpen={this.props.display} toggle={this.props.toggleForm} className="contact-form-modal">
                    <ModalHeader close={closeBtn}>Choose a time</ModalHeader>
                    <ModalBody>
                        Ide jön a naptár
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.props.toggleForm}>Send</Button>{' '}
                        <Button color="secondary" onClick={this.props.toggleForm}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </>
        );
    }
}

export default Calendar;