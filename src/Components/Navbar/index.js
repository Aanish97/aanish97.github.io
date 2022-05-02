import "@fontsource/montserrat";
import {Col, Container, Row} from "react-bootstrap";

const styles = {
    NavbarContainer: {
        fontWeight: "Bold",
    },
}

function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light fw-bold px-4">
                <a className="navbar-brand" href="#">Aanish's Resume</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ms-auto px-2 mb-2 mb-lg-0">
                        <a className="nav-item nav-link active" href="#education">Education</a>
                        <a className="nav-item nav-link" href="#experience">Experience</a>
                        <a className="nav-item nav-link" href="#testimonials">Testimonials</a>
                        <a className="nav-item nav-link" href="#">Contact</a>
                    </div>
                </div>
            </nav>
        </>

    );
}

export default Navbar;
