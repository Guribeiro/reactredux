import produce from 'immer';

export default function reserve(state = [], action) {
	const { type, trip } = action;

	switch (type) {
		case 'ADD_RESERVE':

			return produce(state, draft => {

				const tripIndex = draft.findIndex(tripp => tripp.id === trip.id)

				if (tripIndex >= 0) {
					draft[tripIndex].amount += 1;
				} else {
					draft.push({
						...trip,
						amount: 1
					})
				}
			});
		default:
			return state;
	}
}
