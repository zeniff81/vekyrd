import React from "react";
import { connect } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { removeFromCart } from "../../redux/cart/cartActions";
import { logoutUser } from "../../redux/user/userActions";
import PrivateRoute from "../PrivateRoute";
const { Link, withRouter } = require("react-router-dom");

const Item = ({ itemKey, url, caption, clickHandler }) => {
  if (clickHandler) {
    return (
      <li onClick={clickHandler}>
        <Link to='/' replace={true}>
          {caption}
        </Link>
      </li>
    );
  }

  return (
    <li key={itemKey}>
      <Link to={url}>{caption}</Link>
    </li>
  );
};

function MenusItems({ cart, user, logoutUser, removeFromCart }) {
  const { isLogged } = user;

  const logoutClick = () => {
    logoutUser(user._id, user.username, cart.items);

    // clear cart
    const items = cart.items;

    items.map(item => {
      removeFromCart(item._id);
      return null;
    });
  };

  const items = [
    { caption: "Inicio", route: "/" },
    { caption: "Productos", route: "/products" },
    { caption: "Contáctenos", route: "/contactus" },
    { caption: "Nosotros", route: "/about" }
  ];

  return (
    <>
      {items.map(item => (
        <div key={uuidv4()}>
          <Item key={uuidv4()} url={item.route} caption={item.caption} />
        </div>
      ))}{" "}
      <PrivateRoute adminContent>
        <Item url='/admin' caption='Admin' />
      </PrivateRoute>
      {isLogged && <Item url='/' caption='Salir' clickHandler={logoutClick} />}
      {!isLogged && <Item url='/login' caption='Iniciar sesión' />}
    </>
  );
}

const mapStateToProps = state => {
  return {
    cart: state.cartReducer,
    user: state.userReducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    removeFromCart: _id => dispatch(removeFromCart(_id)),
    logoutUser: (_id, username, items) =>
      dispatch(logoutUser(_id, username, items))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(MenusItems));
