import { DEPOSIT, WITHDRAW } from './types';

// Action Creators
export const deposit = (address, amount) => {
	return {
		type: DEPOSIT,
		payload: {
			address: address,
			amount: amount,
		},
	};
};

export const withdraw = (address, amount) => {
	return {
		type: WITHDRAW,
		payload: {
			address: address,
			amount: amount,
		},
	};
};
