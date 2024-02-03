import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project1.png";
import projImg2 from "../assets/img/project2.png";
import projImg3 from "../assets/img/project3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Code Vista",
      description: "Code Vista is an online social development environment that allows web developers to create, share, and explore front-end code snippets, often involving HTML, CSS, and JavaScript.",
      imgUrl:projImg1,
      link: "https://code-vista-by-rahul.netlify.app/",
    },
    {
      title: "Weather Whiz",
      description: "Welcome to Weather Whiz, your go-to destination for accurate and up-to-date weather information! Our website utilizes cutting-edge technology to provide you with real-time weather data sourced from reliable APIs, ensuring that you stay informed about the latest atmospheric conditions no matter where you are.Design & Development",
      imgUrl: projImg2,
      link: "https://weatherwhiz-by-rahul.netlify.app/",
    },
    {
      title: "Spotify Clone",
      description: "Welcome to Spotify Clone, your exclusive destination for a seamless music experience! Immerse yourself in the world of music with our HTML and CSS-only Spotify clone, where simplicity meets style to deliver a user-friendly and visually stunning platform.",
      imgUrl: projImg3,
      link: "https://spotify-clone-by-rahul.netlify.app/",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first" style={{cursor: 'pointer'}}>Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second" style={{cursor: 'pointer'}}>Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third" style={{cursor: 'pointer'}}>Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>Uploading Soon</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p> Uploading Soon </p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
