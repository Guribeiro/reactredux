import { call, put, all, takeLatest, select } from 'redux-saga/effects';
import { addTripSuccess, updateReserveSuccess } from './actions';
import api from '../../../services/api';

function* addToReserve({ id }) {

	const tripExists = yield select(
		state => state.reserve.find(trip => trip.id === id)
	);

	const myStock = yield call(api.get, `stock/${id}`);

	const { amount: stockAmout } = myStock.data;

	const currentAmount = tripExists ? tripExists.amount : 0;

	const amount = currentAmount + 1;

	if (amount > stockAmout) {
		alert('Quantidade máxima atingida');
		return;
	}

	if (tripExists) {

		const { amount } = tripExists;

		yield put(updateReserveSuccess(id, amount + 1));

	} else {

		const response = yield call(api.get, `trips/${id}`);

		const { data } = response;

		const newData = {
			...data,
			amount: 1
		}

		yield put(addTripSuccess(newData));

	}

}

function* updateAmount({ id, amount }) {
	if (amount <= 0) return;

	const myStock = yield call(api.get, `stock/${id}`);

	const { amount: stockAmout } = myStock.data;

	if (amount > stockAmout) {
		alert('Quantidade máxima atingida');
		return;
	}

	yield put(updateReserveSuccess(id, amount));

}

export default all([
	takeLatest('ADD_RESERVE_REQUEST', addToReserve),
	takeLatest('UPDATE_RESERVE_REQUEST', updateAmount)
])
