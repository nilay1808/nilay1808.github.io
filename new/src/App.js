// React
import React, { Component } from "react";

// Bootstrap Layout Components
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

// Custom Button Components
import LinkedIn from "./components/LinkedIn";
import Github from "./components/Github";
import Email from "./components/Email";
import Resume from "./components/Resume";

// CSS
import "bootstrap/dist/css/bootstrap.css";
import "./scss/App.scss";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Container style={{ ...middle, ...{ minHeight: "100vh" } }}>
                    <div style={{ padding: "0.5em" }}>
                        <Row>
                            <Col sm={6} md={12} lg={4} style={middle}>
                                <Image
                                    src="img/me.jpg"
                                    style={imgSize}
                                    roundedCircle
                                />
                            </Col>
                            <Col sm={12} md={12} lg={8}>
                                <div>
                                    <Row style={{ marginBottom: "10px" }}>
                                        <Col>
                                            <h1>
                                                Hello
                                                <span
                                                    className="wave"
                                                    role="img"
                                                    aria-label="hand wave"
                                                    style={{
                                                        marginLeft: "20px"
                                                    }}
                                                >
                                                    👋
                                                </span>
                                            </h1>
                                        </Col>
                                    </Row>
                                    <Row
                                        style={{
                                            letterSpacing: "1px",
                                            marginBottom: "15px"
                                        }}
                                    >
                                        <Col>
                                            <h4
                                                style={{
                                                    fontWeight:
                                                        "300 !important",
                                                    fontSize: "1.4rem",
                                                    lineHeight: "1.5"
                                                }}
                                            >
                                                I'm&nbsp;
                                                <strong>Nilay Sadavarte</strong>
                                                , an aspiring full-stack
                                                software developer with a
                                                passion for building
                                                applications that change lives.
                                            </h4>
                                        </Col>
                                    </Row>
                                    <Row style={middle}>
                                        <Col xs={6} md={3} style={textMiddle}>
                                            <LinkedIn />
                                        </Col>
                                        <Col xs={6} md={3} style={textMiddle}>
                                            <Github />
                                        </Col>
                                        <Col xs={6} md={3} style={textMiddle}>
                                            <Email />
                                        </Col>
                                        <Col xs={6} md={3} style={textMiddle}>
                                            <Resume />
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
        );
    }
}

const middle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
};

const textMiddle = {
    textAlign: "center"
};

const imgSize = {
    width: "270px",
    padding: "1em"
};

export default App;
