import {actionTypes} from '../actions/actionTypes';

const initialState = {
	token: '',
	isInvalid: false
};

const validPattern = /^[0-9a-zA-Z]+$/;

const changeTokenInputValueReducer = (state = initialState, action: any) => {

	switch (action.type) {
		case actionTypes.CHANGE_TOKEN_INPUT_VALUE: {
			return {
				...state,
				token: action.value,
				isInvalid: !action.value.match(validPattern)
			};
		}
		case actionTypes.RESET_INPUT_VALUE: {
			return {
				...state,
				token: initialState.token
			}
		}
		default:
			return state;
	}
};

export default changeTokenInputValueReducer;