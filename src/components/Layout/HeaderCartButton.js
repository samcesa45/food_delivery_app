import React, { useContext, useEffect, useState } from 'react';
import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/cart-context';
const HeaderCartButton = (props) => {
	const cartCtx = useContext(CartContext);
	const [isBumped, setBtnIsBumped] = useState(false);

	const cartBadgeAmount = cartCtx.items.reduce((curr, acc) => {
		return curr + acc.amount;
	}, 0);
	const cartBadgeAmountNumber = +cartBadgeAmount;
	const { items } = cartCtx;

	useEffect(() => {
		if (items.length === 0) {
			return;
		}
		setBtnIsBumped(true);
		const timer = setTimeout(() => {
			setBtnIsBumped(false);
		}, 300);

		return () => {
			clearTimeout(timer);
		};
	}, [items]);

	const btnClass = 'carticon-button ' + props.className;
	return (
		<button
			className={`${btnClass} ${isBumped ? 'bump' : ''}`}
			onClick={props.onShow}>
			<span className="carticon-button__icon">
				<CartIcon />
			</span>
			<span>Your Cart</span>
			<span className="carticon-button__badge">{cartBadgeAmountNumber}</span>
		</button>
	);
};

export default HeaderCartButton;
