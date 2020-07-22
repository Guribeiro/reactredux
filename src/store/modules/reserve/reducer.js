import produce from 'immer';

export default function reserve(state = [], action) {
	const { type, trip, id, amount } = action;

	switch (type) {
		case 'ADD_RESERVE_SUCCESS':

			return produce(state, draft => {
				draft.push(trip)

			});

		case 'REMOVE_RESERVE':
			return produce(state, draft => {
				const tripIndex = draft.findIndex(trip => trip.id === id);

				if (tripIndex >= 0) {
					draft.splice(tripIndex, 1);
				}
			})

		case 'UPDATE_RESERVE_SUCCESS':{

			return produce(state, draft =>{
				const tripIndex = draft.findIndex(trip => trip.id === id);

				if (tripIndex >= 0) {
					draft[tripIndex].amount = Number(amount)
				}
			})
		}
		default:
			return state;
	}
}
