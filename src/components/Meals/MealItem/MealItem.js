import React, { useContext } from 'react';
import MealItemForm from './MealItemForm';
import CartContext from '../../../store/cart-context';
const MealItem = (props) => {
	const cartCtx = useContext(CartContext);

	const price = `$${props.price.toFixed(2)}`;
	const addToCartHandler = (amount) => {
		cartCtx.addItem({
			id: props.id,
			name: props.name,
			amount: amount,
			price: props.price,
		});
	};
	return (
		<li className="meal-item">
			<div>
				<h3>{props.name}</h3>
				<div className="meal-item__description">{props.description}</div>
				<div className="meal-item__price">{price}</div>
			</div>
			<div>
				<MealItemForm id={props.id} onAddToCart={addToCartHandler} />
			</div>
		</li>
	);
};

export default MealItem;
