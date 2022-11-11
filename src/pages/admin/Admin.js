import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import AdminHeader from "./AdminHeader";

function Admin({ user }) {
  return (
    <div className='admin'>
      <AdminHeader admin={true} subtitle='Tareas comunes' />

      <ul className='items'>
        {user.roles.includes("admin") ? (
          <>
            <li>
              <Link className='btn btn-secondary' to='/admin/adminproducts'>
                Productos
              </Link>
            </li>
            <li>
              <Link className='btn btn-secondary' to='/admin/orders'>
                Pedidos
              </Link>
            </li>
          </>
        ) : null}
      </ul>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    user: state.userReducer
  };
};

export default connect(mapStateToProps, null)(Admin);
