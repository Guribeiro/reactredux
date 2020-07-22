export function addTripRequest(id) {
	return {
		type: 'ADD_RESERVE_REQUEST',
		id
	}
}
export function addTripSuccess(trip) {
	return {
		type: 'ADD_RESERVE_SUCCESS',
		trip
	}
}

export function removeReserve(id) {
	return {
		type: 'REMOVE_RESERVE',
		id,
	}
}

export function updateReserveRequeste(id, amount){
	return{
		type: 'UPDATE_RESERVE_REQUEST',
		id,
		amount,
	}
}
export function updateReserveSuccess(id, amount){
	return{
		type: 'UPDATE_RESERVE_SUCCESS',
		id,
		amount,
	}
}
