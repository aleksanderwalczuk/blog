import React, { useState } from "react"
import { Link } from "gatsby"

const NavLink = props => (
  <li className="navlink">
    <Link to={props.to} className="navlink-item">
      {props.children}
    </Link>
  </li>
)
const HamburgerMenu = props => (
  <div className="modal-container" style={{ display: props.visible? 'flex' : 'none' }}>
    <ul className="nav-container-mobile">
      <li className="nav-item">
        <Link to="./" className="navlink">
          link-1
        </Link>
      </li>
      <li className="nav-item">
        <Link to="./" className="navlink">
          link-2
        </Link>
      </li>
      <li className="nav-item">
        <Link to="./" className="navlink">
          link-3
        </Link>
      </li>
    </ul>
  </div>
)
const Hamburger = () => {
  const [menuDisplay, setMenuDisplay] = useState(false)
  return (
    <>
      <span className="hamburger-container" onClick={() =>
        setMenuDisplay(!menuDisplay)
      }>
        <span className="hamburger-inner"></span>
        <span className="hamburger-inner"></span>
        <span className="hamburger-inner"></span>
      </span>
      <HamburgerMenu visible={menuDisplay} />
    </>
  )
}

export default ({ children, }) => (
  <div className="wrapper">
    <header className="header">
      <Link
        to="/"
        style={{ textShadow: "none", backgroundImage: "none" }}
        className="header-logo"
      >
        <h3 className="heading header-heading">aleksanderwalczuk.surge.sh</h3>
      </Link>
      <Hamburger />
      <ul>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about-me">O mnie</NavLink>
        <NavLink to="/contact">Kontakt</NavLink>
      </ul>
    </header>
    <main className="main">{children}</main>
    <footer className="footer">
      {" "}
      <span>&copy; rednaxela700</span>
    </footer>
  </div>
)
