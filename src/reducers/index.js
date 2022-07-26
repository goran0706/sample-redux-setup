import { combineReducers } from 'redux';
import { DEPOSIT, WITHDRAW } from '../actions/types';

// Reducers
const depositReducer = (deposits = [], action) => {
	if (action.type === DEPOSIT) {
		return [...deposits, action.payload];
	}

	return deposits;
};

const withdrawReducer = (withdrawals = [], action) => {
	if (action.type === WITHDRAW) {
		return [...withdrawals, action.payload];
	}

	return withdrawals;
};

const tokensAmount = (tokens = 0, action) => {
	if (action.type === DEPOSIT) {
		return tokens + action.payload.amount;
	} else if (action.type === WITHDRAW) {
		return tokens - action.payload.amount;
	} else {
		return tokens;
	}
};

export default combineReducers({
	deposits: depositReducer,
	withdrawals: withdrawReducer,
	balance: tokensAmount,
});
