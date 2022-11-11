import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchCart } from '../../redux';
import { whoAmI } from '../../redux/user/userActions';

function ReduxCenter({ cart, user, whoAmI, fetchCart }) {
	useEffect(() => {
		if (user._id !== null) {
			fetchCart(user._id);
		}
	}, [user._id, fetchCart]);

	return <div className="reduxstartup"></div>;
}

const mapStateToProps = (state) => {
	return {
		cart: state.cartReducer,
		user: state.userReducer,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		fetchCart: (id_to_find) => dispatch(fetchCart(id_to_find)),
		whoAmI: (id_to_find) => dispatch(whoAmI(id_to_find)),
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(ReduxCenter);
