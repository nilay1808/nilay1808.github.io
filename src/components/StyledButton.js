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

    // Hover handler functions for the button
    hoverOn = () => {
        this.setState({ hover: true });
    };
    hoverOff = () => {
        this.setState({ hover: false });
    };

    // Open/Close handler functions for Mail Module
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
        // Configure style colors for steady and hover states
        this.state.hover
            ? (style = {
                  ...style,
                  color: this.props.secondaryColor,
                  background: this.props.primaryColor
              })
            : (style = {
                  ...style,
                  color: this.props.primaryColor,
                  background: this.props.secondaryColor
              });

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

                {/* Optional Modal used for sending emails */}
                <MailModal
                    show={this.state.show}
                    handleClose={this.handleClose}
                />
            </>
        );
    }
}

// Button Styling
var style = {
    textDecoration: "none",
    borderRadius: "5px",
    border: "none",
    transition: "0.5s",
    paddingTop: "11px",
    paddingBottom: "8px",
    paddingLeft: "10px",
    paddingRight: "10px"
    // fontSize: "13.5pt"
};

export default StyledButton;
