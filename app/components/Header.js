import React, { PropTypes, Component } from 'react';
import { Grid, Row, Col, Navbar } from 'react-bootstrap';
import { Link } from 'react-router';

class Header extends Component {
    constructor(props) {
        super(props);
    }
    //const Header = ({UserLogin}) => (
    render() {
        const { UserLogin} = this.props
        return (
            <div className="headerContainer">
                <Grid fluid>

                    <Row className="show-grid">
                        <Col xs={5} md={9}><Link to="/Spotlight" ><img src="./media/accentre.png" /></Link><img src="./media/Esi.png" /></Col>
                        {this.props.UserLogin.login &&
                            <Col xs={6} md={3} >Welcome {this.props.UserLogin.empName}<Link to="/about" ><img className="imgHeader" src="media/profilePic.jpg" /></Link>
                                <Link to="/Login">| Logout</Link>
                            </Col>
                        }
                        {!this.props.UserLogin.login &&
                            <Col xs={7} md={3} >
                                <h3 className="pull-right"> Welcome to ESI Portal</h3>
                            </Col>
                        }
                    </Row>
                        <Navbar >
                            <Link className="navy" to="/">HOME</Link>
                            <Link className="navy" to="/Dsr">DSR</Link>
                            <Link className="navy" to="/Navitri">NAVRITI</Link>
                            <Link className="navy" to="/about">MY PAGE</Link>
                            <Link className="navy" to="/about">EVENTS</Link>
                            <Link className="navy" to="/KnowledgeManagement">KLM</Link>
                            <Link className="navy" to="/PhotoGallery">PHOTO GALLERY</Link>
                        </Navbar>
                </Grid>
            </div>

        )
    };
}
Header.propTypes = {
    UserLogin: PropTypes.object,
    name: PropTypes.object

};

export default Header;
