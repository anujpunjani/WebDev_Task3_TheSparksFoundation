import "./App.css";
import { About } from "./About";
import "bootstrap/dist/css/bootstrap.min.css";
import * as ReactBootStrap from "react-bootstrap";
import linkedin from "./images/icons/linkedin.png"
import instragram from "./images/icons/instagram.png"
import twitter from "./images/icons/twitter.png"
import youtube from "./images/icons/youtube.png"
import background1 from "./images/background.jpg";
import background2 from "./images/background2.jpg";
import background3 from "./images/background3.jpg";


import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";

let icon = {
  float: "left",
  padding: "0 0.5em",
  display: "inline-block",
  transition: "all .2s ease-in-out",
  margin: "5px",
  boxSizing: " border-box",
}

let social = {
  marginBlockStart: "0",
  marginBlockEnd: "0",
  marginInlineStart: "0px",
  marginInlineEnd: "0px",
  padding: "0",
  display: "inline-block",
  textAlign: "center",
}

let jumbotron = {
  padding: "3rem",
  marginBottom: "2rem",
  backgroundColor: "var(--bs-light)",
  borderRadius: ".3rem",
};


let style = {
  minWidth: "400px",
  minHeight: "400px",
};

let light = {
  color: "white",
};
let size = {
  width: "50px",
  height: "50px",
  padding: "5px",
};


let margin1 = {
  marginLeft: "20px",
};

let Card = {
  margin: "10px",
};

let wow = {
  paddingLeft: "20px",
};


let hey1 = {
  paddingRight: "10px",
  paddingLeft: "10px",
};

let color = {
  // backgroundImage: "linear-gradient(to right top, #aac4ea, #48d7ff, #00e8e6, #00f097, #a8eb12)",
  backgroundColor: "#e9ecef",

};
function App() {
  return (
    <>
      <Router>
        <div style={color} className="App">
          <ReactBootStrap.Navbar bg="dark" variant="dark" expand="lg" className="smart-scroll">
            <ReactBootStrap.Navbar.Brand as={Link} style={wow} to="/">
              Children NGO
            </ReactBootStrap.Navbar.Brand>
            <ReactBootStrap.Navbar.Toggle aria-controls="navbarScroll" />
            <ReactBootStrap.Navbar.Collapse id="navbarScroll" className="justify-content-end me-auto" style={{ paddingRight: "100px" }}>
              <ReactBootStrap.Nav
                className="mr-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <ReactBootStrap.Nav.Link as={Link} style={wow} to="/about">
                  About
                </ReactBootStrap.Nav.Link>
              </ReactBootStrap.Nav>
              <ReactBootStrap.Button
                style={margin1}
                className="float-right"
                href="https://rzp.io/l/QfSNEbt"
                variant="outline-success"
              >
                Donate
              </ReactBootStrap.Button>
            </ReactBootStrap.Navbar.Collapse>
          </ReactBootStrap.Navbar>
          <Switch>
            <Route exact path="/">
              {
                <>
                  <div>
                    <ReactBootStrap.Carousel>
                      <ReactBootStrap.Carousel.Item interval={1000}>
                        <img
                          style={style}
                          className="d-block w-100"
                          src={background1}
                          alt="First slide"
                        />
                        <ReactBootStrap.Carousel.Caption>
                          <h3>#ThinkOfTheChildrenn</h3>
                          <p>
                            The pandemic has been particularly harsh for children. Today, more than ever before, they need us to stand by them
                          </p>
                        </ReactBootStrap.Carousel.Caption>
                      </ReactBootStrap.Carousel.Item>
                      <ReactBootStrap.Carousel.Item interval={500}>
                        <img
                          style={style}
                          className="d-block w-100"
                          src={background2}
                          alt="Second slide"
                        />
                        <ReactBootStrap.Carousel.Caption>
                          <h3>#ThinkOfTheChildrenn</h3>
                          <p>
                            The pandemic has been particularly harsh for children. Today, more than ever before, they need us to stand by them
                          </p>
                        </ReactBootStrap.Carousel.Caption>
                      </ReactBootStrap.Carousel.Item>
                      <ReactBootStrap.Carousel.Item>
                        <img
                          style={style}
                          className="d-block w-100"
                          src={background3}
                          alt="Third slide"
                        />
                        <ReactBootStrap.Carousel.Caption>
                          <h3>#ThinkOfTheChildrenn</h3>
                          <p> The pandemic has been particularly harsh for children. Today, more than ever before, they need us to stand by them</p>
                        </ReactBootStrap.Carousel.Caption>
                      </ReactBootStrap.Carousel.Item>
                    </ReactBootStrap.Carousel>
                  </div>

                  <div style={jumbotron} bg="light">
                    <h1 className="display-4">Our Vision</h1>
                    {/* <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p> */}
                    <p className="lead">As India’s Proactive Youth-Led Organisation with a vision of reimagining a better world for the underprivileged children in society. The foundation aims to awaken, acquaint, and exhort rural communities about the importance of quality education and therefore is determined to enhance, empower, and educate the youth of today for a cohesive tomorrow.</p>
                    <a className="btn btn-success btn-lg" href="https://rzp.io/l/QfSNEbt" role="button">Donate</a>
                  </div>

                  <ReactBootStrap.CardGroup style={{ padding: "20px", }}>
                    <ReactBootStrap.Card style={Card}>
                      <ReactBootStrap.Card.Img variant="top" src="https://images.pexels.com/photos/2892373/pexels-photo-2892373.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                      <ReactBootStrap.Card.Body>
                        <ReactBootStrap.Card.Title>
                          Enhancing Observation and Learning Skills
                        </ReactBootStrap.Card.Title>
                        <ReactBootStrap.Card.Text>
                          Learning and Leadership is indispensable in a child’s life.
                        </ReactBootStrap.Card.Text>
                        <ReactBootStrap.Button
                          href="https://www.karmafoundation.ngo/"
                          variant="success"
                        >
                          Visit
                        </ReactBootStrap.Button>
                      </ReactBootStrap.Card.Body>
                    </ReactBootStrap.Card>

                    <ReactBootStrap.Card style={Card}>
                      <ReactBootStrap.Card.Img variant="top" src="https://images.pexels.com/photos/5088008/pexels-photo-5088008.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                      <ReactBootStrap.Card.Body>
                        <ReactBootStrap.Card.Title>
                          Education is a fundamental right
                        </ReactBootStrap.Card.Title>
                        <ReactBootStrap.Card.Text>
                          Language and Literacy is essential for better understanding.
                        </ReactBootStrap.Card.Text>
                        <ReactBootStrap.Button
                          href="https://www.karmafoundation.ngo/"
                          variant="success"
                        >
                          Visit
                        </ReactBootStrap.Button>
                      </ReactBootStrap.Card.Body>
                    </ReactBootStrap.Card>

                    <ReactBootStrap.Card style={Card}>
                      <ReactBootStrap.Card.Img variant="top" src="https://images.pexels.com/photos/1739842/pexels-photo-1739842.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                      <ReactBootStrap.Card.Body>
                        <ReactBootStrap.Card.Title>
                          Nurturing the Youth of Tomorrow
                        </ReactBootStrap.Card.Title>
                        <ReactBootStrap.Card.Text>
                          Education is a fundamental right of every child.
                        </ReactBootStrap.Card.Text>
                        <ReactBootStrap.Button
                          variant="success"
                          href="https://www.karmafoundation.ngo/"
                        >
                          Visit
                        </ReactBootStrap.Button>
                      </ReactBootStrap.Card.Body>
                    </ReactBootStrap.Card>
                  </ReactBootStrap.CardGroup>

                  <div class="container-fluid padding">
                    <div class="row text-center padding">
                      <div class="col-xs-12 col-sm-6 col-md-3">
                        <i class="fas fa-street-view"></i>
                        <h3>5000+</h3>
                        <p>Lives Empowered</p>
                      </div>
                      <div class="col-xs-12 col-sm-6 col-md-3">
                        <i class="fa fa-globe"></i>
                        <h3>44+</h3>
                        <p>Presence</p>
                      </div>
                      <div class="col-xs-12 col-sm-6 col-md-3">
                        <i class="fas fa-users"></i>
                        <h3>64+</h3>
                        <p>Team Members</p>
                      </div>
                      <div class="col-xs-12 col-sm-6 col-md-3">
                        <i class="fas fa-utensils"></i>
                        <h3>15000+</h3>
                        <p>Meals Served</p>
                      </div>
                    </div>
                  </div>

                  <div className="text-center" style={{
                    backgroundColor: "#fff", width: "100%",
                    cursor: "pointer",
                    fontSize: "2.5rem",
                    padding: "2rem"
                  }}>
                    <h2>Contact Us</h2>
                    <ul style={social}>
                      <li style={icon}> <a href="https://www.linkedin.com/">
                        <img style={size} src={linkedin} alt="linkedin" />
                      </a>
                      </li>
                      <li style={icon}>
                        <a style={size} href="https://www.instagram.com/">
                          <img style={size} src={instragram} alt="insatgram" />
                        </a>
                      </li>
                      <li style={icon}><a href="https://twitter.com/?lang=en">
                        <img style={size} src={twitter} alt="twitter" /></a>
                      </li>
                      <li style={icon}>
                        <a href="https://www.youtube.com/">
                          <img style={size} src={youtube} alt="youtube" />
                        </a>
                      </li>

                    </ul>
                  </div>

                </>
              }
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
          </Switch>

          <footer className="bg-dark">
            <div className="container-fluid padding">
              <div className="row text-center">
                <div className="col-md-6">
                  <hr className="light" style={light} />
                  <h5 style={light}>Contact Us</h5>
                  <hr className="light" style={light} />
                  <p style={light}>(+91) 8888888888</p>
                  <p style={light}>gmail@gmail.com</p>
                </div>
                <div className="col-md-6">
                  <hr className="light" style={light} />
                  <h5 style={light}>About</h5>
                  <hr className="light" style={light} />
                  <a href="https://www.dauntless.in/">
                    <p style={light}>Hello World</p>
                  </a>
                  <a href="https://www.scoopwhoop.com/ngos-for-animals/">
                    <p style={light}>Other Hello World</p>
                  </a>
                </div>
                <div className="col-12">
                  <hr className="light-100" style={light} />
                  <h5 style={light}>&copy; ChildrenNGO.org</h5>
                  <h6 style={light}>Developer Contact</h6>
                  <a
                    style={hey1}
                    href="https://www.linkedin.com/in/anujpunjani"
                  >
                    Linkedin
                  </a>
                  <a style={hey1} href="https://github.com/anujpunjani">
                    Github
                  </a>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </Router >
    </>
  );
}

export default App;
