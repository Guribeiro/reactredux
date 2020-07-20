import React, { useState, useEffect } from 'react';

import api from '../../services/api';

import { MdDelete } from 'react-icons/md';

import Container from '../../components/Container';

import { ListReservas } from './styles';


function Reservas() {


	return (
		<Container>
			<h1>Reservas</h1>

			<ListReservas>
				<li>
					<img src="https://sujeitoprogramador.com/wp-content/uploads/2019/12/maceio.jpg" alt="" />
					<strong>Viagem Maceió 7 noites</strong>
					<small>Quantidade: 02</small>
					<button>
						<MdDelete />
					</button>
				</li>
				<footer>
					<button>Solicitar Reservas</button>
				</footer>
			</ListReservas>
		</Container>
	)
}
export default Reservas;
