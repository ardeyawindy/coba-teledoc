import React, { useState, useEffect } from "react";
import { Navbar, Container, Nav, Button, Overlay, Popover } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa"; // Import ikon profil
import "./Navbar.css";

function NavbarComponent() {
  const [activeLink, setActiveLink] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showPopover, setShowPopover] = useState(false);
  const [target, setTarget] = useState(null);

  useEffect(() => {
    // Cek status login saat komponen dimuat
    const loggedInStatus = localStorage.getItem("isLoggedIn");
    setIsLoggedIn(loggedInStatus === "true");
  }, []);

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const handleProfileClick = (event) => {
    setShowPopover(!showPopover);
    setTarget(event.target);
  };

  const handleLogout = () => {
    // Lakukan proses logout di sini (misalnya, menghapus token atau mengatur status login sebagai false)
    localStorage.setItem("isLoggedIn", "false");
    setIsLoggedIn(false);
    setShowPopover(false);
  };

  return (
    <Navbar collapseOnSelect expand="lg" bg="light" className="navbar" fixed="top">
      <Container>
        <Navbar.Brand href="#home" className="ms-3">
          <img src="https://i.ibb.co/WFN1kzQ/logo.png" alt="TeleDoc" height={30} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="responsive-navbar-nav">
          <Nav className="justify-content-center flex-grow-1 pe-3">
            <Link to="/beranda" className={`nav-link ${activeLink === "/beranda" ? "active" : ""}`} onClick={() => handleLinkClick("/beranda")}>
              Beranda
            </Link>
            <Link to="/dokter" className={`nav-link ${activeLink === "/dokter" ? "active" : ""}`} onClick={() => handleLinkClick("/dokter")}>
              Dokter
            </Link>
            <Link to="/notifikasi" className={`nav-link ${activeLink === "/notifikasi" ? "active" : ""}`} onClick={() => handleLinkClick("/notifikasi")}>
              Notifikasi
            </Link>
            <Link to="/artikel" className={`nav-link ${activeLink === "/artikel" ? "active" : ""}`} onClick={() => handleLinkClick("/artikel")}>
              Artikel
            </Link>
          </Nav>

          <Nav className="ms-auto">
            {isLoggedIn ? (
              <>
                <div className="profile-button" onClick={handleProfileClick} style={{ cursor: "pointer" }}>
                  <FaUserCircle className="profile-icon" size={30} />
                </div>
                <Overlay show={showPopover} target={target} placement="bottom-end" onHide={() => setShowPopover(false)}>
                  <Popover id="popover-profile">
                    <Popover.Body>
                      <Button onClick={handleLogout} style={{ backgroundColor: "black" }}>
                        Keluar
                      </Button>
                    </Popover.Body>
                  </Popover>
                </Overlay>
              </>
            ) : (
              <Link to="/login">
                <Button variant="outline-success">Masuk</Button>
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
