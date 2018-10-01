import React, { Component } from 'react';
import { Navbar, Button, Nav, NavItem, Image, Grid, Row, Col } from 'react-bootstrap';
import './App.css';
import Hasura from './assets/hasura_logo.png'
class App extends Component {
  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    return (
      <div>
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/" style={{ 'padding-top': '23px' }}>Hasura Todo</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <NavItem eventKey={1}>
                {
                  isAuthenticated() && (
                    <Button
                      bsStyle="success"
                      className="btn-margin"
                      onClick={this.goTo.bind(this, 'home')}
                    >
                      Home
            </Button>
                  )
                }

              </NavItem>
              <NavItem eventKey={2} href="#">
                {
                  !isAuthenticated() && (
                    <Button
                      bsStyle="primary"
                      className="btn-margin"
                      onClick={this.login.bind(this)}
                    >
                      Log In
                  </Button>
                  )
                }
                {
                  isAuthenticated() && (
                    <Button
                      bsStyle="danger"
                      className="btn-margin"
                      onClick={this.logout.bind(this)}
                    >
                      Log Out
                  </Button>
                  )
                }
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        {
          !isAuthenticated() && (
            <div className="container">
              <Grid>
                <Row>
                  <Col md={2} mdPush={5}>
                    <Image src={Hasura} responsive />
                    <h3>React Todo</h3>
                    <Button
                      bsStyle="primary"
                      className="btn-margin"
                      onClick={this.login.bind(this)}
                    >
                      Log In To Continue
                  </Button>
                  </Col>
                </Row>
              </Grid>
            </div>
          )
        }
      </div>

    );
  }
}

export default App;
