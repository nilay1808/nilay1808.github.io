// React
import React, { Component } from "react";

// React Bootstrap
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

class MailModal extends Component {
    state = {
        name: "",
        email: "",
        subject: "",
        body: ""
    };

    handleSend = () => {
        // First send email
        const templateId = process.env.REACT_APP_TEMPID;
        const variables = {
            from_name: this.state.name,
            from_email: this.state.email,
            to_name: "Nilay Sadavarte",
            subject: this.state.subject,
            body: this.state.body
        };
        this.sendFeedback(templateId, variables);

        // Give feedback and close modal
    };

    sendFeedback = (templateId, variables) => {
        window.emailjs
            .send("mailgun", templateId, variables)
            .then(res => {
                console.log("Email successfully sent!");
                // Success Handler
            })
            .catch(err => {
                console.error("Error, the email could not be sent \n", err);
                // Error Handler
            });
    };

    // Modify the state as the users edit the form
    onChangeName = e => {
        this.setState({ name: e.target.value });
    };
    onChangeEmail = e => {
        this.setState({ email: e.target.value });
    };
    onChangeSubject = e => {
        this.setState({ subject: e.target.value });
    };
    onChangeBody = e => {
        this.setState({ body: e.target.value });
    };

    render() {
        return (
            <Modal show={this.props.show} onHide={this.props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>New Email to Nilay Sadavarte</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text>Name</InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control
                            placeholder="Your Name"
                            onChange={this.onChangeName}
                        />
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text>Email</InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control
                            placeholder="Your Email"
                            onChange={this.onChangeEmail}
                        />
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon1">
                                Subject:
                            </InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control
                            placeholder="Enter the subject"
                            aria-label="subject"
                            aria-describedby="basic-addon1"
                            onChange={this.onChangeSubject}
                        />
                    </InputGroup>
                    <InputGroup>
                        <Form.Control
                            as="textarea"
                            aria-label="With textarea"
                            placeholder="Enter the message"
                            rows="4"
                            onChange={this.onChangeBody}
                        />
                    </InputGroup>
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        variant="secondary"
                        onClick={this.props.handleClose}
                    >
                        Close
                    </Button>
                    <Button variant="primary" onClick={this.handleSend}>
                        Send
                    </Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default MailModal;
