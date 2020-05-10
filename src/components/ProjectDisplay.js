// React
import React from "react";

// Bootstrap Layout Components
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

// Font Awesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
// import { faFilePdf } from "@fortawesome/free-solid-svg-icons";

export default function ProjectDisplay() {
	return (
		<Container
			style={{
				marginTop: "3em",
				marginBottom: "3em",
			}}
		>
			<Row>
				<h2>Featured Projects</h2>
			</Row>
			<Row>
				<p>These are few of the projects I have worked on recently.</p>
			</Row>
			<Row className="justify-content-md-center">
				<Col md={4} style={{
					marginBottom: "24px"
				}}>
					<Card>
						<Card.Img
							variant="top"
							src="img/project-img/ValleyBike.jpg"
							style={{
								height: "200px",
							}}
						/>
						<Card.Body>
							<Card.Title>Valley Bike</Card.Title>
							<Card.Text>
								Our team worked on a mathematical model to
								calculate the Optimal Bike Allocation for
								ValleyBike Share Program. Based on docking and
								removal rates from the data, we would try to
								minimize the number of stockout events.
							</Card.Text>
							<Button
								style={{
									marginRight: "10px",
								}}
								href="https://github.com/nilay1808/ValleyBike"
								target="_blank"
							>
								<FontAwesomeIcon icon={faGithub} />
							</Button>
						</Card.Body>
					</Card>
				</Col>

				<Col md={4} style={{
					marginBottom: "24px"
				}}>
					<Card>
						<Card.Img
							variant="top"
							src="img/project-img/EleNa.png"
							style={{
								height: "200px",
							}}
						/>
						<Card.Body>
							<Card.Title>EleNa</Card.Title>
							<Card.Text>
								EleNa is an elevation-based navigation system
								that allows users to calculate routes and
								optimize them based on elevation gain and
								steepness. It follows a strategy design pattern
								with the fronend using React.js and backend
								using Flask.
							</Card.Text>
							<Button
								style={{
									marginRight: "10px",
								}}
								href="https://github.com/nilay1808/project-elena"
								target="_blank"
							>
								<FontAwesomeIcon icon={faGithub} />
							</Button>
						</Card.Body>
					</Card>
				</Col>

				<Col md={4} style={{
					marginBottom: "24px"
				}}>
					<Card>
						<Card.Img
							variant="top"
							src="img/project-img/SurveyMaster.png"
							style={{
								height: "200px",
								borderBottom: "1px solid #e5e5e5",
							}}
						/>
						<Card.Body>
							<Card.Title>Survey Master</Card.Title>
							<Card.Text>
								Our team worked on a scrum team of 8 to build an
								prototype of an end-to-end survey platform where
								people can create, take, and analyze surveys for
								our client Ultimate Software. Used React.js for
								the frontend and Python (Flask) for the backend
								API.
							</Card.Text>
							<Button
								style={{
									marginRight: "10px",
								}}
								href="https://github.com/nilay1808/ultimate-survey"
								target="_blank"
							>
								<FontAwesomeIcon icon={faGithub} />
							</Button>
						</Card.Body>
					</Card>
				</Col>

			</Row>
		</Container>
	);
}
