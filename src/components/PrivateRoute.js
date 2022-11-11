import { useEffect, useState } from "react";
import { connect } from "react-redux";

const PrivateRoute = ({ user, children, adminContent }) => {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const admin = user.roles.includes("admin");
    setIsAdmin(admin);
  }, [user.roles]);

  if (adminContent) {
    return <>{isAdmin && children}</>;
  }

  return <>{localStorage.authToken && children}</>;
};

const mapStateToProps = state => {
  return {
    user: state.userReducer
  };
};

export default connect(mapStateToProps, null)(PrivateRoute);
