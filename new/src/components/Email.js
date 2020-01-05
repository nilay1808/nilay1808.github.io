// React
import React, { Component } from "react";

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons";

// React Bootstrap
import Button from "react-bootstrap/Button";

// Modified Bootstrap Modal
import MailModal from "./MailModal";

// CSS
import colors from "../scss/colors.scss";

// Email Button Class
class Email extends Component {
    state = {
        hover: false,
        show: false
    };

    // Hover functions for the button
    hoverOn = () => {
        this.setState({ hover: true });
    };
    hoverOff = () => {
        this.setState({ hover: false });
    };

    // Open/Close functions for the modal
    handleOpen = () => {
        this.setState({ show: true });
    };
    handleClose = () => {
        this.setState({ show: false });
    };

    render() {
        // Configure style for steady and hover states
        if (this.state.hover) {
            style = {
                ...style,
                color: colors.whitecolor,
                background: colors.email
            };
        } else {
            style = {
                ...style,
                color: colors.email,
                background: colors.whitecolor
            };
        }

        return (
            <>
                <div>
                    <Button
                        style={style}
                        onClick={this.handleOpen}
                        onMouseEnter={this.hoverOn}
                        onMouseLeave={this.hoverOff}
                    >
                        <FontAwesomeIcon icon={faFile} style={margin} />
                        Email
                    </Button>
                </div>

                <MailModal
                    show={this.state.show}
                    handleClose={this.handleClose}
                />
            </>
        );
    }
}

const margin = {
    marginLeft: "10px",
    marginRight: "10px"
};

var style = {
    textDecoration: "none",
    borderRadius: "5px",
    border: "none",
    transition: "0.5s",
    margin: "10px",
    padding: "10px"
};

export default Email;
