import {Link} from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import {
    Button,
    ButtonGroup,
    ButtonDropdown,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';


export default class Header extends React.Component {

    constructor(props) {
        super(props);
        this.siteTitle = "Who is Yixiao?";
        this.toggleButton = this.toggleButton.bind(this);
        this.toggleMenu = this.toggleMenu.bind(this);
        this.state = {
            dropdownOpen: false,
            isOpen: false
        };
    }

    toggleMenu() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    toggleButton() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    render() {

        return (
            <div>
                <Navbar className="shadow-sm" color="light" light expand="md">
                    <div className={"container"}>
                        <NavbarBrand href="/">{this.siteTitle}</NavbarBrand>
                        <NavbarToggler onClick={this.toggleMenu}/>
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                { /* use as mobile menu later

                            <NavItem className={"btn btn-info"}>
                                <NavLink href="portfolio" >Portfolio</NavLink>
                            </NavItem>
                            <NavItem className={"btn btn-info"}>
                                <NavLink href="personal-interests" >When I'm Off Work..</NavLink>
                            </NavItem>
                            */}
                                <NavItem>
                                    <ButtonGroup>
                                        <Button color="info" href="/portfolio/">Portfolio</Button>
                                        <Button color="info" href="/personal-interests/">When I'm Off Work..</Button>
                                        <Button color="info" href="https://github.com/NoftScarlet/">Contact</Button>
                                        <ButtonDropdown className={"lang-sw"} isOpen={this.state.dropdownOpen}
                                                        toggle={this.toggleButton}>
                                            <DropdownToggle color="info" caret>
                                                Language
                                            </DropdownToggle>
                                            <DropdownMenu>
                                                <DropdownItem>English</DropdownItem>
                                                <DropdownItem divider/>
                                                <DropdownItem disabled>简体中文</DropdownItem>
                                            </DropdownMenu>
                                        </ButtonDropdown>
                                    </ButtonGroup>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </div>

        );
    }
}


/*


 */