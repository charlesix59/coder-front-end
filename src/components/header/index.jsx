import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import {Button, Nav} from "react-bootstrap";
import Element from '../routes';

function Header() {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/home">主页</Nav.Link>
                        <Nav.Link href="/query">工作</Nav.Link>
                        <Nav.Link href="/profile/upload">简历</Nav.Link>
                    </Nav>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        {
                            localStorage.getItem("token")
                                ?
                                <Button  href={localStorage.getItem("identify")==="user"?"/space":"/hrSpace"}>个人空间</Button>
                                :<Button href={"/login"}>登录</Button>
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <br />
            <Container>
                <Element/>
            </Container>
        </>
    );
}

export default Header;