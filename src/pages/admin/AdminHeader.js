import React from "react";
import { Link } from "react-router-dom";

function AdminHeader({ subtitle, admin = false }) {
  return (
    <div className='adminheader'>
      {!admin && (
        <Link to='/admin' className='btn btn-secondary btn-back-to-admin'>
          <span>&#8592;</span> Admin
        </Link>
      )}
      <h1>Admin</h1>
      <h2>{subtitle}</h2>
    </div>
  );
}

export default AdminHeader;
