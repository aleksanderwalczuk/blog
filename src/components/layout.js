import React from "react"
import { Link } from "gatsby"

const NavLink = props => (
  <li className="navlink">
    <Link to={props.to} style={{ color: "#fff"}}>
      {props.children}
    </Link>
  </li>
)

export default ({ children }) => (
  <div className="wrapper">
    <header className="header">
      <Link to="/" style={{ textShadow: "none", backgroundImage: "none" }}>
        <h3 className='heading header-heading'>aleksanderwalczuk.surge.sh</h3>
      </Link>
      <ul>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about-me">O mnie</NavLink>
        <NavLink to="/contact">Kontakt</NavLink>
      </ul>
    </header>
    <main className="main">{children}</main>
  </div>
)
