import React, { useState, useEffect } from 'react';

import api from '../../services/api';

import Loading from '../../components/Loading';

import Container from '../../components/Container';

import { ListTrips } from './styles';



function Home() {

	const [trips, setTrips] = useState([])
	const [loading, setLoading] = useState(true);


	useEffect(() => {

		async function loadTrips() {

			const response = await api.get('trips');
			console.log(response.data);
			setTrips(response.data);
			setLoading(false);
		}

		loadTrips();
	}, [])

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
									{trip.status ? 'Disponpivel' : 'Indisponível'}
								</span>
							</figcaption>
						</figure>
						<button>Reservar</button>
					</li>
				))}
			</ListTrips>
		</Container>
	)
}
export default Home;
