import './sass/main.css';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { initAxiosInterceptors } from './auth/initAxiosInterceptors';
import About from './pages/home/About';
import Admin from './pages/admin/Admin';
import AdminProducts from './pages/admin/AdminProducts';
import Cart from './pages/Cart/Cart';
import ContactUs from './pages/home/ContactUs';
import Footer from './components/footer/Footer';
import ForgotPasswordScreen from './pages/auth/ForgotPasswordScreen';
import Home from './pages/home/Home';
import LoginScreen from './pages/auth/LoginScreen';
import MenuMobile from './components/menu/MenuMobile';
import OrderConfirmation from './pages/Cart/OrderConfirmation';
import Orders from './pages/admin/Orders';
import OrderSubmitted from './pages/Cart/OrderSubmitted';
import ProductDetails from './components/product/ProductDetails';
import Products from './pages/Products';
import React from 'react';
import ReduxCenter from './components/ReduxCenter/ReduxCenter';
import RegisterScreen from './pages/auth/RegisterScreen';
import ResetPasswordScreen from './pages/auth/ResetPasswordScreen';
import Test from './test/Test';
import WhatsappIcon from './components/socialmedia/WhatsappIcon';

console.clear();

initAxiosInterceptors();

function App() {
	console.log(
		'%c  -------  App  -------',
		'background: green; color: white; padding: 2rem;'
	);
	return (
		<Router>
			<div className="app">
				<ReduxCenter />
				<MenuMobile />
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/contactus" exact component={ContactUs} />
					<Route path="/about" exact component={About} />
					<Route path="/products" exact component={Products} />
					<Route path="/productdetails" exact component={ProductDetails} />
					<Route path="/admin" exact component={Admin} />
					<Route path="/cart" exact component={Cart} />
					<Route path="/orderconfirmation" exact component={OrderConfirmation}/>
					<Route path="/ordersubmitted" exact component={OrderSubmitted} />
					<Route path="/admin/orders" exact component={Orders} />
					<Route path="/test" exact component={Test} />
					<Route path="/admin/adminproducts" exact component={AdminProducts} />
					<Route path="/login" exact component={LoginScreen} />
					<Route path="/register" exact component={RegisterScreen} />
					<Route path="/forgotpassword" exact component={ForgotPasswordScreen}/>
					<Route path="/passwordreset/:resetToken" exact component={ResetPasswordScreen}/>
				</Switch>
				<WhatsappIcon />
				<Footer />
			</div>
		</Router>
	);
}

export default App;
