import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addTripRequest } from '../../store/modules/reserve/actions';

import api from '../../services/api';

import Loading from '../../components/Loading';
import Container from '../../components/Container';
import { ListTrips } from './styles';



function Home() {

	const dispatch = useDispatch();

	const [trips, setTrips] = useState([])
	const [loading, setLoading] = useState(true);



	useEffect(() => {

		async function loadTrips() {

			const response = await api.get('trips');
			setTrips(response.data);
			setLoading(false);
		}

		loadTrips();
	}, [])

	function handleAdd(id) {
		dispatch(addTripRequest(id));
	}

	if (loading) {
		return (
			<Loading />
		)
	}

	return (
		<Container>
			<ListTrips>
				{trips.map(trip => (
					<li key={trip.id}>
						<figure>
							<img src={trip.image} alt={trip.title} />
							<figcaption>
								<p>
									{trip.title}
								</p>
								<span>
									{trip.status ? 'Disponível' : 'Indisponível'}
								</span>
							</figcaption>
						</figure>
						<button onClick={() => handleAdd(trip.id)}>Reservar</button>
					</li>
				))}
			</ListTrips>
		</Container>
	)
}
export default Home;
