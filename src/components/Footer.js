import React from "react";
import {Container, Navbar, Col} from "react-bootstrap"; // npm install react-bootstrap

class Footer extends React.Component{
    render() {

        return (
            <Navbar fixed="bottom">
                <Container>
                    <Col lg={12} className="text-center text-muted">
                        <div>Smart Tabs - GMIT - FYP 2021 - 2022 </div>
                    </Col>
                </Container>
            </Navbar>

        );
    }
}

export default Footer;