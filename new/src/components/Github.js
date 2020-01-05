import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import Button from "react-bootstrap/Button";

// CSS
import colors from "../scss/colors.scss";

class Github extends Component {
    state = {
        hover: false
    };

    hoverOn = () => {
        this.setState({ hover: true });
    };

    hoverOff = () => {
        this.setState({ hover: false });
    };

    goToUrl = url => {
        window.open(url);
    };

    render() {
        if (this.state.hover) {
            style = {
                ...style,
                color: colors.whitecolor,
                background: colors.github
            };
        } else {
            style = {
                ...style,
                color: colors.github,
                background: colors.whitecolor
            };
        }

        return (
            <div>
                <Button
                    style={style}
                    onClick={() => {
                        this.goToUrl(process.env.REACT_APP_GITHUB);
                    }}
                    onMouseEnter={this.hoverOn}
                    onMouseLeave={this.hoverOff}
                >
                    <FontAwesomeIcon icon={faGithub} style={margin} />
                    Github
                </Button>
            </div>
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

export default Github;
