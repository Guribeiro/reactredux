import React from 'react';
import { MdDelete } from 'react-icons/md';

import { useSelector } from 'react-redux';

import Container from '../../components/Container';

import { ListReservas } from './styles';


function Reservas() {

	const { reserve: reserves } = useSelector(state => state);

	return (
		<Container>
			<h1>Reservas</h1>

			<ListReservas>
				{reserves.map(reserve => (
					<li key={reserve.id}>
						<img src={reserve.image} alt={reserve.title} />
						<strong>{reserve.title}</strong>
						<small>Quantidade: 02</small>
						<button>
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
