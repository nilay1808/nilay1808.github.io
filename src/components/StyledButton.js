// React
import React, { Component } from "react";

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// React Bootstrap
import Button from "react-bootstrap/Button";

// Modified Bootstrap Modal
import MailModal from "./MailModal";

// Styled Button Class
class StyledButton extends Component {
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

    // Open links
    goToUrl = url => {
        window.open(url);
    };

    render() {
        // Configure style for steady and hover states
        if (this.state.hover) {
            style = {
                ...style,
                color: this.props.secondaryColor,
                background: this.props.primaryColor
            };
        } else {
            style = {
                ...style,
                color: this.props.primaryColor,
                background: this.props.secondaryColor
            };
        }

        return (
            <>
                <div>
                    <Button
                        style={style}
                        onClick={
                            this.props.text === "Email"
                                ? this.handleOpen
                                : () => {
                                      this.goToUrl(this.props.url);
                                  }
                        }
                        onMouseEnter={this.hoverOn}
                        onMouseLeave={this.hoverOff}
                    >
                        <FontAwesomeIcon icon={this.props.icon} />
                        &nbsp;&nbsp;{this.props.text}
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

var style = {
    textDecoration: "none",
    borderRadius: "5px",
    border: "none",
    transition: "0.5s",
    paddingTop: "10px",
    paddingBottom: "10px",
    paddingLeft: "15px",
    paddingRight: "15px",
    fontSize: "13.5pt"
};

export default StyledButton;
