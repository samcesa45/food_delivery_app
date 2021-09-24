import React, { useContext } from 'react';
import CartContext from '../../store/cart-context';
import Modal from '../UI/Modal';
import CartItem from './CartItem';
const Cart = (props) => {
	const cartCtx = useContext(CartContext);

	const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
	const hasItems = cartCtx.items.length > 0;

	const cartAddItemHandler = (item) => {
		cartCtx.addItem({ ...item, amount: 1 });
	};

	const cartRemoveItemhandler = (id) => {
		cartCtx.removeItem(id);
	};
	const cartItems = (
		<ul className="cart-items">
			{cartCtx.items.map((item) => (
				<CartItem
					id={props.id}
					key={item.id}
					amount={item.amount}
					price={item.price}
					name={item.name}
					onAdd={cartAddItemHandler.bind(null, item)}
					onRemove={cartRemoveItemhandler.bind(null, item.id)}
				/>
			))}
		</ul>
	);
	return (
		<Modal onClose={props.onClose}>
			{cartItems}
			<div className="total">
				<span>Total amount</span>
				<span>{totalAmount}</span>
			</div>
			<div className="actions">
				<button onClick={props.onClose}>Close</button>
				{hasItems ? <button>Order</button> : null}
			</div>
		</Modal>
	);
};

export default Cart;
