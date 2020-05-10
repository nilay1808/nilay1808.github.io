// React
import React, { Component } from "react";

// Bootstrap Layout Components
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

// Custom Components
import StyledButton from "./components/StyledButton";
import ProjectDisplay from "./components/ProjectDisplay";

// CSS
import "bootstrap/dist/css/bootstrap.css";
import "./scss/App.scss";
import colors from "./scss/colors.scss";

// Font Awesome Icons
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";

class App extends Component {
	render() {
		return (
			<div className="App">
				<Container style={{ ...middle, ...{ minHeight: "90vh" } }}>
					<div style={{ padding: "0.5em" }}>
						<Row>
							<Col sm={6} md={12} lg={4} style={middle}>
								<Image
									src="img/me3.jpg"
									style={imgSize}
									roundedCircle
									alt="My Picture"
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
														marginLeft: "20px",
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
											marginBottom: "15px",
										}}
									>
										<Col>
											<h4
												style={{
													fontWeight:
														"300 !important",
													fontSize: "1.4rem",
													lineHeight: "1.5",
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
											<StyledButton
												icon={faLinkedin}
												url={
													"https://linkedin.com/in/nsadavarte"
												}
												text={"LinkedIn"}
												primaryColor={colors.linkedin}
												secondaryColor={
													colors.whitecolor
												}
											/>
										</Col>
										<Col xs={6} md={3} style={textMiddle}>
											<StyledButton
												icon={faGithub}
												url={
													"https://github.com/nilay1808"
												}
												text={"GitHub"}
												primaryColor={colors.github}
												secondaryColor={
													colors.whitecolor
												}
											/>
										</Col>
										<Col xs={6} md={3} style={textMiddle}>
											<StyledButton
												icon={faEnvelope}
												url={
													"mailto:nilay18sadavarte@gmail.com"
												}
												text={"Email"}
												primaryColor={colors.email}
												secondaryColor={
													colors.whitecolor
												}
											/>
										</Col>
										<Col xs={6} md={3} style={textMiddle}>
											<StyledButton
												icon={faFilePdf}
												url={
													"/NilaySadavarteResume.pdf"
												}
												text={"Resume"}
												primaryColor={colors.resume}
												secondaryColor={
													colors.whitecolor
												}
											/>
										</Col>
									</Row>
								</div>
							</Col>
						</Row>
					</div>
				</Container>
				<Container style={{ minHeight: "10vh" }}>
					<Row className="justify-content-md-center">
						<h1>
							<span
								className="bounce"
								role="img"
								aria-label="hand bounce"
							>
								👇
							</span>
						</h1>
					</Row>
				</Container>
				<ProjectDisplay />
			</div>
		);
	}
}

const middle = {
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
};

const textMiddle = {
	textAlign: "left",
};

const imgSize = {
	width: "300px",
	padding: "1.5em",
};

export default App;
