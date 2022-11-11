import React, { useEffect, useState } from "react";
import logo from "../../assets/img/menu-logo.png";
import { Link } from "react-router-dom";
import Burger from "./Burger";
import agent from "../../assets/img/agent.svg";
import MenusItems from "./MenusItems";
import CartWidget from "../CartWidget/CartWidget";
import { connect } from "react-redux";

function MenuMobile({ user }) {
  const [showAdminItems, setShowAdminItems] = useState(false);

  useEffect(() => {
    const isAdmin = user.roles.includes("admin");
    setShowAdminItems(isAdmin);
  }, [user.roles]);

  return (
    <div>
      <p className='menumobile-protected-space'></p>
      <nav className='menumobile'>
        {/* logo */}
        <Link to='/' className='logo'>
          <img src={logo} alt='menu logo' />
        </Link>
        {/* center icons */}
        <ul className='menumobile-icons icons-center'>
          <MenusItems />
        </ul>
        {/* right icons */}
        <div className='menumobile-icons icons-right'>
          <Link to='/contactus' className='contact'>
            <div className='menumobile-icons-item'>
              <img
                className='logo-contactus'
                src={agent}
                alt='logo contactenos'
              />
              <div>Contáctenos</div>
            </div>
          </Link>
          <Link to='/products'>
            <div className='menumobile-icons-item'>
              <div>Productos</div>
            </div>
          </Link>
        </div>
        <CartWidget />
        <Link to='#' className='currentUser'>
          <div className='menumobile-icons-item'>
            <div>
              {user.username}
              {showAdminItems ? " (admin)" : null}
            </div>
          </div>
        </Link>
        {/* burger */}
        <Burger theme='light' />
      </nav>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    user: state.userReducer
  };
};

export default connect(mapStateToProps, null)(MenuMobile);
