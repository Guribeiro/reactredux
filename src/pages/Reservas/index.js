import React from 'react';
import { MdDelete, MdAddCircleOutline, MdRemoveCircleOutline } from 'react-icons/md';

import { useSelector, useDispatch } from 'react-redux';
import { removeReserve, updateReserveRequeste } from '../../store/modules/reserve/actions';

import Container from '../../components/Container';

import { ListReservas } from './styles';


function Reservas() {

	const { reserve: reserves } = useSelector(state => state);
	const dispatch = useDispatch();

	function handleRemove(id) {
		dispatch(removeReserve(id));
	}

	function incrementAmount(reserve) {
		const { id, amount } = reserve;
		dispatch(updateReserveRequeste(id, amount + 1))

	}

	function decrementAmount(reserve) {
		const { id, amount } = reserve;
		dispatch(updateReserveRequeste(id, amount - 1))

	}
	return (
		<Container>
			<h1>Reservas</h1>

			<ListReservas>
				{reserves.map(reserve => (
					<li key={reserve.id}>
						<img src={reserve.image} alt={reserve.title} />
						<strong>{reserve.title}</strong>
						<div>
							<button onClick={() => decrementAmount(reserve)}>
								<MdRemoveCircleOutline />
							</button>
							<small>{reserve.amount}</small>
							<button onClick={() => incrementAmount(reserve)}>
								<MdAddCircleOutline />
							</button>
						</div>
						<button onClick={() => handleRemove(reserve.id)}>
							<MdDelete />
						</button>
					</li>
				))}

				<footer>
					<button>Solicitar Reservas</button>
				</footer>
			</ListReservas>
		</Container>
	)
}
export default Reservas;
