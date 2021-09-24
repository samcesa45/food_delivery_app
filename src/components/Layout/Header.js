import React from 'react';
import mealsImg from '../../scss/asset/img/Hero-img.jpeg';
import HeaderCartButton from './HeaderCartButton';
const Header = (props) => {
	return (
		<>
			<header className="header">
				<h1>ReactMeals</h1>
				<HeaderCartButton onShow={props.onShow} />
			</header>
			<div className="img__container">
				<img src={mealsImg} alt="tray with cakes" />
			</div>
		</>
	);
};

export default Header;
