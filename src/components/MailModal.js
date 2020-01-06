// React
import React, { Component } from "react";

// React Bootstrap
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

class MailModal extends Component {
    state = {
        sent: false,
        success: true,
        valid: true,
        name: "",
        email: "",
        subject: "",
        body: "",
        err: []
    };

    handleSend = async () => {
        // Package email fields
        const templateId = "template_VctSuhCY";
        const variables = {
            from_name: this.state.name,
            from_email: this.state.email,
            to_name: "Nilay Sadavarte",
            subject: this.state.subject,
            body: this.state.body
        };

        // Assume valid and no errors.
        let valid = true;
        let newErr = [];

        // Check for email validation
        if (
            variables.from_email === "" ||
            !this.validateEmail(variables.from_email)
        ) {
            valid = false;
            newErr.push("Email");
        }

        // Check for name validation
        if (variables.from_name === "" || variables.from_name.length < 3) {
            valid = false;
            newErr.push("Name");
        }

        // Check for subject validation
        if (variables.subject === "" || variables.subject.length < 5) {
            valid = false;
            newErr.push("Subject");
        }

        // Check for body validation
        if (variables.body === "" || variables.body.length < 10) {
            valid = false;
            newErr.push("Message");
        }

        // Try sending if all fields are valid
        if (valid) {
            this.sendEmail(templateId, variables);
        }
        // Show invalid fields
        else {
            this.setState({ valid: false, err: newErr });
        }
    };

    sendEmail = (templateId, variables) => {
        window.emailjs
            .send("mailgun", templateId, variables)
            .then(res => {
                console.log("Email successfully sent!");
                // Success Handler
                this.showSuccess();
            })
            .catch(err => {
                console.error("Error, the email could not be sent \n", err);
                // Error Handler
                this.showFailure();
            });
    };

    validateEmail = x => {
        let atPosition = x.indexOf("@");
        let dotPosition = x.lastIndexOf(".");
        if (
            atPosition < 1 ||
            dotPosition < atPosition + 2 ||
            dotPosition + 2 >= x.length
        ) {
            return false;
        }
        return true;
    };

    showSuccess = async () => {
        this.setState({ sent: true, success: true });
        await this.delay(2500);
        this.close();
    };

    showFailure = async () => {
        this.setState({ sent: true, success: false });
        await this.delay(3500);
        this.close();
    };

    delay = ms => new Promise(res => setTimeout(res, ms));

    close = () => {
        this.props.handleClose();
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
                <Modal.Body
                    style={
                        this.state.sent
                            ? {
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center"
                              }
                            : {}
                    }
                >
                    <div
                        style={
                            this.state.sent
                                ? { display: "none" }
                                : { display: "show" }
                        }
                    >
                        <div
                            style={
                                !this.state.valid
                                    ? {
                                          display: "flex"
                                      }
                                    : { display: "none" }
                            }
                        >
                            <div
                                style={{
                                    textAlign: "left",
                                    transition: "0.5s"
                                }}
                            >
                                <h5 className={"text-warning"}>
                                    <FontAwesomeIcon
                                        icon={faExclamationCircle}
                                    />
                                    &nbsp;Please make sure all fields are valid
                                </h5>
                                <ul className={"text-warning"}>
                                    {this.state.err.map(er => {
                                        return <li>{er} is invalid</li>;
                                    })}
                                </ul>
                            </div>
                        </div>
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
                                type="email"
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
                    </div>
                    <div
                        style={
                            this.state.sent && this.state.success
                                ? {
                                      display: "flex"
                                  }
                                : { display: "none" }
                        }
                    >
                        <div
                            style={{
                                textAlign: "center",
                                transition: "0.5s"
                            }}
                        >
                            <h2 className={"text-success"}>
                                <FontAwesomeIcon icon={faCheckCircle} />
                                &nbsp;Email Sent!
                            </h2>
                        </div>
                    </div>
                    <div
                        style={
                            this.state.sent && !this.state.success
                                ? { display: "flex", alignItems: "center" }
                                : { display: "none" }
                        }
                    >
                        <div
                            style={{
                                textAlign: "center",
                                transition: "0.5s"
                            }}
                        >
                            <h2 className={"text-danger"}>
                                <FontAwesomeIcon icon={faTimesCircle} />
                                &nbsp;Server Error!
                            </h2>
                            <p>Please refresh the page and try again.</p>
                            <small>
                                P.S- You can also get my contact info from my
                                resume!
                            </small>
                        </div>
                    </div>
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
