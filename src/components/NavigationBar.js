import React from "react";
import {Container, Navbar} from "react-bootstrap";

function NavigationBar() {
    return (
        <Navbar bg="dark" variant="dark">
         <Container>
            <Navbar.Brand>SQL APP</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                Github Repo Link: <a href="#login">Here</a>
                </Navbar.Text>
            </Navbar.Collapse>
          </Container>
         </Navbar>
    );
}

export default NavigationBar;