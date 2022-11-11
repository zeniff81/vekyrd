import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import btnAddWhite from '../../assets/img/btn-add-white.svg';
import cartWhite from '../../assets/img/cart-white.svg';
import arrow from '../../assets/img/arrow.svg';
import { Link } from 'react-router-dom';
import { addToCart } from '../../redux';
import { ButtonIcon } from '../ButtonIcon';
import { ShareButtons } from '../ShareButtons';
import { Redirect, useLocation } from 'react-router';
import { itemExists } from '../../utilities/ifItemExists';

const ProductDetails = ({ history, productInfo, addToCart }) => {
	const location = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const goBack = () => {
		history.goBack();

		setTimeout(() => {
			window.scrollTo(0, location.state.prevScroll);
		}, 80);
	};

	const addItemToCart = () => {
		if (itemExists(productInfo._id) > -1) return;
		addToCart(productInfo);
	};

	if (Object.keys(productInfo).length === 0) return <Redirect to="/" />;

	return (
		<div className="productdetails">
			<div className="title">{productInfo.title}</div>

			<div className="image-container">
				<img src={productInfo.image} alt="imagen producto" />
				<div className="index">
					{productInfo.title.substring(0, 2) +
						productInfo._id.substring(20, 24)}
				</div>
				<div className="price">${productInfo.price}</div>
				<ShareButtons />
			</div>

			<div className="description-large">{productInfo.descriptionLarge} </div>
			<div className="actions">
				<ButtonIcon
					caption="Atrás"
					img={arrow}
					className="btn btn-back"
					action={goBack}
				/>
				<ButtonIcon
					caption="Agregar al carrito"
					img={btnAddWhite}
					action={addItemToCart}
				/>
				<Link to="/cart">
					<ButtonIcon caption="Ir al carrito" img={cartWhite} />
				</Link>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		productInfo: state.productDetailsReducer.productInfo,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		addToCart: (payload) => dispatch(addToCart(payload)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
